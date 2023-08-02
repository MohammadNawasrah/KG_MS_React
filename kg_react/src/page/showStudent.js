import React, { useEffect, useState } from "react";
import "../static/css/showStudent.css";
import controllNav from "../core/functions/controllerNav";
import Navbar from "../widget/navbar";
import checkSession from "../core/functions/checkSession";
import table from "../widget/table";
import offcanvas from "../widget/offcanvas";
import HandleObject from "../core/functions/handelObject";
import DataFromApi from "../core/data/static/dataFromApi";
import AxiosUtil from "../core/functions/axiosUtil";
import ExcelUtil from "../core/functions/excelUtil";
function ShowStudents() {
  const login = checkSession();
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherUsername, setSelectedTeacherUsername] = useState("");
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const headRow = ["", "اسم الطالب", "صف الطالب"];
  const headRowForOneStudent = [
    "",
    "اسم الطالب",
    "تاريخ الميلاد",
    "رقم المدني",
    "رقم الهاتف",
    "رقم الهاتف الاحتياطي",
  ];

  const pageName = DataFromApi.showStudentPage;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;
  const keyMappings = {
    studentName: "اسم الطالب",
    studentType: "صف الطالب",
    commints: "ملاحظات",
    dateOfBarthday: "تاريخ الميلاد",
    nid: "الرقم المدني",
    phoneNumber: "رقم الهاتف",
    phoneNumberSecond: "رقم هاتف احتياطي",
    studentId: "id",
    teacherId: "teacherId",
  };

  const fetchData = async () => {
    try {
      const response = await AxiosUtil.axiosPost(
        DataFromApi.getStudentsAndTeachers,
        ""
      );
      setStudents(response["students"]);
      setTeachers(response["teachers"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  function convertTextToDate(text) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!datePattern.test(text)) {
      // If the text doesn't match the pattern, return null or throw an error to indicate it's not a valid date format.
      return null;
    }

    const [year, month, day] = text.split("-").map(Number);

    // JavaScript's Date months are 0-indexed (0 = January, 1 = February, ...).
    const date = new Date(year, month, day);

    // Check if the resulting Date object is valid (e.g., not an "invalid date" like Feb 30th).
    if (isNaN(date.getTime())) {
      // If it's an invalid date, return null or throw an error.
      return null;
    }

    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    };
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleTeacherSelectChange = event => {
    const selectedUsername = event.target.value;
    setSelectedTeacherUsername(selectedUsername);
    const selectedTeacher = teachers.find(
      teacher => teacher.teacherUserName === selectedUsername
    );
    if (selectedTeacher) {
      const teacherId = selectedTeacher.teacherId;
      const filteredStudentsByTeacher = students.filter(
        student => student.teacherId === teacherId
      );
      setFilteredStudents(filteredStudentsByTeacher);
    } else {
      setFilteredStudents(students);
    }
  };

  const handleExportToExcel = () => {
    let teacherName = "All_Teachers";
    if (selectedTeacherUsername !== "جميع الطلاب") {
      const selectedTeacher = teachers.find(
        teacher => teacher.teacherUserName === selectedTeacherUsername
      );
      if (selectedTeacher) {
        teacherName = selectedTeacher.teacherName.replace(" ", "_");
        const teacherId = selectedTeacher.teacherId;
        const filteredStudentsByTeacher = students.filter(
          student => student.teacherId === teacherId
        );
        ExcelUtil.exportToExcel(filteredStudentsByTeacher, teacherName);
      }
    } else {
      const studentFormat = students.map(obj =>
        HandleObject.changeKeys(obj, keyMappings)
      );
      const finalData = HandleObject.removeKeysFromObject(studentFormat, [
        "id",
        "teacherId",
      ]);

      ExcelUtil.exportToExcel(finalData, teacherName);
    }
  };

  const generateHeadRow = () => {
    const th = [];
    for (let head = 0; head < headRow.length; head++) {
      th.push(<th className="td">{headRow[head]}</th>);
    }

    return th;
  };
  const generateHeadRowForOneStudent = () => {
    const th = [];
    for (let head = 0; head < headRowForOneStudent.length; head++) {
      th.push(<th className="td">{headRowForOneStudent[head]}</th>);
    }

    return th;
  };
  const generateTeacherOptions = () => {
    const options = [];
    options.push(<option key={"select teacher"}>{"اختر المعلم"}</option>);
    options.push(<option key={"all student"}>{"جميع الطلاب"}</option>);

    for (let teacher = 0; teacher < teachers.length; teacher++) {
      options.push(
        <option key={teachers[teacher]["teacherId"]}>
          {teachers[teacher]["teacherUserName"]}
        </option>
      );
    }

    return options;
  };
  function handleStudent(student) {
    setSelectedStudent(student);
  }
  function styleData(filteredStudents, numberOfStudent) {
    return filteredStudents[numberOfStudent].commints === null
      ? { color: "black" }
      : { color: "red" };
  }
  const generateDataTable = () => {
    const tr = [];
    for (let student = 0; student < filteredStudents.length; student++) {
      tr.push(
        <tr
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
          className="buttonStudentName "
          onClick={() => handleStudent(filteredStudents[student])}
          key={filteredStudents[student].studentId}
        >
          <td style={styleData(filteredStudents, student)} className="td">
            {student + 1}
          </td>{" "}
          <td style={styleData(filteredStudents, student)}>
            {filteredStudents[student].studentName}
          </td>
          <td style={styleData(filteredStudents, student)} className="td">
            {fetchTypeStudent(filteredStudents[student])}
          </td>
        </tr>
      );
    }

    return tr;
  };
  const generateDataForOneStudent = () => {
    const tr = [];
    tr.push(
      <tr
        className="buttonStudentName "
        data-bs-toggle="offcanvas"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasBottom1"
        onClick={() => console.log(selectedStudent.studentId)}
      >
        <td>1</td>
        <td>{selectedStudent.studentName}</td>
        <td>{selectedStudent.dateOfBarthday}</td>
        <td>{selectedStudent.nid}</td>
        <td>{selectedStudent.phoneNumber}</td>
        <td>{selectedStudent.phoneNumberSecond}</td>
      </tr>
    );

    return tr;
  };
  const giveDate = () => {
    if (convertTextToDate(selectedStudent.dateOfBarthday) === null)
      return {
        year: 0,
        month: 0,
        day: 0,
      };
    return convertTextToDate(selectedStudent.dateOfBarthday);
  };
  function fetchTypeStudent(student) {
    if (student.studentType === "T") return "تمهيدي";
    else if (student.studentType === "B") return "بستاني";
    else return "غير محدد";
  }
  function getCommints() {
    if (selectedStudent !== null)
      return selectedStudent.commints === null ? "" : selectedStudent.commints;
  }
  const handleInputChange = event => {};
  function updateFormStudent() {
    return (
      <div className="modalBodyDesign">
        <input
          type="text"
          placeholder={selectedStudent.studentName}
          onChange={handleInputChange}
        />
        <div className="date">
          <input
            type="text"
            placeholder={giveDate().day}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder={giveDate().month}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder={giveDate().year}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          placeholder={selectedStudent.phoneNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder={selectedStudent.phoneNumberSecond}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder={selectedStudent.nid}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          placeholder={selectedStudent.commints}
          onChange={handleInputChange}
        />
        <select>{generateTeacherOptions()}</select>
      </div>
    );
  }
  return login ? (
    <div>
      <Navbar linkNames={linksNames} linkUrls={linkURLs} />
      <div className="SelectButton">
        <select className="form-select" onChange={handleTeacherSelectChange}>
          {generateTeacherOptions()}
        </select>
        <button
          className="btn excelB"
          onClick={handleExportToExcel}
          disabled={teachers.length === 0 && selectedTeacherUsername === ""}
        >
          Excel نقل البيانات الى
        </button>
      </div>

      {table(generateHeadRow(), generateDataTable())}

      {offcanvas(
        `ملاحظة : ${getCommints()}`,
        table(generateHeadRowForOneStudent(), generateDataForOneStudent()),
        "offcanvasBottom"
      )}
      {offcanvas(
        "تعديل بيانات الطالب",
        updateFormStudent(),
        "offcanvasBottom1"
      )}
    </div>
  ) : (
    <div></div>
  );
}

export default ShowStudents;

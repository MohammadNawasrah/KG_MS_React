import React, { useEffect, useState } from "react";
import {
  addStudentApi,
  addStudentPage,
  getLimitYears,
} from "../core/data/static/staticData";
import Button from "../widget/customButton";
import controllNav from "../core/functions/controllerNav";
import Navbar from "../widget/navbar";
import axiosGet from "../core/functions/axiosGet";
import axiosPost from "../core/functions/axiosPost";
import checkSession from "../core/functions/checkSession";
import CustomInput from "../widget/customInput";

function AddStudentPage() {
  const pageName = addStudentPage;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;

  const [studentName, setStudentName] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [monthOfBirth, setMonthOfBirth] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [SecondPhoneNumber, setSecondPhoneNumber] = useState("");
  const [nId, setNid] = useState("");
  const [comments, setComments] = useState("");

  const login = checkSession();
  const [yearsFromDatabase, setYearsFromDatabase] = useState([]);
  useEffect(() => {
    fetchYearsFromApi();
  }, []);

  const fetchYearsFromApi = async () => {
    setYearsFromDatabase(await axiosGet(getLimitYears, ""));
  };
  const resetAlldata = () => {
    setStudentName("");
    setDayOfBirth("");
    setMonthOfBirth("");
    setYearOfBirth("");
    setPhoneNumber("");
    setSecondPhoneNumber("");
    setNid("");
    setComments("");
  };
  const getFormData = () => {
    const dateOfBirth = `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`;
    const formData = {
      studentName: studentName,
      dateOfBarthday: dateOfBirth,
      phoneNumber: phoneNumber,
      phoneNumberSecond: SecondPhoneNumber,
      nid: nId,
      comments: comments,
    };
    return formData;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axiosPost(addStudentApi, getFormData());
    if (response !== "error") {
      alert("تم حفظ الطالب بنجاح");
      resetAlldata();
    }
  };

  return login ? (
    <div>
      <Navbar linkNames={linksNames} linkUrls={linkURLs}></Navbar>
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="studentName"
            className="row form-control text-center"
            placeholder="اسم الطالب"
            value={studentName}
            required
            onChange={e => setStudentName(e.target.value)}
          />

          <label
            className=" mt-3 d-flex justify-content-center"
            htmlFor="dateInput"
          >
            تاريخ ميلاد الطالب
          </label>
          <div className="mt-2 d-flex justify-content-center">
            <input
              type="date"
              id="dateInput"
              value={
                yearOfBirth && monthOfBirth && dayOfBirth
                  ? `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`
                  : ""
              }
              min={yearsFromDatabase[0]}
              max={yearsFromDatabase[yearsFromDatabase.length - 1]}
              onChange={e => {
                const dateValue = e.target.value;
                if (dateValue) {
                  const [year, month, day] = dateValue.split("-");
                  setYearOfBirth(year);
                  setMonthOfBirth(month);
                  setDayOfBirth(day);
                } else {
                  setYearOfBirth("");
                  setMonthOfBirth("");
                  setDayOfBirth("");
                }
              }}
            />
          </div>

          <input
            type="text"
            id="phoneNumber"
            className="row form-control mt-3 text-center"
            placeholder="رقم الهاتف"
            value={phoneNumber}
            required
            onChange={e => setPhoneNumber(e.target.value)}
          />

          <input
            type="text"
            id="SecondPhoneNumber"
            className="row form-control mt-3 text-center"
            placeholder="رقم هاتف احتياطي"
            value={SecondPhoneNumber}
            required
            onChange={e => setSecondPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            id="nId"
            className="row form-control mt-3 text-center"
            placeholder="الرقم المدني للطالب"
            value={nId}
            required
            onChange={e => setNid(e.target.value)}
          />

          <textarea
            id="comments"
            className="row form-control mt-3 text-center"
            placeholder="ملاحظات عن الطالب"
            value={comments}
            required
            onChange={e => setComments(e.target.value)}
          />

          <div className=" d-flex justify-content-center mt-3 ">
            <Button
              text={"اضافة الطالب"}
              type="submit"
              className=" btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default AddStudentPage;

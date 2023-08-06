import React, { useEffect, useState } from "react";
import Button from "../widget/customButton";
import controllNav from "../core/functions/controllerNav";
import Navbar from "../widget/navbar";
import checkSession from "../core/functions/checkSession";
import DateP from "../widget/dateP";
import DataFromApi from "../core/data/static/dataFromApi";
import LinksReact from "../core/data/static/linksReact";
import AxiosUtil from "../core/functions/axiosUtil";

function AddStudentPage() {
  const pageName = LinksReact.addStudentPage;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;

  const [studentName, setStudentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [SecondPhoneNumber, setSecondPhoneNumber] = useState("");
  const [nId, setNid] = useState("");
  const [comments, setComments] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  // const login = checkSession();
  const login = true;
  const [yearsFromDatabase, setYearsFromDatabase] = useState([]);
  useEffect(() => {
    fetchYearsFromApi();
  }, []);

  const fetchYearsFromApi = async () => {
    setYearsFromDatabase(
      await AxiosUtil.axiosGet(DataFromApi.getLimitYears, "")
    );
  };
  const resetAlldata = () => {
    setStudentName("");
    setPhoneNumber("");
    setSecondPhoneNumber("");
    setNid("");
    setComments("");
    setDateOfBirth("");
  };
  const getFormData = () => {
    const formData = {
      studentName: studentName,
      dateOfBarthday: dateOfBirth,
      phoneNumber: phoneNumber,
      phoneNumberSecond: SecondPhoneNumber,
      nid: nId,
      commints: comments,
    };
    return formData;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (dateOfBirth === "") {
      alert("يرجى اضافة تاريخ الميلاد");
      return;
    }
    const response = await AxiosUtil.axiosPost(
      DataFromApi.addStudentApi,
      getFormData()
    );
    if (response !== "error") {
      console.log(response.date);
      alert("تم حفظ الطالب محمد تمهيدي بنجاح");
      window.location.reload();
      resetAlldata();
    }
  };
  function handleDate(date) {
    setDateOfBirth(date);
  }
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
            <DateP onChange={handleDate}></DateP>
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

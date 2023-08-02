import React from "react";
import "../static/css/admin.css";
import Navbar from "../widget/navbar";
import addStudentImg from "../static/img/addStudent.png";
import showStudentData from "../static/img/showStudentData.png";
import addTeacherData from "../static/img/addTeacher.png";
import setting from "../static/img/setting.png";
import {
  addStudentPage,
  addTeacher,
  adminPanel,
  showStudentPage,
} from "../core/data/static/staticData";
import controllNav from "../core/functions/controllerNav";
import checkSession from "../core/functions/checkSession";
import Test from "../test/test";
const AdminPanel = () => {
  const pageName = adminPanel;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;
  const isLogin = checkSession();

  return isLogin ? (
    <div>
      <React.Fragment>
        <Navbar linkNames={linksNames} linkUrls={linkURLs} />
      </React.Fragment>
      <div className="cards">
        <Test
          imgUrl={addStudentImg}
          textCommint={"اضافة طالب"}
          goUrl={addStudentPage}
        />
        <Test
          imgUrl={showStudentData}
          textCommint={"معلومات الطلاب"}
          goUrl={showStudentPage}
        />
        <Test
          imgUrl={addTeacherData}
          textCommint={"اضافة معلم"}
          goUrl={addTeacher}
        />
        <Test
          imgUrl={setting}
          textCommint={"اعدادات المدير"}
          goUrl={addTeacher}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default AdminPanel;

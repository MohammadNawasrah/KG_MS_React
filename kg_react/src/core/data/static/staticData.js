var port = ":8088";
var host = "localhost";
var protocol = "http://";
var url = `${protocol + host + port}`;
export var loginApiUrl = `${url}/login`;
export var addStudentApi = `${url}/students`;
export var showStudentApi = addStudentApi;
export var studentDistributionApi = `${url}/admins/distribution`;
export var addTeacherApi = `${url}/teachers`;

// react
export var successPage = "/successPage";
export var loginPage = "/";
export var failurePage = "/failurePage";
export var adminPanel = "/adminPanel";
export var addStudentPage = "/adminPanel/addStudent";
export var showStudentPage = "/adminPanel/showStudents";
export var addTeacher = "/adminPanel/addTeacher";

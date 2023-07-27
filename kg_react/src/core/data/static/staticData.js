var port = ":8088";
var host = "192.168.1.3";
var protocol = "http://";
var url = `${protocol + host + port}`;
export var loginApiUrl = `${url}/login`;
export var addStudentApi = `${url}/students`;
export var showStudentApi = addStudentApi;
export var studentDistributionApi = `${url}/admins/distribution`;
export var addTeacherApi = `${url}/teachers`;
export var updateAttendance = `${url}/attendance/updateAttendance`;
export var lastDateUpdate = `${url}/attendance/lastDateUpdate`;
export var removeLogin = `${url}/teachers/removeLogin`;
export var getIsLogin = `${url}/teachers/getIsLogin`;
export var getStudentsForEachTeacher = `${url}/teachers/getStudent`;

// react
export var successPage = "/successPage";
export var loginPage = "/";
export var attendancePage = "/attendancePage";
export var adminPanel = "/adminPanel";
export var addStudentPage = "/adminPanel/addStudent";
export var showStudentPage = "/adminPanel/showStudents";
export var addTeacher = "/adminPanel/addTeacher";

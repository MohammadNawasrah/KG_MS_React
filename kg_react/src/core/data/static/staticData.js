var port = ':8088';
var host = 'localhost';
var protocol = "http://";
export var loginApiUrl = `${protocol + host + port}/login`;
export var addStudentApi = `${protocol + host + port}/students`;
export var showStudentApi = addStudentApi;

// react 
export var successPage = '/successPage';
export var loginPage = '/';
export var failurePage = '/failurePage';
export var adminPanel='/adminPanel';
export var addStudentPage='/adminPanel/addStudent';
export var showStudentPage='/adminPanel/showStudents';



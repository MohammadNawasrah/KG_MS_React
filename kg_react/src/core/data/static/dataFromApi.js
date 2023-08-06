class DataFromApi {
  static port = ":8088";
  static host = "192.168.1.3";
  static protocol = "http://";
  static url = `${DataFromApi.protocol}${DataFromApi.host}${DataFromApi.port}`;
  static loginApiUrl = `${DataFromApi.url}/login`;
  static addStudentApi = `${DataFromApi.url}/students`;
  static getStudentsAndTeachers = `${DataFromApi.url}/admins/getAllDataFromStudentsAndTeachers`;
  static studentDistributionApi = `${DataFromApi.url}/admins/distribution`;
  static addTeacherApi = `${DataFromApi.url}/teachers`;
  static updateAttendance = `${DataFromApi.url}/attendance/updateAttendance`;
  static lastDateUpdate = `${DataFromApi.url}/attendance/lastDateUpdate`;
  static removeLogin = `${DataFromApi.url}/teachers/removeLogin`;
  static getIsLogin = `${DataFromApi.url}/teachers/getIsLogin`;
  static getStudentsForEachTeacher = `${DataFromApi.url}/teachers/getStudent`;
  static getAllTeachers = `${DataFromApi.url}/teachers/getTeachers`;
  static getLimitYears = `${DataFromApi.url}/datelimits/limitsYears`;
}

export default DataFromApi;

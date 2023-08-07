import DataFromApi from "../core/data/static/dataFromApi";
import LinksReact from "../core/data/static/linksReact";
import AxiosUtil from "../core/functions/axiosUtil";
import goTo from "../core/functions/goTo";
import StringUtil from "../core/functions/stringUtil";
class LoginController {
  static async login(username, password) {
    var name;
    const loginRespons = await AxiosUtil.axiosPost(DataFromApi.loginApiUrl, {
      username,
      password,
    });
    name = StringUtil.splitAfterKeyword(loginRespons, "admin");
    if (loginRespons === "success login admin" + name) {
      this.createSession(name);
      goTo(LinksReact.adminPanel);
    }
  }
  static createSession(name) {
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("name", name);
  }
}
export default LoginController;

import DataFromApi from "../data/static/dataFromApi";
import LinksReact from "../data/static/linksReact";
import AxiosUtil from "../functions/axiosUtil";
import StringUtil from "../functions/stringUtil";
const fromLoginTo = async (username, password) => {
  var name;
  const loginRespons = await AxiosUtil.axiosPost(DataFromApi.loginApiUrl, {
    username,
    password,
  });
  name = StringUtil.splitAfterKeyword(loginRespons, "admin");
  if (loginRespons === "success login admin" + name) {
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("name", name);
    window.location.href = LinksReact.adminPanel;
  }
};
export default fromLoginTo;

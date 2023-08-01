import splitAfterKeyword from "../functions/stringFunction";
import { adminPanel, loginApiUrl } from "../data/static/staticData";
import axiosPost from "../functions/axiosPost";
const fromLoginTo = async (username, password) => {
  var name;
  const loginRespons = await axiosPost(loginApiUrl, { username, password });
  name = splitAfterKeyword(loginRespons, "admin");

  sessionStorage.setItem("loggedIn", true);
  sessionStorage.setItem("name", name);

  if (loginRespons === "success login admin" + name) {
    window.location.href = adminPanel;
  }
};
export default fromLoginTo;

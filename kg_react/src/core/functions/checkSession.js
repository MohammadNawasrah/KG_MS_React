import { loginPage } from "../data/static/staticData";

const checkSession = () => {
  try {
    const login = sessionStorage.getItem("loggedIn");
    if (!login) {
      sessionStorage.clear();
      window.location.href = loginPage;
    }
    return login;
  } catch (error) {
    console.error("Error fetching years:", error);
    return error;
  }
};
export default checkSession;

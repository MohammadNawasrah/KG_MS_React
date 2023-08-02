import axios from "axios";
class AxiosUtil {
  static axiosGet = async (url, data) => {
    try {
      const response = await axios.get(url, data);
      return response.data;
    } catch (error) {
      console.error("Error fetching years:", error);
      return error;
    }
  };
  static axiosPost = async (url, data) => {
    console.log(data);
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error fetching years:", error);
      return "error";
    }
  };
}
export default AxiosUtil;

import axios from "axios";

const axiosGet = async (url, data) => {
  try {
    const response = await axios.get(url, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching years:", error);
    return error;
  }
};
export default axiosGet;

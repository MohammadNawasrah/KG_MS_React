import axios from "axios";

const axiosPost = async (url, data) => {
  console.log(data);
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching years:", error);
    return "error";
  }
};
export default axiosPost;

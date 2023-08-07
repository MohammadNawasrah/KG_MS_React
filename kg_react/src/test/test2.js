import axios from "axios";
import { useState } from "react";

const Test2 = () => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  const handleData1Change = event => {
    setData1(event.target.value);
  };

  const handleData2Change = event => {
    setData2(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post("http://192.168.1.1/", {
        data1,
        data2,
      });

      console.log("Data posted successfully:", response.data);
      // You can perform any further actions upon successful post here.
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <h2>Post Data to API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data 1:</label>
          <input type="text" value={data1} onChange={handleData1Change} />
        </div>
        <div>
          <label>Data 2:</label>
          <input type="text" value={data2} onChange={handleData2Change} />
        </div>
        <button type="submit">Post Data</button>
      </form>
    </div>
  );
};

export default Test2;

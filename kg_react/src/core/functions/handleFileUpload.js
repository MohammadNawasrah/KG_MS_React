import XLSX from 'xlsx';
import axios from 'axios';

async function handleFileUpload() {
  const input = document.getElementById("stdEXL");
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = async function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        raw: false,
        dateNF: "dd/mm/yyyy", // Specify the date format
      });
      console.log(jsonData);

      // Post each data entry
      for (let i = 1; i < jsonData.length; i++) {
        const entry = jsonData[i];
        console.log(entry[0]);
        const payload = {
          studentName: entry[0],
          dateOfBarthday: formatDate(entry[1]), // Fix the date format
          phoneNumber: entry[2],
        };

        try {
          console.log(payload)
          await axios.post("http://localhost:8088/students", payload);

          console.log("Data posted successfully");
        } catch (error) {
          console.error("Error posting data:", error);
        }
      }
    };

    reader.readAsArrayBuffer(file);
  }
}

function formatDate(dateString) {
  // Check if the date string contains slashes or dashes
  const delimiter = dateString.includes("/") ? "/" : "-";

  const [day, month, year] = dateString.split(delimiter);
  return `${day.trim().padStart(2, "0")} / ${month.trim().padStart(2, "0")} / ${year.trim().padStart(4, "20")}`;
}

export default handleFileUpload;

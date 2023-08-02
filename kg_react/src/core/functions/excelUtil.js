import XLSX from "xlsx";
import axios from "axios";
import StringUtil from "./stringUtil";
class ExcelUtil {
  static async handleFileUpload() {
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
            dateOfBarthday: StringUtil.formatDate(entry[1]), // Fix the date format
            phoneNumber: entry[2],
          };

          try {
            console.log(payload);
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
  static exportToExcel = (data, teacherName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, `${teacherName}_student_data.xlsx`);
  };
}

export default ExcelUtil;

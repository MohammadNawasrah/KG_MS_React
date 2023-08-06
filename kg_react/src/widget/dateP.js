import { useEffect, useRef, useState } from "react";
import "../static/css/Date.css";
import DataFromApi from "../core/data/static/dataFromApi";
import AxiosUtil from "../core/functions/axiosUtil";
const DateP = ({ onChange }) => {
  const [firstDateD, setFirstDate] = useState("");
  const [endDateD, setEndDate] = useState("");
  const [selectYear, setSelectYear] = useState("");
  const [selectMonth, setSelectMonth] = useState("");
  const [monthOptions, setMonthOptions] = useState(null);
  const [dayOptions, setDayOptions] = useState(null);
  const [selectDay, setSelectDay] = useState("");
  const yearSelectRef = useRef();
  const monthSelectRef = useRef();
  const daySelectRef = useRef();
  const [yearsFromDatabase, setYearsFromDatabase] = useState([]);
  const fetchYearsFromApi = async () => {
    setYearsFromDatabase(
      await AxiosUtil.axiosGet(DataFromApi.getLimitYears, "")
    );
  };
  function getAllDaysInMonth(textDate) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!datePattern.test(textDate)) {
      throw new Error(
        "Invalid date format. Please provide a date in 'yyyy-MM-dd' format."
      );
    }

    const [year, month] = textDate.split("-").map(Number);

    // JavaScript's Date months are 0-indexed (0 = January, 1 = February, ...).
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);

    const daysInMonth = [];
    for (
      let day = firstDayOfMonth.getDate();
      day <= lastDayOfMonth.getDate();
      day++
    ) {
      daysInMonth.push(day);
    }

    return daysInMonth;
  }

  function convertTextToDate(text) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!datePattern.test(text)) {
      // If the text doesn't match the pattern, return null or throw an error to indicate it's not a valid date format.
      return null;
    }

    const [year, month, day] = text.split("-").map(Number);

    // JavaScript's Date months are 0-indexed (0 = January, 1 = February, ...).
    const date = new Date(year, month, day);

    // Check if the resulting Date object is valid (e.g., not an "invalid date" like Feb 30th).
    if (isNaN(date.getTime())) {
      // If it's an invalid date, return null or throw an error.
      return null;
    }

    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    };
  }
  useEffect(() => {
    fetchYearsFromApi();
  }, []);
  function fetchDate() {
    setFirstDate(yearsFromDatabase[0]);
    setEndDate(yearsFromDatabase[yearsFromDatabase.length - 1]);
  }
  const generateYearOptions = (startDate, endDate) => {
    const options = [];

    const startYear = new Date(startDate).getFullYear();
    const endYear = new Date(endDate).getFullYear();
    options.push(<option key={"select year"}>{"اختر السنه"}</option>);
    for (let year = startYear; year <= endYear; year++) {
      options.push(<option key={year}>{year}</option>);
    }

    return options;
  };
  function getAllDaysInMonth(year, month) {
    const lastDayOfMonth = new Date(year, month, 0);
    var fromDay = 1;
    var toDay = lastDayOfMonth.getDate();
    if (
      year === convertTextToDate(firstDateD).year.toString() &&
      month === convertTextToDate(firstDateD).month.toString()
    ) {
      fromDay = convertTextToDate(firstDateD).day;
    } else if (
      year === convertTextToDate(endDateD).year.toString() &&
      month === convertTextToDate(endDateD).month.toString()
    ) {
      toDay = convertTextToDate(endDateD).day;
    }
    const daysInMonth = [];
    for (var day = fromDay; day <= toDay; day++) {
      daysInMonth.push(day);
    }

    return { daysInMonth: daysInMonth, fromDay: fromDay, toDay: toDay };
  }
  const generateMonthOptions = year => {
    const options = [];
    var fromMonth = 1;
    var toMonth = 12;
    if (year === convertTextToDate(firstDateD).year.toString()) {
      fromMonth = convertTextToDate(firstDateD).month;
    } else if (year === convertTextToDate(endDateD).year.toString()) {
      toMonth = convertTextToDate(endDateD).month;
    }
    options.push(<option key={"select month"}>{"اختر الشهر"}</option>);
    for (let month = fromMonth; month <= toMonth; month++) {
      options.push(
        <option key={month} value={month}>
          {month}
        </option>
      );
    }
    return options;
  };
  const generateDayOptions = (year, month) => {
    const respons = getAllDaysInMonth(year, month);
    var fromDay = respons.fromDay;
    var toDay = respons.toDay;
    const options = [];
    options.push(
      <option key={"select day"} value={"اختر اليوم"}>
        {"اختر اليوم"}
      </option>
    );
    for (let day = fromDay; day <= toDay; day++) {
      options.push(
        <option key={day} value={day}>
          {day}
        </option>
      );
    }

    return options;
  };
  function handelSelectYear(event) {
    setSelectYear(event.target.value);
    document.getElementById("selctMonths").value = 0;
    setMonthOptions(generateMonthOptions(event.target.value));
  }
  function handelSelectMonth(event) {
    setSelectMonth(event.target.value);
    setDayOptions(generateDayOptions(selectYear, event.target.value));
  }
  function handelSelectDay(event) {
    setSelectDay(event.target.value);
    var day = event.target.value;
    if (day === "اختر اليوم") day = 1;
    onChange(
      `${selectYear}-${
        selectMonth <= 9 ? `0${selectMonth}` : `${selectMonth}`
      }-${day <= 9 ? `0${day}` : `${day}`}`
    );
  }
  const dateOptions = generateYearOptions(firstDateD, endDateD);
  return (
    <div className="DatePacker">
      <select
        required
        id="selectYears"
        onClick={fetchDate}
        onChange={handelSelectYear}
        ref={yearSelectRef}
      >
        {dateOptions}
      </select>
      <select
        required
        onChange={handelSelectMonth}
        id="selctMonths"
        disabled={selectYear === "" || selectYear === "اختر السنه"}
        ref={monthSelectRef}
      >
        {monthOptions}
      </select>
      <select
        required
        onChange={handelSelectDay}
        id="selctDays"
        disabled={
          selectYear === "" ||
          selectYear === "اختر السنه" ||
          selectMonth === "" ||
          selectMonth === "اختر الشهر"
        }
        ref={daySelectRef}
      >
        {dayOptions}
      </select>
    </div>
  );
};

export default DateP;

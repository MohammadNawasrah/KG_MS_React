class StringUtil {
  static formatDate(dateString) {
    const delimiter = dateString.includes("/") ? "/" : "-";

    const [day, month, year] = dateString.split(delimiter);
    return `${day.trim().padStart(2, "0")} / ${month
      .trim()
      .padStart(2, "0")} / ${year.trim().padStart(4, "20")}`;
  }
  static splitAfterKeyword(str, keyword) {
    if (typeof str !== "string") {
      throw new TypeError("str must be a string.");
    }

    const index = str.indexOf(keyword);
    if (index !== -1) {
      return str.slice(index + keyword.length);
    }
    return str;
  }
  static removeStringFromArray(arr, searchString) {
    const index = arr.indexOf(searchString);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return { index, updatedArray: arr };
  }
  static removeElementByIndex(arr, index) {
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
    }
    return arr;
  }
}

export default StringUtil;

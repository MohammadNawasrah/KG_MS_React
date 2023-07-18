function splitAfterKeyword(str, keyword) {
  if (typeof str !== "string") {
    throw new TypeError("str must be a string.");
  }

  const index = str.indexOf(keyword);
  if (index !== -1) {
    return str.slice(index + keyword.length);
  }
  return str;
}

export default splitAfterKeyword;

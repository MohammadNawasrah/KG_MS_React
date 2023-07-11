
function splitAfterKeyword(str, keyword) {
    const index = str.indexOf(keyword);
    if (index !== -1) {
      return str.slice(index + keyword.length);
    }
    return str;
  }
  export default splitAfterKeyword;
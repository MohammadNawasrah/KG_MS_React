function removeStringFromArray(arr, searchString) {
  const index = arr.indexOf(searchString);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return { index, updatedArray: arr };
}
export default removeStringFromArray;

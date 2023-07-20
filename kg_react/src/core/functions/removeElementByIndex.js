function removeElementByIndex(arr, index) {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
  }
  return arr;
}
export default removeElementByIndex;

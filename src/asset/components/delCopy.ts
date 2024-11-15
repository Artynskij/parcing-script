export function delCopyUrl(array) {
  const returnedArray = [];
  array.forEach((element) => {
    if (!returnedArray.find((item) => item.id === element.id)) {
      returnedArray.push(element);
    }
  });

  return returnedArray;
}

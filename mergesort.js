function split(wholeArray) {
  let half = Math.ceil(wholeArray.length / 2);

  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(firstArr, secondArr) {
  let sortedArr = [];

  while (firstArr.length || secondArr.length) {
    let firstNum = firstArr[0];
    let secondNum = secondArr[0];

    if (firstNum < secondNum || secondNum === undefined) {
      sortedArr.push(firstArr.shift());
    } else if (secondNum < firstNum || firstNum === undefined) {
      sortedArr.push(secondArr.shift());
    }
  }

  return sortedArr;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let splitted = split(array);
    let [firstHalf, secondHalf] = splitted;
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

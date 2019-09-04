function swap(array, indexOne, indexTwo) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
  return array;
}

function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      let first = array[i];
      let second = array[i + 1];
      if (first > second) swap(array, i, i + 1);
    }
  }

  return array;
}

function selectionSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

const array = [4, 5, 1, 2, 3, 19];

console.log(`The sorted array : ${array} is `, selectionSort(array));

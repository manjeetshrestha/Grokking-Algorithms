function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0];
  const less = [];
  const more = [];
  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? less.push(array[i]) : more.push(array[i]);
  }
  return quicksort(less).concat(pivot, quicksort(more));
}

const array = [1, 5, 6, 11, 2, 109, 30, 60];

const sortedArray = quicksort(array);

console.log(`The sorted array is : [${sortedArray}] `);

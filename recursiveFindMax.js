function recursiveFindMax(array) {
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }
  if (array[0] > array[1]) {
    array.splice(1, 1);
  } else {
    array.splice(0, 1);
  }
  return recursiveFindMax(array);
}

const array = [1, 44444, 23, 444, 1111];

console.log(`Max element in ${array} is `, recursiveFindMax(array));

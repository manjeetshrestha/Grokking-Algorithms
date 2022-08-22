function recursionSum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + recursionSum(array.slice(1));
}

const array = [1, 2, 1, 1, 1];

console.log(`Recursion sum for ${array} is `, recursionSum(array));

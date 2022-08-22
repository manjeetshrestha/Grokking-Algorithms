function recursiveCount(array) {
  if (array.length === 0) {
    return 0;
  }
  return 1 + recursiveCount(array.slice(1));
}

const array = [1, 23, 1, 1, 3];
console.log(
  `Count of number of element is ${array} is `,
  recursiveCount(array)
);

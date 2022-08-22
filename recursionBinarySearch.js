let count = 0; // count is a used as a global variable here.

function recursionBinarySearch(searchNumber, sortedArray) {
  count++;
  let mid = Math.ceil(sortedArray.length / 2);
  if (sortedArray.length === 1 && sortedArray[0] !== searchNumber) {
    return false;
  }
  if (searchNumber == sortedArray[mid]) {
    return true;
  } else if (searchNumber < sortedArray[mid]) {
    return recursionBinarySearch(searchNumber, sortedArray.slice(0, mid));
  } else if (searchNumber > sortedArray[mid]) {
    return recursionBinarySearch(searchNumber, sortedArray.splice(mid));
  }
}

const sortedArray = [1, 5, 8, 10, 55, 99, 123, 158, 199];
const searchNumber = 5;

const result = recursionBinarySearch(searchNumber, sortedArray);
if (result) {
  console.log(
    `The number ${searchNumber} is present is the array ${sortedArray} and it ran for ${count} times`
  );
} else {
  console.log(
    `The number ${searchNumber} is not present is the array ${sortedArray} and it ran for ${count} times`
  );
}

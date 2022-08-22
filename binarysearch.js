// Binary search algorithm for a sorted list of numbers.

// sorted list of numbers
const numbers = [
  1, 2, 5, 60, 69, 80, 100, 140, 149, 190, 200, 210, 220, 230, 250, 255,
];

function binarySearch(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  let mid;
  let count = 0;
  while (low <= high) {
    count++;
    mid = Math.ceil((low + high) / 2);
    if (numbers[mid] === target) {
      console.log("Element found");
      return count;
    }
    if (numbers[mid] > target) {
      high = mid - 1;
    }
    if (numbers[mid] < target) {
      low = mid + 1;
    }
  }
  console.log("Element doesnot exist in the numbers list ");
  return count;
}

const count = binarySearch(numbers, 69);
console.log("The total search took", count, "iterations");

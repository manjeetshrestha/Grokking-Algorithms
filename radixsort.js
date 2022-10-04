// can only sort positive numbers.
const array = [1024, 5, 1, 3, 10, 100, 59, 49, 69, 22, 120, 999, 141, 1020];
console.log("Sorted Array is ", radixSort(array));

function radixSort(array) {
  console.log("Unsorted Array is : ", array);
  const lengthOfLargestNumber = findLengthOfLargestNumber(array);
  const prefixedZeroArray = addPrefixZeros(array, lengthOfLargestNumber);
  let bucketArray;
  let sortedArray = prefixedZeroArray;
  for (let i = lengthOfLargestNumber; i > 0; i--) {
    bucketArray = Array.from({ length: 10 }, (x) => []); // {length:10} creates an Object of length 10
    for (let j = 0; j < prefixedZeroArray.length; j++) {
      bucketArray[getDigit(sortedArray[j], i)].push(sortedArray[j]);
    }

    sortedArray = [].concat(...bucketArray);
  }
  // converting the array in string back to numbers
  sortedArray = Array.from(sortedArray, (x) => parseInt(x));
  return sortedArray;
}

function findLengthOfLargestNumber(array) {
  let i = 0;
  let largestNumber = array[0].toString();
  for (i; i < array.length; i++) {
    if (parseInt(largestNumber) < array[i]) {
      largestNumber = array[i].toString();
    }
  }
  return largestNumber.length;
}

function getDigit(number, significantDigit) {
  return number.slice(significantDigit - 1, significantDigit);
}

function addPrefixZeros(array, maxLength) {
  // returns an array in string adding necessary prefix zeros.
  const newArray = [];
  let element;
  for (let i = 0; i < array.length; i++) {
    const zerosNeeded = maxLength - array[i].toString().length;
    if (zerosNeeded < 1) {
      newArray.push(array[i].toString());
    } else {
      element = array[i].toString();
      for (let j = 0; j < zerosNeeded; j++) {
        element = "0" + element;
      }
      newArray.push(element);
    }
  }
  return newArray;
}

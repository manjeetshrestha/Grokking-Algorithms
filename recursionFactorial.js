function recursionFactorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * recursionFactorial(number - 1);
}

console.log("Factorial of 5 is ", recursionFactorial(5));

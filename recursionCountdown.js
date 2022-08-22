function countDown(count) {
  console.log(count);
  if (count === 1) {
    return 1;
  } else {
    return countDown(count - 1);
  }
}

countDown(5);

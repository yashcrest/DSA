function fibonacci(n) {
  let result;
  if (n === 0) {
    result = 0;
  } else if (n === 1) {
    result = 1;
  } else {
    result = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return result;
}

console.log(fibonacci(10));

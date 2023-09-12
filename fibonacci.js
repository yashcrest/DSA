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

//solving using dynamic programming
// we store the alreadt calculated value in a hash map and access that value when we need them. This method is called memoization.

function fib(n) {
  let map = new Map();
  let result;
  if (map.has(n)) {
    result = map.get(n);
  }
  if (n === 0) {
    result = 0;
  } else if (n === 1) {
    result = 1;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }
  map.set(n, result);
  return result;
}

console.log(fib(20));

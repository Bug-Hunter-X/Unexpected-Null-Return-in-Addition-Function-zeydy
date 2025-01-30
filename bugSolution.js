function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error: throw new Error('Invalid input: parameters must be numbers');
  }
  return a + b; 
}

console.log(foo(null, 5)); // 5
console.log(foo(5, null)); // 5
console.log(foo(5, 5)); // 10
console.log(foo(undefined, 5)); // 5
console.log(foo(5, undefined)); // 5
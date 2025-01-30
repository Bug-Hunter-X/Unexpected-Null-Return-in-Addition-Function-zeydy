function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  return a + b; 
}

console.log(foo(null, 5)); // null
console.log(foo(5, null)); // null
console.log(foo(5, 5)); // 10
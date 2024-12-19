function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null; // Or throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo("1", 2)); // Output: null
console.log(foo(1, "2")); // Output: null
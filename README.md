# Type Coercion Bug in JavaScript Addition

This repository demonstrates a subtle bug in JavaScript related to type coercion during addition. The function `foo` attempts to add two numbers, but it handles null values incorrectly.

## Bug Description

The `foo` function is designed to add two numbers. It correctly handles null values by returning null if either input is null.  However, if the input is a string which can be coerced to a number the result might not be as expected. This is because Javascript's loose typing can result in unexpected type coercion during the addition operation.

## Bug Solution

The solution involves explicitly checking if the input values are numbers before performing the addition. If they are not numbers the code should throw an error or return null.  This prevents unintended type coercion and ensures the function behaves as intended.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` to observe the unexpected behaviour.
3. Run `bugSolution.js` to see the corrected implementation.
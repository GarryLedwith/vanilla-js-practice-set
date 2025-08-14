/*
coalesce(a,b,c) → return the first truthy value (no || chains; use an array + iteration).

Example: coalesce('', 0, 'x') → 'x'

PEDAC:
Problem:
- Given three values, return the first truthy value among them.
- The function should not use the logical OR (||) operator.
- The function should handle cases where all values are falsy.
- The function should return the first truthy value or undefined if all are falsy.
- The function should not modify the input values.

  - clarifying questions:
    - What is a truthy value? (Any value that is not false, 0, '', null, undefined, or NaN)
    - Is an empty string considered truthy? (No, it is falsy)


Example:
coalesce('', 0, 'x') → 'x'

Data Structures:
- An array to hold the input values.
- The output will be the first truthy value found.


Algorithm:
1. Create an array containing the three input values.
2. Iterate through the array.
3. For each value, check if it is truthy.
4. If a truthy value is found, return it.
5. If no truthy value is found, return undefined.




Code: 

*/
values = ['', 0, 'x'];

function coalesce(values) {
    for (const value of values) { 
        if (value) { // check if the value is truthy
            return value; // return the first truthy value found
        }
    }
    return undefined; // return undefined if no truthy value is found
}

// Example usage
console.log(coalesce(values)); // Output: 'x'
// Example usage with all falsy values
console.log(coalesce([null, undefined, 0])); // Output: undefined
// Example usage with all truthy values
console.log(coalesce(['a', 'b', 'c'])); // Output: 'a
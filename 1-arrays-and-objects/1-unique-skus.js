/*
uniqueSkus(rows) → return array of unique sku values.

Example: [{sku:'A'}, {sku:'A'}, {sku:'B'}] → ['A','B']

PEDAC:
Problem: 
- Given an array of objects, each containing a 'sku' property, return an array of unique SKU values.
- The input is an array of objects, and the output should be an array of unique strings
- The function should handle cases where the input array is empty or contains duplicate SKUs.
- The function should not modify the original array.
- The function should return an empty array if no unique SKUs are found.

Example: 
[{sku:'A'}, {sku:'A'}, {sku:'B'}] → ['A','B']

Data Structures:
Set for tracking unique SKUs, and an array for the final output.

Array of objects as input, and an array of strings as output.
- Input: Array of objects with 'sku' property
- Output: Array of unique SKU strings

Algorithm:
1. Initialize an empty array to hold unique SKUs.
2. Use a Set to track unique SKUs.
3. Iterate through the input array.
4. For each object, check if the SKU is already in the Set.
5. If not, add the SKU to the Set and also to the unique SKUs array
6. Return the unique SKUs array.


Code: 
*/

rows = [{sku:'A'}, {sku:'A'}, {sku:'B'}];

function uniqueSkus(rows) {
    const uniqueSkusSet = new Set(); // initialize a Set to track unique SKUs
    const uniqueSkusArray = []; // initialzie an array to hold unique SKUs

    for (const row of rows) { 
        if (!uniqueSkusSet.has(row.sku)) { // check if the SKU is not already in the Set
            uniqueSkusSet.add(row.sku); // add the SKU to the Set   
            uniqueSkusArray.push(row.sku); // add the SKU to the unique SKUs array 
        }
    }
    return uniqueSkusArray; // return the array of unique SKUs
}

// Example usage
console.log(uniqueSkus(rows)); // Output: ['A', 'B']
// Example usage with an empty array
console.log(uniqueSkus([])); // Output: []
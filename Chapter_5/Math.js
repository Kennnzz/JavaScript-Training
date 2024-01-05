// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E)

const area = 7.7;

console.log(Math.round(area)); // round
console.log(Math.floor(area)); // always round down
console.log(Math.ceil(area)); // always round up
console.log(Math.trunc(area)); // leaves the integer

// random numbers
const random = Math.random() // random is always between 0-1.
console.log(random);
console.log(Math.round(random * 100));

// Primitive & Reference Types
/* 
Primitive Types:
- numbers
- strings
- Booleans
- null
- undefined
- symbols

Reference Types
- all types of objects
    - object literals
    - arrays
    - functions
    - dates
    - all other objects
*/
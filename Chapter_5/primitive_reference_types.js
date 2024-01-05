// Primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100; // when we make copies of primitive values and change one of them
// // it does not affect the value
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne; // these 2 both point to the same object

console.log(userOne, userTwo);

userOne.age = 40; // this will change both of the user's ages even if you just do userOne
console.log(userOne, userTwo);
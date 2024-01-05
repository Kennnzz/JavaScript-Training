let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison(different types cannot be equal)

// triple '=' strict comparison. "is age variable the same value and type to 25"
console.log(age === 25);

// now string 25 ('25') is false due to strict comparison
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

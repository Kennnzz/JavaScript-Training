// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something 
//     let value = 50;
//     callbackFunc(value);
// };

// Passing in a function as an argument
// myFunc(function(value){
//     // do something
//     console.log(value);
// });

// Arrow function version
// myFunc(value => {
//     // do something
//     console.log(value);
// });


// callbacks & foreach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

// forEach function iterates over an array.
// basically saying "for each element in that array, it will call that callback function"
// people.forEach(function(person){ // used 'person' because it is the 'singular' word of whatever 'people' is.
//     console.log(person);
// });

// Converting to an arrow function
// people.forEach((person, index) => {
//     console.log(index, person);
// }); // instead of doing this

// do it like this
people.forEach(logPerson)
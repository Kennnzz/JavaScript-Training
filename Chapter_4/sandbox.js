// function declaration
// function greet(){
//     console.log('hello there');
// }

// function expression
// const speak = function(){ // function expression means we store a function inside a variable
//     console.log('good day!');
// };

// greet();
// greet();
// greet();

speak();
speak();
speak();

// function declaration
function greet(){ // you can use greet() (the one above) to call declarations above the functions
    // but you cannot do it with expressions. this is called 'hoist'
    console.log('hello there');
}

const speak = function(){ // function expression means we store a function inside a variable
    console.log('good day!');
};
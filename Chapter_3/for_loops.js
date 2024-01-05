// for loops

// Curly braces is know as code block
/* 'i' is the variable
    if 'i' is less than 5, the code block runs.
    finally, the third parameter, it executes at the end
    of the code block and repeats, until 'i' is 5 or greater */
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i)
// }

// // log will run after loop has finished
// console.log('loop finished');

const names = ['shaun', 'mario', 'luigi']

for(let i = 0; i < names.length; i++){
    // console.log(names[i]) // names[i] this syntax will print out each of the names, not all of it
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
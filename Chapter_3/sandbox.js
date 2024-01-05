// while loops
const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < 5){
//     console.log('in loop: ', i);
//     i++; // For while loops, to avoid infinite loops, u have to increment 'i'.
//     // in for loops it was in the parameters, for while, its in the code block
// }

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
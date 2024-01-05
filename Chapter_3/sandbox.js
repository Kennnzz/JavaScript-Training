// variables & block scope
let age = 30;

if(true){
    // age = 40; // changes age to 40 and outside age to 40. overwriting changes the global variable
    let age = 40; // changes only the inside to 40. redefining instead of overwriting changes inside variable
    let name = 'shaun'; // defininig a variable inside a code block makes a local scope only accessible...
    // inside the code block
    console.log('inside 1st code block: ', age, name);

    if(true){ // nested code block still uses the most recent value outside of its block, which is 40
        let age = 50; // created a new local variable that only works inside nested block
        console.log('inside 2nd code block: ', age)
    }
}

console.log('outside code block: ', age);
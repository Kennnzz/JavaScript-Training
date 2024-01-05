// if statements
const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 4){
    console.log("that's a lot of ninjas") // Use double quotes if you're using an apostrophe (')
}

// if and else if statements

const password = 'p@ssword';

if(password.length >= 12){
    console.log('that password is mighty strong');
} else if(password.length >= 8){
    console.log('that password is long enough!');
} else { // if first code block is not true, then move to else if/else statement
  console.log('password is not long enough')
}
// logical operators - OR || and AND &&

const password = 'p@ss';

if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){ 
    console.log('that password is strong enough!');
} else { // if first code block is not true, then move to else if/else statement
  console.log('password is not strong enough')
}

// logical NOT (!)

let user = false;

// if statements only run if value is true. since user is false, we used (!) NOT operator to make false into true
if(!user){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);
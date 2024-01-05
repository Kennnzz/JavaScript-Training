// arguments & parameters

const speak = function(name = 'lugi', time = 'night'){
    console.log(`good ${time} ${name}`);
};

console.log(name); // this code wont work because it is outside of the function

// speak('mario', 'morning'); // code needs to match order of parameters
speak(); // putting no parameters will make it so result is undefined.
// u can counter undefined by predefiniing luigi and night at parameters


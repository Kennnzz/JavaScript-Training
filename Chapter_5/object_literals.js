// object literals

let user = {
    name: 'crystal', // key value pairs
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 thungs to make with marmite'] 
};

console.log(user);

// Acess properties
console.log(user.name);

// Update properties
user.age = 35
console.log(user.age);

const key = 'location';

// Access any property with square bracket notation
console.log(user['name']);
user['name'] = 'chun-li' // Another way to update name
console.log(user['name']) // now this outputs chun-li instead of crystal

console.log(typeof user); // outputs object since this is of object type
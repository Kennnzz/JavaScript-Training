// get an element by ID
// const title = document.getElementById('page-title'); // a hash '#' is needed if u want to get an id,
// but only use that when you are using querySelector
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName('error') // again, don't need a dot '.' because method is
// already implied that we're getting an element by class name
// console.log(errors);
// console.log(errors[0]);
// errors.forEach(error => { // cannot use foreach in an html collection
//     console.log(error);
// })


// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
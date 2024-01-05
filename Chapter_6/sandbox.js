// querySelector
// const para = document.querySelector('div.error'); // adding a dot '.' in front grabs whatever is pointed to
// that class tag (does not work for divs. for div u need to add 'div' in front of the dot). 
// in this case inside this html, its .error "this is an error message".
// a regular tag does not need a dot '.'.

// console.log(para);

// querySelectorAll
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error')

console.log(errors)
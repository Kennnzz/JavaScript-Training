// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'shun-li'];

let html = ``;

// people.forEach(function(person){
//     // create html template for each person
//     html += `<li style="color: purple">${person}</li>\n`
// }); // convert this to an arrow function

// arrow function version
people.forEach(person => {
    // create html template for each person
    html += `<li style="color: purple">${person}</li>\n`
}); // convert this to an arrow function


console.log(html)
ul.innerHTML = html // this code is basically the ul taking the html we created and putting it inside the ul
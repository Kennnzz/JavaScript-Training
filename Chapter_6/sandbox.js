const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk'); // change html attribute using javascript
link.innerText = 'TheNet Ninja Website';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success'); // changes class attribute from class to success in the inspect element
msg.setAttribute('style', 'color: green;'); // if tag does not exists, such as the color tag,
// does not matter because javascript will still create it
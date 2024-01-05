const para = document.querySelector('p');

// console.log(para.innerText)
// para.innerText = 'ninjas are awesome!'; // this += appends the text to the 'hello, world'. 
// an equals '=' overrides it

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML)
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>'; // += to append. = to overwrite

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

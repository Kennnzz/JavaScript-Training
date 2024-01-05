const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;'); // this overwrites the existing style of the title

console.log(title.style); // see all of the styles using this syntax
console.log(title.style.color);

title.style.margin = '50px'; // to add attributes, not overwrite, use this way
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = ''; // removes the margin style
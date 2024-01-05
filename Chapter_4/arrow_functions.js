// regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// arrow function
// const calcArea = radius => { // without parantheses parameter 'radius', this only works if its 1 parameter
//     // having 2 parameters means you need the parantheses, also having no parameter, you still need parentheses
//     return 3.14 * radius**2;
// };

/* remember: 1 parameter we can remove the parentheses
any more or any less we need them.
if returning someting small and simple, we can move it up to the next line
and remove the return keyword*/
// const calcArea = radius => 3.14 * radius**2; // an ever shorter return



// const area = calcArea(5);
// console.log('area is:', area);

// 1.
// const greet = function(){
//     return 'hello, world';
// };

// 2. 2 is a shorter return of 1.
// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// 1.
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products [i] + products [i] * tax;
//     }
//     return total;
// }

// 2. arrow function version of 1.
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products [i] + products [i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2))

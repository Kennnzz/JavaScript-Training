// break and continue

const scores = [50, 25, 0, 100, 20 ,10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue; // continue makes it so we basically skip whatever is in the argument
        // when u run this, 0 should not be logged into the console anymore
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break; // break keyword breaks you out of the loop. upon reaching 100, it does not do 20 and 10 anymore
    }
}

// switch statements
const grade = 'z';

// remeber, switches use strict equality (===) so putting in a number will not work.
switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade')
}

// use case instead of \/

// using if statements
// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'D'){
    
// } else if(grade === 'E'){

// } else {

// }
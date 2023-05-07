console.log('Loops Started');

// true or false 
if(false) {
    console.log('Condtion True');
} else {
    console.log('Condtion False');
}

//condtion checking

let x = [1, 4  , 10, "'string'" , 30, 50, 2, 7]
let stingFind = x.includes('string')
console.log('String find', stingFind);
console.log('Numbers = ', x);
console.log('length ', x.length);
letNewArr = x.forEach(arrayNum=>{
    //console.log('arrayNumber', arrayNum);
    let total = arrayNum -1
    console.log('New Number', total);
    //arrayNum.valueOf()
    console.log('Includes', arrayNum.includes('string'));

       
})
// if(x.length > 5) {
//     console.log('Array value is high');
// }

// if(letNewArr > 0){
//     console.log('new value');
// }

// else {
//     console.log('Array value is low');
// }
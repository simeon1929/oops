console.log('Loops Started');

// true or false 
if(false) {
    console.log('Condtion True');
} else {
    console.log('Condtion False');
}

//condtion checking

let arryX = [1, 4  , 10, 'string' , 30, 50, 2, 7]
console.log('Original Array', arryX);

let StringArray = [] // Empty String array for push from the main array
let numberArray = [] // Empty Number array for push from the main array
arryX.forEach(arrayElem=>{
    //console.log('ArrayDeails ', typeof(arrayElem));
    //console.log(index);
    if(typeof(arrayElem) === 'string') {
       StringArray.push(arrayElem)
    } else if (typeof(arrayElem) === 'number') {
        numberArray.push(arrayElem)
    } else {
        console.log('Wrong value');
    }  
})
numberArray.sort()
console.log('String Array', StringArray);
console.log('Number Array', numberArray.sort());

//Adding Two arrays
let finalArray = StringArray.concat(numberArray)
console.log(finalArray);

// Sort method

let sortNumber = [1, 5 , 3 , 6 , 8]

console.log('Before Sort array', sortNumber.sort()); // working single digit sort number 
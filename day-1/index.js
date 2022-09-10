const fatherName = 'John';  // with const you can't change the const value during the execution code
let   motherName = 'Mary';  // with let you are allowed to modify the value during the execution code
var  cousinName = 'Bob';    // var is old fashion approach for declaring variable, please use one of the previous options.

//variables in JS do not use data types
const age = 60;        // might be integer
const price = 155.60;  // might be decimal
const isBlue = true;   // might be boolean
const data = Date();   // is kind of new object

/*
    the new feature of ES6 is called array function    
*/  
const printFirstValue = (value, functionParameter)=>{
    console.log('printing the value using printFirstValue-> ', value);
    functionParameter(value);    
}

const printSecondValue = (value)=>{
    console.log('printing the first value using the printSecondValue-> ' , value);
}

const main = ()=>{
    console.log('Hello world');

    //functions in JS are objects, so you can pass it as a parameter
    printFirstValue(100, printSecondValue);
}

main();
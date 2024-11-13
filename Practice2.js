//passing one function as argument into another function
//1 Function with declaration
function cal(a,b,fn){
    return fn(a,b);
}
/*
function sum(a,b){
    return a+b;
}
*/
/*
const sum = function(a,b){
    return a+b;
}
*/
const sum = (a,b) => a+b    
const result = cal(4,5,sum)
console.log(`Calculate value is: ${result}`);

//2 Anonymous Function
const subtract = function (a,b,fn){
        return fn(a,b)
}

/*
function minus(a,b){
    return a-b;
}
*/
/*
const minus = function(a,b){
    return a-b;
}
*/
const minus = (a,b) => a-b    
const result1 = subtract(8,5,minus)
console.log(`Calculate value is: ${result1}`);

//Arrow Function
const multiply = (a,b,fn) =>{
    return fn(a,b);
}
/*
function mul(a,b){
    return a*b;
}
*/
/*
const mul = function(a,b){
    return a*b;
}
*/
const mul = (a,b) => a*b    
const result2 = multiply(2,5,mul)
console.log(`Calculate value is: ${result2}`);

















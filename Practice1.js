//Assign a function to a variable

//1 Function with declaration
const sum = function calculate(a,b){
    return a+b;
}

const result = sum(2,3);
console.log(`The result is : ${result}`);

//2 Anonymous Function

const sum1 = function (a,b){
    return a+b;
}
const result1 = sum(14,2);
console.log(`The result is : ${result1}`);

//3 Arrow Function

const sum2 = (a,b) => a+b
const result2 = sum2(4,4);
console.log(`The result is : ${result2}`);




//High Order function
//passinp one function as an argument into another function
function calculate(a,b,fn){
    return fn(a,b);
}

const sum = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
const mul = (a,b)=>{
    return a*b;
}
const div = (a,b)=>{
    return a/b;
}

const sumresult = calculate(2,4,sum);
const subresult = calculate(2,4,sub);
const mulresult = calculate(2,4,mul);
const divresult = calculate(2,4,div);
console.log(`Calculate value is: ${sumresult}`);
console.log(`Calculate value is: ${subresult}`);
console.log(`Calculate value is: ${mulresult}`);
console.log(`Calculate value is: ${divresult}`);




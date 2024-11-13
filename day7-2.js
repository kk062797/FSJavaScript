//you can return a function from a function

function output(){
    return function sum(a,b){
        let c = a+b;
        console.log(`Sum result is: ${c}`);
    }
}

const result = output();
result(3,6);
console.log(result);
console.log(`The result is :${result}`);



























//Debugging

function calculate(a,b,f1){
    console.log(`First line of calculte`);
    console.log(`I am inside calculate function`);
    return f1(a,b);
}

function sum(a,b){
    console.log(`I am inside sum function`);
    console.log(`Last line of sum`);
    return a+b;
}

function sub(a,b){
    console.log(`I am inside sub function`);
    return a-b;
}

const output = calculate(4,2,sum);

sub(4,2);
console.log(output);
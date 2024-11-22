//ForEach
/*
const transaction = [35,-42,87,-56,73,-54,100];
const credit = [];
const debit = [];
transaction.forEach((value,index,array) =>{
    if (value > 0){
        credit.push(value);
        console.log(`Credit ${value} at index pos ${index} and array is ${array}`);
    }else if (value < 0){
        debit.push(value)
        console.log(`Debit ${value} at index pos ${index} and array is ${array}`);
    }
})

console.log(credit);
console.log(debit);
*/

//Map
/*
const transaction = [35,-42,87,-56,73,-54,100];

const output = transaction.map((value,index,array) =>{
    if (value > 0){
        return `Credit ${value} at index pos ${index} and array is ${array}`;
    }else if (value < 0){
        return `Debit ${value} at index pos ${index} and array is ${array}`;
    }
})

console.log(output);

const num = [1,2,3,4,5,6];
const multiples = num.map((value)=>value * 5);
console.log(multiples);
*/

//Filter
/*
const num = [23,-5,-43,45,87]
const positiveIntegers = num.filter((value)=>{
    if(value >0){
        return value;
    }
})
console.log(positiveIntegers);
*/
/*
//Reduce
const num = [23,-64,76,-25,56,78];
const output = num.reduce((pv,cv,ci,arr)=>{
    console.log(`Previous Value: ${pv}, Current Value: ${cv}, Current Index: ${ci} and Array: ${arr}`);
    return pv+=cv;
    
})
console.log(output);
*/
const Fname = "Akhil Kumar Jain"; //akj

const output = Fname.split(" ").map((val)=>val.toLowerCase().at(0)).join("");
console.log(output);
/*
function f1(a,f2){
    f2(a);
}
function cal(amt){
    if (amt > 0){
        console.log(`Credit Amount: ${amt}`);
    } else if(amt<0){
        console.log(`Debit Amount: ${amt}`);
    }
}
f1(34, cal);
f1(-45, cal);
*/
/*
function calculateTransaction(){
    for(const amt of transaction){
        if(amt>0){
            console.log(`Credit Amount: ${amt}`);
        }else if(amt<0){
            console.log(`Debit Amount: ${amt}`);
        }
    }
}

calculateTransaction(); 
*/
/*
//Call back
function f1(a,f2){
    f2(a);
    console.log(a);
}
const func2 = (a) =>{
    console.log(a+10);
}
f1(5,func2);
*/
//forEach
/*
const transactions = [34,-10,45,67,83,-78];
transactions.forEach((value)=>{
    if(value>0){
        console.log(`Credit Amount ${value}`);
    }
        else{
            console.log(`Debit Amount ${value}`);
        }
})
*/
//Map
/*
const investedAmountPerMonth = [1000,1500,2000,2500,3000,3500,5000]
const oneYearReturn = investedAmountPerMonth.map((value)=>{
    let percentReturn = 0.2;
    let amountInvestedinYear = value*12;
    value = amountInvestedinYear + (amountInvestedinYear*percentReturn)
    return value;
})
console.log(oneYearReturn);
*/
//Filter
/*
const numbers = [145,-66,186,-23,-32,192];
const creditAmount = numbers.filter((value)=>{
    if(value > 0){
        return true;
    }else false;
})
console.log(creditAmount);
*/
//Reduce
/*
const bankTransactions = [134,-60,145,-40,183,-48];
const balanceAmount = bankTransactions.reduce((pv,cv)=>{
    let sum = pv+cv;
    return sum;
})
console.log(balanceAmount);
*/

//Problem: Count the number empolyees having middle name in their name
/*
const employee = ["Rajesh Kumar Singh","Ayan Mukherjee","Bharath Kumar Chowdhary","Neha Saxena","Aarti Singh Rajput"];
const count = employee.map((value)=>{
    if(value.split(" ").length === 3){
        return value;
    }
}).filter((value)=>{
    if(value != undefined){
        return value;
    }
}).reduce((pv,value)=>{
    return pv+1;
},0)
console.log(count);
*/

//Sorting Strings
/*
//Ascending order
const names = ["Pratyusha","Akhil","Kanishk","Zyan","Kanishk","Ritesh","Neha","Aashima","Geetha","Zain","Saloni"]
//names.sort();
//console.log(names);
names.sort((a,b)=>{
    if(a >=b){
        return 1;
    }else{
        return -1;
    }
})
console.log(names);
//Decending Order
names.sort((a,b)=>{
    if(a >=b){
        return -1;
    }else{
        return 1;
    }
})
console.log(names);
*/

//Sorting Numbers

const num = [23,54,76,76,-2,34]

//ascending order
/*
num.sort((a,b)=>{
    if(a >=b){
        return 1;
    }else{
        return -1;
    }
})
console.log(num);
*/
num.sort((a,b)=> a -b);
console.log(num);

//Descending order

num.sort((a,b)=> b -a);
console.log(num);

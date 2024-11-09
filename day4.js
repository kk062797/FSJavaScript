/*
//Comparison Operation
let n1 = 5;
let n2 = 5;

let isGreater = n1 >= n2;

console.log(isGreater);
console.log(typeof isGreater);
*/
/*
//logical Operation

let age = 19;
let gender = 'F';

if((age == 18) || (gender == 'M')){
    console.log("Boy is young");
}else{
    console.log("Please provide correct info");
}

let isValid = true;
console.log(!isValid);
*/
/*
Equality operator
1. = -> Assignment
2. == loose comparison -> JS will convert the datatype if possible
3. === strict comparison

let fName = "Akhil"; //Assignment

let n1 = 25;
let n2 = '25';
// loose comparison
if(n1==n2){
    console.log("Equal");
}else{
    console.log("Not Equal");
}
// strict comparison
if(n1===n2){
    console.log("Equal");
}else{
    console.log("Not Equal");
}
*/
/*
//Strings

let fName = "Kanishk";
console.log(fName);

let lName = "Kumar";
console.log( fName+ " "+ lName);

let age = '27';
 let city = 'Patna';

let bio = "i work at MNC in bangalore\n\
my job shift timings is 3 pm to 12 am"

let newbio = `i work at MNC in bangalore
my job shift timings is 3 pm to 12 am`
let my = `My Name is: ${fName} ${lName}. I am from: ${city} my age is : ${age}  ${newbio}`

console.log(my);
*/

//Arrays
let sub = ["Maths","Physics","Chemistry"];
let a = ["Kanishk", "Kumar", 23,54,undefined,null,sub];
a[9] = "Kakku";
console.log(a);
console.log(a.length);
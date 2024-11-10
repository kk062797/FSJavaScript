/*
//Conditional Statements if-else

let age = 65;

if((age >0) && (age<18)){
    console.log("Teen");
}else if((age>=18) && (age <60)){
    console.log("Adult");
}else if (age>=60){
    console.log("Senior Citizen");
}else{
    console.log("Invalid Input");
}
*/
/*
// Switch Statement

let browser = "opera";

switch(browser){
    case "chrome":{
        console.log("Chrome Browser");
        break;
    }
    case "firefox":{
        console.log("Firefox Browser");
        break;
    }
    case "edge":{
        console.log("Edge Browser");
        break;
    }
    default:{
        console.log("Please provide valid browser name");
    }
}
*/

// Terenary operator
/*
let age = 25;
let ageGroup;
//age<=18? console.log("Teen") : console.log("Adult");
ageGroup = age<=18? "Teen" : "Adult";
console.log(ageGroup)
*/
/*
//loops 
// for loop
for(let i =0;i<5;i++){
    console.log("Kakku");
}
//while loop
let j = 0;
while (j <5){
    console.log("Kanishk");
    j++;
}
*/

let marks = [94,74,75,98,46];

//using for loop

for(let i = 0; i<marks.length;i++){
    console.log(marks[i]);
}

//using for of loop

for(const i of marks){
    console.log(i);
}









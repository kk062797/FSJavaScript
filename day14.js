//find

const fullName = ["Akhil Jain","Rohit Chauhan","Pratyusha Banerjee","Rohit Chowdhary","Ritesh Pandey"];

//Search the array and find the matching element where first name is Rohit
/*
const output = fullName.find((value)=>{
    if(value.split(" ").at(0) === "Rohit"){
        return true;
    }else{
        return false;
    }
})
console.log(output);
*/

//findIndex

//Search the array and find the matching element's index where first name is Rohit

const outputIndex = fullName.findIndex((value)=>{
    if(value.split(" ").at(0) === "Rohit"){
        return true;
    }else{
        return false;
    }
})
console.log(outputIndex);
// If we want to remove the particular person from an Array
fullName.splice(outputIndex,1);
console.log(fullName);
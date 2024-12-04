//common js modules
/*
let Fname = "Kanishk";

function login(){
    console.log("Login application");
}

const f1 = function(){
    let c = 2+5;
    console.log(c);
}

const marks = [34,65,26];

//export 1 or multiple items
module.exports = {login,f1,Fname};
*/
/*
console.log("I am in module");

exports.Fname = "Kanishk";

exports.login = function(){
    console.log("Login application");
}

const marks = [34,65,26];

exports.addMarks = function(subMarks){
        marks.push(subMarks);
}

exports.printMarks = function(){
    console.log(marks)
}
    */

//ES Modules

function login(){
    console.log("Login application");
}

const marks = [34,65,26];

export{login,marks};

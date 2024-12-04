
let salary = 67

const login = function (){
    console.log("Logged In.....");
}
const logout = function(){
    console.log("I am logging out....");
}
const marks = [34,65,26];

// common Js module export
/*
exports.logout = function(){
    console.log("I am logging out....");
}

exports.marks = [34,65,26];
*/
// export 1 item
//module.exports = salary;

//export multiple item
//module.exports ={login,salary};

// ES Module
//export{login,marks,logout,salary};
//export{login,marks,logout,salary as mySalary }; //exporting using alias name
export default login;
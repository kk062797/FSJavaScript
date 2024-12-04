// Common JS module import
//const {salary:mySalary} = require ("./day20.js"); -- alias
//const {marks,logout} = require ("./day20.js");

//ES module import
/*
import { login,marks,logout } from "./day20.js";
login();
console.log(marks);
logout();
*/
/*
import * as obj from "./day20.js";
obj.login();
console.log(obj.marks);
obj.logout();
*/
/*
import{salary as mySalary,login as myLogin,logout as myLogout} from "./day20.js"; -- alias name
myLogin();
console.log(mySalary);
myLogout();
*/
/*
import{mySalary as myPersonalsalary} from "./day20.js"; 
console.log(myPersonalsalary);
*/
import login from "./day20.js";
login();

/*
const {login} = require("./day19.js");
const {f1} = require("./day19.js");
const {Fname} = require("./day19.js");
const output = require("./day19.js");
*/
//const {login,Fname,addMarks,printMarks} = require("./day19.js");
/*
console.log(output);
console.log(output.Fname);
output.f1();
output.login();

console.log(Fname);
login();
f1();
printMarks();
addMarks(45);
printMarks();
*/

//ES module importing
import { login,marks } from "./day19.js";
login();
console.log(marks);
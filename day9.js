//Strings

const myName = 'Kanishk';
const myName1 = "Kanishk";
const myName2 = `Kanishk`;
const myName3 = new String("Kanishk");

//length of String
//console.log(myName.length);
//Character at index positions
/*
console.log(myName.at(-2));
console.log(myName.charAt(-2));
*/
/*
// Return the ASCII value of a particular character at index
console.log(`O/P(1): ${myName.charCodeAt(2)}`);
console.log(`O/P(2): ${myName.codePointAt(2)}`);
*/
/*
//Concatenation
let FN = 'Kanishk';
let LN = 'Kumar';

let FullName = (FN + LN);
console.log(FullName);
console.log(FN.concat(LN));
*/
//Searching Operation
/*
let statement = `My name is Kanishk. I work in MNC and I am studying JavaScript BootCamp in Podtest`;
let isExists = statement.includes("Podtest");
let isExists1 = statement.startsWith("teach");
let isExists2 = statement.endsWith("Podtest");
console.log(`Value exists in string: ${isExists}`);
console.log(`Value exists in string: ${isExists1}`);
console.log(`Value exists in string: ${isExists2}`);
*/
/*
//getting index position based on substring
let statement = `My name is Kanishk. Kanishk work in MNC and I am studying JavaScript BootCamp in Podtest Kanishk `;
console.log(`O/P is: ${statement.indexOf('Kanishk',12)}`); //search starts fron 0 index
console.log(`O/P is: ${statement.lastIndexOf('Kanishk',19)}`); //search starts from last index
*/
/*
//common Operations
let statement = `My name is Kanishk. I work in MNC`
console.log(statement.toLowerCase());
console.log(statement.toUpperCase());

//Trim
let FName = "    Kanishk    ";
console.log(`O/P(1) ${FName.trim()}`);
console.log(`O/P(1) ${FName.trimEnd()}`);
console.log(`O/P(1) ${FName.trimStart()}`);
*/

//console.log(myName.repeat(100));

//Replace
/*
let statement = `My name is Kanishk. I work in MNC Kanishk`
console.log(statement.replace("Kanishk","Kakku"));
console.log(statement.replaceAll("Kanishk","Kakku"));
*/
//Substring
let statement = `My name is Kanishk. I work in MNC`
console.log(statement.substring(11,19));










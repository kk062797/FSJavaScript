
let a = 90;  //block scope


function f1(){
    //a = 90  //implicit global
    //global.a = 90 //explicit global
    //var a =90; //function scope
    console.log(`Function Scope ${a}`);
    if("Kanishk" === "Kanishk"){
        console.log(`Block Scope ${a}`);
    }

}

f1();
console.log(`Global Scope ${a}`);
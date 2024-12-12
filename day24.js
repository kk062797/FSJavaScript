
/*
fetch(url) //Promise  Pending --> settled(Fullfilled,Rejected)
.then((response) =>{console.log(response);}) // Resolved
.catch((response) =>{console.log(response);}) // Rejected
.finally(() =>{console.log("Operation Completed")})
*/
/*
//Creating our own promise
const getcartId = function (){
    return new Promise((resolved,rejected) =>{
                        if(Math.random()>0.5){
                            setTimeout(
                                () =>{resolved({cartId: "cart001"})}, 
                                1000)
                        }else{
                            setTimeout(
                                () =>{rejected("error occured!")}, 
                                1000)
                            ;
                        }

                    }
                )
}
getcartId()
.then((res) =>{
    console.log(`promise got resolved: ${res.cartId}`);
})
.catch((res) =>{
    console.log(`promise got rejected: ${res}`);
})
.finally(() =>{
    console.log("Finally Executed....");
})
    */

// AsyncAwait
/*
const getcartId = function (){
    return new Promise((resolved,rejected) =>{
                        if(Math.random()>0.5){
                            setTimeout(
                                () =>{resolved({cartId: "cart001"})}, 
                                1000)
                        }else{
                            setTimeout(
                                () =>{rejected("error occured!")}, 
                                1000)
                            ;
                        }

                    }
                )
}

async function getOutput() {
    try{
        const res = await getcartId();
        console.log(`response is: ${res.cartId}`); 
    }
    catch(err){
        console.log(`error is: ${err}`)
    }
}

getOutput();
*/

//Javascript: Destructuring  & spread operator  : Arrays & Objects

const names = ["Akhil", "Anant", "Harsh", "Hasan"];

/*
const a = names[0]
const b = names[1]
const c = names[2]
const d = names[3]
*/

const [a, b, c, d, e] = ["Akhil", "Anant", "Harsh", "Hasan"]
//console.log(e);


const employee = {
            name: "Anant",
            age: 90,
            city: "Ahmedabad",
            gender: "M"
        }

//const {city, name} = employee;
//console.log(city);

function f1({name1, age1}) {
    console.log(name1);
    console.log(age1);
}

//f1(employee);

function f2([a,b]) {
    console.log(a);
    console.log(b);

}

//f2([3,4,5,6]);

//spread operator   ...  //it disintegrates
const num1 = [1,2,3,4];

const num2 = [5,6,7,8];  
/*

5
6
7
8

*/

const num3 = [...num1, ...num2];

// [1,2,3,4,5,6,7,8 ]

//console.log(num3);


const employee1 = {
    name: "Anant",
    age: 90,
    city: "Ahmedabad",
    gender: "M"
}

const man = {
    bankname: "PNB",
    comapanyName: "xyz",
    ...employee1
}

console.log(man);
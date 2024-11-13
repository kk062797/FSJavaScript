//return a function from a function
//1 Function with declaration
function sum(){
    /*
    return function add(a,b){
        let c = a+b;
        console.log(`Calculate value is : ${c}`);
    }
        */
    /*
    return function (a,b){
        let c = a+b;
        console.log(`Calculate value is : ${c}`);
    }
        */

    return (a,b) =>{
        let c = a+b;
        console.log(`Calculate value is : ${c}`);
    }
}

const result = sum();
result(2,3);

//2 Anonymous Function

    const subtract =function (){
/*
    return function minus(a,b){
        let c = a-b;
        console.log(`Calculate value is : ${c}`);
    }
 */
     /*   
        return function(a,b){
            let c = a-b;
        console.log(`Calculate value is : ${c}`);
        }
    */
        return (a,b)=>{
            let c = a-b;
        console.log(`Calculate value is : ${c}`);
        }
}

const subtract1 = subtract();
subtract1(4,1);
//3 Arrow Function

const multiply = () =>{
    /*
    return function mul(a,b){
        let c = a*b;
        console.log(`Calculate value is : ${c}`);
    }
        */
       /*
       return function (a,b){
        let c = a*b;
        console.log(`Calculate value is : ${c}`);
       }
        */
       return (a,b) =>{
        let c = a*b;
        console.log(`Calculate value is : ${c}`);
       }
}

const multiply1 = multiply();
multiply1(4,5);






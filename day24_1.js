//Creating our own promise
let num = 25;
/*
const isEven = function (){
    return new Promise((resolved,rejected) =>{
                        if(num % 2 === 0){
                            setTimeout(
                                () =>{resolved("is even")}, 
                                1000)
                        }else{
                            setTimeout(
                                () =>{rejected("its odd")}, 
                                1000)
                            ;
                        }

                    }
                )
}
isEven()
.then((res) =>{
    console.log(`promise got resolved: ${res}`);
})
.catch((res) =>{
    console.log(`promise got rejected: ${res}`);
})
.finally(() =>{
    console.log("Finally Executed....");
})
*/

// AsyncAwait

const isOdd = function (){
    return new Promise((resolved,rejected) =>{
                        if(num % 2 != 0){
                            setTimeout(
                                () =>{resolved("is odd")}, 
                                1000)
                        }else{
                            setTimeout(
                                () =>{rejected("its even")}, 
                                1000)
                            ;
                        }

                    }
                )
}

async function getOutput() {
    try{
        const res = await isOdd();
        console.log(`response is: ${res}`); 
    }
    catch(err){
        console.log(`error is: ${err}`)
    }
}

getOutput();
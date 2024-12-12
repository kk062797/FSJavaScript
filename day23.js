// Handle promises using then

const url = "https://reqres.in/api/users/2"
/*
console.log("Start");
fetch(url)
//.then(res => console.log(res))
.then(res => res.json())
.then(data => console.log(data))
.finally(() => console.log("End"));
*/

// Handle promises using await

console.log("Start");
async function getOutput() {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);
}
getOutput();
console.log("Process Completed")
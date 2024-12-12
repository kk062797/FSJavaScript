const url = "https://reqres.in/api/users/2"
console.log("Start");
fetch(url)
//.then(res => console.log(res))
.then(res => res.json())
.then(data => console.log(data))
.finally(() => console.log("End"));
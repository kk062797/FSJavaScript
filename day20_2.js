const orgDetails = {
                        orgName : "BOSCH",
                        orgLocation : "Bangalore"
                    }
const emp = {
                age: 27,
                name: "Kanishk",
                login: function(){
                    console.log("Logged In.....");
                },
                marks: [34,50,43,24],
                category: undefined,
                organation: orgDetails
            }
//convert JS object into JSON
const empJSON = JSON.stringify(emp);
const jsObj = JSON.parse(empJSON);


//export {emp};
/*
console.log(emp["name"]);
console.log(emp.age);
console.log(emp.marks);
emp.marks.push(42);
console.log(emp.marks);
emp.login();
*/
//adding a new key to the object
emp.address = "Patna";
emp.logout = function(){
    console.log("Logged Out....." );
}
//emp.category = "Male";


console.log(emp);
console.log(empJSON);
console.log(jsObj);
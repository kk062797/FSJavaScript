/*
const Person = function(firstName){

}
const p1 = Person("Kakku");
console.log(p1);
*/
const Person = function(firstName){
        this.firstName = firstName;
}

Person.prototype.calAge = function(birthYear){
    return 2024 - birthYear;
}

Person.prototype.lastName = "Kumar";
const p2 = new Person("Kanishk");

console.log(Person.prototype);
console.log(p2.__proto__);  //p2.__proto__ = Person.prototype
console.log(p2.__proto__.__proto__); 
/*
console.log(p2);
console.log(p2.calAge(1997));
console.log(Person.prototype);
*/
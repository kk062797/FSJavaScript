//constructor
const Person = function(firstName){
    this.firstName = firstName;
}

Person.prototype.calAge = function(birthYear){
    return 2024 - birthYear;
}
Person.gender = 'M';

const p1 = new Person("Kakku");
console.log(Person);

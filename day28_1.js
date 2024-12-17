class Person{

    constructor(firstName){
        this.firstName = firstName;
    }

    calculateAge(birthYear){
        return 2024 - birthYear;
    }

    static gender = 'M';
}

const p1 = new Person("Kakku");
//console.log(p1);
//console.log(p1.calculateAge(1997));
console.log(Person);
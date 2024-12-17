class Employee{
    firstName;
    lastName;

    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }

    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName;
    }
}

const emp1 = new Employee("Kanishk","Kumar");
console.log(emp1.firstName);
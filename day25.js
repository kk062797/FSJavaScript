class Employee{
    //instance Variable
    #nickName; // these are now private
    firstName;
    lastName;

    static middleName //static variable

    //constructors
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Methods
    setFirstName(firstName){
        this.firstName =firstName
    }

    getFirstName(){
        return this.firstName;
    }

    getlastName(){
        return this.lastName;
    }

    generateFullName(){
        //local variable
        fullName = `${this.firstName} surname`
        return fullName;
    }
}

const emp1 = new Employee("Kanishk","Sahu");
const emp2 = new Employee
Employee.middleName = "Kumar";
//console.log(emp1.#nickName)
//console.log(emp1);
//console.log(Employee.middleName);
//console.log(emp2.middleName);

/*
const kanishk = new Employee("Kanishk","Kumar");
//kanishk.setFirstName("Kanishk");
kanishk.firstName
console.log(kanishk.getFirstName(),kanishk.getlastName());
*/
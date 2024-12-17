import {Animal} from './day26_1.js'
class Dog extends Animal{
    place;

    constructor(place, name,type){
        super(name,type);
        this.place = place;

    }

    eat(){
        console.log(`Dog is eating at ${this.place}`);
    }

    walk(){
        console.log(`Dog ${this.name} is walking`);
    }
 }

const tom = new Dog("Bangalore","Tommy","GermanShepherd");
tom.walk();
tom.eat();
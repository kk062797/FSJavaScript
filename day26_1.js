class Animal{
    name;
    #type;

    constructor(name,type){
        this.name = name;
        this.#type = type;
    }

    walk(){
        console.log(`Animal type of ${this.#type} breed, name ${this.name} is walking`);
    }
}

export {Animal};
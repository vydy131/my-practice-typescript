class Dog {
    _name : string;
    constructor ( name : string = 'dog'){
        this._name = name
    }
    sayHello() : string {
        return `Hello, I'm ${this._name}`
    }

}

class Fish {
    _name : string;
    constructor ( name : string = 'fish'){
        this._name = name
    }
    dive(howDeep : number) : string {
        return `I'm at the depth of ${howDeep} meters`
    }
}

type Pet = Dog | Fish

function talkToPet(pet : any) : string {
    if (pet instanceof Dog) { 
        return pet.sayHello();
    } 
    else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry.';
    }
    else {return 'error: wrong type of variable'}
}

let pet1 : Pet = new Dog()
let pet2 : Pet = new Fish()
let pet3 : undefined
let pet4

console.log(talkToPet(pet1))
console.log(talkToPet(pet2))
console.log(talkToPet(pet3))
console.log(talkToPet(pet4))
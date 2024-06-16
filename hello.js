"use strict";
class Dog {
    constructor(name = 'dog') {
        this._name = name;
    }
    sayHello() {
        return `Hello, I'm ${this._name}`;
    }
}
class Fish {
    constructor(name = 'fish') {
        this._name = name;
    }
    dive(howDeep) {
        return `I'm at the depth of ${howDeep} meters`;
    }
}
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry.';
    }
    else {
        return 'error: wrong type of variable';
    }
}
let pet1 = new Dog();
let pet2 = new Fish();
let pet3;
let pet4;
console.log(talkToPet(pet1));
console.log(talkToPet(pet2));
console.log(talkToPet(pet3));
console.log(talkToPet(pet4));

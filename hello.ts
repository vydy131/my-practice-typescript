class Man {
    _name : string
    _age : number
    static _quantity : number = 0

    age(numb ?: number) : number {
        if (numb !== undefined){
            this._age = numb
        }
        return this._age;
    }

    name(str ?: string) : string {
        if (str !== undefined){
            this._name = str
        }
        return this._name;
    }

    constructor(name: string = '', age: number = 0){
        this._name = name;
        this._age = age;
        Man._quantity++
    }
}

class Pupil extends Man {
    _school : string

    constructor(name: string = '', age: number = 0, school : string = ''){
        super(name, age)
        this._school = school
    }

    school(str ?: string) : string {
        if (str !== undefined){
            this._school = str
        }
        return this._school;
    }

}

const someone : Man = new Man('Somebody', 10)
console.log(someone)
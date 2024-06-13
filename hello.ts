class Man {
    _name : string
    _age : number

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
    }
}
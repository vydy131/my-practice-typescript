interface MyObject {
    [key: string]:number | undefined | boolean;
    a: number;
    b: number;
    c: number;
    x?: number;
    z?: boolean;
}

let obj: MyObject = {a: 1, b:2, z:false, d:4, c: 3, "123":123};
let res: number = 0;

for (let key in obj) {
    let elem = obj[key];
    if (elem !== undefined && typeof elem !== 'boolean'){
        res += elem;}
    console.log(key, ":\t", obj[key])
}

console.log("Result is ", res);

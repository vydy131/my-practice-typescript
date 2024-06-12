let object = {year : 2024, month : 'june', day : 12}
console.log(object.month)

object.month = 'april'
console.log(object.month)


let str : string = 12+''
let numb : number = +'12'



let result : number = 0;

for (let i : number = 0; i < 100; i++) {
	result += i;
}

console.log(result);


let arr : number[] = [1, 2, 3, 4, 5];
let res : number = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res);

// let array:number[] = [1,2,3,4]           // there is a mistake
// let arr:Array<number> = [1,2,3,4]
// let result : boolean = true
// if (arr != array)       
//     result = false
// console.log(result)
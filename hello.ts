// let func = function(num1: number, num2: number): number {
// 	return num1 + num2;
// }

let func = (num1: number, num2: number) : number => num1+num2

// let arr = [1, 2, 3];
// let res = arr.map(num => num ** 2);
// console.log(res);

let arr : number[] = [1,2,3]
let res : number[] = arr.map(num => num **2)
console.log(res)


// type Func = (num: number) => number;

// function make(arr: number[], func: Func): number {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += func(elem);
// 	}
	
// 	return sum;
// }

// let res: number = make([1, 2, 3], function(num): number {
// 	return num ** 2;
// });

// console.log(res);

// type Func = (num: number) => number;

// function make(arr: number[], func: Func): number[] {
// 	return arr.map(function(elem: number) {
// 		return func(elem);
// 	});
// }

// let res: number[] = make([1, 2, 3], function(num: number): number {
// 	return num ** 2;
// });

// console.log(res);
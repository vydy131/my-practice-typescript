// let user: [string, number, boolean?];

// user = ['vova', 31]
// console.log(user)

// user[2] = false
// console.log(user)

// let user_r: readonly [string, number]

// let array_a : any[] = ['vova', 31, 'qwerty', false, true, undefined]
// let array_ns : (number | string)[] = ['vova', 31, 'qwerty', 42]

// console.log(array_a)
// console.log(array_ns)

// interface my_inter {
//     [key : string] : number | undefined | string | boolean
// }

// let time: [number, number, number] = [12, 59, 59];
// let [hour, minute, second] = time
// console.log(hour, minute, second)

let arr1: number[] = [1,2,3,4]
let arr2: number[] = [...arr1,1,2,3,4]
let arr3: (number|number[])[] = [arr1,1,2,3,4]

/*[ 1, 2, 3, 4 ]
[
  1, 2, 3, 4,
  1, 2, 3, 4
]
[ [ 1, 2, 3, 4 ], 1, 2, 3, 4 ]*/

console.log(arr1)
console.log(arr2)
console.log(arr3)
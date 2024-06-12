let user: [string, number, boolean?];

user = ['vova', 31]
console.log(user)

user[2] = false
console.log(user)

let user_r: readonly [string, number]

let array_a : any[] = ['vova', 31, 'qwerty', false, true, undefined]
let array_ns : (number | string)[] = ['vova', 31, 'qwerty', 42]

console.log(array_a)
console.log(array_ns)
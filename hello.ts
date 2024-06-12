
function sum(array : number[]):number{
    let res : number = 0
    for (let num of array){
        res+=num
    }
    return res
}

let array : number[] = [1,3,4,5]
console.log(array, ' = ', sum(array))

let nn : number | null;
let nsb : number | string | boolean;
let aaa : any
let vvv : void

type nu = null | undefined
type bnu = boolean | nu

type stat_type = 'error' | 'warning' | 'success'
let prog_stat : stat_type = 'warning'
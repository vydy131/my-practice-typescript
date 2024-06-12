
function sum(array : number[]):number{
    let res : number = 0
    for (let num of array){
        res+=num
    }
    return res
}

let array : number[] = [1,3,4,5]
console.log(array, ' = ', sum(array))
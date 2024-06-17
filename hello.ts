interface User{
    name : string
    role : UserRole
}

enum UserRole{
    Admin = 'administrator',
    Mgr = 'manager'
}

const loadUser = <Type> () : Type => JSON.parse(`{
    "name" : "john", 
    "role" : "administrator"}`)

const user : User = loadUser()

switch (user.role){
    case UserRole.Admin : console.log(UserRole.Admin); break
    case UserRole.Mgr : console.log(UserRole.Mgr); break
}


const outerFunc = (someValue : number) => 
    (multiplier : number) => someValue * multiplier

// = (multiplier : number) => 10 * multiplier
const innerFunc = outerFunc(10)

let result = innerFunc(7)

console.log(result)
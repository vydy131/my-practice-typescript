"use strict";
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "administrator";
    UserRole["Mgr"] = "manager";
})(UserRole || (UserRole = {}));
const loadUser = () => JSON.parse(`{
    "name" : "john", 
    "role" : "administrator"}`);
const user = loadUser();
switch (user.role) {
    case UserRole.Admin:
        console.log(UserRole.Admin);
        break;
    case UserRole.Mgr:
        console.log(UserRole.Mgr);
        break;
}
const outerFunc = (someValue) => (multiplier) => someValue * multiplier;
// = (multiplier : number) => 10 * multiplier
const innerFunc = outerFunc(10);
let result = innerFunc(7);
console.log(result);

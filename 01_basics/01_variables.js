const accountId = 144553;
let accountEmail = "Hc@mail.com";
var accountPass = "12345";
accountCity = "Indore";
let accountState;
// Not allowed in js We can't change the value of Const // It must be constatnt
// accountId=144557;

console.log(accountId);
accountEmail = "Ak@email.com";
accountPass = "12333";
accountCity = "jaipur";

/* 
prefer not to use var
because issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);
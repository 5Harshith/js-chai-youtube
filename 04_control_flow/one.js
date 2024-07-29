//if statement 
// if(condition){
//     //true 
// }
// if(condition){
//     //true
// }else{
//     //this will run
// }
// nullish coalescing operator (??) : null undefined
// his is used to check the value in database if the db returnbs null or empty then the which has value will be added 
let vall;
// vall =500 ?? 1 // it will take 1st value only
vall =null ?? 1 // 1st value is numm so it takes next value same vall =undefine ?? 10
// it is used when a error or null comes it will add some value to it

console.log(vall)

//terniary oerators
// condition ? true :false

const userloggedIn= false
userloggedIn ? console.log("welcome"):console.log("please log in");

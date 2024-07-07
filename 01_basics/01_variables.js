const accountId =12344;
let accountEmail ="hk@gmail.com";
var accountPassword ="1232";
accountcity="mangalore";
let accountstate ;
// const accountactive;  we can not declare const without assigning it 

// accountId =8888; // we can use again it has already declared

/*
perfer not to use var 
because of issue in block scope and function scope
*/

accountEmail ="pK@gmail.com";
accountPassword ="1999";
accountcity="Bangalore";
console.table([accountId,accountEmail,accountPassword,accountcity,accountstate]);

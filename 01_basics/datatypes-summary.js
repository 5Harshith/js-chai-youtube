// #primitive
// null is not zero it is emplty value 
// totla 7 are => string ,Number ,Boolearn,null ,undifined,symbal ,BigInt

// Refernce type and # non primitive
// it allowcate refernce in the memory
//=> array,object ,function
/*
Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for String).
Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.
A primitive type has always a value, while non-primitive types can be null.
A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.
*/
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id);
console.log(anotherid === id) // retutn type in symbale is different

// Array, Object ,Function => it return object function
const frinds =["jabeer","akhil","samith"];
const MyObj ={
    name:"shashank",
    gender :"female"
}
console.log("array");
const myfunction = function(){
  console.log("Hello World")
}
myfunction()
console.log(typeof frinds)
// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++ stack and heap memory in js +++++++++++++++++++++++++++++

// stack will be used in (primitive )
// heap will be used in (Non-primitive )
// Immediately invoked Function Expressions(iife)
//() function defination () function call ,named  iife
(function chai(){
    console.log("chai ready")
})();
// we need to add ; to end the first iife otherwise it will give error,unknown iffe if it has no name
((type)=>{
    console.log(`${type} chai ready`)
})("lime ");


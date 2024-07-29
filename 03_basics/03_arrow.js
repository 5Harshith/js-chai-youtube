const user={
    username:"harshith",
    price :200,
    message:function print(){
        console.log(`price is :${this.price}`);
        console.log(this)//current context user
    }
}
user.message()
//console.log(this) empty {} object in node if u print in window console it will refer to windows object.

// same thing we will try in function
function chai(){
    const chainame="balckchai"
    console.log(this.chainame);
}
chai() // it will print undefined it will not work 

// arrow function assign to variable and remove function annd add => arrow
const chaiOrder = () =>{
    const chainame="balckchai"
    console.log(this.chainame);
}
chaiOrder() // undefined so both the function will not work this word

    /* basic syntax of arrow function
    ()=>{

        } 
        
    */
//another mwthod in arrow function is Implecit return

    const add =(n1,n2)=>(n1+n2)
    console.log(add(100,6));
// Note if you use { } then we need to write retutn key word (explicite return)
// if we use( ) then no need to write retutn key word

const arr =[20,24,56]
arr.forEach((e)=>{
    if(e === 20){
        console.log("value  found")
        return
    }
 
    
})
console.log(arr)
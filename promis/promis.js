//create a promise
const promiseOne =new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("Async task 1")
        //we need to call resolve
        resolve()
    },1000)
})
//.then will takse the resolve 
promiseOne.then(function(){
    console.log("Async Result 1")
    // setTimeout(function(){
    //     console.log("Async Result 1")
    // },1000)
})

//method 2 of creating promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asunc task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("result Async 2")
})

//thered ppromise
//it is taking data from netowrk 
const  promisethree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"chai",email:"chai@gmail.com"})
    },1000)
})
//we can get the value ,also we know .then after promise will refer to resove 
promisethree.then(function(user){
    // console.log(user.name)
    console.log(user)
})

//4
const promiseFour =new Promise(function(resolve,reject){
    
    setTimeout(() => {
        let user = false
        if(!user)
        {
            resolve({user:"harshhi",password:"12334"})
        }
        else{
            reject("something went Wrong!!!")
            
        }
    }, 1000);
})
//.then.then its chaning in promise it will pass the value from the first cahin to next .then
//allways run finally it tells anything if resolved or reject it will work for all finally
promiseFour
.then((user)=>{
   console.log(user)
   return user.user
})
.then((usrename)=>{
    console.log(usrename)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
 console.log("the promise is either resolved or rejected")
})

//5 
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let user = true
        if(!user)
        {
            resolve({user:"javascript",password:"12334"})
        }
        else{
            reject("javascript went Wrong!!!")
        }
    }, 1000);
})
//other approch to access using async and awit it will be used when you want the data to return a value untill it has to wait in this senario
// promise is a object promiseFive , promiseFive() wrong it will be a function
//async not hadle the error so we need to wrap inside try catch block
async function consivePromisFive(){
   try {
    const reponse = await promiseFive
    console.log(reponse)
   } catch (error) {
    console.log(error);
   }
}
consivePromisFive()

//
// async function getAllUser() {
//     try{
//         const response =await fetch('https://api.github.com/users');
//         //here we have to wait for add the response to data so we need add awit before response to convert jason
//         const data= await response.json()
//         // console.log(data)
//         // Extract and log the 'login' property of each user object
//          data.forEach(user => {
//             console.log(user.login);
//         });
//     }catch(error){
//        console.log("E:",error);
//     }
    
// }
// getAllUser()

// let try with .then and here we are not need add await and all
fetch("https://api.github.com/users")
.then((apiResponse)=>{
      return apiResponse.jason()
})
.then((data)=>{
    console.log(data);
    
})
.catch(error)
{
    console.log( error)
}

// fetch
/* 
You're correct. The fetch API only rejects a promise when a network error occurs, not for HTTP errors like 404 or 500. To handle HTTP errors, you need to check the response status and throw an error if it's not in the successful range (200-299). Here's how you can do that:

async function getAllUser() {
    try {
        const response = await fetch('https://api.github.com/users');
        // Check if the response status is not in the 200-299 range
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Wait for the response to be converted to JSON
        const data = await response.json();
        // Extract and log the 'login' property of each user object
        data.forEach(user => {
            console.log(user.login);
        });
    } catch (error) {
        console.log("Error:", error); 
    }
}

getAllUser();


*/
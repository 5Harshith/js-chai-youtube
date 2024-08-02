//create a promise
const promiseOne =new Promise(function(resolve,reject)
{
    console.log("Async task 1")
})
//.then will takse the resolve 
promiseOne.then(function(){
    console.log("Async Result 1")
})
const myDate =new Date
console.log(myDate.toString())
console.log(myDate.toDateString()) //Fri Jul 26 2024
console.log(myDate.toISOString())  //2024-07-26T07:20:19.185Z
console.log(myDate.toJSON())  // 2024-07-26T07:20:19.185Z
console.log(myDate.toLocaleDateString)  //[Function: toLocaleDateString]
console.log(myDate.toTimeString()) //07:20:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()) //7/26/2024, 7:20:19 AM

// js month start with 0 zero -jan

    // let custDate =new Date(2024,12,23 ) 0r another menthod next one we can give
    let custDate =new Date("2022/01/23" )
    console.log(custDate.toDateString())

    // timestamp
    let mytimestamp =Date.now()
    console.log(mytimestamp) // so we can compare mytimestamp with custdate time stamp 
    // it will be used in quize and airline appication 
    console.log(custDate.getTime())

    custDate.toLocaleString('default',{
        weekday:"short",
        
    })
    console.log(custDate)
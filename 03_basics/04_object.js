    const tenderUser={}

    tenderUser.id ="2121"
    tenderUser.name ="samy"
    tenderUser.isLoggedIn =false

    // console.log(tenderUser)
    const regularUser ={
        email : "samy@gmail.com",
        fullName :{
            userFullname:{
                firstName :"harshi",
                LastName :"K"
            }
        }
    }
    // console.log(regularUser.fullName.userFullname.firstName)

    // const obj1 ={1:"a",2:"b"}
    // const obj2 ={ 3:"c",4:"d"}
    // const obj3 ={obj1 ,obj2}  if we give like this it will show the result object inside object
    // we use assign to combaine both the object
    // const obj3 =Object.assign({},obj1,obj2)
    // most we use spread opperator to combain
    // const obj4 ={...obj1,...obj2}
    // console.log(obj4)

    // when we get the data from database in arrat object
    const users=[
        {
            id : 1,
            email :"harshi@gmail",
        },
        {
            id : 2,
            email :"shi@gmail",
        }
    ]
    console.log(users[1].email)

    // for looping throug the array we can use object.key also we can loop with value
    // console.log(Object.keys(users));
    // console.log(Object.values(users));

 ////////////////// final object 18
 //object destructuring 
 const course ={
    coursename : "js in hindi",
    peice :1000,
    courseInstructor : "harshith"
 }   
 //if we want get courseInstructore the we use course.instructore if we are useing this multiple time then we need to use that again and again so we can do
 const{courseInstructor:guide} =course // we can give own name to access the value
 console.log(guide)
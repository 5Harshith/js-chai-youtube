//object litteral its a collection of method, object ,
 const user ={
    user :"harshi",
    logincount :8
 }

 //constructor
//  const promiseOne = new Promise()
//  const date =new Date()

 // we can use like this instade of creating a variable inside the function

 function User(user,userloginCount,isLogin)
 {
    this.user =user,
    this.userloginCount =userloginCount,
    this.isLogin =isLogin

    return this
 }

 const userOne =new User("harshi",12,true)
  // if you try to execute userTwo without New user key it will overwrite the userone so we need to use new key work to create a new instance for one and two user 
//  const usertwo = User("harshi",12,true)
const userTwo =new User("kumar",12,true)
 console.log(userOne) 
 console.log(userTwo)
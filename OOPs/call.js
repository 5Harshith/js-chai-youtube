function setUsername(user)
{
    this.user =user
    console.log("called")
}

function createUser(user,emial,id)
{
    // here i am trying to call the setuser function to create user but it is not returning beacause the function setuser after the execution poped out from the call stack and no value will be present or reference will be available so we need use call when we are referening the value from another funtion
    // setUsername(user) 
    // this.user = setUsername.call(user) =user not use this use the create user reference
    setUsername.call(this,user)
    this.emial =emial
    this.id =id
}

const user = new createUser("harshi","harshi@gmail.com",111)
console.log(user)
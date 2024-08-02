// inhertance the teacher access the value of user
class user{
    constructor(user){
        this.user =user;
    }
    logMe(){
        console.log(`${this.user} logged`)
    }
}

class teacher extends user{
    constructor(user,email,course)
    { 
        //refernce parent
        super(user)
        this.email =email
        this.course =course      
    }
    getcourse(){
        console.log(`${this.user} endroled in ${this.course}`)
    }
}

const chai =new teacher("raki","raki@gmail.com","javascript")
const maslachai =new user("harshi")
chai.getcourse()
maslachai.logMe()
console.log(chai === maslachai)
// to check the instance of child
console.log(chai instanceof teacher)
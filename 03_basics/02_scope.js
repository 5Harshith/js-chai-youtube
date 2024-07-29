// var a =10
// const b=20
// let c=30
//if we declare inside the block {} or scope of program if we decalre inside it should be accesable inside the scope but var will be available out side the scope so its not to use var in program.
if(true){
    var a =10
    const b=20
    let c=30
}
// console.log(a) // it will print and b/c will not
// console.log(b)
// console.log(c)

/// nested scope two can access the function one and the function two variable can not be called outside the two() line 21 will give error 
function one(){
    const username ="harshith"
    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true)
{
    const name ="harshith"
    if(true)
    {
        const site ="youtube"
        console.log(`name:${name} site is :${site}`)
    }
    // console.log(site)//error we can not access outside the scope
}
// console.log(name)//error we can not access outside the scope
//++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++//
console.log(addone(10)) //-here we can decalre ablove the function
//one method 
function addone(num){
 return num +1
}


//it will addtwo is the expression will hold the value
// addtwo(15) -here
const addtwo =function (num){
    return num +2
   }
 addtwo(15)// if decalre above the the function then it will give error because it is assign to variable
 //here commes the concept of hosting 
 
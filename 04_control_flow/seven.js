const MyNum =[1,2,3,4,5,6,7,8,9]
// i need to add 10 all
// const result = MyNum.map((num)=> num +10)
// chainning here we use more then one map and filter 
//how its work is map will execulte first and the result is passed to second map and then it will be return back
const result =MyNum
              .map((n)=> n*10 )
              .map((n)=> n+2)
              .filter((n)=> n >=50)
   
console.log(result);
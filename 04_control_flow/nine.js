// reduce Syntax

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);
// here the accumulator takes the value of initialvalue for the first loop ,and second loop the accumulator will takes the result of accum +currentval , initialval will be used for first time beacuse accumulator dont have the value  
//  easy method
        // const total =array1.reduce( function(acc,currval){
        //     console.log(`acc value:${acc} currval :${currval}`)
        //     return acc+currval
        // },0)initial value here we define you can check by giveng 4 then the acc value will be 4 
// console.log(total)
// same using arrow 

const total =array1.reduce((acc,currval)=>{
    console.log(`acc value:${acc} currval :${currval}`)
    return acc+currval
},3)
console.log(total)

/// logic for add to cart item
// we can use reduce to add all the price

const totalcorse =[
{course:"python",
    price:900
},
{course:"java",
    price:2900
},
{course:"js",
    price:1900
},
{course:"mobile",
    price:9000
},
]
//i want total price of all the course
const totalAmt =totalcorse.reduce((acc,item)=>(acc+item.price),0)
console.log(totalAmt)
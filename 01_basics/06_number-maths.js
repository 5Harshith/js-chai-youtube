const scrore =40;
// we can define a number only then

const balance =new Number(80000)
console.log(balance) //it will show number and in the prototype we gett all the method to alter the value
console.log(scrore)
console.log(typeof balance)
console.log(typeof scrore)

//Tofixed  -used in e-comm website
console.log(balance.toFixed(3))

const otherNo =12.83433

console.log(otherNo.toPrecision(2))
console.log(otherNo.toPrecision(4))
// we can give the value correctly if we give less value then priority will be changed
console.log(otherNo.toPrecision(1))

// us standered the number will be read able format
    const hundreds =10000000
    console.log(hundreds.toLocaleString());
    //indian format
    console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ maths +++++++++++++++++++++++//
//M - capital

//abs it will convert - into plus  // poss to poss ,neg to poss it will convert
console.log(Math.abs(-9))
//ceil it will chose the top value 
    console.log(Math.ceil(4.2)) // here it will take the next value only -gives 5
    console.log(Math.floor(4.9)) // here it will take the begore value only -gives 4
    console.log(Math.round(4.2)) // it will round the base on . next value -gives 4

    const min =10
    const max =20
    console.log(Math.floor(Math.random() *(max-min +1) +min))
    
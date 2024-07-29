//intration or loop
for(let i =0 ; i<=10;i++)
{
    // console.log(i++)
}
for(let i=1;i<=10 ;i++)
{
    // console.log(`outer loop of ${i}`)
    for(let j=1;j<=10;j++){
        // console.log(`inner loop ${j} and inner loop ${i}`)
        // console.log(`${i} * ${j} = ${+i*j}`)
    }
}
//break and continue
for(let index =0;index <=10;index++)
{
    // if(index == 5)
    // {
    //     console.log(`${index}value matched with 5 `)
    //     break;
    // }
    // continue will skip 5 and print all other
    if(index == 5)
        {
            console.log(`${index}value matched with 5 `)
            continue
        }
        console.log(`${index}value matched `)
   
}


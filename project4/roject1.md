# project related to DOM
## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ovqjqk?file=1-colorChanger%2Fchaiaurcode.js)

#solution code

#project 1

``` javascript 
const buttons =document.querySelectorAll('.button')
const body =document.querySelector('body')

buttons.forEach((button)=>{
button.addEventListener('click',function(e){
  // console.log(e.target.id)
  if(e.target.id === "white")
  {
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "grey")
  {
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id ==="blue")
  {
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "yellow")
  {
    body.style.backgroundColor = e.target.id
  }
})
})

```

## project 2
``` javascrip 
const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerText = `Please enter a valid height: ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerText = `Please enter a valid weight: ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
    
    if (BMI <= 18.6) {
      result.innerHTML = `Under Weight`;
    }
    else if (BMI > 18.6 && BMI <= 24.9) {
      result.innerHTML = `Normal Weight`;
    } else {
      result.innerHTML = `Over Weight`;
    }
  }
});
```
## project 3
``` javascript 
const clock =document.getElementById('clock')


setInterval( function(){
  const date =new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```
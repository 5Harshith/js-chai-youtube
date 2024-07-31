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
``` javascript 
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

## project 4
``` javascript 
let random = parseInt(Math.random() * 50 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let guessCount = 1;

let playGame = true;
const p = document.createElement('p');

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    //  console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter the valid number');
  } else if (guess < 1) {
    alert('Please enter the  number more than 1');
  } else if (guess > 50) {
    alert('Please enter the number less than 50');
  } else {
    prevGuess.push(guess);
    //  console.log(prevGuess)
    if (guessCount === 11) {
      displayGuess(guess);
      displayMessage(`game Over .ramdom Numner was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage('You  Guess it Right');
    endGame();
  } else if (guess < random) {
    displayMessage('Number is TOO Low');
  } else if (guess > random) {
    displayMessage('Number is TOO high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  // console.log(guessSlot)
  
  remaining.innerHTML = `${11 - guessCount}`;
  guessCount++;
  // console.log(guessCount)
  // console.log(remaining)
}
function displayMessage(messages) {
  lowOrHigh.innerHTML = `<h2>${messages}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button')
  p.innerHTML = `<h2 id ="newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame =false
  newGame();
}
function newGame(){
  const NewGameBtn =  document.querySelector('#newGame')
  NewGameBtn.addEventListener('click',function(e){
    random = parseInt(Math.random() * 50 + 1);
    prevGuess =[]
    guessCount =1
    guessSlot.innerHTML =''
    remaining.innerHTML =`${11 - guessCount}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame =true
  })
}

```

## project 5
```javascript 
console.log('Project 5');

const insert = document.querySelector('#insert')

window.document.addEventListener('keydown',(e)=>{
   insert.innerHTML =`
   <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
   `
})

```

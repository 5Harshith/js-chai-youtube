const name ="harshith"
const repo ="10"
console.log(name + repo +" value");// but it si old style to write so not use this

// use backticks and to get the value use ${}

console.log(`hello my name ${name} i have git repo count ${repo}`)

// we are declaring the string 

const gameName = new String("criket-match")


// here we get many method to fet the value of the string /function
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));
console.log(gameName.length);
console.log(gameName);

const newString = gameName.substring(0,5); // 5 will not include 
console.log(newString);
const anotherString = gameName.slice(-3 ,8) // if we give -4 (negative value) it gives revers value 
console.log(anotherString);

// it will be used in input when the user gives extra space while entering 
const newString1 = "  harshi   ";
console.log(newString1)
// trim will remove the extra space
console.log(newString1.trim())

//replace
const url ="hhttp://hitesh.com20%.hk";
console.log(url.replace("20%","-"));
console.log(url.includes('hk'));  //t ot f

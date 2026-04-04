A concise way to write function expressions. 

 

Good for simple functions that you use only once. 

 

Syntax: 

 

(parameters) => some code 

---

const hello = () => console.log("Hello"); 

 

hello(); 

Hello 


const hello = (name) => console.log(`Hello ${name}`); 

 

hello("Gojo"); 

Hello Gojo 


const hello = (name) => {console.log(`Hello ${name}`) 

                         console.log(`You are old!`)}; 

 

hello("Gojo"); 

Hello Gojo 

You are old! 


const hello = (name, age) => {console.log(`Hello ${name}`) 

                              console.log(`You are ${age} years old!`)}; 

 

hello("Gojo", 21); 

Hello Gojo 

You are 21 years old! 


setTimeout( () => console.log("Hello"), 3000); 

Hello 

Displays "Hello" after 3 s/ 3000 ms. 

 

Same as: 

 

setTimeout(function() 

{ 

    console.log("Hello"); 

}, 3000); 


const numbers = [1, 2, 3, 4, 5, 6]; 

 

const squares = numbers.map( (element) => Math.pow(element, 2)); 

 

console.log(squares); 

[1, 4, 9, 16, 25, 36] 


const numbers = [1, 2, 3, 4, 5, 6]; 

 

const cubes = numbers.map( (element) => Math.pow(element, 3)); 

 

console.log(cubes); 

[1, 8, 27, 64, 125, 216] 


const numbers = [1, 2, 3, 4, 5, 6]; 

 

const evenNums = numbers.filter( (element) => element % 2 === 0); 

 

console.log(evenNums); 

[2, 4, 6] 


const numbers = [1, 2, 3, 4, 5, 6]; 

 

const oddNums = numbers.filter( (element) => element % 2 !== 0); 

 

console.log(oddNums); 

[1, 3, 5] 


const numbers = [1, 2, 3, 4, 5, 6]; 

 

const total = numbers.reduce( (accumulator, element) => accumulator + element); 

 

console.log(total); 

21 
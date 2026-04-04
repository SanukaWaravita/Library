 

// STRING SLICING 

    // Process of creating a substring from a portion of another string. 

    // (Does not alter the original string) 

    // string.slice(start-index (inclusive), end-index (exclusive)) 

---

 

const fullName = "Bro Code"; 

let firstName = fullName.slice(0, 3); 

let lastName = fullName.slice(4, 8); 

console.log(firstName); 

console.log(lastName); 

Bro 

Code 


 

const fullName1 = "Bro Code"; 

let firstChar = fullName1.slice(0, 1); 

let lastChar = fullName1.slice(-1); // Negative index - You begin at the end, then you work your way towards the beginning by decreasing the number. 

console.log(firstChar); 

console.log(lastChar); 

B 

e 


 

// String slicing + Index submethod to make the above program more dynamic: 

const fullName2 = "Broseph Code"; 

let firstName1 = fullName2.slice(0, fullName2.indexOf(" ")); 

let lastName1 = fullName2.slice(fullName2.indexOf(" ") + 1); 

console.log(firstName1); 

console.log(lastName1); 

Broseph 

Code 


 

// Exercise including "email" 

const email = "Bro1@gmail.com"; 

let userName = email.slice(0, email.indexOf("@")); 

let extension = email.slice(email.indexOf("@") + 1); 

console.log(userName); 

console.log(extension); 

Bro1 

gmail.com 
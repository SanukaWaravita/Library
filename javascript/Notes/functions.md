// FUNCTION 

 

// A section of reusable code. 

// Declare code once, use it whenever you want. 

// Call the function to execute that code. 

---

function happyBirthday(username, age){ // The values username and age receive are arguments 

    console.log("Happy Birthday to you!"); 

    console.log("Happy Birthday to you!"); 

    console.log(`Happy Birthday dear ${username}`); 

    console.log("Happy Birthday to you!"); 

    console.log(`You are ${age} years old`); 

} 

happyBirthday("Batman", 18); // "Batman" and 18 are called "parameters" 

happyBirthday("SpongeBob", 30); 

happyBirthday("Patrick", 37); 

// The order of parameters is very important 


function add(x, y){ 

    let result = x + y; 

    return result; // Return keyword 

} 

let answer = add(2, 3); 

console.log(answer); 

console.log(add(2,3)); // This is also possible 


function add(x, y){ 

    return x + y; 

} 

console.log(add(2,3)); // This is also possible 


function isEven(number){ 

    if(number % 2 === 0){ 

        return true; 

    } 

    else{ 

        return false; 

    } 

} 

console.log(isEven(12)); 


function isEven(number){ 

    return number % 2 === 0 ? true : false; 

} 

console.log(isEven(12)); 


function isValidEmail(email){ 

    if(email.includes("@")){ 

        return true; 

    } 

    else{ 

        return false; 

    } 

} 

console.log(isValidEmail("Bro@fake.com")); 

console.log(isValidEmail("Brofake.com")); 

console.log(isValidEmail("Zuckerborg@meta.com")); 

true 

false 

true 


function isValidEmail(email){ 

    return email.includes("@") ? true : false; 

} 

console.log(isValidEmail("Bro@fake.com")); 

console.log(isValidEmail("Brofake.com")); 

console.log(isValidEmail("Zuckerborg@meta.com")); 

true 

false 

true 
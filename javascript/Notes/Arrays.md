// ARRAY 

// a variable like structure that can hold more than 1 value 

---

let fruits = ["apple", "orange", "banana"]; 

// adding plural name to arrays helps with readability (good practice) 

console.log(fruits); // Outputs the elements in the array 


let fruits = ["apple", "orange", "banana"]; 

console.log(fruits); 

console.log(fruits[0]); // Accesses and outputs the element at index 0 

console.log(fruits[1]); // Accesses and outputs the element at index 1 

console.log(fruits[2]); // Accesses and outputs the element at index 2 


let fruits = ["apple", "orange", "banana"]; 

fruits[2] = "coconut"; // Replaces the element at index 2 

console.log(fruits); 


let fruits = ["apple", "orange", "banana"]; 

fruits[3] = "coconut";  // Since there is no index 3 in the existing array, 

                        // the new element will be added to the array 

console.log(fruits); 


let fruits = ["apple", "orange", "banana"]; 

fruits.push("coconut"); // Adds a new element to the end of the array 

fruits.pop(); // Removes the last element of the array 

fruits.unshift("mango"); // Adds a new element to the start of the array 

fruits.shift(); // Remoes an element from the beginning 


let fruits = ["apple", "orange", "banana"]; 

let numOfFruits = fruits.length; // Returns the length of an array, or the number of elements in an array 


let fruits = ["apple", "orange", "banana"]; 

let index = fruits.indexOf("apple"); // Returns the index of the element 


let fruits = ["apple", "orange", "banana"]; 

for(let i = 0; i < fruits.length; i++){ 

    console.log(fruits[i]); 

} 


let fruits = ["apple", "orange", "banana"]; 

for(let i = fruits.length - 1; i >= 0; i--){ 

    console.log(fruits[i]); 

} 

// The above for loop will output the elements in the array in the reverse order 


let fruits = ["apple", "orange", "banana"]; 

// Enchanced for loop 

for(let fruit of fruits){ 

    // Here "fruit" can be any variable, but its good practice to use the singular version of the array name 

    console.log(fruit); 

} 


let fruits = ["apple", "orange", "banana"]; 

fruits.sort(); // Sorts an array in alphabetical order. 

for(let fruit of fruits){ 

    console.log(fruit); 

} 


let fruits = ["apple", "orange", "banana"]; 

fruits.sort().reverse(); // Sorts an array in reverse alphabetical order. 

for(let fruit of fruits){ 

    console.log(fruit); 

} 
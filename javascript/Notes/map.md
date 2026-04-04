Accepts a callback and applies that function to each element of an array, then returns a new array. 

 

This is nice if you want to preserve the original array from which the elements came from. 

---

const numbers = [1, 2, 3, 4, 5]; 

 

function square(element) 

{ 

    return Math.pow(element, 2) 

} 

 

const squares = numbers.map(square); 

 

console.log(squares); 

[1, 4, 9, 16, 25] 

Similar to forEach, but .map RETURNS a NEW ARRAY; the original array still exists (in this case it is a const) 


const numbers = [1, 2, 3, 4, 5]; 

 

function cube(element) 

{ 

    return Math.pow(element, 3) 

} 

 

const cubes = numbers.map(cube); 

 

console.log(cubes); 

[1, 8, 27, 64, 125] 


const students = ["spongebob", "Patrick", "Squiward", "Sandy"]; 

 

const studentsUpper = students.map(upperCase); 

 

console.log(studentsUpper); 

 

function upperCase(element) 

{ 

    return element.toUpperCase(); 

} 

['SPONGEBOB', 'PATRICK', 'SQUIWARD', 'SANDY'] 

We are passing upperCase as callback. 


const students = ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"]; 

 

const studentsLower = students.map(lowerCase); 

// we are passing upperCase as callBack 

 

console.log(studentsLower); 

 

function lowerCase(element) 

{ 

    return element.toLowerCase(); 

} 

['spongebob', 'patrick', 'squidward', 'sandy'] 


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]; 

 

function formatDates(element) 

{ 

    const parts = element.split("-"); 

 

    return `${parts[1]}/${parts[2]}/${parts[0]}`; 

} 

 

const formattedDates = dates.map(formatDates); 

 

console.log(formattedDates); 

['1/10/2024', '2/20/2025', '3/30/2026'] 
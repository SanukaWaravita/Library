Method used to iterate over the elements of an array and apply a specified function (callback) to each element. 

 

array.forEach(callback) 

 

element, index, array are provided behind the scenes. 

---

let numbers = [1, 2, 3, 4, 5]; 

 

numbers.forEach(display); 

 

function display(element) 

{ 

    console.log(element); 

} 

1 

2 

3 

4 

5 


let numbers = [1, 2, 3, 4, 5]; 

 

function double(element, index, array) 

{ 

    array[index] = element * 2; 

} 

 

function display(element) 

{ 

    console.log(element); 

} 

 

numbers.forEach(double); 

 

numbers.forEach(display); 

2 

4 

6 

8 

10 


let numbers = [1, 2, 3, 4, 5]; 

 

function triple(element, index, array) 

{ 

    array[index] = element * 3; 

} 

 

function display(element) 

{ 

    console.log(element); 

} 

 

numbers.forEach(triple); 

numbers.forEach(display); 

3 

6 

9 

12 

15 


let numbers = [1, 2, 3, 4, 5]; 

 

function square(element, index, array) 

{ 

    array[index] = Math.pow(element, 2); 

} 

 

function display(element) 

{ 

    console.log(element); 

} 

 

numbers.forEach(square); 

numbers.forEach(display); 

1 

4 

9 

16 

25 


let numbers = [1, 2, 3, 4, 5]; 

 

function cube(element, index, array) 

{ 

    array[index] = Math.pow(element, 3); 

} 

 

function display(element) 

{ 

    console.log(element); 

} 

 

numbers.forEach(cube); 

numbers.forEach(display); 

1 

8 

27 

64 

125 


let fruits = ["apple", "orange", "banana", "coconut"]; 

 

function display(element) 

{ 

    console.log(element); 

} 

 

function upperCase(element, index, array) 

{ 

    array[index] = element.toUpperCase(); 

} 

 

fruits.forEach(upperCase); 

fruits.forEach(display); 

APPLE 

ORANGE 

BANANA 

COCONUT 


let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"]; 

 

function display(element) 

{ 

    console.log(element); 

} 

 

function lowerCase(element, index, array) 

{ 

    array[index] = element.toLowerCase(); 

} 

 

fruits.forEach(lowerCase); 

fruits.forEach(display); 

apple 

orange 

banana 

coconut 


let fruits = ["apple", "orange", "banana", "coconut"]; 

 

function display(element) 

{ 

    console.log(element); 

} 

 

function capitalize(element, index, array) 

{ 

    array[index] = element.charAt(0).toUpperCase() + element.slice(1); 

} 

 

fruits.forEach(capitalize); 

fruits.forEach(display); 

Apple 

Orange 

Banana 

Coconut 
# Constants

- Variables that cannot be changed after being assigned a value.

## User Input Through Window Prompt

```js
let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);
```
- If the user input is '10', the console will display the value '62.8318', because 2 × 3.14159 (or `pi`) × 10 (the user input) is 62.8318.


```js
let pi = 3.14159;
let radius;
let circumference;

pi = 420.69;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);
```
- A situation for using a constant is, you could accidently or someone could maliciously change the value that a variable is representing, which would lead to the program not behaving as intended and giving an output that is incorrect and you may not even realise that this is not the correct answer. 

- For example, in this program, if the user input is '10', instead of the output value '62.8318' being displayed in the console, which is the correct answer considered that you expect your program to behave as intended, a different, incorrect output value '8413.8' will be displayed because of the statement `pi = 420.69;`; so rather than the arithmetic expression '2 × 3.14159 × 10' being carried out, the arithmetic expression '2 × 420.69 × 10' is being carried out.

```js
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);
```
- It is a good practice to make all the letters of a constant variable (e.g. `PI`) uppercase.

- However, this practice will only work for variables that are being assigned with 'primitive' datatypes, such as numbers and booleans. If string datatype values are assigned to a constant variable, this practice will not work.

- In this program, the datatype of the value being assigned to the constant variable (`PI`) is a number, so this practice of making the letters of the variable uppercase works. 

- In this program, if the user input is '10', the output value will be '62.8318'.

```js
const PI = 3.14159;
let radius;
let circumference;

PI = 420.69;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);
```
- The console will display 'Uncaught TypeError: Assignment to constant variable'.

- JavaScript will not allow a new value (here `420.69`) to be assigned to a constant variable (here `PI`) that has already been assigned a value (here `3.14159`).

- In other words, JavaScript does not allow the reassignment of constant after they have already been assigned once.

## User Input Through HTML Textbox

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Website</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1 id="myH1">Enter the radius of a circle</h1>
        <label>radius:</label>
        <input id="myText"><br><br>
        <button id="mySubmit">Submit</button>
        <h3 id="myH3"></h3>
        <script src="index.js"></script>
    </body>
</html>
```
```js
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference;
}
```

## STRING CONCATENATION

```js
const name = "Mikel";
const birthYear = 1993;
const year = 2021;

const mikel = "Hello, my name is " + name + ". I am " + (year - birthYear) + " years old.";

console.log(mikel);
```
- *OUTPUT*: Hello, my name is Mikel. I am 27 years old.

### String Concatenation to Add Units

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Website</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1 id="myH1">Enter the radius of a circle</h1>
        <label>radius:</label>
        <input id="myText"><br><br>
        <button id="mySubmit">Submit</button>
        <h3 id="myH3"></h3>
        <script src="index.js"></script>
    </body>
</html>
```
```js
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
```

### String Concatenation Using Template Literals ``

- Another easier way of combining strings and variables, which was introduced in ES6 [use '`…`'].
    
- Takes in function expressions.

```js
const mikel2 = `Hello, my name is ${name}. I am ${year - birthYear} years old.`;

console.log(mikel2);
```

- 'Hello, my name is Mikel. I am 28 years old.'

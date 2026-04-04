# Spread Operator

- Spread operator = [-]

- Allows an iterable such as `n` array or string to be expanded into spearate elements (unpacks the elements).

```js
let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(numbers);

window.alert(maximum);
```
- *OUTPUT*: NaN

```js
let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);

window.alert(maximum);
```
- *OUTPUT*: 5

```js
let username = "Bro Code";

let letters = [...username];

window.alert(letters);
```
- *OUTPUT*: B,r,o, ,C,o,d,e

```js
let username = "Bro Code";

let letters = [...username].join("-");

window.alert(letters);
```
- *OUTPUT*: B-r-o- -C-o-d-e

```js
let fruits = ["apple", "orange", "banana"];

window.alert(fruits);
```
- *OUTPUT*: apple,orange,banana

```js
let fruits = ["apple", "orange", "banana"];

let newFruits = [...fruits];

window.alert(newFruits);
```
- *OUTPUT*: apple,orange,banana

- • Shallow copy - different datatype, but contains identical values

```js
let fruits = ["apple", "orange", "banana"];

let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables]

window.alert(foods);
```
- *OUTPUT*: apple,orange,banana,carrots,celery,potatoes

```js
let fruits = ["apple", "orange", "banana"];

let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

window.alert(foods);
```
- *OUTPUT*: apple,orange,banana,carrots,celery,potatoes,eggs,milk


# Rest Parameters

- Rest parameters = `...rest`

- Allows a function to work with a variable number of arguments by bundling them into an array.

- `Spread` = expands an array into separate elements.

- `Rest` = bundles separate elements into an array.

```js
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods)
{
    console.log(...foods);
}

openFridge(food1, food2, food3, food4, food5);
```
- *OUTPUT*: pizza hamburger hotdog sushi ramen

```js
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function getFood(...foods)
{
    return foods;
}

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);
```
- *OUTPUT*: ['pizza', 'hamburger', 'hotdog', 'sushi', 'ramen']

```js
function sum(...numbers)
{
    let result = 0;
    
    for(let number of numbers)
    {
        result += number;
    }
    
    return result;
}

const total = sum(1);

console.log(`Your total is $${total}`);
```
- *OUTPUT*: Your total is $1

```js
function sum(...numbers)
{
    let result = 0;
    
    for(let number of numbers)
    {
        result += number;
    }
    
    return result;
}

const total = sum(1, 2, 3);

console.log(`Your total is $${total}`);
```
- *OUTPUT*: Your total is $6

```js
function getAverage(...numbers)
{
    let result = 0;
    
    for(let number of numbers)
    {
        result += number;
    }
    
    return result/ numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);

console.log(total);
```
- *OUTPUT*: 80

```js
function combineStrings(...strings)
{
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);
```
- *OUTPUT*: Mr. Spongebob Squarepants III


# Callbacks

- `Callback` - a function that is passed as an argument to another function.

- Used to handle asynchronous operations:
    1. Reading a file
    2. Network requests
    3. Interacting with databases

- "Hey, when you're done, call this next."

```js
function hello(callback)
{
    console.log("Hello!");
    
    callback();
}

function goodbye()
{
    console.log("Goodbye!");
}

hello(goodbye);
```
- *OUTPUT*: Hello!
            Goodbye!

```js
function sum(callback, x, y)
{
    let result = x + y;
    
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}

sum(displayConsole, 1, 2);
```
- *OUTPUT*: 3

```js
function sum(callback, x, y)
{
    let result = x + y;
    
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}

function displayPage(result)
{
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1, 2);
```
- *OUTPUT*: 3

            (displayed in webpage)

- HTML:

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1 id="myH1"></h1>
            <script src="index.js"></script>
        </body>
    </html>
    ```


# Foreach()

- Method used to iterate over the elements of an array and apply a specified function (callback) to each element.

- `array.forEach(callback)`

- element, index, array are provided behind the scenes.

```js
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element)
{
    console.log(element);
}
```
- *OUTPUT*: 1
            2
            3
            4
            5

```js
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
```
- *OUTPUT*: 2
            4
            6
            8
            10

```js
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
```
- *OUTPUT*: 3
            6
            9
            12
            15

```js
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
```
- *OUTPUT*: 1
            4
            9
            16
            25

```js
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
```
- *OUTPUT*: 1
            8
            27
            64
            125

```js
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
```
- *OUTPUT*: APPLE
            ORANGE
            BANANA
            COCONUT

```js
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
```
- *OUTPUT*: apple
            orange
            banana
            coconut

```js
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
```
- *OUTPUT*: Apple
            Orange
            Banana
            Coconut


# .map()

- Accepts a callback and applies that function to each element of an array, then returns a new array.

- This is nice if you want to preserve the original array from which the elemenets came from.

```js
const numbers = [1, 2, 3, 4, 5];

function square(element)
{
    return Math.pow(element, 2)
}

const squares = numbers.map(square);

console.log(squares);
```
- *OUTPUT*: [1, 4, 9, 16, 25]

- Similar to `forEach`, but `.map` RETURNS a NEW ARRAY; the original array still exists (in this case it is a `const`)

```js
const numbers = [1, 2, 3, 4, 5];

function cube(element)
{
    return Math.pow(element, 3)
}

const cubes = numbers.map(cube);

console.log(cubes);
```
- *OUTPUT*: [1, 8, 27, 64, 125]

```js
const students = ["spongebob", "Patrick", "Squiward", "Sandy"];

const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element)
{
    return element.toUpperCase();
}
```
- *OUTPUT*: ['SPONGEBOB', 'PATRICK', 'SQUIWARD', 'SANDY']

- • We are passing `upperCase` as **callback**.

```js
const students = ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"];

const studentsLower = students.map(lowerCase);
// we are passing upperCase as callBack

console.log(studentsLower);

function lowerCase(element)
{
    return element.toLowerCase();
}
```
- *OUTPUT*: ['spongebob', 'patrick', 'squidward', 'sandy']

```js
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(element)
{
    const parts = element.split("-");

    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);

console.log(formattedDates);
```
- *OUTPUT*: ['1/10/2024', '2/20/2025', '3/30/2026']


# .filter()

- Creates a new array by filtering out elements.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNumbs = numbers.filter(isEven);

console.log(evenNumbs);

function isEven(element)
{
    return element % 2 === 0;
}
```
- *OUTPUT*: [2, 4, 6]

```js
let numbers = [1, 2, 3, 4, 5, 6, 7];

let oddNumbs = numbers.filter(isOdd);

console.log(oddNumbs);

function isOdd(element)
{
    return element % 2 !== 0;
}
```
- *OUTPUT*: [1, 3, 5, 7]

```js
const ages = [16, 17, 18, 18, 19, 20, 60];

const adults = ages.filter(isAdult);

function isAdult(element)
{
    return element >= 18;
}

console.log(adults)
```
- *OUTPUT*: [18, 18, 19, 20, 60]

```js
const ages = [16, 17, 18, 18, 19, 20, 60];

const children = ages.filter(isChild);

function isChild(element)
{
    return element < 18;
}

console.log(children)
```
- *OUTPUT*: [16, 17]

```js
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element)
{
    return element.length <= 6;
}

const shortWords = words.filter(getShortWords);

console.log(shortWords);
```
- *OUTPUT*: ['apple', 'orange', 'banana', 'kiwi']

```js
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getLongWords(element)
{
    return element.length > 6;
}

const longWords = words.filter(getLongWords);

console.log(longWords);
```
- *OUTPUT*: ['pomegranate', 'coconut']


# .reduce()

- Reduces the elements of an array to a single value.

```js
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

function sum(accumulator, element)
{
    return accumulator + element;
}

console.log(`$${total.toFixed(2)}`);
```
- *OUTPUT*: $105.00

```js
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

function getMax(accumulator, element)
{
    return Math.max(accumulator, element);
}

console.log(maximum);
```
- *OUTPUT*: 95

```js
const grades = [75, 50, 90, 80, 65, 95];

const minimum = grades.reduce(getMin);

function getMin(accumulator, element)
{
    return Math.min(accumulator, element);
}

console.log(minimum);
```
- *OUTPUT*: 50


# Function Expressions

- **Function declaration** -> defines a reusable block of code that performs a specific task.

- **Function expressions** -> a way to define functions as values or variables.

    - Benefits are you do not have to constantly think of function names, rather you can just write a function and then forget about it.

    - They are used in:

        - Callbacks in asynchronous operations.
        - Higher-Order functions.
        - Closures.
        - Event Listeners.

```js
function hello()
{
    console.log("Hello");
}

hello();
```
- *OUTPUT*: Hello

- Function declaration

```js
const hello = function()
{
    console.log("Hello");
}

hello();
```
- *OUTPUT*: Hello

- Here, a function is being assigned to a constant (`const`) variable, in this case `hello` - **Function expression**

```js
function hello()
{
    console.log("Hello");
}

setTimeout(hello, 3000);
```
- *OUTPUT*: Hello

- "Hello" will be displayed after 3 seconds (3 sec = 3000 ms).

```js
setTimeout(function()
{
    console.log("Hello");
}, 3000);
```
- *OUTPUT*: Hello

- "Hello" will be displayed after 3 seconds (3 sec = 3000 ms).

```js
function square(element)
{
    return Math.pow(element, 2);
}

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(square);

console.log(squares);
```
- *OUTPUT*: [1, 4, 9, 16, 25, 36]

```js
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element)
{
    return Math.pow(element, 2);
});

console.log(squares);
```

- We do not necessirily need a function name, this still works.

- A benefit of this is that we are not polluting the global name space with function names.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const cubes = numbers.map(function(element)
{
    return Math.pow(element, 3);
});

console.log(cubes);
```
- *OUTPUT*: [1, 8, 27, 64, 125, 216]

```js
const evenNums = numbers.filter(function(element)
{
    return element % 2 === 0;
});

console.log(evenNums);
```
- *OUTPUT*: [2, 4, 6]

```js
const oddNums = numbers.filter(function(element)
{
    return element % 2 !== 0;
});

console.log(oddNums);
```
- *OUTPUT*: [1, 3, 5]

```js
const total = numbers.reduce(function(accumulator, element)
{
    return accumulator + element;
});

console.log(total);
```
- *OUTPUT*: 21


# Arrow Functions

- A concise way to write function expressions.

- Good for simple functions that you use only once.

- Syntax:

    `(parameters) => some code`

```js
const hello = () => console.log("Hello");

hello();
```
- *OUTPUT*: Hello

```js
const hello = (name) => console.log(`Hello ${name}`);

hello("Gojo");
```
- *OUTPUT*: Hello Gojo

```js
const hello = (name) => {console.log(`Hello ${name}`)
                         console.log(`You are old!`)};

hello("Gojo");
```
- *OUTPUT*: Hello Gojo
            You are old!

```js
const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old!`)};

hello("Gojo", 21);
```
- *OUTPUT*: Hello Gojo
            You are 21 years old!

```js
setTimeout( () => console.log("Hello"), 3000);
```
- *OUTPUT*: Hello

- Displays "Hello" after 3 s/ 3000 ms.

- Same as:

    ```js
    setTimeout(function()
    {
        console.log("Hello");
    }, 3000);
    ```

```js
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map( (element) => Math.pow(element, 2));

console.log(squares);
```
- *OUTPUT*: [1, 4, 9, 16, 25, 36]

```js
const numbers = [1, 2, 3, 4, 5, 6];

const cubes = numbers.map( (element) => Math.pow(element, 3));

console.log(cubes);
```
- *OUTPUT*: [1, 8, 27, 64, 125, 216]

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNums = numbers.filter( (element) => element % 2 === 0);

console.log(evenNums);
```
- *OUTPUT*: [2, 4, 6]

```js
const numbers = [1, 2, 3, 4, 5, 6];

const oddNums = numbers.filter( (element) => element % 2 !== 0);

console.log(oddNums);
```
- *OUTPUT*: [1, 3, 5]

```js
const numbers = [1, 2, 3, 4, 5, 6];

const total = numbers.reduce( (accumulator, element) => accumulator + element);

console.log(total);
```
- *OUTPUT*: 21

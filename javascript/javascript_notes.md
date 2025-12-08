# JavaScript Notes - Table of Contents

## [🏠 Index](#index)

### Basic Setup
- [Linking .js file to .html file](#linking-js-file-to-html-file)
- [Adding JavaScript to Websites](#adding-javascript-to-websites)
- [User Interaction](#user-interaction)
- [Creating an Alert Box Within the Browser](#creating-an-alert-box-within-the-browser)
- [Different Versions of 'Console.log()'](#different-versions-of-consolelog)
- [Comments](#comments)
- [Populating the Webpage with Text Content Using Java](#populating-the-webpage-with-text-content-using-java)

### Core Concepts
- [Variables](#variables)
  - [Variables Naming Conventions](#variables-naming-conventions)
  - [Variable Keyword](#variable-keyword)
  - [Declaration & Assignment](#declaration--assignment)
  - [Declaring Variables](#declaring-variables)
  - [Other Examples](#other-examples)
  - [Using Template Literals with Variables](#using-template-literals-with-variables)
- [Datatypes](#datatypes)
  - [Datatypes in JavaScript](#datatypes-in-javascript)
  - ["typeof("");" Statement](#typeof-statement)
  - [Strings](#strings)
  - [Booleans](#booleans)
- [Type Conversion](#type-conversion)
  - [String Variable Conversion](#string-variable-conversion)
  - [Number Variable Conversion](#number-variable-conversion)
  - [Empty Variable Conversion](#empty-variable-conversion)
  - [Unassigned Variable Conversion](#unassigned-variable-conversion)
  - [Datatype Conversion and Coercion](#datatype-conversion-and-coercion)
  - [Truthy and Falsy Values](#truthy-and-falsy-values)
- [Constants](#constants)
  - [User Input Through Window Prompt](#user-input-through-window-prompt)
  - [User Input Through HTML Textbox](#user-input-through-html-textbox)
  - [String Concatenation](#string-concatenation)

### Control Structures
- [If Statements](#if-statements)
- [Switches](#switches)
- [Logical Operators](#logical-operators)
- [Strict Equality](#strict-equality)
- [Ternary Operator](#ternary-operator)
- [While Loops](#while-loops)

### Operators and Math
- [Arithmetic Operators](#arithmetic-operators)
  - [Addition](#addition)
  - [Subtraction](#subtraction)
  - [Multiplication](#multiplication)
  - [Division](#division)
  - [Exponent](#exponent)
  - [Modulus](#modulus)
- [Augmented Assignment Operators](#augmented-assignment-operators)
  - [Assignment Operators](#assignment-operators)
- [Math Objects](#math-objects)
  - [Rounding](#rounding)
  - [Exponents and Roots](#exponents-and-roots)
  - [Logarithms](#logarithms)
  - [Trigonometric (Radian Input)](#trigonometric-radian-input)
  - [Absolute Value and Sign](#absolute-value-and-sign)
  - [Extremes](#extremes)

### User Input and Interaction
- [Accepting User Inputs](#accepting-user-inputs)
  - [Window Prompt Method](#window-prompt-method)
- [Checked Property](#checked-property)

### String Operations
- [String Methods](#string-methods)
- [String Slicing](#string-slicing)
- [Method Chaining](#method-chaining)

### Arrays and Functions
- [Spread Operator](#spread-operator)
- [Rest Parameters](#rest-parameters)
- [Callbacks](#callbacks)
- [Foreach()](#foreach)
- [.map()](#map)
- [.filter()](#filter)
- [.reduce()](#reduce)
- [Function Expressions](#function-expressions)
- [Arrow Functions](#arrow-functions)

---

# Linking .js file to .html file [[🏠]](#index)

- This can be done using the pair of <script></script> tags along with the 'src' attributes.

    - 'src' attribute: Specifies the location of the `.js` file; if the `.js` file is right next to the `.html` file, just the name of the `.js` file, following `.js` extension, is sufficient (e.g. `index.js`)

- For example:

    <script src="index.js"></script>

- It is better to have the <script></script> element at the bottom of the body of the document, so that in case there is any error with the JavaScript file, the html elements would atleast render first.


# Adding JavaScript to Websites [[🏠]](#index)

- There are three ways to add JavaScript to websites (same as in CSS).

- Inline JavaScript

    <body onload="alert('Hello');"></body>

- Internal JavaScript (by adding <script></script> to the html).

    ``` html
    <body>
        <script type="text/javascript">
            alert("Hello");
        </script>
    </body>
    ```

- External JavaScript [USE THIS WAY]

    - If in JavaScript, we try to change an HTML element (using JavaScript) that does not yet exist (i.e. that is JavaScript link) then it will fail and nothing will happen.

    - Always add JavaScript at the end of the script just before the closing body tag.

    - Add this line just before the closing body tag </body>.

    ```html
    <script src="index.js" charset="utf-8"></script>
    ```


# User Interaction [[🏠]](#index)

```js
alert("Hello");
```
- Writes a pop-up message.
- `alert("");` is a function that the user can see.

```js
prompt("What is your name?");
```
- Identical to the `alert("");` method, but allows the user to enter an input or a piece of text; **ALWAYS RETURNS A STRING**

```js
console.log("Hello");
```
- `console.log("");` only shows up in the console, like `debug.log` in C#.
- Used to help the developer debug the code or print something to the console.
- We can log multiple values like this: `console.log(myName, myAge);`.


# Creating an Alert Box Within the Browser [[🏠]](#index)

- An alert box can be shown through the browser using `window.alert(``);`.

- For example:
    ```js
    window.alert(`This is an alert!`);
    ```

- The `console.log(``);` can be used.

- For example:
    ```js
    console.log(`Hello`);
    ```

- For the above, either of the [``], [''], [""] can be used.

- [``] is callled **Back ticks** or **template literal**.

- This text will not show up on the actual webpage, and can instead be viewed in the console tabl of element/ 'Dev Tools' of a web browser:


# Different Versions of 'Console.log()' [[🏠]](#index)

```js
console.log();

console.warn();

console.error();

console.table();
```


# Comments [[🏠]](#index)
```js
// This is a comment

/* This
is
a
comment
*/
```

# Populating the Webpage with Text Content Using Java [[🏠]](#index)

- This can be done using the `id` attribute for suitable tags that are used to display content on the webpage, e.g. <h1></h1>, <p></p>, and assigning unique identities for these tags.

    - For example:

        ```html
        <h1 id="myH1"></h1>
        
        <p id="myP"></p>
        ```
    
- Text content can then be added to the webpage in palce of tags with the `id` attribute using [``] in the `.js` file.

    - For example:

    ```js
    document.getElementById("myH1").textContent = `Hello`;
    
    document.getElementById("myP").textContent = `I like Pizza!`;
    ```

- More comprehensive example:

    ## .html

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
            <h1 id="myH1"></h1>
            <p id="myP"></p>
            <script src="index.js"></script>
        </body>
    </html>
    ```

    ## .js

    ```js
    document.getElementById("myH1").textContent = `Hello`;
    document.getElementById("myP").textContent = `I like Pizza!`;
    ```





# VARIABLES

- It is a container that stores a value; it behaves as if it WERE the value it contains.

- There are two steps for creating a variable:

    1. **Declaration**: `let x;`
    2. **Assignment**: `x = 100;`

## Variables Naming Conventions

1. They follow 'camelCase'
2. Don't start variable names with an uppercase.
3. Variable names cannot start with a number.
4. can only contain numbers, letters, underscore or dollar (`$`) sign.
5. Cannot name a variable using a 'reserved' keyword (i.e. `new`, `name`, or `function`).
6. Variable names with all uppercase are reserved for CONSTANTS that will never change (i.e. `let PI = 3.145;`).

## Variable Keyword

- USE THESE VARIABLE KEYWORDS (these were introduced in ES6 [Modern JavaScript]):

```js
let myName = "Mikel";
```

- We use the `let` keyword to declare a variable that can change later, during the execution of our program. 

- At first glance, this is the same as `var`, but they are actually different under the hood.

- When re-assigning a new value to a variable, it is also called 'mutating' the variable.

```js
const myName = "Mikel";
```

- We use the `const` keyword to declare variables that are not supposed to change at any point in the future; a variable that cannot be re-assigned or is immutable.

- We cannot declare empty `const` variables, we need an initial value.

- For best practice, use `const` by default and `let` when you know that the variable will need to change at some point in the future (#GoodPractice).

- You can define two variables at the same time:

```js
let x, y;

x = y = 25 -10 -5;

console.log(x, y);
```
- *OUTPUT*: 10 10

## Declaration & Assignment

```js
let x;
let x;
```

- This will not work and will instead show an error in the console of the inspect window for the webpage.

```js
let x;
x = 100;
```

- The variable 'x' has now been assigned the value '100'; in other words, 'x' will ACT as the value '100'.

- This here is following the two steps of creating a variable separately; firstly declaration (`let x;`) and secondly assignment (`x = 100;`).

- This method is most suitable when if your program is having a user input value be created into a variable.

```js
let x;

x = 100;

console.log(x);
```

- This will display the value '100' in the console of the inspect window for the webpage.

```js
let x = 100;
```

- The variable 'x' has now been assigned the value '100'; in other words, 'x' will ACT as the value '100'.

- This here is following the two steps of creating a variable in one statement, both *declaration* AND *assignment*.

- This method is most suitable if you already know what variables you want to be creating at when writing the program.

## Declaring Variables

- Don't use this `[]`.

```js
var myName = "Mikel";
```

- This is how you assign variables in JavaScript.

## Other Examples

```js
let age = 17;

let price = 10.99;

let gpa = 2.1;
```

- Some other examples for variables.

- The variable `age` has now been assigned the value `17`.

- The variable `price` has now been assigned the value `10.99`.

- The variable `gpa` has now been assigned the value `2.1`.

## Using Template Literals with Variables

```js
let age = 17;
let price = 10.99;
let gpa = 2.1;

console.log(`You are ${age} years old.`);
```

- With the use of a template literal, we can insert a variable using a place holder.

- The [``] are used to type the placeholder (e.g. `You are [Variable] years old.`).

- The `${age}` is used to insert the variable into the placeholder.

    - The `${age}` will be replaced by the value `17` when displaying in the console tab of the inspect window for the webpage.

```js
let age = 17;
let price = 10.99;
let gpa = 2.1;

console.log(`You are ${age} years old.`);
console.log(`The price is ${price}.`);
```

- The `You are ${age} years old.` placeholder text will be displayed with the `${age}` replaced by the value `17` in the console tab of the inspect window for the webpage.

- The `The price is ${price}.` placeholder text will be displayed with the `${price}` replaced by the value `10.99` in the console tab of the inspect window for the webpage.


# DATATYPES

- There is:

    - Numbers
    - Strings
    - Booleans

## Datatypes in JavaScript

- JavaScript has dynamic typing, which means that we don't have to manually define data types of values stored in variables; unlike in C#, they are determined automatically.

- E.g.

    ```js
    let myName = "Mikel";
    myName = "Rodriguo";
    myName= 9999;
    ```

```js
let myName = "Mikel";
```

- Here we define/ create a new variable with a value.

```js
myName = "Rodriguo";
```

- Here we can change the value of the variable.

```js
myName= 9999;
```

- We can also change the value to be a different data type, since JavaScript has dynamic typing.

## "typeof("");" Statement

- Tells us the data types of the parameter/ argument in a pop-up message.

```js
typeof("mikel");
```
- *OUTPUT*: "string"

```js
typeof(true);
```
- *OUTPUT*: "boolean"

```js
typeof(1+3);
```
- *OUTPUT*: "number"


## Strings

- A series of characters.

```js
let firstName = "Bro";

console.log(typeof firstName);
```
- Used to display the data type of a variable. 

- In this example, the console will display 'string' as the value `Bro` of the variable `firstName` is a string/ series of characters.

```js
let firstName = "Bro";
let favoiteFood = "pizza";
let email = "Bro@gmail.com"

console.log(firstName);
```

- The console of the inspect window for the webpage will display 'Bro'.

```js
let firstName = "Bro";
let favoiteFood = "pizza";
let email = "Bro@gmail.com"

console.log(firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoiteFood}`);
console.log(`Your email is ${email}`);
```

```js
let firstName = "Bro";
let favoiteFood = "pizza";
let email = "Bro123@gmail.com"

console.log(firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoiteFood}`);
console.log(`Your email is ${email}`);
```

- Numbers can also be used for string variables, however, these numbers cannot be used in any math because string variables have a different nature to/ act differently to number variables.


## Booleans

- They are either 'True' or 'False'.

```js
let online = true;

console.log(typeof online);
```
- In this example, the console will display 'boolean' as the value `true` of the variable `online` is a boolean.

```js
let online = true;

console.log(`Bro is online: ${online}`);
```

- The console will display "Bro is online: true".

```js
let online = false;

console.log(`Bro is online: ${online}`);
```

- The console will display "Bro is online: false".


### They are used as a sort of flag

```js
let online = false;
let forSale = true;

console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
```

- The console will display "Bro is online: false" and "Is this car for sale: true".

```js
let online = false;
let forSale = false;

console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
```

- The console will display "Bro is online: false" and "Is this car for sale: false".

```js
let isStudent = true;

console.log(`Is this student Enrolled: ${isStudent}`);
```

- The console will display "Is this student Enrolled: true".

- Not typically used as direct output, but instead used with 'if' statements.


# Type Conversion [[🏠]](#index)

- Changing the datatype of a value to another.

- Datatypes include strings, numbers, booleans, etc.

- Type conversion is changing strings to numbers, numbers to booleans, strings to booleans, etc (you get the idea).

- Important when accepting user input, *for example in a case where a user input is required to be used in an arithmetic expression. (this is **string to number type conversion***) or when needing to check whether the user input was completed or not (this is **string to boolean type conversion**)*.

```js
let age = window.prompt("How old are you?");

age+=1;

console.log(age);
```

- **If the user input is '17', the console will show the value '171' (not '18')**.

- Although the statement `age+=1;` is present, it is not equal to (user input is '17' so) 17 + 1 = 18. 

- This is because, any user input is considered/ treated as string values, meaning the value '17' is a series of characters.

- Therefore, `age+=1;` will not result in '17 + 1 = 18', but rather '1' will be **appended** onto the end of the string ('17'); in another sense, '1' will be added to the end of '17' (like 17 + 1 = 171).

```js
let age = window.prompt("How old are you?");

age+=1;

console.log(age);
console.log(typeof age);
```

- **If the user input is '17', the console will show the values '171' and 'string'**.

- (This is just evidence to the above explanation)

```js
let age = window.prompt("How old are you?");

age = Number(age);

age+=1;

console.log(age);
```

- To carry out any arithmetic functions on a value input by the user, the datatype of the value must be converted from 'string' to 'number'.

- This type conversion can be done using the `Number(age)` function.

- **If the user input is '17', the console will now show the value '18', as 17 + 1 = 18**.

- This is due to the datatype of the user input value (e.g. '17') being converted from 'string' (all user input values are considered strings) to 'number' by the `age = Number(age);` statement.

```js
let age = window.prompt("How old are you?");

age = Number(age);

console.log(age);
console.log(typeof age);
```

- If the user input is '17', the console will now show the values '17' and 'number'.

- (This is just evidence to the above explanation)

## String Variable Conversion

```js
let x = "Pizza";

x = Number(x);

console.log(x);
console.log(typeof x);
```

- The console will display 'NaN' and 'number'.

```js
let y = "Pizza";

x = String(y);

console.log(y);
console.log(typeof y);
```

- The console will display 'Pizza' and 'string'.

- 'Pizza' is already a series of characters and so a string, so the `x = String(y);` does not really do much.

```js
let z = "Pizza";

z = Boolean(z);

console.log(z);
console.log(typeof z);
```

- The console will display 'true' and 'boolean'.

- When you convert any value within the [""] of the `let z = "Pizza";` statement to boolean, in the presence of the `console.log(z);`, the console will display 'true'.

## Number Variable Conversion

```js
let x = "0";

x = Number(x);

console.log(x);
console.log(typeof x);
```

- The console will display '0' and 'number'.

```js
let y = "0";

y = String(y);

console.log(y);
console.log(typeof y);
```

- The console will display '0' and 'string'.

```js
let z = "0";

z = Boolean(z);

console.log(z);
console.log(typeof z);
```

- The console will display 'true' and 'boolean'.

## Empty Variable Conversion

```js
let x = "";

x = Number(x);

console.log(x);
console.log(typeof x);
```

- The console will display '0' and 'number', because when an empty variable is converted to number, it is '0' because technically that variable is holding 'zero'/ '0' values.

```js
let y = "";

y = String(y);

console.log(y);
console.log(typeof y);
```

- The console will display only 'string', as there is nothing to convert.

```js
let z = "";

z = Boolean(z);

console.log(z);
console.log(typeof z);
```

- The console will display 'false' and 'boolean', as the variable `z` is not technically holding any value, it is considered '0' and '0' is technically 'false' in boolean.

- This is one way to know whether a user input is empty, because an empty user input is most likely an empty string, which can be considered '0', which is false in boolean. So, using this principle, a user can be alerted 'false' is returned when converted to boolean, which means the user input is empty/ user has not made an input.

## Unassigned Variable Conversion

```js
let x;

x = Number(x);

console.log(x);
console.log(typeof x);
```

- The console will display 'NaN' and 'number'.

```js
let y;

y = String(y);

console.log(y);
console.log(typeof y);
```

- The console will display 'undefined' and 'string'.

```js
let z;

z = Boolean(z);

console.log(z);
console.log(typeof z);
```

- The console will display 'false' and 'boolean'.

## Datatype Conversion and Coercion

- Datatype conversion: This is when we manually convert from one datatype to another.

    - `Number()` function: converts a string to a number.
    
    - `String()` function: converts a number to a string.

```js
const inputYear = '1991';

console.log((inputYear) + 18);
```
- *OUTPUT*: 199118

- `1991` this is a string datatype.

- 199118 (concatenates the string)

```js
const inputYear = '1991';

console.log(Number(inputYear) + 18);
```
- *OUTPUT*: 2009

```js
const inputYear = '1991';

console.log(String(19));
```


## Truthy and Falsy Values

- Falsy values: 

    - They are values that are not exactly false, but will become false when we try to convert them into boolean. 
    
    - There are 5 falsy values in JavaScript:
    
        - 0
        
        - ' '
        
        - Undefined,
        
        - Null,
        
        - NaN

- Truthy values:

    - They are values that will be converted to true. 
    
    - These values are any number that is not zero, or any string that is not empty string ('').


### Conversion to Boolean

- `Boolean(0)` function converts whats inside its parameter to a Boolean.


```js
console.log(Boolean(0));
```
- *OUTPUT*: false

```js
console.log(Boolean(undefined));
```
- *OUTPUT*: false

```js
console.log(Boolean('Johns'));
```
- *OUTPUT*: true

```js
console.log(Boolean({}));
```
- *OUTPUT*: ture

```js
console.log(Boolean(''));
```
- *OUTPUT*: false


### Datatype Coercion

- **Data coercion**: it is when JavaScript automatically converts datatypes from behind the scenes for us. 

    - This happens whenever the operator is dealing with two values that have different types.

```js
console.log("I am " + 23 + "years old.");
```

- Here, the `+` operator triggers a coercion to string, on the number 23. 

- `+` operator converts numbers to strings.

```js
console.log("I am " + String(23) + "years old.");
```
- We write the program like this if JavaScript doesn't have datatype coercion.

```js
console.log('23' - '10' - 3);
```
- *OUTPUT*: 10

- The `-` operator triggers a coercion to number on the strings; in other words, converts numbers to strings.


```js
console.log('23' * '10');
```
- *OUTPUT*: 230

- The `*` operator triggers a coercion to number on the strings; in other words, converts numbers to strings.

```js
console.log('23' > '18');
```
- *OUTPUT*: true

- The `>` operator triggers a coercion to number on the strings; in other words, converts numbers to strings.


- Summary: 

    - `+` operator converts numbers to strings.
    
    - All other operators (`-`, `/`, `<`, etc) convert strings to numbers.

- E.g.

```js
let n = '1' + 1;
```
- `+` operator causes datatype coercion to a string; '11'.

```js
n = n - 1;
```
- `-` operator causes datatype coercion to a number; '10'.

```js
console.log(n);
```
- *OUTPUT*: 10

```js
console.log(2 + 3 + 4 + '5');
```
- *OUTPUT*: 95

- The `+` makes the output a string type.

```js
console.log('10' - '4' - '3' - 2 + '5');
```
- *OUTPUT*: 15

- The `+` operator at the end makes the output a string type.

```js
console.log(5 + 6 + '4'+ 9 - 4 - 1);
```
- *OUTPUT*: 1144

## Automatic Datatype Coercion of Booleans Behind the Scenes

- JavaScript automatically converts to Booleans automatically behind the scenes (datatype coercion).

```js
const money = 0;

if (money) { 
  console.log("Don't spend it all");
} else {
  console.log("Go get a job!");
}
```
- *OUTPUT*: Go get a job!

- `const money = 0;` - Falsy value.

- Datatype gets converted automatically from 'number' datatype to 'boolean' datatype (datatype coercion).

Output is "Go get a job!" because 0 is a falsy value which when converted to a boolean become false.

```js
const height;

if (height) {
  console.log("Height is DEFINED");
} else {
  console.log("Height is UNDEFINED");
}
```
- *OUTPUT*: Height is UNDEFINED!

- `const height;` - Undefined; falsy value.

- Because height variable has no value and thus is undefined, which is a falsy value that when converted to a boolean becomes false. Thus trigerring the `else {}` statement.

```js
const height = 100; 

if (height) {
  console.log("Height is DEFINED");
} else {
  console.log("Height is UNDEFINED");
}
```
- *OUTPUT*: Height is DEFINED!

- `const height = 100;` - truthy value.

- Because height variable has a number value, which means it a truthy value that when converted to a boolean becomes true. Thus trigerring the if block.


# Constants [[🏠]](#index)

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


# If Statements [[🏠]](#index)

- `If` statements - if a condition is true, execute some code; if not, do something else.

- A boolean variable can be the condition itself because it evaluates to be true or false.

```js
let age = 25;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
```
- *OUTPUT*: You are old enough to enter this site

```js
let age = 13;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}
```
- *OUTPUT*: You must be 18+ to enter this site

```js
let time = 9;
if(time < 12){
    console.log("Good morning!");
}
else{
    console.log("Good afternoon!");
}
```
- *OUTPUT*: Good morning!

```js
let time = 12;
if(time < 12){
    console.log("Good morning!");
}
else{
    console.log("Good afternoon!");
}
```
- *OUTPUT*: Good afternoon!

```js
let time = 14;
if(time < 12){
    console.log("Good morning!");
}
else{
    console.log("Good afternoon!");
}
```
- *OUTPUT*: Good afternoon!

```js
let isStudent = true;
if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student!");
}
```
- *OUTPUT*: You are a student!

```js
let isStudent = false;
if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student!");
}
```
- *OUTPUT*: You are NOT a student!

```js
let age = 25;
let hasLicense = false;

if(age >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("You do not have your license yet!");
    }
}
else{
    console.log("You must be 16+ to have a license");
}
```
- *OUTPUT*: You are old enough to drive
            You do not have your license yet!

```js
let age = 25;
let hasLicense = true;

if(age >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("You do not have your license yet!");
    }
}
else{
    console.log("You must be 16+ to have a license");
}
```
- *OUTPUT*: You are old enough to drive
            You have your license!

```js
let age = 14;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
else if(age < 0){
    console.log("Your ag can't be below 0");
}
else{
    console.log("You must be 18+ to enter this site");
}
```
- *OUTPUT*: You must be 18+ to enter this site

```js
let age = 25;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
else if(age < 0){
    console.log("Your ag can't be below 0");
}
else{
    console.log("You must be 18+ to enter this site");
}
```
- *OUTPUT*: You are old enough to enter this site

```js
let age = 0;
if(age >= 100){
    console.log("You are TOO OLD to enter this site");
}
else if(age == 0){
    console.log("You can't enter. You were just born.")
}
else if(age >= 18){
    console.log("You are old enough to enter this site");
}
else if(age < 0){
    console.log("Your ag can't be below 0");
}
else{
    console.log("You must be 18+ to enter this site");
}
```
- *OUTPUT*: You can't enter. You were just born.

```js
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement")
let age = 0;

mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age);
    
    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}
```
- "Index.html" file:

    ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <label>Enter your age:</label><br>
                <input type="text" id="myText"><br>
                <button type="submit" id="mySubmit">submit</button>
                <p id="resultElement"></p>
                <script src="index.js"></script>
            </body>
    </html>
    ```


# Switches [[🏠]](#index)

- An efficient replacement to many else-if statements.

```js
let dayNumber = 1;
switch(day){
    case 1: 
        console.log("It is Monday");
        break;
    case 2: 
        console.log("It is Teusday");
        break;
    case 3: 
        console.log("It is Wednesday");
        break;
    case 4: 
        console.log("It is Thursday");
        break;
    case 5: 
        console.log("It is Friday");
        break;
    case 6: 
        console.log("It is Saturday");
        break;
    case 7: 
        console.log("It is Sunday");
        break;
    default:
        console.log(`${dayNumber} is not a day`)
}
```
- *OUTPUT*: It is Monday

- `break;`:

    - Important because, once a case matches, the code underneath it will be executed; in the absence of `break;` statements, the execution will cascade down and all the cases following the matching case will also be executed. 

    - So the `break;` statement is to 'break' out/ exit the switch once the code indented underneath a matching case is executed.

- Example:

```js
// Score related switch (Ex)
let testScore = 92;
let letterGrade;
switch(true){
    // This will check whether a condition in some case evaluates to true
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade =B;
        break;
    case testScore >= 70:
        letterGrade = C;
        break;
    case testScore >= 60:
        letterGrade = D;
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);
```
- *OUTPUT*: A

```js

switch(dayNumber){
    case 1: 
        console.log("It is Monday");
        break;
    case 2: 
        console.log("It is Teusday");
        break;
    case 3: 
        console.log("It is Wednesday");
        break;
    case 4: 
        console.log("It is Thursday");
        break;
    case 5: 
        console.log("It is Friday");
        break;
    case 6: 
        console.log("It is Saturday");
        break;
    case 7: 
        console.log("It is Sunday");
        break;
    default:
        console.log(`${dayNumber} is not a day`)
}

```
- *OUTPUT*: pizza is not a day


# Logical Operators [[🏠]](#index)

- Used to combine or manipulate boolean values (true or false)

    - AND = &&
    - OR = ||
    - NOT = !

## AND (&&) Operator

- Used to check more than one condition;
- Both conditions must be met to execute something.

### Without Logical Operators

    ```js
    const temp = 20;
    
    if (temp > 0){
        window.alert("The weather is GOOD");
    }
    else if (temp <= 30){
        window.alert("The weather is GOOD");
    }
    else{
        window.alert("The weather is BAD");
    }
    ```

### With Logical Operators

    ```js
    const temp = 20;
    
    if (temp > 0 && temp <= 30){
        window.alert("The weather is GOOD");
    }
    else{
        window.alert("The weather is BAD");
    }
    ```

## OR (||) Operator

- Only one condition has to be met to execute something.

```js
const temperature = 20;

if (temperature || 0 && temperature <= 30){
    window.alert("The weather is GOOD"); 
    // If even one of the two conditions are true, this code will be executed
}
else{
    window.alert("The weather is BAD");
}
```

## NOT (!) Operator

- Switch a Boolean value from true -> false or from false -> true.

```js
const isSunny =  true;

if(!isSunny){
    window.alert("It is CLOUDY!");
}
else{
    window.alert("It is SUNNY!");
}
```

# Strict Equality [[🏠]](#index)















































































































































# Arithmetic Operators [[🏠]](#index)

- **Operands** - They are values, variables, etc.

- **Operators** - They include, but are not limited to '+', '-', '*', '/'.

- *Example*:
    
    11 = X + 5

    - 11, X, and 5 are **operands**.
## Addition

```js
let students = 30;

students = students + 1;

console.log(students);
```

- The variable `students` has been assigned the value `30`.

- This will display '31' in the  console, because 30 + 1 = 31.

## Subtraction

```js
let students = 30;
students = students - 1;
console.log(students);
```

## Multiplication

```js
let students = 30;
students = students * 2
console.log(students);
```

## Division

```js
let students = 30;
students = students / 2
console.log(students);
```

## Exponent

```js
let students = 30;
students = students ** 2;
console.log(students);
```

- ['**'] represents exponents/ ['**'] is the exponent operator.

- This will display '900' in the console, because 30^2 = 900 (also equal to 30 × 30 = 900 ).

```js
let students = 30;
students = students ** 3;
console.log(students);
```

## Modulus

```js
let students = 30;
students = students % 2;
console.log(students);
```

- '%' represents modulus/ '%' is the modulus operator.

- A modulus gives the remainder of a division.

- This will display '0' in the console, because 30 can be equally divided by two. 

```js
let students = 31;
students = students % 2;
console.log(students);
```

- This will display '1' in the console, because the remainder is 1 when 31 is divided to 2 equal groups.

```js
let students = 31;
let extraStudents = students % 2;
console.log(extraStudents);
```

- When using the modulus operator, it is recommended creating a different operator entirely.

- This will now still display '1' in the console (because the remainder is 1 when 31 is divided to 2 equal groups).


# Augmented Assignment Operators [[🏠]](#index)

## Assignment Operators

```js
let students = 30;
students += 1;
console.log(students);
```

- The variable `students` is now assigned the value '30' and acts as that value.

- [+] - **Addition operator**.

### Subtraction

```js
let students = 30;
students -= 1;
console.log(students);
```

- [-] - **Subtraction operator**.

### Multiplication

```js
let students = 30;
students *= 2;
console.log(students);
```

- [*] - **Multiplication operator**.

### Division

```js
let students = 30;
students /= 2;
console.log(students);
```

- [/] - **Division operator**.

### Exponent

```js
let students = 30;
students **= 2;
console.log(students);
```

- [**] - **Exponent operator**.

### Modulus

```js
let students = 30;
students %= 2;
console.log(students);
```

- • [%] - **Modulus operator**.

- The console log will display '0' because 30 can be equally divided to 2.

```js
let students = 30;
students %= 2;
console.log(students);
```

- The modulus operator can be helpful in the event you are having to find whether a number is even or odd. 

- The console will display '0' because 30 can equally be divided to two/ or divided by two; this shows that 30 is an even number.

```js
let students = 31;
students %= 2;
console.log(students);
```

- The console will display '1' (because 31 cannot be equally divided to two parts); this shows that 31 is an ***odd*** number.

### Increment and Decrement

```js
let students = 30;
students++;
console.log(students);
```

- [++] - **Increment operator**.

- Increases the value (*e.g.* '30') of the specified operator (*e.g.* `students`) by 1.

- The console will display '31', as 30 + 1 = 31. 

```js
let students = 30;
students--;
console.log(students);
```

- [--] - **Decrement operator**.

- Decreases the value (*e.g.* '30') of the specified operator (e.g. `students`) by 1.

- The console will display '29', as 30 - 1 = 29 .

### Operator Precedence

- Given a very complex equation, for example `let result = 1 + 2 * 3 + 4 ** 2;`, operator precedence is in which order each part of the equation is supposed to be solved.

- Operator precedence:

    1. Parenthesis [()]
    2. Exponents [**]
    3. Multiplication [*], division [/], & modulo [&]
    4. Addition [+] & subtraction [-]

```js
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
```

- The console will display '23', because, starting from the left and working through to the right following the operator procedence, 42 = 16, 2 × 3 = 6 and finally 16 + 6 + 1 = 23.

    1 + 2 × 3 + 42;
    1 + 2 × 3 + 16;
    1 + 6 + 16; 
    1 + 22;
    23

```js
let result = 12 % 5 + 8 / 2;
console.log(result);
```

12 % 5 + 8 ÷ 2;
2 + 8 ÷ 2;
2 + 4;
6

- The console will display '6'.

```js
let result = 6 / 128;
console.log(result);
```

- The console will display '0.046875'.


# Accepting User Inputs [[🏠]](#index)

- Accepting user inputs:

    - Easy method = Window prompt.

    - Professional method = HTML textbox with a button.

## Window Prompt Method

- For this, `[variable] = window.prompt("[Text displayed on window prompt]");` statement is used.

```js
let username;
username = window.prompt("What's your username?");
console.log(username);
```

- Here, the variable `username` has been **declared**, but not yet **assigned**.

- The `username = window.prompt("What's your username?");` will cause a window prompt to appear with the text 'What's your username?' along with a text box in which the user can type in anything (in this case possibly something related to 'username') which will then be assigned as the value for the variable `username`.

- The console will display whatever the text that was typed in the window prompt. 

- *For example:* If the user input was 'Ryomen Sukuna', then the console will display the text 'Ryomen Sukuna'.

```js
let username = window.prompt("What's your username?");
console.log(username);
```

- The **declaration** and **assignment** can be written in a single statement. 

- Similar to the above, the console will display whatever the text that was typed in the window prompt. 

- *For example:* If the user input was 'Ryomen Sukuna', then the console will display the text 'Ryomen Sukuna'.


# Math Objects [[🏠]](#index)

- `Math` - a built-in object that provides a collection of properties and methods.

## Rounding

```js
let result = Math.round(value);

result = Math.floor(value);
result = Math.ceil(value);
result = Math.trunc(value);
```

- `.round()` - rounds to the nearest integer.
- `.floor()` - rounds down (toward -∞).
- `.ceil()` - rounds up (toward +∞).
- `.trunc()` - removes the decimal part (no rounding).

## Exponents and Roots

```js
result = Math.pow(base, exponent);
result = Math.sqrt(value);
```

- `.pow(base, exponent)` - base^exponent (e.g. 2^3 = 8).
- `.sqrt()` - square root (e.g. √25 = 5).

## Logarithms

```js
result = Math.log(value);
```

- `.log()` - natural log (base e).

## Trigonometric (Radian Input)

```js
result = Math.sin(radians);     // Sine of angle
result = Math.cos(radians);     // Cosine of angle
result = Math.tan(radians);     // Tangent of angle
```

## Absolute Value and Sign

```js
result = Math.abs(value);       // Removes negative sign
result = Math.sign(value);      // Returns -1, 0, or 1
```

## Extremes
```js
result = Math.max(v1, v2, v3);      // Largest of the values
result = Math.min(v1, v2, v3);      // Smallest of the values
```


# Checked Property [[🏠]](#index)

- `.checked` - property that determines the checked state of an HTML checkbox or radio button element.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>checked-property</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <input type="checkbox" id="myCheckBox">
        <label for="myCheckBox">Subscribe</label><br><br>

        <input type="radio" id="visaBtn" name="card">
        <label for="visaBtn">Visa</label><br>
        
        <input type="radio" id="masterCardBtn" name="card">
        <label for="visaBtn">MasterCard</label><br>
        
        <input type="radio" id="payPalBtn" name="card">
        <label for="visaBtn">PayPal</label><br><br>

        <button type="submit" id="mySubmit">Submit</button>

        <p id="subResult"></p>
        <p id="paymentResult"></p>

        <script src="index.js"></script>
    </body>
</html>
```

```css
body{
    font-family: verdana;
    font-size: 2em;
}

#mySubmit{
    font-size: 1em;
}
```

```js
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResults");
mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if (masterCardBtn.checked){
        masterCardBtn.textContent = `You are paying with MasterCard`;
    }
    else if (payPalBtn.checked){
        payPalBtn.textContent = `You are paying with Paypal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}
```


# Ternary Operator [[🏠]](#index)

- A shortcut to `if{}` and `else{}` statements.
- Helps to assign a variable based on a condition.
- condition? codeIfTrue : codeIfFalse

```js
let age = 21;
let message = age >= 18 ? "You're an adult!" : "You're a minor";
console.log(message);
```
- *OUTPUT*: You're an adult!

```js
let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good Afternoon!";
console.log(greeting);
```
- *OUTPUT*: Good Afternoon!

```js
let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good Afternoon!";
console.log(greeting);
```
- *OUTPUT*: Good morning!

```js
let isStudent = true;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);
```
- *OUTPUT*: You are a student

```js
let isStudent = false;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);
```
- *OUTPUT*: You are NOT a student

```js
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * discount/100}`); 
```
- *OUTPUT*: Your total is $112.5

```js
let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * discount/100}`);
```
-*OUTPUT*: Your total is $99


# String Methods [[🏠]](#index)

## Getting the First Character of a String

```js
let userName = "BroCode";

console.log(userName.charAt(0));    // 1st character = 0,
console.log(userName.charAt(1));    // 2nd character = 1,
console.log(userName.charAt(2));    // 3rd character = 2, so on...
```
- *OUTPUT*: 
    B
    r
    o

## Getting the Index of the First Occurrence of a Character in a String

```js
let userName = "BroCode";

console.log(userName.indexOf("o"));
```
- *OUTPUT*: 2

## Getting the Index of the Last Occurrence of a Character in a String

```js
let userName = "BroCode";

console.log(userName.lastIndexOf("o"));
```
- *OUTPUT*: 4

## Getting the Length of a String

```js
let userName = "BroCode";

console.log(userName.length); // length is not necessarily a method, but is very similar
```
- *OUTPUT*: 7

## Removing Whitespace from a String

```js
let userName2 = "   Bro Code ";

console.log(userName2.trim());
```
-*OUTPUT*: Bro Code

## Converting Letter Characters of a String to Uppercase

```js
let userName3 = "Bro Code";

userName3 = userName3.toUpperCase();

console.log(userName3);
```
- *OUTPUT*: BRO CODE

## Converting Letter Characters of a String to Lowercase

```js
let userName4 = "BRO CODE";

userName4 = userName4.toLowerCase();

console.log(userName4);
```
- *OUTPUT*: bro code

## Repeating a String of Characters

```js
let userName5 = "BroCode";

let userName5r1 = userName5.repeat(1);
let userName5r2 = userName5.repeat(2);
let userName5r3 = userName5.repeat(3);

console.log(userName5r1);
console.log(userName5r2);
console.log(userName5r3);
```
- *OUTPUT*:
    BroCode
    BroCodeBroCode
    BroCodeBroCodeBroCode

## Determining Whether a String Starts with a Specific Character

```js
let userName6 = "BroCode";

let result = userName6.startsWith(" "); 
    // returned value is a boolean
    // Checking wether the string is starting an empty space.

console.log(result);

if(result){
    console.log("Your username cannot begin with an empty space (' ')");
}
else{
    console.log(userName6);
}
```
-*OUTPUT*:
    false
    BroCode

```js
let userName7 = " BroCode";

let result1 = userName7.startsWith(" ");

console.log(result1);

if(result1){
    console.log("Your username cannot begin with an empty space (' ')");
}
else{
    console.log(userName7);
}
```
- *OUTPUT*: 
    true
    Your username cannot begin with an empty space ('')

## Determining Whether a String Ends with a Specific Character

```js
let userName8 = "BroCode";

let resul2 = userName8.endsWith(" ");

console.log(result);

if(resul2){
    console.log("Your username cannot begin with an empty space (' ')");
}
else{
    console.log(userName8);
}
```
- *OUTPUT*: 
    false
    BroCode

```js
let userName9 = "BroCode ";

let result3 = userName9.endsWith(" ");

console.log(result3);

if(result3){
    console.log("Your username cannot end with an empty space (' ')");
}
else{
    console.log(userName9);
}
```
- *OUTPUT*: 
    true
    Your username cannot end with an empty space (' ')

## Determining Whether the String Contains a Specific Character

```js
let userName10 = "BroCode";

let resul4 = userName10.includes(" ");

console.log(result);

if(resul4){
    console.log("Your username cannot contain an empty space (' ')");
}
else{
    console.log(userName10);
}
```
-*OUTPUT*:
    false
    BroCode

```js
let userName11 = "Bro Code";

let result5 = userName11.includes(" ");

console.log(result5);

if(result5){
    console.log("Your username cannot contain an empty space (' ')");
}
else{
    console.log(userName11);
}
```
- *OUTPUT*:
    true
    Your username cannot contain an empty space (' ')

## Replacing Characters from a String 

- `.replaceAll()`
- `.replaceAll(<character-to-replace>, <replacement-character>)`

```js
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);
```
- *OPEN*: 1234567890

```js
let phoneNumber2 = "987-654-321";

phoneNumber2 = phoneNumber2.replaceAll("-", "/");

console.log(phoneNumber2);
```
- *OPEN*: 987/654/321

## Padding String, Starting from the Front, with a Specific Character Until the Max Character Limit of the String is Met

- `.padStart()`
- `.padStart(<character-limit-of-string>, "<character-to-pad-with>")`

```js
let phoneNumber3 = "123-456-7890";

phoneNumber3 = phoneNumber3.padStart(15, "0");

console.log(phoneNumber3);
```
-*OPEN*: 000123-456-7890

## Padding String, Starting from the Back, with a Specific Character Until the Max Character Limit of the String is Met

-`.padEnd()`
- `.padEnd(<character-limit-of-string>, "<character-to-pad-with>")`

```js
let phoneNumber4 = "123-456-7890";

phoneNumber4 = phoneNumber4.padEnd(15, "0");

console.log(phoneNumber4);
```
-*OUTPUT*: 123-456-7890000


# STRING SLICING

- Process of creating a substring from a portion of another string.

- (Does not alter the original string).

- Syntax:
    
    `<string>.slice(<start-index (inclusive)>, <end-index (exclusive)>)`

```js
const fullName = "Bro Code";
let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);
console.log(firstName);
console.log(lastName);
```
- *OUTPUT*: Bro
            Code

## Negative Index

- You begin at the end, then you work your way towards the beginning by decreasing the number.

```js
const fullName1 = "Bro Code";
let firstChar = fullName1.slice(0, 1);
let lastChar = fullName1.slice(-1);
console.log(firstChar);
console.log(lastChar);
```
-*OUTPUT*:  B
            e

## String Slicing + Index Submethod

- This makes the above program more dynamic.

```js
const fullName2 = "Broseph Code";
let firstName1 = fullName2.slice(0, fullName2.indexOf(" "));
let lastName1 = fullName2.slice(fullName2.indexOf(" ") + 1);
console.log(firstName1);
console.log(lastName1);
```
-*OUTPUT*:  BroSeph
            Code

## Exercises Including Emails

```js
const email = "Bro1@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension);
```
- *OUTPUT*: Bro1
            gmail.com


# Method Chaining [[🏠]](#index)

- Calling one method after another in one continuous line of code.

## No Method Chaining

```js
let username = window.prompt("Enter your username: ");

username = username.trim(); // Removes white space before and after the name
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1); // Slices everything after the first character
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

window.alert(username);
```

## With Method Chaining

```js
let username = window.prompt("Enter your username: ");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

window.alert(username);
```

- **TIP**: Don't overuse method chainingl it tends to get confusing.


# While Loops [[🏠]](#index)

- Repeats some code WHILE some condition true.

```js
let username = "";

while(username === ""){
    username = window.prompt(`Enter your name`);
}

window.alert(`Hello ${username}`);
```

```js
let username = "";

while(username === "" || username === null){ 
    username = window.prompt(`Enter your name`);
}

window.alert(`Hello ${username}`);
```

- While ONE of this conditions is true, execute the code forever.

```js
let username;

do { 
    username = window.prompt(`Enter your name`); 
} while(username === "" || username === null)

window.alert(`Hello ${username}`);
```

- Another variation of the while loop.
- This code will be executed ATLEAST ONCE before checking the conditions.

```js
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        window.alert(`You are logged in!`);
    }
    else{
        window.alert(`Invalid credentials! Please try again`);
    }
}
```

```js
let loggedIn = false;
let username;
let password;

do {
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);
    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        window.alert(`You are logged in!`);
    }
    else{
        window.alert(`Invalid credentials! Please try again`);
    }
} while(!loggedIn)
```


# Spread Operator [[🏠]](#index)

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


# Rest Parameters [[🏠]](#index)

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


# Callbacks [[🏠]](#index)

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


# Foreach() [[🏠]](#index)

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


# .map() [[🏠]](#index)

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


# .filter() [[🏠]](#index)

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


# .reduce() [[🏠]](#index)

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


# Function Expressions [[🏠]](#index)

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


# Arrow Functions [[🏠]](#index)

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



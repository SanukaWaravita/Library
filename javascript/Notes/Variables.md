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

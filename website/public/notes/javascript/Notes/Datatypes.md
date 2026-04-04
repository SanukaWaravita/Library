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

# Ternary Operator

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

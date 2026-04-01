# If Statements

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

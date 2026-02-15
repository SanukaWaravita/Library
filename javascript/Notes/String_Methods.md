# String Methods

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


# Method Chaining

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

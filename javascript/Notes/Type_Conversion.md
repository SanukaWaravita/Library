# Type Conversion

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

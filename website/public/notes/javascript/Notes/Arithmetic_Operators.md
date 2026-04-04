# Arithmetic Operators

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


# Augmented Assignment Operators

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

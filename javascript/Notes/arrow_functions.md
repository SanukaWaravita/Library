[< Back to Station](../station.md)

---

# Arrow Functions

- An **arrow function** is a concise way to write *function expressions*.

- They are good for simple functions that you use only once.

- Syntax: `(parameters) => some code`

---

## Basic Arrow Function (No Parameters)

```javascript
const hello = () => console.log("Hello");

hello();
```

- Output:

    ```
    Hello
    ```

- The statement `const hello = () => console.log("Hello");` declares a constant `hello` and assigns it an arrow function that takes no parameters and logs `"Hello"` to the console.

- The statement `hello();` calls the arrow function, which outputs `Hello`.

---

## Arrow Function with One Parameter

```javascript
const hello = (name) => console.log(`Hello ${name}`);

hello("Gojo");
```

- Output:

    ```
    Hello Gojo
    ```

- The statement `const hello = (name) => console.log(`Hello ${name}`);` declares an arrow function that takes one parameter `name` and uses a *template literal* to log a greeting.

- The statement `hello("Gojo");` calls the function with `"Gojo"` as the argument, outputting `Hello Gojo`.

---

## Arrow Function with Multiple Statements

```javascript
const hello = (name) => {console.log(`Hello ${name}`)
                         console.log(`You are old!`)};

hello("Gojo");
```

- Output:

    ```
    Hello Gojo
    You are old!
    ```

- When an arrow function has **multiple statements**, you need to wrap them in curly braces `{}`.

- The function logs two messages: the greeting and `"You are old!"`.

---

## Arrow Function with Multiple Parameters

```javascript
const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old!`)};

hello("Gojo", 21);
```

- Output:

    ```
    Hello Gojo
    You are 21 years old!
    ```

- The arrow function takes two parameters: `name` and `age`.

- The statement `hello("Gojo", 21);` passes `"Gojo"` as `name` and `21` as `age`, and the function logs both messages using those values.

---

## Arrow Functions with setTimeout

```javascript
setTimeout( () => console.log("Hello"), 3000);
```

- Output:

    ```
    Hello
    ```

- This displays `"Hello"` after 3 seconds (3000 milliseconds).

- The arrow function `() => console.log("Hello")` is passed as a *callback* to `setTimeout`.

- This is the same as writing it with a traditional function expression:

```javascript
setTimeout(function()
{
    console.log("Hello");
}, 3000);
```

---

## Arrow Functions with map (Squares)

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map( (element) => Math.pow(element, 2));

console.log(squares);
```

- Output:

    ```
    [1, 4, 9, 16, 25, 36]
    ```

- The `map()` method creates a new array by applying the arrow function to each element of `numbers`.

- The statement `Math.pow(element, 2)` raises each element to the power of `2`, producing the square of each number.

---

## Arrow Functions with map (Cubes)

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const cubes = numbers.map( (element) => Math.pow(element, 3));

console.log(cubes);
```

- Output:

    ```
    [1, 8, 27, 64, 125, 216]
    ```

- Similar to the squares example, but `Math.pow(element, 3)` raises each element to the power of `3`, producing the cube of each number.

---

## Arrow Functions with filter (Even Numbers)

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNums = numbers.filter( (element) => element % 2 === 0);

console.log(evenNums);
```

- Output:

    ```
    [2, 4, 6]
    ```

- The `filter()` method creates a new array containing only elements that pass the test in the arrow function.

- The expression `element % 2 === 0` checks if the element is *even* (divisible by `2` with no remainder).

---

## Arrow Functions with filter (Odd Numbers)

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const oddNums = numbers.filter( (element) => element % 2 !== 0);

console.log(oddNums);
```

- Output:

    ```
    [1, 3, 5]
    ```

- The expression `element % 2 !== 0` checks if the element is *odd* (has a remainder when divided by `2`).

---

## Arrow Functions with reduce

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const total = numbers.reduce( (accumulator, element) => accumulator + element);

console.log(total);
```

- Output:

    ```
    21
    ```

- The `reduce()` method reduces the array to a single value by applying the arrow function cumulatively.

- The `accumulator` holds the running total, and `element` is the current element being processed. Each iteration adds `element` to the `accumulator`.

- The final result is `1 + 2 + 3 + 4 + 5 + 6 = 21`.

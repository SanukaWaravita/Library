[< Back to Station](../station.md)

---

# Function Expressions

**Function declaration** defines a reusable block of code that performs a specific task.

**Function expressions** are a way to define functions as values or variables.

A benefit of function expressions is that you do not have to constantly think of function names -- you can just write a function and then forget about it. They are used in:

- Callbacks in asynchronous operations
- Higher-Order functions
- Closures
- Event Listeners

---

## Function Declaration vs Function Expression

### Function Declaration

```javascript
function hello()
{
    console.log("Hello");
}

hello();
```

- Output:

    ```
    Hello
    ```

- The `function hello()` statement defines a **function declaration** -- a named function that can be called anywhere in the code (even before the declaration, due to *hoisting*).
- Calling `hello()` executes the function body, which prints `"Hello"` to the console.

### Function Expression

```javascript
const hello = function()
{
    console.log("Hello");
}

hello();
```

- Output:

    ```
    Hello
    ```

- Here, a function is being assigned to a `const` variable called `hello`. This is a **function expression**.
- The function itself has no name -- it is an *anonymous function*. The variable `hello` holds a reference to it.
- You call it the same way as a function declaration: `hello()`. The result is identical.

---

## Using Function Expressions With `setTimeout`

### With a Named Function

```javascript
function hello()
{
    console.log("Hello");
}

setTimeout(hello, 3000);
```

- Output:

    ```
    Hello
    ```

- The `setTimeout(hello, 3000)` call schedules the `hello` function to run after `3000` milliseconds (3 seconds).
- Here we pass the named function `hello` as a callback to `setTimeout`.

### With an Anonymous Function Expression

```javascript
setTimeout(function()
{
    console.log("Hello");
}, 3000);
```

- Output:

    ```
    Hello
    ```

- Instead of defining a separate named function, we pass an *anonymous function expression* directly to `setTimeout`.
- `"Hello"` will be displayed after 3 seconds (3 sec = 3000 ms), just like the previous example.
- This approach avoids creating a named function that is only used once, keeping the code more concise.

---

## Using Function Expressions With `.map()`

### With a Named Function

```javascript
function square(element)
{
    return Math.pow(element, 2);
}

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(square);

console.log(squares);
```

- Output:

    ```
    [1, 4, 9, 16, 25, 36]
    ```

- The `square` function takes an `element` and returns it raised to the power of `2` using `Math.pow(element, 2)`.
- The `numbers.map(square)` call applies the `square` function to each element and returns a new array `squares` containing the results.

### With an Anonymous Function Expression

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element)
{
    return Math.pow(element, 2);
});

console.log(squares);
```

- Output:

    ```
    [1, 4, 9, 16, 25, 36]
    ```

- We do not necessarily need a function name -- this still works. The anonymous function is passed directly to `.map()` as a *function expression*.
- A benefit of this is that we are not polluting the global namespace with function names that are only used once.

---

## More `.map()`, `.filter()`, and `.reduce()` Examples

### Cubing With `.map()`

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const cubes = numbers.map(function(element)
{
    return Math.pow(element, 3);
});

console.log(cubes);
```

- Output:

    ```
    [1, 8, 27, 64, 125, 216]
    ```

- The anonymous function expression passed to `.map()` raises each element to the power of `3` using `Math.pow(element, 3)`.
- The result is a new array `cubes` containing the cubed values of each number.

### Filtering Even Numbers With `.filter()`

```javascript
const evenNums = numbers.filter(function(element)
{
    return element % 2 === 0;
});

console.log(evenNums);
```

- Output:

    ```
    [2, 4, 6]
    ```

- The anonymous function expression checks if `element % 2 === 0` (whether the number is even).
- The `.filter()` method returns a new array containing only the elements for which the callback returned `true`.

### Filtering Odd Numbers With `.filter()`

```javascript
const oddNums = numbers.filter(function(element)
{
    return element % 2 !== 0;
});

console.log(oddNums);
```

- Output:

    ```
    [1, 3, 5]
    ```

- The anonymous function expression checks if `element % 2 !== 0` (whether the number is odd).
- Only `1`, `3`, and `5` pass the test, so the `oddNums` array contains those three values.

### Summing With `.reduce()`

```javascript
const total = numbers.reduce(function(accumulator, element)
{
    return accumulator + element;
});

console.log(total);
```

- Output:

    ```
    21
    ```

- The `.reduce()` method reduces an entire array down to a single value. It takes a callback with two parameters: `accumulator` (the running total) and `element` (the current value).
- On each iteration, the callback returns `accumulator + element`, which adds the current element to the running total.
- The final result is `1 + 2 + 3 + 4 + 5 + 6 = 21`, stored in the `total` variable.
- All of these examples (`.map()`, `.filter()`, `.reduce()`) demonstrate how **function expressions** allow you to write inline, anonymous functions without cluttering the global namespace with one-time-use function names.

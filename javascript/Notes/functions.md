[< Back to Station](../station.md)

---

# Functions

A **function** is a *section of reusable code*. You declare your code once, and then call the function whenever you want to execute that code.

---

## Parameters and Arguments

```javascript
function happyBirthday(username, age){

    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);

}

happyBirthday("Batman", 18);
happyBirthday("SpongeBob", 30);
happyBirthday("Patrick", 37);
```

- Output:

    ```
    Happy Birthday to you!
    Happy Birthday to you!
    Happy Birthday dear Batman
    Happy Birthday to you!
    You are 18 years old
    Happy Birthday to you!
    Happy Birthday to you!
    Happy Birthday dear SpongeBob
    Happy Birthday to you!
    You are 30 years old
    Happy Birthday to you!
    Happy Birthday to you!
    Happy Birthday dear Patrick
    Happy Birthday to you!
    You are 37 years old
    ```

- The `function happyBirthday(username, age)` line declares a function named `happyBirthday` that accepts two **parameters**: `username` and `age`. Parameters are placeholders for the values the function will receive.

- Inside the function body, `console.log()` is used to print birthday messages. The template literal `` `Happy Birthday dear ${username}` `` inserts the value of `username` into the string, and `` `You are ${age} years old` `` inserts the value of `age`.

- The statement `happyBirthday("Batman", 18)` **calls** the function and passes `"Batman"` and `18` as **arguments**. Arguments are the actual values supplied to the function's parameters.

- The function is called three times with different arguments: `"Batman"` and `18`, `"SpongeBob"` and `30`, `"Patrick"` and `37`. Each call executes the same code block with different values.

- The **order of arguments** is very important -- `"Batman"` maps to `username` and `18` maps to `age` because of their positions.

---

## The Return Keyword

```javascript
function add(x, y){

    let result = x + y;
    return result;

}

let answer = add(2, 3);
console.log(answer);
console.log(add(2, 3));
```

- Output:

    ```
    5
    5
    ```

- The `function add(x, y)` declares a function that takes two parameters, `x` and `y`.

- The statement `let result = x + y;` creates a variable `result` that stores the sum of `x` and `y`.

- The `return result;` statement sends the value of `result` back to wherever the function was called. Without `return`, the function would return `undefined`.

- The statement `let answer = add(2, 3);` calls the function and stores the returned value (`5`) in the variable `answer`.

- The statement `console.log(add(2, 3));` calls the function directly inside `console.log()`, which also works because `add(2, 3)` evaluates to `5`.

### Simplified Version

```javascript
function add(x, y){

    return x + y;

}

console.log(add(2, 3));
```

- Output:

    ```
    5
    ```

- This is a simplified version of the `add` function. Instead of storing the sum in a variable first, we `return x + y` directly in one line. This is more concise and achieves the same result.

---

## Practical Examples

### The `isEven` Function

```javascript
function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }

}

console.log(isEven(12));
```

- Output:

    ```
    true
    ```

- The `function isEven(number)` declares a function that checks whether a given `number` is even.

- The expression `number % 2 === 0` uses the *modulus operator* (`%`) to get the remainder of dividing `number` by `2`. If the remainder is `0`, the number is even.

- If the condition is `true`, the function returns `true`; otherwise, it returns `false`.

- The statement `console.log(isEven(12))` calls the function with `12`. Since `12 % 2 === 0` is `true`, it prints `true`.

### Ternary Version

```javascript
function isEven(number){

    return number % 2 === 0 ? true : false;

}

console.log(isEven(12));
```

- Output:

    ```
    true
    ```

- This is a more concise version using a *ternary operator*. The expression `number % 2 === 0 ? true : false` evaluates the condition and returns `true` if it passes, or `false` if it does not -- all in one line.

---

### The `isValidEmail` Function

```javascript
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

}

console.log(isValidEmail("Bro@fake.com"));
console.log(isValidEmail("Brofake.com"));
console.log(isValidEmail("Zuckerborg@meta.com"));
```

- Output:

    ```
    true
    false
    true
    ```

- The `function isValidEmail(email)` declares a function that performs a simple email validation by checking whether the `email` string contains the `"@"` character.

- The `email.includes("@")` method returns `true` if the string contains `"@"`, and `false` otherwise.

- `"Bro@fake.com"` contains `"@"` so it returns `true`. `"Brofake.com"` does not contain `"@"` so it returns `false`. `"Zuckerborg@meta.com"` contains `"@"` so it returns `true`.

### Ternary Version

```javascript
function isValidEmail(email){

    return email.includes("@") ? true : false;

}

console.log(isValidEmail("Bro@fake.com"));
console.log(isValidEmail("Brofake.com"));
console.log(isValidEmail("Zuckerborg@meta.com"));
```

- Output:

    ```
    true
    false
    true
    ```

- This is the same `isValidEmail` function rewritten using the *ternary operator* for brevity. The expression `email.includes("@") ? true : false` returns `true` if the email contains `"@"`, and `false` otherwise.

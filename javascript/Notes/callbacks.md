[< Back to Station](../station.md)

---

# Callbacks

- A **callback** is a function that is passed as an argument to another function.

- Callbacks are used to handle *asynchronous operations* such as:
    - Reading a file
    - Network requests
    - Interacting with databases

- In other words: "Hey, when you're done, call this next."

---

```javascript
function hello(callback)
{
    console.log("Hello!");
    callback();
}

function goodbye()
{
    console.log("Goodbye!");
}

hello(goodbye);
```

- Output:

    ```
    Hello!
    Goodbye!
    ```

- The function `hello` takes a parameter called `callback`, which is expected to be a function.

- Inside `hello`, it first logs `"Hello!"` to the console, then calls `callback()`.

- The function `goodbye` simply logs `"Goodbye!"` to the console.

- The statement `hello(goodbye);` passes the `goodbye` function as the callback argument to `hello`. So after `"Hello!"` is printed, `goodbye()` is called, printing `"Goodbye!"`.

---

```javascript
function sum(callback, x, y)
{
    let result = x + y;
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}

sum(displayConsole, 1, 2);
```

- Output:

    ```
    3
    ```

- The function `sum` takes three parameters: a `callback` function, and two numbers `x` and `y`.

- It calculates the sum of `x` and `y`, stores it in `result`, then passes `result` to the `callback` function.

- The function `displayConsole` takes a `result` parameter and logs it to the console.

- The statement `sum(displayConsole, 1, 2);` calls `sum` with `displayConsole` as the callback, `1` as `x`, and `2` as `y`. The sum `3` is calculated and then passed to `displayConsole`, which logs `3`.

---

## Displaying the Result on a Webpage

```javascript
function sum(callback, x, y)
{
    let result = x + y;
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}

function displayPage(result)
{
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1, 2);
```

- Output:

    ```
    3 (displayed in webpage)
    ```

- The function `displayPage` takes a `result` parameter and sets the text content of the HTML element with id `"myH1"` to that result.

- The statement `sum(displayPage, 1, 2);` passes `displayPage` as the callback instead of `displayConsole`, so the result `3` is displayed on the webpage rather than in the console.

- The corresponding HTML file:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1 id="myH1"></h1>
        <script src="index.js"></script>
    </body>
</html>
```

- The HTML file contains an `<h1>` element with the id `"myH1"`, which is the element that `displayPage` targets to display the result.

- The `<script src="index.js"></script>` tag links to the JavaScript file containing the callback functions.

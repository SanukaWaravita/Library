[< Back to Station](../station.md)

---

# Random Number Generator

---

## Basic Random Number

```javascript
let randomNum = Math.random() * 6;
console.log(randomNum);
```

- Output:

    ```
    e.g., 0.48294 up to 5.9999...
    ```

- The expression `Math.random()` generates a random *floating-point* number between `0` (inclusive) and `1` (exclusive).

- Multiplying by `6` scales the result to a range of `0` up to (but not including) `6`. The result includes the decimal portion, so you could get values like `0.48294` or `5.9312`.

---

## Random Integer

```javascript
let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);
```

- Output:

    ```
    e.g., 1 to 6
    ```

- The statement `Math.floor(Math.random() * 6)` generates a random number from `0` to `5.999...` and then `Math.floor()` rounds it **down** to the nearest whole number, giving you an integer between `0` and `5`.

- Adding `+ 1` shifts the range so the result is an integer between `1` and `6` (inclusive). This is how you generate a random integer within a specific range.

---

## Random Number Between Min and Max

```javascript
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);
```

- Output:

    ```
    e.g., 50 to 99
    ```

- The expression `Math.random() * (max - min)` generates a random number between `0` and `49.999...` (since `max - min` is `50`).

- `Math.floor()` rounds it down to an integer between `0` and `49`.

- Adding `+ min` shifts the range to `50` through `99`. Note that `max` is **excluded** from the result -- the maximum possible value is `99`.

---

## Dice Roller Program

A full program that generates three random dice numbers when a button is clicked.

### HTML

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
        <button id="myButton">roll</button><br>
        <label id="label1" class="myLabels"></label><br>
        <label id="label2" class="myLabels"></label><br>
        <label id="label3" class="myLabels"></label>
        <script src="index.js"></script>
    </body>
</html>
```

- The HTML creates a `<button>` with the id `"myButton"` and the text `"roll"`.

- Three `<label>` elements with ids `"label1"`, `"label2"`, and `"label3"` are used to display the three random dice numbers. They all share the class `"myLabels"`.

- The `<script src="index.js">` tag links the JavaScript file that will contain the dice rolling logic.

### CSS

```css
body{
    font-family: verdana;
    text-align: center;
}
#myButton{
    font-size: 3em;
    padding: 5px 25px;
    border-radius: 5px;
}
#label1{
    font-size: 3em;
}
#label2{
    font-size: 3em;
}
#label3{
    font-size: 3em;
}
```

- The `body` is styled with `font-family: verdana` and `text-align: center` to center all content on the page.

- The `#myButton` selector styles the roll button with a large font size (`3em`), padding, and rounded corners (`border-radius: 5px`).

- Each label (`#label1`, `#label2`, `#label3`) is styled with `font-size: 3em` so the dice numbers are displayed prominently.

### JavaScript

```javascript
const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const Label3 = document.getElementById("label3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){

    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;

}
```

- The statements `document.getElementById("myButton")`, `document.getElementById("label1")`, etc., retrieve references to the HTML elements so we can interact with them in JavaScript.

- The constants `min = 1` and `max = 6` define the range for our dice values.

- The variables `randomNum1`, `randomNum2`, and `randomNum3` are declared with `let` to hold the three random dice values.

- The statement `myButton.onclick = function(){ ... }` assigns a *click event handler* to the button. When the button is clicked, the function inside is executed.

- Inside the click handler, `Math.floor(Math.random() * max) + min` generates a random integer between `1` and `6` for each of the three dice.

- The statements `Label1.textContent = randomNum1;`, `Label2.textContent = randomNum2;`, and `Label3.textContent = randomNum3;` update the text content of each label to display the generated random numbers.

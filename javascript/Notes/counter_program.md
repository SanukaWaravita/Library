[< Back to Station](../station.md)

---

# Counter Program

A simple counter program built with HTML, CSS, and JavaScript. It displays a count value and provides three buttons to increase, decrease, or reset the count.

---

## HTML Structure

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
        <label id="countLabel">0</label><br>
        <div id="btnContainer">
            <button id="decreaseBtn" class="buttons">decrease</button>
            <button id="resetBtn" class="buttons">reset</button>
            <button id="increaseBtn" class="buttons">increase</button>
        </div>
        <script src="index.js"></script>
    </body>
</html>
```

- The `<label id="countLabel">0</label>` element displays the current count value. It starts at `0` and is given an `id` of `"countLabel"` so JavaScript can target it later.
- The `<br>` tag adds a line break between the label and the buttons.
- The `<div id="btnContainer">` wraps the three buttons together so they can be styled as a group.
- Each `<button>` has a unique `id` (`"decreaseBtn"`, `"resetBtn"`, `"increaseBtn"`) for JavaScript to reference, and they all share the class `"buttons"` for consistent CSS styling.
- The `<script src="index.js"></script>` tag loads the JavaScript file at the bottom of the body, ensuring the HTML elements are loaded before the script runs.

---

## CSS Styling

```css
#countLabel{
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}

#btnContainer{
    text-align: center;
}

.buttons{
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: hsl(214, 100%, 74%);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}

.buttons:hover{
    background-color: hsl(214, 100%, 56%);
}
```

- The `#countLabel` selector styles the count display: `display: block` makes it take up the full width, `text-align: center` centers the text, and `font-size: 10em` makes the number very large so it is the focal point of the page.
- The `#btnContainer` selector centers all three buttons horizontally with `text-align: center`.
- The `.buttons` class styles all three buttons with `padding: 10px 20px` for spacing, `font-size: 1.5em` for readable text, a `white` text color, and a light blue `background-color` using `hsl(214, 100%, 74%)`.
- The `border-radius: 5px` rounds the button corners, `cursor: pointer` shows a hand cursor on hover, and `transition: background-color 0.25s` makes the color change smooth.
- The `.buttons:hover` rule darkens the background color to `hsl(214, 100%, 56%)` when the user hovers over a button, providing visual feedback.

---

## JavaScript Logic

```javascript
// COUNTER PROGRAM
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
```

- The first four lines use `document.getElementById(...)` to grab references to each button and the count label from the DOM. These are stored in `const` variables so we can attach event handlers to them.
- The `let count = 0` statement declares the `count` variable with `let` (since its value will change) and initializes it to `0`.
- The `increaseBtn.onclick = function(){...}` assigns an anonymous function to the `onclick` event of the increase button. When clicked, it increments `count` by `1` using `count++` and then updates the label's text with `countLabel.textContent = count`.
- The `decreaseBtn.onclick` handler works the same way but decrements `count` by `1` using `count--`.
- The `resetBtn.onclick` handler sets `count` back to `0` and updates the label, effectively resetting the counter to its initial state.

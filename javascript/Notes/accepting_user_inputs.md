[< Back to Station](../station.md)

---

# Window Prompt Method

- There are two main ways to accept user input in JavaScript: the **window prompt** method (easy/quick) and the **HTML textbox** method (professional).

- For the window prompt method, the statement `variable = window.prompt("text");` is used to display a prompt dialog to the user.

```javascript
let username;

username = window.prompt("What's your username?");

console.log(username);
```

- The statement `let username;` declares a variable called `username`, but does not yet assign it a value.

- The statement `username = window.prompt("What's your username?");` will cause a window prompt to appear with the text `"What's your username?"` along with a text box in which the user can type in anything (in this case possibly something related to `username`) which will then be assigned as the value for the variable `username`.

- The statement `console.log(username);` will display whatever text was typed into the window prompt.

- For example: if the user input was `"Ryomen Sukuna"`, then the console will display the text `Ryomen Sukuna`.

---

```javascript
let username = window.prompt("What's your username?");

console.log(username);
```

- The **declaration** and **assignment** can be written in a single statement.

- Similar to the above, the console will display whatever text was typed into the window prompt.

- For example: if the user input was `"Ryomen Sukuna"`, then the console will display the text `Ryomen Sukuna`.

---

# HTML Textbox Method

- The professional method of accepting user input involves creating an HTML textbox with a button, then using JavaScript to read the value from the textbox.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome</h1>
    <label>username:</label>
    <input id="myText"><br><br>
    <button id="mySubmit">Submit</button>
    <script src="index.js"></script>
</body>
</html>
```

- The HTML file creates a text input field with the id `"myText"` and a button with the id `"mySubmit"`.

- The `<label>` element displays the text `"username:"` next to the text input field.

- The `<script src="index.js"></script>` tag links to the JavaScript file that will handle the logic.

```javascript
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}
```

- The statement `let username;` declares the variable `username` without assigning a value.

- The statement `document.getElementById("mySubmit").onclick = function(){...}` assigns a *callback function* to the `onclick` event of the submit button. When the button is clicked, the code inside the function runs.

- The statement `username = document.getElementById("myText").value;` retrieves the current value typed into the text input field (with id `"myText"`) and assigns it to the variable `username`.

- The statement `console.log(username);` outputs the value of `username` to the console, which will be whatever the user typed into the text box before clicking the submit button.

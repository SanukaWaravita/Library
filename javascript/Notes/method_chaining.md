[< Back to Station](../station.md)

---

# Method Chaining

**Method chaining** is the practice of *calling one method after another in one continuous line of code*.

---

## Without Method Chaining

```javascript
let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

window.alert(username);
```

- The statement `let username = window.prompt("Enter your username: ");` prompts the user to type their username and stores the input in the variable `username`.

- The statement `username = username.trim();` removes any whitespace before and after the name using the `.trim()` method.

- The statement `let letter = username.charAt(0);` gets the first character of the username using `.charAt(0)` and stores it in `letter`.

- The statement `letter = letter.toUpperCase();` converts that first character to uppercase using `.toUpperCase()`.

- The statement `let extraChars = username.slice(1);` slices everything after the first character using `.slice(1)` and stores it in `extraChars`.

- The statement `extraChars = extraChars.toLowerCase();` converts those remaining characters to lowercase using `.toLowerCase()`.

- The statement `username = letter + extraChars;` concatenates the uppercase first letter with the lowercase remaining characters to form the properly formatted username.

- The statement `window.alert(username);` displays the formatted username in an alert box.

---

## With Method Chaining

```javascript
let username = window.prompt("Enter your username: ");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

window.alert(username);
```

- The statement `username.trim().charAt(0).toUpperCase()` chains three methods together: first `.trim()` removes whitespace, then `.charAt(0)` gets the first character, then `.toUpperCase()` capitalizes it. Each method is called on the *return value* of the previous method.

- The statement `username.trim().slice(1).toLowerCase()` chains three methods to get the rest of the string in lowercase: `.trim()` removes whitespace, `.slice(1)` gets everything after the first character, and `.toLowerCase()` converts it to lowercase.

- The `+` operator concatenates the uppercase first letter with the lowercase remaining characters, producing the same result as the version without method chaining -- but in a single line.

- **Tip:** Do not overuse method chaining. While it makes code more concise, long chains can become difficult to read and debug.

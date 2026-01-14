# Accepting User Inputs

- Accepting user inputs:

    - Easy method = Window prompt.

    - Professional method = HTML textbox with a button.

## Window Prompt Method

- For this, `[variable] = window.prompt("[Text displayed on window prompt]");` statement is used.

```js
let username;
username = window.prompt("What's your username?");
console.log(username);
```

- Here, the variable `username` has been **declared**, but not yet **assigned**.

- The `username = window.prompt("What's your username?");` will cause a window prompt to appear with the text 'What's your username?' along with a text box in which the user can type in anything (in this case possibly something related to 'username') which will then be assigned as the value for the variable `username`.

- The console will display whatever the text that was typed in the window prompt. 

- *For example:* If the user input was 'Ryomen Sukuna', then the console will display the text 'Ryomen Sukuna'.

```js
let username = window.prompt("What's your username?");
console.log(username);
```

- The **declaration** and **assignment** can be written in a single statement. 

- Similar to the above, the console will display whatever the text that was typed in the window prompt. 

- *For example:* If the user input was 'Ryomen Sukuna', then the console will display the text 'Ryomen Sukuna'.

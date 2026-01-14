# While Loops

- Repeats some code WHILE some condition true.

```js
let username = "";

while(username === ""){
    username = window.prompt(`Enter your name`);
}

window.alert(`Hello ${username}`);
```

```js
let username = "";

while(username === "" || username === null){ 
    username = window.prompt(`Enter your name`);
}

window.alert(`Hello ${username}`);
```

- While ONE of this conditions is true, execute the code forever.

```js
let username;

do { 
    username = window.prompt(`Enter your name`); 
} while(username === "" || username === null)

window.alert(`Hello ${username}`);
```

- Another variation of the while loop.
- This code will be executed ATLEAST ONCE before checking the conditions.

```js
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        window.alert(`You are logged in!`);
    }
    else{
        window.alert(`Invalid credentials! Please try again`);
    }
}
```

```js
let loggedIn = false;
let username;
let password;

do {
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);
    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        window.alert(`You are logged in!`);
    }
    else{
        window.alert(`Invalid credentials! Please try again`);
    }
} while(!loggedIn)
```

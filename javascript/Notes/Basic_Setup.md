# Linking .js file to .html file

- This can be done using the pair of <script></script> tags along with the 'src' attributes.

    - 'src' attribute: Specifies the location of the `.js` file; if the `.js` file is right next to the `.html` file, just the name of the `.js` file, following `.js` extension, is sufficient (e.g. `index.js`)

- For example:

    <script src="index.js"></script>

- It is better to have the <script></script> element at the bottom of the body of the document, so that in case there is any error with the JavaScript file, the html elements would atleast render first.


# Adding JavaScript to Websites

- There are three ways to add JavaScript to websites (same as in CSS).

- Inline JavaScript

    <body onload="alert('Hello');"></body>

- Internal JavaScript (by adding <script></script> to the html).

    ``` html
    <body>
        <script type="text/javascript">
            alert("Hello");
        </script>
    </body>
    ```

- External JavaScript [USE THIS WAY]

    - If in JavaScript, we try to change an HTML element (using JavaScript) that does not yet exist (i.e. that is JavaScript link) then it will fail and nothing will happen.

    - Always add JavaScript at the end of the script just before the closing body tag.

    - Add this line just before the closing body tag </body>.

    ```html
    <script src="index.js" charset="utf-8"></script>
    ```


# User Interaction

```js
alert("Hello");
```
- Writes a pop-up message.
- `alert("");` is a function that the user can see.

```js
prompt("What is your name?");
```
- Identical to the `alert("");` method, but allows the user to enter an input or a piece of text; **ALWAYS RETURNS A STRING**

```js
console.log("Hello");
```
- `console.log("");` only shows up in the console, like `debug.log` in C#.
- Used to help the developer debug the code or print something to the console.
- We can log multiple values like this: `console.log(myName, myAge);`.


# Creating an Alert Box Within the Browser

- An alert box can be shown through the browser using `window.alert(``);`.

- For example:
    ```js
    window.alert(`This is an alert!`);
    ```

- The `console.log(``);` can be used.

- For example:
    ```js
    console.log(`Hello`);
    ```

- For the above, either of the [``], [''], [""] can be used.

- [``] is callled **Back ticks** or **template literal**.

- This text will not show up on the actual webpage, and can instead be viewed in the console tabl of element/ 'Dev Tools' of a web browser:


# Different Versions of 'Console.log()'

```js
console.log();

console.warn();

console.error();

console.table();
```


# Comments
```js
// This is a comment

/* This
is
a
comment
*/
```

# Populating the Webpage with Text Content Using Java

- This can be done using the `id` attribute for suitable tags that are used to display content on the webpage, e.g. <h1></h1>, <p></p>, and assigning unique identities for these tags.

    - For example:

        ```html
        <h1 id="myH1"></h1>
        
        <p id="myP"></p>
        ```
    
- Text content can then be added to the webpage in palce of tags with the `id` attribute using [``] in the `.js` file.

    - For example:

    ```js
    document.getElementById("myH1").textContent = `Hello`;
    
    document.getElementById("myP").textContent = `I like Pizza!`;
    ```

- More comprehensive example:

    ## .html

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
            <h1 id="myH1"></h1>
            <p id="myP"></p>
            <script src="index.js"></script>
        </body>
    </html>
    ```

    ## .js

    ```js
    document.getElementById("myH1").textContent = `Hello`;
    document.getElementById("myP").textContent = `I like Pizza!`;
    ```

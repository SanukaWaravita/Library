[< Back to Station](../station.md)

---

# String Slicing

*String slicing* is the process of creating a substring from a portion of another string. It does not alter the original string.

The syntax is: `string.slice(start-index (inclusive), end-index (exclusive))`

---

## Basic String Slicing

```javascript
const fullName = "Bro Code";
let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);
console.log(firstName);
console.log(lastName);
```

- Output:

    ```
    Bro
    Code
    ```

- The statement `fullName.slice(0, 3)` extracts characters from index `0` up to (but not including) index `3`, giving us `"Bro"`.
- The statement `fullName.slice(4, 8)` extracts characters from index `4` up to (but not including) index `8`, giving us `"Code"`.
- Remember that the *start index* is **inclusive** and the *end index* is **exclusive** -- the character at the end index is not included in the result.

---

## Extracting First and Last Characters

```javascript
const fullName1 = "Bro Code";
let firstChar = fullName1.slice(0, 1);
let lastChar = fullName1.slice(-1);
console.log(firstChar);
console.log(lastChar);
```

- Output:

    ```
    B
    e
    ```

- The statement `fullName1.slice(0, 1)` extracts only the first character at index `0`, giving us `"B"`.
- The statement `fullName1.slice(-1)` uses a *negative index* -- you begin at the end of the string and work your way towards the beginning. `-1` refers to the last character, which is `"e"`.
- When you omit the second argument, `.slice()` extracts from the start index all the way to the end of the string.

---

## Dynamic Slicing with indexOf()

```javascript
const fullName2 = "Broseph Code";
let firstName1 = fullName2.slice(0, fullName2.indexOf(" "));
let lastName1 = fullName2.slice(fullName2.indexOf(" ") + 1);
console.log(firstName1);
console.log(lastName1);
```

- Output:

    ```
    Broseph
    Code
    ```

- Instead of hardcoding index numbers, we use `fullName2.indexOf(" ")` to dynamically find the position of the space character.
- The statement `fullName2.slice(0, fullName2.indexOf(" "))` extracts everything from the beginning up to (but not including) the space, giving us `"Broseph"`.
- The statement `fullName2.slice(fullName2.indexOf(" ") + 1)` starts one position after the space and extracts to the end, giving us `"Code"`.
- This approach is more flexible because it works regardless of the length of the first name.

---

## Email Parsing Exercise

```javascript
const email = "Bro1@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension);
```

- Output:

    ```
    Bro1
    gmail.com
    ```

- The statement `email.slice(0, email.indexOf("@"))` extracts everything before the `@` symbol, giving us the username `"Bro1"`.
- The statement `email.slice(email.indexOf("@") + 1)` extracts everything after the `@` symbol, giving us the extension `"gmail.com"`.
- This is the same dynamic slicing technique used with `indexOf()`, but applied to parsing an email address instead of a name.

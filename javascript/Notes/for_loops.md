[< Back to Station](../station.md)

---

# For Loops

A **for loop** is used to repeat some code a **limited** amount of times. It consists of three statements: an *initialization* (starting value), a *condition* (when to stop), and an *increment/decrement* (how to update after each iteration).

---

## Basic For Loop

```javascript
for(let i = 0; i <= 2; i++){
    window.alert(i);
}
```

- Output:

    ```
    Alert: 0
    Alert: 1
    Alert: 2
    ```

- The `let i = 0` statement initializes the loop counter `i` to `0`.
- The condition `i <= 2` is checked before each iteration -- the loop continues running as long as `i` is less than or equal to `2`.
- The `i++` statement increments `i` by `1` after each iteration.
- The `window.alert(i)` statement displays the current value of `i` in a browser alert dialog. This runs three times, showing `0`, `1`, and `2`.

---

## For Loop With `continue`

```javascript
for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
    }
    else{
        window.alert(i);
    }
}
```

- Output:

    ```
    Alert: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20
    (13 is skipped)
    ```

- The `continue` keyword lets you **skip an iteration entirely**. When `i == 13`, the `continue` statement is hit, and the loop immediately jumps to the next iteration without executing the `window.alert(i)` in the `else` block.
- Every number from `1` to `20` is displayed in an alert **except** `13`, which is skipped.
- The loop itself does not stop -- it keeps running all the way to `20`.

---

## For Loop With `break`

```javascript
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;
    }
    else{
        window.alert(i);
    }
}
```

- Output:

    ```
    Alert: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    (loop stops at 13)
    ```

- The `break` keyword lets you **break out of the loop entirely** and not continue the rest of the iterations.
- When `i == 13`, the `break` statement is hit, and the loop exits immediately -- it does not proceed to `14`, `15`, or any further values.
- Only the numbers `1` through `12` are displayed in alerts, because the loop terminates as soon as `i` reaches `13`.
- The key difference between `continue` and `break`: `continue` skips just the current iteration and moves on to the next one, while `break` stops the loop completely.

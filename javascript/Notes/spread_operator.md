[< Back to Station](../station.md)

---

# Spread Operator

The *spread operator* (`...`) allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements).

---

## Using Math.max() Without Spread

```javascript
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers);
window.alert(maximum);
```

- Output:

    ```
    NaN
    ```

- `Math.max()` expects separate number arguments, not an array.
- When you pass the entire `numbers` array as a single argument, `Math.max()` does not know how to handle it and returns `NaN` (*Not a Number*).

---

## Using Math.max() With Spread

```javascript
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
window.alert(maximum);
```

- Output:

    ```
    5
    ```

- The spread operator `...numbers` expands the array `[1, 2, 3, 4, 5]` into separate arguments: `Math.max(1, 2, 3, 4, 5)`.
- Now `Math.max()` receives individual numbers as expected and correctly returns `5`, the largest value.

---

## Spreading a String into an Array

```javascript
let username = "Bro Code";
let letters = [...username];
window.alert(letters);
```

- Output:

    ```
    B,r,o, ,C,o,d,e
    ```

- The spread operator works on strings too, since strings are *iterables*.
- `[...username]` expands each character of `"Bro Code"` into a separate element inside a new array.
- `window.alert(letters)` displays the array, which is automatically converted to a comma-separated string: `B,r,o, ,C,o,d,e`.

---

## Spreading a String and Joining with a Separator

```javascript
let username = "Bro Code";
let letters = [...username].join("-");
window.alert(letters);
```

- Output:

    ```
    B-r-o- -C-o-d-e
    ```

- `[...username]` first spreads the string into an array of individual characters.
- `.join("-")` then joins all elements of that array back into a single string, placing a hyphen `"-"` between each character.
- The result is `"B-r-o- -C-o-d-e"` -- notice the space character is still present between `o` and `C`.

---

## Shallow Copying an Array with Spread

```javascript
let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
window.alert(newFruits);
```

- Output:

    ```
    apple,orange,banana
    ```

- `[...fruits]` creates a **shallow copy** of the `fruits` array -- a different array object that contains identical values.
- Modifying `newFruits` will not affect the original `fruits` array, because they are separate arrays in memory.
- This is a common pattern for copying arrays without mutating the original.

---

## Combining Two Arrays with Spread

```javascript
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables];
window.alert(foods);
```

- Output:

    ```
    apple,orange,banana,carrots,celery,potatoes
    ```

- `[...fruits, ...vegetables]` spreads both arrays into a single new array, effectively combining them.
- The `fruits` elements come first, followed by the `vegetables` elements, in the order they are spread.

---

## Combining Arrays and Adding Extra Elements

```javascript
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
window.alert(foods);
```

- Output:

    ```
    apple,orange,banana,carrots,celery,potatoes,eggs,milk
    ```

- You can mix spread arrays with additional individual elements inside the same array literal.
- `"eggs"` and `"milk"` are appended after the spread arrays, resulting in a single combined array with all items.
- This makes the spread operator very flexible for building new arrays from existing ones while adding extra values.

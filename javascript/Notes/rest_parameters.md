[< Back to Station](../station.md)

---

# Rest Parameters

Rest parameters allow a function to work with a variable number of arguments by bundling them into an array. The rest parameter syntax uses `...` before a parameter name.

**Spread** = expands an array into separate elements.
**Rest** = bundles separate elements into an array.

---

## Logging Rest Parameters with Spread

```javascript
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods) {
    console.log(...foods);
}

openFridge(food1, food2, food3, food4, food5);
```

- Output:

    ```
    pizza hamburger hotdog sushi ramen
    ```

- The function `openFridge(...foods)` uses the *rest parameter* `...foods` to collect all arguments passed to it into an array called `foods`.
- Inside the function, `console.log(...foods)` uses the *spread operator* to expand the `foods` array back into individual elements, so they print separated by spaces.
- We pass five separate variables `food1` through `food5` as arguments, and rest parameters bundle them all into the single `foods` array.

---

## Returning a Rest Parameter as an Array

```javascript
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function getFood(...foods) {
    return foods;
}

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);
```

- Output:

    ```
    ['pizza', 'hamburger', 'hotdog', 'sushi', 'ramen']
    ```

- The function `getFood(...foods)` collects all arguments into the `foods` array and returns it directly.
- The variable `const foods` stores the returned array from `getFood()`.
- `console.log(foods)` prints the entire array, showing that the rest parameter truly creates a standard JavaScript array.

---

## Summing Numbers with Rest Parameters

```javascript
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1);
console.log(`Your total is $${total}`);
```

- Output:

    ```
    Your total is $1
    ```

- The function `sum(...numbers)` accepts any number of arguments and bundles them into the `numbers` array.
- The `for...of` loop iterates through each `number` in the `numbers` array and adds it to `result` using `result += number`.
- When called with `sum(1)`, only one value is passed, so the total is `1`.

```javascript
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3);
console.log(`Your total is $${total}`);
```

- Output:

    ```
    Your total is $6
    ```

- The same `sum()` function is now called with three arguments: `1`, `2`, and `3`.
- The rest parameter `...numbers` bundles these into the array `[1, 2, 3]`, and the `for...of` loop adds them up to get `6`.
- This demonstrates the flexibility of rest parameters -- the same function handles any number of arguments.

---

## Calculating an Average with Rest Parameters

```javascript
function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(total);
```

- Output:

    ```
    80
    ```

- The function `getAverage(...numbers)` sums all values using a `for...of` loop, then divides by `numbers.length` to get the average.
- Since `...numbers` is a real array, we can use the `.length` property to determine how many arguments were passed.
- The call `getAverage(75, 100, 85, 90, 50)` computes `(75 + 100 + 85 + 90 + 50) / 5`, which equals `80`.

---

## Combining Strings with Rest Parameters

```javascript
function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);
```

- Output:

    ```
    Mr. Spongebob Squarepants III
    ```

- The function `combineStrings(...strings)` collects all string arguments into the `strings` array.
- The `.join(" ")` method joins all elements of the array into a single string, with a space `" "` between each element.
- This is a practical use of rest parameters -- you can pass any number of name parts and they will be combined into one full name.

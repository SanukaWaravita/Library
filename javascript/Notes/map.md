[< Back to Station](../station.md)

---

# Map Method

The `.map()` method accepts a *callback function* and applies that function to each element of an array, then **returns a new array**. This is useful when you want to preserve the original array from which the elements came from.

The `.map()` method is similar to `.forEach()`, but `.map()` **returns a new array** while `.forEach()` does not.

---

## Squaring Numbers

```javascript
const numbers = [1, 2, 3, 4, 5];

function square(element)
{
    return Math.pow(element, 2)
}

const squares = numbers.map(square);

console.log(squares);
```

- Output:

    ```
    [1, 4, 9, 16, 25]
    ```

- The statement `const numbers = [1, 2, 3, 4, 5];` creates an array of numbers.

- The `square` function takes an `element` as a parameter and returns `Math.pow(element, 2)`, which raises the element to the power of `2`.

- The statement `const squares = numbers.map(square);` calls `.map()` on the `numbers` array and passes `square` as the callback function. Each element in `numbers` is passed to `square`, and the returned values form a new array stored in `squares`.

- The original `numbers` array is **not modified** -- it remains `[1, 2, 3, 4, 5]`. The `squares` array is an entirely new array: `[1, 4, 9, 16, 25]`.

---

## Cubing Numbers

```javascript
const numbers = [1, 2, 3, 4, 5];

function cube(element)
{
    return Math.pow(element, 3)
}

const cubes = numbers.map(cube);

console.log(cubes);
```

- Output:

    ```
    [1, 8, 27, 64, 125]
    ```

- The `cube` function returns `Math.pow(element, 3)`, which raises each element to the power of `3`.

- The statement `const cubes = numbers.map(cube);` applies the `cube` function to every element and returns a new array `[1, 8, 27, 64, 125]`.

---

## Uppercase Strings

```javascript
const students = ["spongebob", "Patrick", "Squiward", "Sandy"];

function upperCase(element)
{
    return element.toUpperCase();
}

const studentsUpper = students.map(upperCase);

console.log(studentsUpper);
```

- Output:

    ```
    ['SPONGEBOB', 'PATRICK', 'SQUIWARD', 'SANDY']
    ```

- The `upperCase` function calls `element.toUpperCase()` which converts the string to all uppercase letters and returns the result.

- The statement `const studentsUpper = students.map(upperCase);` passes `upperCase` as the callback. Each student name is converted to uppercase, and a new array is returned.

---

## Lowercase Strings

```javascript
const students = ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"];

const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function lowerCase(element)
{
    return element.toLowerCase();
}
```

- Output:

    ```
    ['spongebob', 'patrick', 'squidward', 'sandy']
    ```

- The `lowerCase` function calls `element.toLowerCase()` which converts each string to all lowercase letters.

- The statement `const studentsLower = students.map(lowerCase);` applies the `lowerCase` callback to every element in the `students` array and returns a new array with all lowercase names.

---

## Formatting Dates

```javascript
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(element)
{
    const parts = element.split("-");

    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);

console.log(formattedDates);
```

- Output:

    ```
    ['1/10/2024', '2/20/2025', '3/30/2026']
    ```

- The `formatDates` function takes a date string like `"2024-1-10"` and splits it on `"-"` using `element.split("-")`. This produces an array `parts` with three elements: `["2024", "1", "10"]`.

- The template literal `` `${parts[1]}/${parts[2]}/${parts[0]}` `` rearranges the parts into `month/day/year` format, so `"2024-1-10"` becomes `"1/10/2024"`.

- The statement `const formattedDates = dates.map(formatDates);` applies this transformation to every date in the array and returns the new array `['1/10/2024', '2/20/2025', '3/30/2026']`.

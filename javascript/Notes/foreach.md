[< Back to Station](../station.md)

---

# forEach Method

The `.forEach()` method is used to iterate over the elements of an array and apply a specified function (*callback*) to each element.

```javascript
array.forEach(callback)
```

- The callback function receives three arguments behind the scenes: `element` (the current value), `index` (the current position), and `array` (the original array being iterated).

---

## Displaying Each Element

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element)
{
    console.log(element);
}
```

- Output:

    ```
    1
    2
    3
    4
    5
    ```

- The `numbers.forEach(display)` statement calls the `display` function once for each element in the `numbers` array.
- The `display` function receives the current `element` as its parameter and prints it with `console.log(element)`.
- The loop runs five times, printing `1`, `2`, `3`, `4`, and `5` in order.

---

## Doubling Each Element

```javascript
let numbers = [1, 2, 3, 4, 5];

function double(element, index, array)
{
    array[index] = element * 2;
}

function display(element)
{
    console.log(element);
}

numbers.forEach(double);

numbers.forEach(display);
```

- Output:

    ```
    2
    4
    6
    8
    10
    ```

- The `double` function uses all three callback parameters: `element` (the current value), `index` (the position), and `array` (the original array).
- The statement `array[index] = element * 2` modifies the original array in place by replacing each element with its doubled value.
- After calling `numbers.forEach(double)`, the `numbers` array is now `[2, 4, 6, 8, 10]`.
- Then `numbers.forEach(display)` prints each of the updated values.

---

## Tripling Each Element

```javascript
let numbers = [1, 2, 3, 4, 5];

function triple(element, index, array)
{
    array[index] = element * 3;
}

function display(element)
{
    console.log(element);
}

numbers.forEach(triple);
numbers.forEach(display);
```

- Output:

    ```
    3
    6
    9
    12
    15
    ```

- The `triple` function works just like `double`, but multiplies each element by `3` instead of `2` using `array[index] = element * 3`.
- After `numbers.forEach(triple)`, the `numbers` array becomes `[3, 6, 9, 12, 15]`.

---

## Squaring Each Element

```javascript
let numbers = [1, 2, 3, 4, 5];

function square(element, index, array)
{
    array[index] = Math.pow(element, 2);
}

function display(element)
{
    console.log(element);
}

numbers.forEach(square);
numbers.forEach(display);
```

- Output:

    ```
    1
    4
    9
    16
    25
    ```

- The `square` function uses `Math.pow(element, 2)` to raise each element to the power of `2`.
- After `numbers.forEach(square)`, the `numbers` array becomes `[1, 4, 9, 16, 25]`.

---

## Cubing Each Element

```javascript
let numbers = [1, 2, 3, 4, 5];

function cube(element, index, array)
{
    array[index] = Math.pow(element, 3);
}

function display(element)
{
    console.log(element);
}

numbers.forEach(cube);
numbers.forEach(display);
```

- Output:

    ```
    1
    8
    27
    64
    125
    ```

- The `cube` function uses `Math.pow(element, 3)` to raise each element to the power of `3`.
- After `numbers.forEach(cube)`, the `numbers` array becomes `[1, 8, 27, 64, 125]`.

---

## Uppercase Fruits

```javascript
let fruits = ["apple", "orange", "banana", "coconut"];

function display(element)
{
    console.log(element);
}

function upperCase(element, index, array)
{
    array[index] = element.toUpperCase();
}

fruits.forEach(upperCase);
fruits.forEach(display);
```

- Output:

    ```
    APPLE
    ORANGE
    BANANA
    COCONUT
    ```

- The `upperCase` function uses `element.toUpperCase()` to convert each fruit string to all uppercase letters.
- The statement `array[index] = element.toUpperCase()` replaces each element in the original `fruits` array with its uppercase version.

---

## Lowercase Fruits

```javascript
let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"];

function display(element)
{
    console.log(element);
}

function lowerCase(element, index, array)
{
    array[index] = element.toLowerCase();
}

fruits.forEach(lowerCase);
fruits.forEach(display);
```

- Output:

    ```
    apple
    orange
    banana
    coconut
    ```

- The `lowerCase` function uses `element.toLowerCase()` to convert each fruit string to all lowercase letters.
- This is the opposite of the previous example -- the `fruits` array starts with uppercase values and is transformed to lowercase.

---

## Capitalizing the First Letter

```javascript
let fruits = ["apple", "orange", "banana", "coconut"];

function display(element)
{
    console.log(element);
}

function capitalize(element, index, array)
{
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(display);
```

- Output:

    ```
    Apple
    Orange
    Banana
    Coconut
    ```

- The `capitalize` function takes the first character with `element.charAt(0)`, converts it to uppercase with `.toUpperCase()`, and then concatenates the rest of the string with `element.slice(1)`.
- For example, `"apple"` becomes `"A"` + `"pple"` = `"Apple"`.
- This is a common technique for capitalizing just the first letter of a string while leaving the rest unchanged.

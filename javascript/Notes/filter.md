[< Back to Station](../station.md)

---

# Filter Method

The `.filter()` method creates a **new array** by filtering out elements that do not pass a given test. It takes a callback function that returns `true` or `false` for each element -- elements that return `true` are kept in the new array.

---

## Filtering Even Numbers

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNumbs = numbers.filter(isEven);

console.log(evenNumbs);

function isEven(element)
{
    return element % 2 === 0;
}
```

- Output:

    ```
    [2, 4, 6]
    ```

- The `numbers.filter(isEven)` call passes each element of the `numbers` array to the `isEven` callback function, one at a time.
- The `isEven` function checks whether `element % 2 === 0` -- if the remainder when dividing by `2` is `0`, the number is even, and the function returns `true`.
- Only the elements that return `true` are included in the new array `evenNumbs`. So `2`, `4`, and `6` pass the test while `1`, `3`, `5`, and `7` are filtered out.

---

## Filtering Odd Numbers

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7];

let oddNumbs = numbers.filter(isOdd);

console.log(oddNumbs);

function isOdd(element)
{
    return element % 2 !== 0;
}
```

- Output:

    ```
    [1, 3, 5, 7]
    ```

- The `isOdd` function uses `element % 2 !== 0` to check if the remainder is **not** equal to `0`, meaning the number is odd.
- This is the opposite of the previous example -- now `1`, `3`, `5`, and `7` pass the test while `2`, `4`, and `6` are filtered out.

---

## Filtering Adults From Ages

```javascript
const ages = [16, 17, 18, 18, 19, 20, 60];

const adults = ages.filter(isAdult);

function isAdult(element)
{
    return element >= 18;
}

console.log(adults)
```

- Output:

    ```
    [18, 18, 19, 20, 60]
    ```

- The `isAdult` callback returns `true` when `element >= 18`, keeping only ages that are 18 or older.
- The values `16` and `17` return `false` and are excluded from the `adults` array.

---

## Filtering Children From Ages

```javascript
const ages = [16, 17, 18, 18, 19, 20, 60];

const children = ages.filter(isChild);

function isChild(element)
{
    return element < 18;
}

console.log(children)
```

- Output:

    ```
    [16, 17]
    ```

- The `isChild` callback returns `true` when `element < 18`, which is the opposite condition of `isAdult`.
- Only `16` and `17` are less than `18`, so the `children` array contains just those two values.

---

## Filtering Short Words

```javascript
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element)
{
    return element.length <= 6;
}

const shortWords = words.filter(getShortWords);

console.log(shortWords);
```

- Output:

    ```
    ['apple', 'orange', 'banana', 'kiwi']
    ```

- The `getShortWords` function uses `element.length <= 6` to check if the word has 6 or fewer characters.
- `"apple"` (5), `"orange"` (6), `"banana"` (6), and `"kiwi"` (4) all pass the test, while `"pomegranate"` (11) and `"coconut"` (7) are filtered out.

---

## Filtering Long Words

```javascript
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getLongWords(element)
{
    return element.length > 6;
}

const longWords = words.filter(getLongWords);

console.log(longWords);
```

- Output:

    ```
    ['pomegranate', 'coconut']
    ```

- The `getLongWords` function uses `element.length > 6` to check if the word has more than 6 characters.
- Only `"pomegranate"` (11 characters) and `"coconut"` (7 characters) pass the test, so they are the only elements in the `longWords` array.

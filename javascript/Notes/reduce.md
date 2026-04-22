[< Back to Station](../station.md)

---

# Reduce Method

The `.reduce()` method *reduces the elements of an array to a single value*. It takes a callback function that receives an **accumulator** and the current **element**, and returns the updated accumulator after processing each element.

---

## Summing Prices

```javascript
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

function sum(accumulator, element)
{
    return accumulator + element;
}

console.log(`$${total.toFixed(2)}`);
```

- Output:

    ```
    $105.00
    ```

- The statement `const prices = [5, 30, 10, 25, 15, 20];` creates an array of price values.

- The `sum` function takes two parameters: `accumulator` (which holds the running total) and `element` (the current array element being processed). It returns `accumulator + element`, which adds the current element to the running total.

- The statement `const total = prices.reduce(sum);` calls `.reduce()` on the `prices` array with `sum` as the callback. The method starts with the first element (`5`) as the initial accumulator, then adds each subsequent element: `5 + 30 = 35`, `35 + 10 = 45`, `45 + 25 = 70`, `70 + 15 = 85`, `85 + 20 = 105`.

- The statement `` console.log(`$${total.toFixed(2)}`) `` formats the total as a dollar amount with two decimal places, printing `$105.00`.

---

## Finding the Maximum Grade

```javascript
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);

function getMax(accumulator, element)
{
    return Math.max(accumulator, element);
}

console.log(maximum);
```

- Output:

    ```
    95
    ```

- The `getMax` function uses `Math.max(accumulator, element)` to compare the current accumulator with the current element and return whichever is larger.

- The statement `const maximum = grades.reduce(getMax);` starts with `75` as the accumulator. It compares `75` vs `50` (keeps `75`), `75` vs `90` (keeps `90`), `90` vs `80` (keeps `90`), `90` vs `65` (keeps `90`), `90` vs `95` (keeps `95`). The final result is `95`.

---

## Finding the Minimum Grade

```javascript
const grades = [75, 50, 90, 80, 65, 95];
const minimum = grades.reduce(getMin);

function getMin(accumulator, element)
{
    return Math.min(accumulator, element);
}

console.log(minimum);
```

- Output:

    ```
    50
    ```

- The `getMin` function uses `Math.min(accumulator, element)` to compare the current accumulator with the current element and return whichever is smaller.

- The statement `const minimum = grades.reduce(getMin);` starts with `75` as the accumulator. It compares `75` vs `50` (keeps `50`), `50` vs `90` (keeps `50`), `50` vs `80` (keeps `50`), `50` vs `65` (keeps `50`), `50` vs `95` (keeps `50`). The final result is `50`.

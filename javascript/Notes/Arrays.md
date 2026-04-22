[< Back to Station](../station.md)

---

# Array

- An **array** is a variable-like structure that can hold more than one value.

```javascript
let fruits = ["apple", "orange", "banana"];

console.log(fruits);
```

- Output:

    ```
    ["apple", "orange", "banana"]
    ```

- The statement `let fruits = ["apple", "orange", "banana"];` declares an array called `fruits` containing three string elements.

- Adding a *plural name* to arrays helps with readability (good practice).

- The statement `console.log(fruits);` outputs all the elements in the array.

---

## Accessing Elements by Index

```javascript
let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

- Output:

    ```
    ["apple", "orange", "banana"]
    apple
    orange
    banana
    ```

- The statement `console.log(fruits[0]);` accesses and outputs the element at index `0`, which is `"apple"`.

- The statement `console.log(fruits[1]);` accesses and outputs the element at index `1`, which is `"orange"`.

- The statement `console.log(fruits[2]);` accesses and outputs the element at index `2`, which is `"banana"`.

---

## Replacing Elements

```javascript
let fruits = ["apple", "orange", "banana"];

fruits[2] = "coconut";

console.log(fruits);
```

- Output:

    ```
    ["apple", "orange", "coconut"]
    ```

- The statement `fruits[2] = "coconut";` replaces the element at index `2` (which was `"banana"`) with `"coconut"`.

---

## Adding Elements by Index

```javascript
let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";

console.log(fruits);
```

- Output:

    ```
    ["apple", "orange", "banana", "coconut"]
    ```

- Since there is no index `3` in the existing array, the statement `fruits[3] = "coconut";` adds the new element `"coconut"` to the end of the array.

---

## Array Methods: push, pop, unshift, shift

```javascript
let fruits = ["apple", "orange", "banana"];

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();
```

- The statement `fruits.push("coconut");` adds a new element `"coconut"` to the **end** of the array.

- The statement `fruits.pop();` removes the **last** element of the array.

- The statement `fruits.unshift("mango");` adds a new element `"mango"` to the **start** of the array.

- The statement `fruits.shift();` removes an element from the **beginning** of the array.

---

## Array Length

```javascript
let fruits = ["apple", "orange", "banana"];

let numOfFruits = fruits.length;
```

- The `fruits.length` property returns the length of the array, or the number of elements in the array. In this case, `numOfFruits` will be assigned the value `3`.

---

## indexOf

```javascript
let fruits = ["apple", "orange", "banana"];

let index = fruits.indexOf("apple");
```

- The statement `fruits.indexOf("apple");` returns the index of the element `"apple"` in the array. In this case, `index` will be assigned the value `0`.

---

## Iterating with a For Loop

```javascript
let fruits = ["apple", "orange", "banana"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
```

- Output:

    ```
    apple
    orange
    banana
    ```

- This `for` loop iterates through the array from index `0` to `fruits.length - 1`, printing each element one by one.

---

## Iterating in Reverse

```javascript
let fruits = ["apple", "orange", "banana"];

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
```

- Output:

    ```
    banana
    orange
    apple
    ```

- This `for` loop starts from the last index (`fruits.length - 1`) and decrements `i` until it reaches `0`, outputting the elements in **reverse order**.

---

## Enhanced For Loop (for...of)

```javascript
let fruits = ["apple", "orange", "banana"];

for(let fruit of fruits){
    console.log(fruit);
}
```

- Output:

    ```
    apple
    orange
    banana
    ```

- The `for...of` loop iterates over each element in the array and assigns it to the variable `fruit` on each iteration.

- Here `fruit` can be any variable name, but it is good practice to use the singular version of the array name.

---

## Sorting Alphabetically

```javascript
let fruits = ["apple", "orange", "banana"];

fruits.sort();

for(let fruit of fruits){
    console.log(fruit);
}
```

- Output:

    ```
    apple
    banana
    orange
    ```

- The statement `fruits.sort();` sorts the array in **alphabetical order**.

---

## Sorting in Reverse Alphabetical Order

```javascript
let fruits = ["apple", "orange", "banana"];

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}
```

- Output:

    ```
    orange
    banana
    apple
    ```

- The statement `fruits.sort().reverse();` first sorts the array in alphabetical order, then reverses it, resulting in **reverse alphabetical order**.

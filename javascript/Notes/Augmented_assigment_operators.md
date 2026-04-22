[< Back to Station](../station.md)

---

# Augmented Assignment Operators

- **Augmented assignment operators** are a shortcut to writing arithmetic expressions without having to type the variables twice.

| Program | Output | Description |
|---------|--------|-------------|
| `let x = 10 + 5;` | `15` | |
| `x += 10;` | | `x = x + 10` |
| `x *= 4;` | | `x = x * 4` |
| `x++` | | `x = x + 1` |
| `x--` | | `x = x - 1` |
| `console.log(x);` | | |

---

# Addition

```javascript
let students = 30;

students += 1;

console.log(students);
```

- Output:

    ```
    31
    ```

- The statement `let students = 30;` declares the variable `students` and assigns it the value `30`.

- The `+` is the *addition operator*.

- The statement `students += 1;` is shorthand for `students = students + 1;`, which adds `1` to the current value of `students`.

- The console will display `31` because `30 + 1` (from the arithmetic expression `students += 1;`) is `31`.

---

# Subtraction

```javascript
let students = 30;

students -= 1;

console.log(students);
```

- Output:

    ```
    29
    ```

- The `-` is the *subtraction operator*.

- The statement `students -= 1;` is shorthand for `students = students - 1;`.

- The console will display `29` because `30 - 1` (from the arithmetic expression `students -= 1;`) is `29`.

---

# Multiplication

```javascript
let students = 30;

students *= 2;

console.log(students);
```

- Output:

    ```
    60
    ```

- The `*` is the *multiplication operator*.

- The statement `students *= 2;` is shorthand for `students = students * 2;`.

- The console will display `60` because `30 * 2` (from the arithmetic expression `students *= 2;`) is `60`.

---

# Division

```javascript
let students = 30;

students /= 2;

console.log(students);
```

- Output:

    ```
    15
    ```

- The `/` is the *division operator*.

- The statement `students /= 2;` is shorthand for `students = students / 2;`.

- The console will display `15` because `30 / 2` (from the arithmetic expression `students /= 2;`) is `15`.

---

# Exponent

```javascript
let students = 30;

students **= 2;

console.log(students);
```

- Output:

    ```
    900
    ```

- The `**` is the *exponent operator*.

- The statement `students **= 2;` is shorthand for `students = students ** 2;`.

- The console will display `900` because 30 squared (from the arithmetic expression `students **= 2;`) is `900` (also equal to 30 x 30 = 900).

---

# Modulus

```javascript
let students = 30;

students %= 2;

console.log(students);
```

- Output:

    ```
    0
    ```

- The `%` is the *modulus operator*.

- The statement `students %= 2;` is shorthand for `students = students % 2;`.

- The console will display `0` because `30` can be equally divided by `2`.

---

```javascript
let students = 30;

students %= 2;

console.log(students);
```

- Output:

    ```
    0
    ```

- The modulus operator can be helpful when you need to find whether a number is **even** or **odd**.

- The console will display `0` because `30` can equally be divided by two; this shows that `30` is an *even number*.

---

```javascript
let students = 31;

students %= 2;

console.log(students);
```

- Output:

    ```
    1
    ```

- The console will display `1` because `31` cannot be equally divided by two; this shows that `31` is an *odd number*.

---

# Increment and Decrement

```javascript
let students = 30;

students++;

console.log(students);
```

- Output:

    ```
    31
    ```

- The `++` is the *increment operator*.

- It increases the value (e.g. `30`) of the specified variable (e.g. `students`) by `1`.

- The console will display `31`, as `30 + 1 = 31`.

---

```javascript
let students = 30;

students--;

console.log(students);
```

- Output:

    ```
    29
    ```

- The `--` is the *decrement operator*.

- It decreases the value (e.g. `30`) of the specified variable (e.g. `students`) by `1`.

- The console will display `29`, as `30 - 1 = 29`.

---

# Operator Precedence

- Given a very complex equation, for example `let result = 1 + 2 * 3 + 4 ** 2;`, **operator precedence** determines in which order each part of the equation is solved.

- Operator precedence (highest to lowest):
    1. Parenthesis `()`
    2. Exponents `**`
    3. Multiplication `*`, Division `/`, and Modulo `%`
    4. Addition `+` and Subtraction `-`

---

```javascript
let result = 1 + 2 * 3 + 4 ** 2;

console.log(result);
```

- Output:

    ```
    23
    ```

- The console will display `23`, because starting from the left and working through following operator precedence:

    ```
    1 + 2 * 3 + 4 ** 2
    1 + 2 * 3 + 16
    1 + 6 + 16
    1 + 22
    23
    ```

---

```javascript
let result = 12 % 5 + 8 / 2;

console.log(result);
```

- Output:

    ```
    6
    ```

- The console will display `6`, because following operator precedence:

    ```
    12 % 5 + 8 / 2
    2 + 8 / 2
    2 + 4
    6
    ```

---

```javascript
let result = 6 / 128;

console.log(result);
```

- Output:

    ```
    0.046875
    ```

- The console will display `0.046875`, which is the result of dividing `6` by `128`.

# Ternary Operator

- The *ternary operator* `?` is a shorthand for an `if`-`else` statement. It returns one of two values depending on whether a condition is true or false.

- Syntax: `<variable> = (condition) ? <IfTrue> : <IfFalse>;`

- `<IfTrue>` can be a block of code as well.

---

## Pass or Fail

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS
        // Ternary operator = ?
        // It returns 1 of 2 values if a condition is true.
        // <variable> = (condition) ? <IfTrue> : <IfFalse>;

        int score = 70;

        String passOrFail = (score >= 60) ? "PASS" : "FAIL";

        System.out.println(passOrFail);

    }

}
```

- Output:

    ```
    PASS
    ```

- The statement `int score = 70;` declares an *integer variable* `score` and assigns it the value `70`.

- The statement `String passOrFail = (score >= 60) ? "PASS" : "FAIL";` uses the *ternary operator* to check if `score >= 60`. Since `70` is greater than or equal to `60`, the condition is `true`, so `"PASS"` is assigned to `passOrFail`.

- The statement `System.out.println(passOrFail);` displays `"PASS"` in the console.

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS

        int score = 55;

        String passOrFail = (score >= 60) ? "PASS" : "FAIL";

        System.out.println(passOrFail);

    }

}
```

- Output:

    ```
    FAIL
    ```

- This time `score` is `55`. Since `55` is less than `60`, the condition `score >= 60` is `false`, so `"FAIL"` is assigned to `passOrFail`.

---

## Even or Odd

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS

        int number = 3;

        String evenOrOdd = (number % 2 == 0) ? "EVEN" : "ODD";

        System.out.println(evenOrOdd);

    }

}
```

- Output:

    ```
    ODD
    ```

- The statement `String evenOrOdd = (number % 2 == 0) ? "EVEN" : "ODD";` uses the *modulus operator* `%` to check if `number` is divisible by `2`. If the remainder is `0`, the number is even; otherwise, it's odd.

- Since `3 % 2` equals `1` (not `0`), the condition is `false`, so `"ODD"` is assigned.

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS

        int number = 4;

        String evenOrOdd = (number % 2 == 0) ? "EVEN" : "ODD";

        System.out.println(evenOrOdd);

    }

}
```

- Output:

    ```
    EVEN
    ```

- Since `4 % 2` equals `0`, the condition is `true`, so `"EVEN"` is assigned.

---

## Time of Day

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS

        int hours = 1300;

        String timeOfDay = (hours < 1200) ? "A.M." : "P.M.";

        System.out.println(timeOfDay);

    }

}
```

- Output:

    ```
    P.M.
    ```

- The statement `String timeOfDay = (hours < 1200) ? "A.M." : "P.M.";` checks if `hours` is less than `1200` (noon in 24-hour format).

- Since `1300` is not less than `1200`, the condition is `false`, so `"P.M."` is assigned.

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS

        int hours = 1000;

        String timeOfDay = (hours < 1200) ? "A.M." : "P.M.";

        System.out.println(timeOfDay);

    }

}
```

- Output:

    ```
    A.M.
    ```

- Since `1000` is less than `1200`, the condition is `true`, so `"A.M."` is assigned.

---

## Tax Rate

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS

        int income = 60000;

        double taxRate = (income >= 40000) ? 0.25 : 0.15;

        System.out.println(taxRate);

    }

}
```

- Output:

    ```
    0.25
    ```

- The statement `double taxRate = (income >= 40000) ? 0.25 : 0.15;` checks if `income` is greater than or equal to `40000`.

- Since `60000` is greater than `40000`, the condition is `true`, so the higher tax rate `0.25` is assigned.

```java
public class Main {

    public static void main(String[] args) {

        // TERNARY OPERATORS

        int income = 30000;

        double taxRate = (income >= 40000) ? 0.25 : 0.15;

        System.out.println(taxRate);

    }

}
```

- Output:

    ```
    0.15
    ```

- Since `30000` is less than `40000`, the condition is `false`, so the lower tax rate `0.15` is assigned.

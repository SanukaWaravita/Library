# Logical Operators

- *Logical operators* are used to combine multiple conditions in an `if` statement.

| Operator | Name | Description |
|---|---|---|
| `&&` | AND | Both conditions must be `true` |
| `\|\|` | OR | At least one condition must be `true` |
| `!` | NOT | Reverses the boolean value (true becomes false, false becomes true) |

---

## AND Operator (&&)

```java
public class Main {

    public static void main(String[] args) {

        // LOGICAL OPERATORS
        // && = AND
        // || = OR
        // ! = NOT

        double temp = 20;

        if(temp <= 30 && temp >= 0){
            System.out.println("The weather is GOOD 😃");
        }

    }

}
```

- Output:

    ```
    The weather is GOOD 😃
    ```

- The statement `double temp = 20;` declares a *double* variable `temp` and assigns it the value `20`.

- The `if(temp <= 30 && temp >= 0)` statement uses the `&&` (*AND*) operator to check two conditions: "if `temp` is less than or equal to `30` **and** `temp` is greater than or equal to `0`".

- Both conditions must be `true` for the code inside the `if` block to execute. Since `20` is between `0` and `30`, both are `true`, and the message is printed.

```java
public class Main {

    public static void main(String[] args) {

        double temp = 40;

        if(temp <= 30 && temp >= 0){
            System.out.println("The weather is GOOD 😃");
        }

    }

}
```

- Output:

    ```
    (null)
    ```

- Since `temp` is `40`, the condition `temp <= 30` is `false`. With the `&&` operator, if **either** condition is `false`, the whole expression is `false`, so nothing is printed.

```java
public class Main {

    public static void main(String[] args) {

        double temp = -1;

        if(temp <= 30 && temp >= 0){
            System.out.println("The weather is GOOD 😃");
        }

    }

}
```

- Output:

    ```
    (null)
    ```

- Since `temp` is `-1`, the condition `temp >= 0` is `false`. Even though `temp <= 30` is `true`, the `&&` operator requires **both** conditions to be `true`, so nothing is printed.

---

## Multiple AND Conditions

```java
public class Main {

    public static void main(String[] args) {

        double temp = 20;
        boolean isSunny = true;

        if(temp <= 30 && temp >= 0 && isSunny){
            System.out.println("The weather is GOOD 😃");
            System.out.println("It is SUNNY outside ☀️");
        }

    }

}
```

- Output:

    ```
    The weather is GOOD 😃
    It is SUNNY outside ☀️
    ```

- The `if(temp <= 30 && temp >= 0 && isSunny)` statement chains three conditions with `&&`. All three must be `true` for the code to execute.

- Since `temp` is `20` (between `0` and `30`) and `isSunny` is `true`, all conditions are met and both messages are printed.

---

## NOT Operator (!)

```java
public class Main {

    public static void main(String[] args) {

        double temp = 20;
        boolean isSunny = true;

        if(temp <= 30 && temp >= 0 && isSunny){
            System.out.println("The weather is GOOD 😃");
            System.out.println("It is SUNNY outside ☀️");
        }
        else if(temp <= 30 && temp >= 0 && !isSunny){
            System.out.println("The weather is GOOD 😃");
            System.out.println("It is CLOUDY outside ⛅");
        }

    }

}
```

- Output:

    ```
    The weather is GOOD 😃
    It is SUNNY outside ☀️
    ```

- The `!` (*NOT*) operator reverses a *boolean* value — `!true` becomes `false`, and `!false` becomes `true`.

- The first `if` checks if the temperature is good **and** it's sunny. Since `isSunny` is `true`, this condition passes and the first block runs.

- The `else if` uses `!isSunny` to check if it's **not** sunny. If `isSunny` were `false`, then `!isSunny` would be `true`, and the cloudy message would print instead.
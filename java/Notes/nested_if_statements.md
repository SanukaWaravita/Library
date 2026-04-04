[< Back to Station](../station.md)

---

# Nested If Statements

```java
public class Main {

    public static void main(String[] args) {

        boolean isStudent = true;
        boolean isSenior = true;
        double price = 9.99;

        if(isStudent){
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                System.out.println("You get a student discount of 10%");
                price *= 0.7;
            }
            else{
                System.out.println("You get a student discount of 10%");
                price *= 0.9;
            }
        }
        else{
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                price *= 0.8;
            }
            else{
                price *= 1;     // Does not have any functional use, just helps with the visual
            }
        }

        System.out.printf("The price of a ticket is: $%.2f", price);

    }

}
```

- Output:

    ```
    You get a senior discount of 20%
    You get a student discount of 10%
    The price of a ticket is: $6.99
    ```

- The variables `boolean isStudent = true;` and `boolean isSenior = true;` are both set to `true`, and the `double price = 9.99;` sets the ticket price to `$9.99`.

- The outer `if(isStudent)` checks if the person is a student. Since `isStudent` is `true`, we enter the first block.

- Inside, the inner `if(isSenior)` checks if the person is also a senior. Since `isSenior` is `true`, both discounts apply.

- The statement `price *= 0.7;` applies a combined 30% discount (20% senior + 10% student), making the final price `$6.99`.

- The statement `System.out.printf("The price of a ticket is: $%.2f", price);` displays the final price formatted to `2` decimal places.

---

## Student, Not Senior

```java
public class Main {

    public static void main(String[] args) {

        boolean isStudent = true;
        boolean isSenior = false;
        double price = 9.99;

        if(isStudent){
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                System.out.println("You get a student discount of 10%");
                price *= 0.7;
            }
            else{
                System.out.println("You get a student discount of 10%");
                price *= 0.9;
            }
        }
        else{
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                price *= 0.8;
            }
            else{
                price *= 1;     // Does not have any functional use, just helps with the visual
            }
        }

        System.out.printf("The price of a ticket is: $%.2f", price);

    }

}
```

- Output:

    ```
    You get a student discount of 10%
    The price of a ticket is: $8.99
    ```

- Here `isStudent` is `true` but `isSenior` is `false`.

- The outer `if(isStudent)` is true, so we enter that block. The inner `if(isSenior)` is false, so the `else` block runs.

- The statement `price *= 0.9;` applies only the 10% student discount, making the final price `$8.99`.

---

## Senior, Not Student

```java
public class Main {

    public static void main(String[] args) {

        boolean isStudent = false;
        boolean isSenior = true;
        double price = 9.99;

        if(isStudent){
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                System.out.println("You get a student discount of 10%");
                price *= 0.7;
            }
            else{
                System.out.println("You get a student discount of 10%");
                price *= 0.9;
            }
        }
        else{
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                price *= 0.8;
            }
            else{
                price *= 1;     // Does not have any functional use, just helps with the visual
            }
        }

        System.out.printf("The price of a ticket is: $%.2f", price);

    }

}
```

- Output:

    ```
    You get a senior discount of 20%
    The price of a ticket is: $7.99
    ```

- Here `isStudent` is `false` and `isSenior` is `true`.

- The outer `if(isStudent)` is false, so we skip to the `else` block. Inside, the inner `if(isSenior)` is true.

- The statement `price *= 0.8;` applies only the 20% senior discount, making the final price `$7.99`.

---

## Neither Student Nor Senior

```java
public class Main {

    public static void main(String[] args) {

        boolean isStudent = false;
        boolean isSenior = false;
        double price = 9.99;

        if(isStudent){
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                System.out.println("You get a student discount of 10%");
                price *= 0.7;
            }
            else{
                System.out.println("You get a student discount of 10%");
                price *= 0.9;
            }
        }
        else{
            if(isSenior){
                System.out.println("You get a senior discount of 20%");
                price *= 0.8;
            }
            else{
                price *= 1;     // Does not have any functional use, just helps with the visual
            }
        }

        System.out.printf("The price of a ticket is: $%.2f", price);

    }

}
```

- Output:

    ```
    The price of a ticket is: $9.99
    ```

- Here both `isStudent` and `isSenior` are `false`.

- The outer `if(isStudent)` is false, so we go to the `else` block. The inner `if(isSenior)` is also false, so the inner `else` block runs.

- The statement `price *= 1;` has no functional effect — the price stays at `$9.99`. The comment notes this line is just there for visual completeness.

- No discount messages are printed, and the full price of `$9.99` is displayed.
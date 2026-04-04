[< Back to Station](../station.md)

---

# For Loops

- A *for loop* executes some code a **certain** amount of times.

- Syntax: `for(<initialization for a counter>; <condition>; <step for counter>){}`

---

## Basic For Loop

```java
public class Main {

    public static void main(String[] args) {

        for(int i = 0; i < 10; i++){
            System.out.print(i);
            System.out.println(" pizza");
        }

    }

}
```

- Output:

    ```
    0 pizza
    1 pizza
    2 pizza
    3 pizza
    4 pizza
    5 pizza
    6 pizza
    7 pizza
    8 pizza
    9 pizza
    ```

- The `int i = 0` is the *initialization* — it creates a *loop control variable* `i` starting at `0`.

- The `i < 10` is the *condition* — the loop continues as long as `i` is less than `10`.

- The `i++` is the *step* — after each iteration, `i` increases by `1`.

- The loop runs `10` times (from `0` to `9`), printing the value of `i` followed by `" pizza"` each time.

## Using <= (Inclusive End)

```java
public class Main {

    public static void main(String[] args) {

        for(int i = 0; i <= 10; i++){
            System.out.print(i);
            System.out.println(" pizza");
        }

    }

}
```

- Output:

    ```
    0 pizza
    1 pizza
    2 pizza
    3 pizza
    4 pizza
    5 pizza
    6 pizza
    7 pizza
    8 pizza
    9 pizza
    10 pizza
    ```

- By changing the condition from `i < 10` to `i <= 10`, the loop now includes `10` itself, running `11` times (from `0` to `10`).

---

## Counting Backwards (i--)

```java
public class Main {

    public static void main(String[] args) {

        for(int i = 10; i > 0; i--){
            System.out.print(i);
            System.out.println(" pizza");
        }

    }

}
```

- Output:

    ```
    10 pizza
    9 pizza
    8 pizza
    7 pizza
    6 pizza
    5 pizza
    4 pizza
    3 pizza
    2 pizza
    1 pizza
    ```

- The loop starts at `10` and counts down. The `i--` *decrements* `i` by `1` after each iteration.

- The condition `i > 0` means it stops when `i` reaches `0` (so `0` is not printed).

---

## Custom Step Size (i += 2)

```java
public class Main {

    public static void main(String[] args) {

        for(int i = 1; i <= 10; i += 2){
            System.out.print(i);
            System.out.println(" pizza");
        }

    }

}
```

- Output:

    ```
    1 pizza
    3 pizza
    5 pizza
    7 pizza
    9 pizza
    ```

- The step `i += 2` increases `i` by `2` each iteration instead of `1`, so only odd numbers are printed.

```java
public class Main {

    public static void main(String[] args) {

        for(int i = 1; i <= 10; i += 3){
            System.out.print(i);
            System.out.println(" pizza");
        }

    }

}
```

- Output:

    ```
    1 pizza
    4 pizza
    7 pizza
    10 pizza
    ```

- The step `i += 3` increases `i` by `3` each iteration, printing every third number starting from `1`.

---

## Custom Step Size Backwards (i -= 2)

```java
public class Main {

    public static void main(String[] args) {

        for(int i = 10; i > 0; i -= 2){
            System.out.print(i);
            System.out.println(" pizza");
        }

    }

}
```

- Output:

    ```
    10 pizza
    8 pizza
    6 pizza
    4 pizza
    2 pizza
    ```

- The step `i -= 2` decreases `i` by `2` each iteration, counting down by twos from `10`.

---

## For Loop With User Input

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter how many times you want to loop: ");
        int max = scanner.nextInt();

        for(int i = 0; i < max; i++){
            System.out.println(i);
        }

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter how many times you want to loop: 5
    ```

- Output:

    ```
    0
    1
    2
    3
    4
    ```

- The program asks the user how many times they want to loop using `Scanner`.

- The user's input is stored in `max`, which is then used as the condition `i < max` in the for loop.

- If the user enters `5`, the loop runs `5` times, printing `0` through `4`.
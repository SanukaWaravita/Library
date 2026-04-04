[< Back to Station](../station.md)

---

# Nested Loops

- A *nested loop* is a loop inside another loop.

- Often used with matrices or DS&A (Data Structures & Algorithms).

---

## Single Loop (For Context)

```java
public class Main {

    public static void main(String[] args){

        for(int i = 1; i <= 9; i++){
            System.out.print(i + " ");
        }

    }

}
```

- Output:

    ```
    1 2 3 4 5 6 7 8 9
    ```

- This is a simple for loop that prints the numbers `1` through `9` on a single line.

---

## Nested Loop

```java
public class Main {

    public static void main(String[] args){

        // don't repeat yourself if you don't have to

        for(int i = 1; i <= 3; i++){
            for(int j = 1; j <= 9; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }

    }

}
```

- Output:

    ```
    1 2 3 4 5 6 7 8 9
    1 2 3 4 5 6 7 8 9
    1 2 3 4 5 6 7 8 9
    ```

- The *outer loop* `for(int i = 1; i <= 3; i++)` runs `3` times, controlling how many rows are printed.

- The *inner loop* `for(int j = 1; j <= 9; j++)` runs `9` times **for each iteration** of the outer loop, printing the numbers `1` through `9` on a single line.

- The `System.out.println();` after the inner loop moves the cursor to the next line, so each row of numbers appears on its own line.

- Instead of writing the same single loop three times, we use a *nested loop* to avoid repeating ourselves — the outer loop handles the repetition.
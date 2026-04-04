# Break and Continue

- `break` = break out of a loop (**STOP**)

- `continue` = skip the current iteration of a loop (**SKIP**)

---

## Break

```java
public class Main {

    public static void main(String[] args){

        for(int i = 0; i < 10; i++){

            if(i == 5){
                break;
            }

            System.out.print(i + " ");
        }

    }

}
```

- Output:

    ```
    0 1 2 3 4
    ```

- The loop starts at `0` and is set to run while `i < 10`.

- The `if(i == 5)` checks if `i` has reached `5`. When it does, the `break;` statement **immediately exits** the entire loop.

- So only `0` through `4` are printed — once `i` becomes `5`, the loop stops completely and no further iterations run.

---

## Continue

```java
public class Main {

    public static void main(String[] args){

        for(int i = 0; i < 10; i++){

            if(i == 5){
                continue;
            }

            System.out.print(i + " ");
        }

    }

}
```

- Output:

    ```
    0 1 2 3 4 6 7 8 9
    ```

- The loop runs from `0` to `9` just like before.

- The `if(i == 5)` checks if `i` equals `5`. When it does, the `continue;` statement **skips the rest of the current iteration** and jumps to the next one.

- So `5` is skipped, but the loop keeps going — `0` through `4` are printed, then `6` through `9`. The loop does **not** stop; it only skips that one iteration.
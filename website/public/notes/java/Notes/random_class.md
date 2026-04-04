# Random Class

```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random random = new Random();

        int number;

        number = random.nextInt();

        System.out.println(number);

    }

}
```

- Output:

    ```
    404793686
    ```

- The program creates a `Random` object called `random`.

- Then it generates a random *integer* with `random.nextInt()`.

- This method returns a random number anywhere within the full range of Java `int` values, which is from `-2,147,483,648` to `2,147,483,647`.

- Finally, it prints the random number to the console.

- So basically, `random.nextInt()` gives you any possible *integer* value inside that huge range!

---

## Generating Random Integers Within a Range

```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random random = new Random();

        int number;

        number = random.nextInt(1, 6);

        System.out.println(number);

    }

}
```

- Output:

    ```
    4
    ```

- The program uses `random.nextInt(1, 6)` to generate a random *integer*.

- This method returns a number starting from `1` (inclusive) up to `6` (exclusive).

- That means the possible values are `1`, `2`, `3`, `4`, or `5` — `6` is not included.

- Then it prints the generated number to the console.

```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random random = new Random();

        int number1;
        int number2;
        int number3;

        number1 = random.nextInt(1, 7);
        number2 = random.nextInt(1, 7);
        number3 = random.nextInt(1, 7);

        System.out.println(number1);
        System.out.println(number2);
        System.out.println(number3);

    }

}
```

- Output:

    ```
    4
    3
    4
    ```

- This program generates `3` random numbers using `random.nextInt(1, 7)`, simulating three dice rolls with values from `1` to `6`.

```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random random = new Random();

        int number1;
        int number2;
        int number3;

        number1 = random.nextInt(1, 101);
        number2 = random.nextInt(1, 101);
        number3 = random.nextInt(1, 101);

        System.out.println(number1);
        System.out.println(number2);
        System.out.println(number3);

    }

}
```

- Output:

    ```
    41
    61
    14
    ```

- This program generates `3` random numbers using `random.nextInt(1, 101)`.

- Each number will be between `1` (inclusive) and `101` (exclusive).

- That means the possible values for each number are from `1` to `100`.

- It then prints all three numbers, each on its own line.

---

## Generating Random Doubles

```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random random = new Random();

        double number;

        number = random.nextDouble();

        System.out.println(number);

    }

}
```

- Output:

    ```
    0.6501464062953914
    ```

- This program generates a random *double* number using `random.nextDouble()`.

- The value will be between `0.0` (inclusive) and `1.0` (exclusive).

- So the number can be anything from `0.0` up to but not including `1.0`.

- It then prints that random number.

- Basically, `nextDouble()` gives you a *decimal* number starting at `0` and less than `1` every time you run it.

---

## Generating Random Booleans

```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random random = new Random();

        boolean isheads;

        isheads = random.nextBoolean();

        System.out.println(isheads);

    }

}
```

- Output:

    ```
    true
    ```

- This program uses `random.nextBoolean()` to generate a random *boolean* value.

- The result can be either `true` or `false`.

- You can think of it like flipping a coin: `true` = heads, `false` = tails.

- It then prints whether it's heads or tails (`true` or `false`).

- So basically, `nextBoolean()` randomly picks between two options every time you run it.

```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random random = new Random();

        boolean isheads;

        isheads = random.nextBoolean();

        System.out.println(isheads);

        if(isheads){
            System.out.println("HEADS!");
        }
        else{
            System.out.println("TAILS!");
        }

    }

}
```

- Output:

    ```
    true
    HEADS!
    ```

- This program simulates a coin toss using `random.nextBoolean()`.

- `isheads` stores the random `true` or `false` value.

- If `isheads` is `true`, it prints "HEADS!".

- Otherwise, it prints "TAILS!".

- So every time you run it, you get a random coin flip result!
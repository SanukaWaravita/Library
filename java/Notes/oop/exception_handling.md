[< Back to Station](../../station.md)

---

# Exception Handling

- An *exception* is an event that interrupts the normal flow of a program; dividing by zero, file not found, mismatched input value, etc.

- Surround any dangerous code with a `try{}` block.

- Anytime you are accepting user input or accessing external resources is considered "dangerous code".

- The three key blocks are `try{}`, `catch{}`, and `finally{}`.

---

# ArithmeticException

```java
public class Main {

    public static void main(String[] args) {

        System.out.println(1 / 0);

    }

}
```

- Output:

    ```
    Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Main.main(Main.java:5)
    ```

- The statement `System.out.println(1 / 0);` attempts to divide `1` by `0`, which causes an `ArithmeticException` at runtime.

- Since there is no exception handling in this program, the exception crashes the program and prints an error message to the console.

---

# Try-Catch

```java
public class Main {

    public static void main(String[] args) {

        try {

            System.out.println(1 / 0);

        }
        catch (ArithmeticException e) {

            System.out.println("YOU CAN'T DIVIDE BY ZERO IDIOT!");

        }

    }

}
```

- Output:

    ```
    YOU CAN'T DIVIDE BY ZERO IDIOT!
    ```

- The `try` block wraps the dangerous code `System.out.println(1 / 0);` so that if an exception occurs, it can be caught instead of crashing the program.

- The `catch (ArithmeticException e)` block catches the specific `ArithmeticException` and prints a custom error message instead.

---

# Catching the Wrong Exception

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        try {

            System.out.print("Enter a number: ");

            int number = scanner.nextInt();

            System.out.println(number);

        }
        catch (ArithmeticException e) {

            System.out.println("YOU CAN'T DIVIDE BY ZERO IDIOT!");

        }

        scanner.close();

    }

}
```

- Output:

    ```
    Exception in thread "main" java.util.InputMismatchException
    ```

- This program catches `ArithmeticException`, but the actual exception thrown when the user enters a non-numeric value is an `InputMismatchException`.

- Since the `catch` block does not match the thrown exception, the program still crashes. **You must catch the correct exception type.**

---

# InputMismatchException

```java
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        try {

            System.out.print("Enter a number: ");

            int number = scanner.nextInt();

            System.out.println(number);

        }
        catch (InputMismatchException e) {

            System.out.println("THAT WASNT A NUMBER!");

        }

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter a number: Taco
    ```

- Output:

    ```
    THAT WASNT A NUMBER!
    ```

- The `catch (InputMismatchException e)` block now correctly catches the exception thrown when the user enters `"Taco"` instead of a number.

- The `import java.util.InputMismatchException;` statement is needed to use the `InputMismatchException` class.

---

# Catching All Exceptions

```java
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        try {

            System.out.print("Enter a number: ");

            int number = scanner.nextInt();

            System.out.println(number);

        }
        catch (Exception e) {

            System.out.println("Something went wrong!");

        }

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter a number: r
    ```

- Output:

    ```
    Something went wrong!
    ```

- The `catch (Exception e)` block will catch **all** exceptions, since `Exception` is the parent class of all exception types.

---

# Multiple Catch Blocks

```java
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        try {

            System.out.print("Enter a number: ");

            int number = scanner.nextInt();

            System.out.println(number);

        }
        catch (InputMismatchException e) {

            System.out.println("THAT WASNT A NUMBER!");

        }
        catch (Exception e) {

            System.out.println("Something went wrong!");

        }

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter a number: Taco
    ```

- Output:

    ```
    THAT WASNT A NUMBER!
    ```

- It is good practice to be **specific** about what the error is, so that the user knows exactly what they need to do to avoid that error.

- You can use the `catch (Exception e)` block as a **last resort** against any exceptions that you may not anticipate while writing the program.

- **Specific catch blocks must come before generic ones.** If `catch (Exception e)` came first, it would catch everything and the more specific blocks would never execute.

---

# Finally Block

```java
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        try {

            System.out.print("Enter a number: ");

            int number = scanner.nextInt();

            System.out.println(number);

        }
        catch (InputMismatchException e) {

            System.out.println("THAT WASNT A NUMBER!");

        }
        catch (Exception e) {

            System.out.println("Something went wrong!");

        }
        finally {

            scanner.close();

            System.out.println("This always executes.");

        }

    }

}
```

- Output (error case):

    ```
    Enter a number: e
    THAT WASNT A NUMBER!
    This always executes.
    ```

- Output (success case):

    ```
    Enter a number: 123
    123
    This always executes.
    ```

- Code within the `finally` block will **always execute** regardless of whether an exception occurs or not.

- The `finally` block is often used for *cleanup*, such as closing a `Scanner` or releasing resources.

- In both output variations above, the message `"This always executes."` is printed, demonstrating that `finally` runs no matter what.

---

# Try-With-Resources

```java
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        try (Scanner scanner = new Scanner(System.in)) {

            System.out.print("Enter a number: ");

            int number = scanner.nextInt();

            System.out.println(number);

        }
        catch (InputMismatchException e) {

            System.out.println("THAT WASNT A NUMBER!");

        }
        catch (Exception e) {

            System.out.println("Something went wrong!");

        }
        finally {

            System.out.println("This always executes.");

        }

    }

}
```

- The statement `try (Scanner scanner = new Scanner(System.in))` is called *try-with-resources*, which is typically recommended by Java.

- With *try-with-resources*, the `Scanner` is declared inside the parentheses of the `try` statement. Java will **automatically close** the resource when the `try` block finishes, so you do not need to call `scanner.close()` manually.

- You can only use *try-with-resources* with classes that support the *AutoCloseable interface*. The `Scanner` class implements this interface, so it works here.

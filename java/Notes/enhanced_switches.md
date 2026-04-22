[< Back to Station](../station.md)

---

# Enhanced Switches

- *Enhanced switches* are a replacement to many `else if` statements (Java 14 feature).

- They use the *arrow operator* `->` instead of `case:` and `break;`, which makes the code cleaner and less error-prone.

---

## Basic Enhanced Switch

```java
public class Main {

    public static void main(String[] args) {

        // Enhanced switches = A replacement to many else if statements
        //                      (Java 14 feature)

        String day = "Monday";

        switch(day){
            case "Monday" -> System.out.println("It is a weekday 😭");
            case "Teusday" -> System.out.println("It is a weekday 😭");
            case "Wednesday" -> System.out.println("It is a weekday 😭");
            case "Thursday" -> System.out.println("It is a weekday 😭");
            case "Friday" -> System.out.println("It is a weekday 😭");
            case "Saturday" -> System.out.println("It is a weekend 🤩");
            case "Sunday" -> System.out.println("It is a weekend 🤩");
        }

    }

}
```

- Output:

    ```
    It is a weekday 😭
    ```

- The statement `String day = "Monday";` declares a `String` variable `day` and assigns it the value `"Monday"`.

- The `switch(day)` statement evaluates the value of `day` and matches it against each `case`.

- The `->` is the *arrow operator*, which denotes "do something" — it replaces the traditional `case:` with `break;` pattern.

- Since `day` is `"Monday"`, it matches the first case and prints `"It is a weekday 😭"`.

```java
public class Main {

    public static void main(String[] args) {

        String day = "Friday";

        switch(day){
            case "Monday" -> System.out.println("It is a weekday 😭");
            case "Teusday" -> System.out.println("It is a weekday 😭");
            case "Wednesday" -> System.out.println("It is a weekday 😭");
            case "Thursday" -> System.out.println("It is a weekday 😭");
            case "Friday" -> System.out.println("It is a weekday 😭");
            case "Saturday" -> System.out.println("It is a weekend 🤩");
            case "Sunday" -> System.out.println("It is a weekend 🤩");
        }

    }

}
```

- Output:

    ```
    It is a weekend 🤩
    ```

- Since `day` is `"Friday"`, it matches the `"Friday"` case and prints `"It is a weekday 😭"`.

---

## No Match (Null Output)

```java
public class Main {

    public static void main(String[] args) {

        String day = "PizzaDay";

        switch(day){
            case "Monday" -> System.out.println("It is a weekday 😭");
            case "Teusday" -> System.out.println("It is a weekday 😭");
            case "Wednesday" -> System.out.println("It is a weekday 😭");
            case "Thursday" -> System.out.println("It is a weekday 😭");
            case "Friday" -> System.out.println("It is a weekday 😭");
            case "Saturday" -> System.out.println("It is a weekend 🤩");
            case "Sunday" -> System.out.println("It is a weekend 🤩");
        }

    }

}
```

- Output:

    ```
    (null)
    ```

- Since `"PizzaDay"` does not match any of the cases, **nothing is executed** and the output is null.

- To handle cases where no match is found, we can add a `default` case.

---

## Adding a Default Case

```java
public class Main {

    public static void main(String[] args) {

        String day = "PizzaDay";

        switch(day){
            case "Monday" -> System.out.println("It is a weekday 😭");
            case "Teusday" -> System.out.println("It is a weekday 😭");
            case "Wednesday" -> System.out.println("It is a weekday 😭");
            case "Thursday" -> System.out.println("It is a weekday 😭");
            case "Friday" -> System.out.println("It is a weekday 😭");
            case "Saturday" -> System.out.println("It is a weekend 🤩");
            case "Sunday" -> System.out.println("It is a weekend 🤩");
            default -> System.out.println(day + " is not a day");
        }

    }

}
```

- Output:

    ```
    PizzaDay is not a day
    ```

- The `default` case behaves similar to an `else` statement — it runs when none of the other cases match.

- Since `"PizzaDay"` doesn't match any day, the `default` case executes and prints `"PizzaDay is not a day"`.

---

## Enhanced Switch With User Input

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // Enhanced switches = A replacement to many else if statements
        //                      (Java 14 feature)

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the day of the week: ");

        String day = scanner.nextLine();

        switch(day){
            case "Monday" -> System.out.println("It is a weekday 😭");
            case "Teusday" -> System.out.println("It is a weekday 😭");
            case "Wednesday" -> System.out.println("It is a weekday 😭");
            case "Thursday" -> System.out.println("It is a weekday 😭");
            case "Friday" -> System.out.println("It is a weekday 😭");
            case "Saturday" -> System.out.println("It is a weekend 🤩");
            case "Sunday" -> System.out.println("It is a weekend 🤩");
            default -> System.out.println(day + " is not a day");
        }

        scanner.close();

    }

}
```

- The program uses a `Scanner` to accept user input for the day of the week, then evaluates it with an *enhanced switch*.

- The `default` case handles any input that doesn't match a valid day name.

---

## Combining Multiple Cases

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // Enhanced switches = A replacement to many else if statements
        //                      (Java 14 feature)

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the day of the week: ");

        String day = scanner.nextLine();

        switch(day){
            case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" -> System.out.println("It is a weekday 😭");
            case "Saturday", "Sunday" -> System.out.println("It is a weekend 🤩");
            default -> System.out.println(day + " is not a day");
        }

        scanner.close();

    }

}
```

- Instead of writing a separate case for each weekday, you can **combine multiple cases** using commas: `case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"`.

- This makes the switch much more concise — all five weekdays share the same action, and both weekend days share theirs.

- The `default` case still catches any invalid input.
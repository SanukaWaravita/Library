[< Back to Station](../../station.md)

---

# Enums

An *enumeration* (enum) is a special kind of class that represents a **fixed set of constants**. Enums improve code readability and are easy to maintain. They are also more efficient with `switch` statements when comparing values, as opposed to comparing `String` literals.

---

## The Day Enum Class

```java
public enum Day {

    SUNDAY(1),
    MONDAY(2),
    TUESDAY(3),
    WEDNESDAY(4),
    THURSDAY(5),
    FRIDAY(6),
    SATURDAY(7);

    private final int dayNumber;

    Day(int dayNumber) {
        this.dayNumber = dayNumber;
    }

    public int getDayNumber() {
        return this.dayNumber;
    }
}
```

- The `enum` keyword declares `Day` as an *enumeration* rather than a regular class.

- The constants `SUNDAY(1)` through `SATURDAY(7)` are the **enum values**. Each one is an instance of `Day` with an associated `int` passed to the constructor.

- The field `private final int dayNumber` stores the number associated with each day. It is `final` because enum constants should not change after creation.

- The constructor `Day(int dayNumber)` assigns the passed-in value to the `dayNumber` field. Enum constructors are **implicitly private** -- you cannot call them directly with `new`.

- The method `getDayNumber()` is a *getter* that returns the `dayNumber` for a given enum constant.

---

## Using an Enum

```java
public class Main {

    public static void main(String[] args) {

        Day day = Day.SUNDAY;

        System.out.println(day);
    }
}
```

- Output:

    ```
    SUNDAY
    ```

- The statement `Day day = Day.SUNDAY;` declares a variable `day` of type `Day` and assigns it the enum constant `SUNDAY`.

- The statement `System.out.println(day);` prints the **name** of the enum constant. By default, calling `println` on an enum prints its name as a `String`.

---

## Accessing Enum Fields

```java
public class Main {

    public static void main(String[] args) {

        Day day = Day.SUNDAY;

        System.out.println(day);

        System.out.println(day.getDayNumber());
    }
}
```

- Output:

    ```
    SUNDAY
    1
    ```

- The statement `System.out.println(day)` prints the name of the constant, which is `SUNDAY`.

- The statement `System.out.println(day.getDayNumber())` calls the `getDayNumber()` method on the `SUNDAY` constant, which returns `1` because `SUNDAY` was defined with the value `1`.

---

## Enums With Enhanced Switch

Enum classes are very useful with `switch` and *enhanced switch* statements because the compiler knows all possible values, making the code safer and more readable.

```java
public class Main {

    public static void main(String[] args) {

        Day day = Day.SUNDAY;

        switch(day) {
            case MONDAY,
                 TUESDAY,
                 WEDNESDAY,
                 THURSDAY,
                 FRIDAY -> System.out.println("It is a weekday");
            case SATURDAY,
                 SUNDAY -> System.out.println("It is the weekend!");
        }
    }
}
```

- Output:

    ```
    It is the weekend!
    ```

- The statement `Day day = Day.SUNDAY;` sets the day to `SUNDAY`.

- The `switch(day)` statement uses the *enhanced switch* syntax with `->` arrows instead of `case`/`break`. Each arrow branch handles one or more enum constants separated by commas.

- Since `day` is `SUNDAY`, it matches the `SATURDAY, SUNDAY` branch and prints `"It is the weekend!"`.

---

If we change the value to `Day.MONDAY`:

```java
public class Main {

    public static void main(String[] args) {

        Day day = Day.MONDAY;

        switch(day) {
            case MONDAY,
                 TUESDAY,
                 WEDNESDAY,
                 THURSDAY,
                 FRIDAY -> System.out.println("It is a weekday");
            case SATURDAY,
                 SUNDAY -> System.out.println("It is the weekend!");
        }
    }
}
```

- Output:

    ```
    It is a weekday
    ```

- Since `day` is now `MONDAY`, it matches the first branch and prints `"It is a weekday"`.

---

## Enums With User Input

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a day of the week: ");
        String response = scanner.nextLine().toUpperCase();

        try {
            Day day = Day.valueOf(response);

            switch(day) {
                case MONDAY,
                     TUESDAY,
                     WEDNESDAY,
                     THURSDAY,
                     FRIDAY -> System.out.println("It is a weekday");
                case SATURDAY,
                     SUNDAY -> System.out.println("It is the weekend!");
            }
        }
        catch(IllegalArgumentException e) {
            System.out.println("Please enter a valid day!");
        }

        scanner.close();
    }
}
```

- The statement `String response = scanner.nextLine().toUpperCase();` reads the user's input and converts it to **uppercase** so it matches the enum constant names (which are uppercase by convention).

- The statement `Day day = Day.valueOf(response);` converts the `String` to a `Day` enum constant. The `valueOf()` method is a built-in static method on every enum that looks up a constant by its exact name.

- If the user enters a value that does not match any constant (e.g., `"PizzaDay"`), `valueOf()` throws an `IllegalArgumentException`. The `try`/`catch` block handles this gracefully by printing `"Please enter a valid day!"`.

- The `scanner.close();` statement closes the `Scanner` to free system resources.

If the user enters `Wednesday`:

- Output + User Input:

    ```
    Enter a day of the week: Wednesday
    ```

- Output:

    ```
    It is a weekday
    ```

If the user enters `Sunday`:

- Output + User Input:

    ```
    Enter a day of the week: Sunday
    ```

- Output:

    ```
    It is the weekend!
    ```

If the user enters `PizzaDay`:

- Output + User Input:

    ```
    Enter a day of the week: PizzaDay
    ```

- Output:

    ```
    Please enter a valid day!
    ```

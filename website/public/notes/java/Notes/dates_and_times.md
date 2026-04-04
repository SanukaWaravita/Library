[< Back to Station](../station.md)

---

# Dates and Times

- Java provides several classes for working with dates and times: `LocalDate`, `LocalTime`, `LocalDateTime`, and `Instant` (UTC timestamp).

---

## LocalDate

```java
import java.time.LocalDate;

public class Main {

    public static void main(String[] args) {

        LocalDate date = LocalDate.now();

        System.out.println(date);

    }

}
```

- Output:

    ```
    2025-10-05
    ```

- The `import java.time.LocalDate;` statement imports the `LocalDate` class.

- The statement `LocalDate.now();` returns the current date in the format `yyyy-MM-dd`.

---

## LocalTime

```java
import java.time.LocalTime;

public class Main {

    public static void main(String[] args) {

        LocalTime time = LocalTime.now();

        System.out.println(time);

    }

}
```

- Output:

    ```
    16:35:49.460677200
    ```

- The `LocalTime.now();` method returns the current time, including hours, minutes, seconds, and nanoseconds.

---

## LocalDateTime

```java
import java.time.LocalDateTime;

public class Main {

    public static void main(String[] args) {

        LocalDateTime dateTime = LocalDateTime.now();

        System.out.println(dateTime);

    }

}
```

- Output:

    ```
    2025-10-05T16:37:08.834526200
    ```

- The `LocalDateTime.now();` method returns both the current date and time combined, separated by a `T`.

---

## Instant (UTC Timestamp)

```java
import java.time.Instant;

public class Main {

    public static void main(String[] args) {

        Instant instant = Instant.now();

        System.out.println(instant);

    }

}
```

- Output:

    ```
    2025-10-05T11:07:54.748763900Z
    ```

- The `Instant.now();` method returns the current *UTC timestamp*. The `Z` at the end stands for "Zulu time" (UTC).

- This is useful when you need a timezone-independent point in time.

---

## Formatting Dates and Times

```java
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {

    public static void main(String[] args) {

        LocalDateTime dateTime = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String newDateTime = dateTime.format(formatter);

        System.out.println(newDateTime);

    }

}
```

- Output:

    ```
    05-10-2025 16:40:14
    ```

- The `import java.time.format.DateTimeFormatter;` statement imports the `DateTimeFormatter` class, which lets you define custom date/time formats.

- The statement `DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");` creates a formatter with the pattern:
    - `dd` = day of the month
    - `MM` = month
    - `yyyy` = year
    - `HH` = hours (24-hour format)
    - `mm` = minutes
    - `ss` = seconds

- The statement `dateTime.format(formatter);` applies the formatter and returns a `String` in the specified format.

---

## Creating Specific Dates

```java
import java.time.LocalDate;

public class Main {

    public static void main(String[] args) {

        LocalDate date = LocalDate.of(2024, 12, 25);

        System.out.println(date);

    }

}
```

- Output:

    ```
    2024-12-25
    ```

- The `LocalDate.of(2024, 12, 25);` method creates a specific date — in this case, December 25th, 2024.

```java
import java.time.LocalDateTime;

public class Main {

    public static void main(String[] args) {

        LocalDateTime dateTime = LocalDateTime.of(2024, 12, 25, 12, 0, 0);

        System.out.println(dateTime);

    }

}
```

- Output:

    ```
    2024-12-25T12:00
    ```

- The `LocalDateTime.of(2024, 12, 25, 12, 0, 0);` method creates a specific date and time — December 25th, 2024 at 12:00:00 (noon).

---

## Comparing Dates

```java
import java.time.LocalDateTime;

public class Main {

    public static void main(String[] args) {

        LocalDateTime dateTime1 = LocalDateTime.of(2024, 12, 25, 12, 0, 0);
        LocalDateTime dateTime2 = LocalDateTime.of(2025, 1, 1, 0, 0, 0);

        if(dateTime1.isBefore(dateTime2)){
            System.out.println(dateTime1 + " is earlier than " + dateTime2);
        }
        else if(dateTime1.isAfter(dateTime2)){
            System.out.println(dateTime1 + " is later than " + dateTime2);
        }
        else if(dateTime1.isEqual(dateTime2)){
            System.out.println(dateTime1 + " is equal to " + dateTime2);
        }

    }

}
```

- Output:

    ```
    2024-12-25T12:00 is earlier than 2025-01-01T00:00
    ```

- The `.isBefore()` method checks if `dateTime1` comes before `dateTime2`. Since December 25th, 2024 is earlier than January 1st, 2025, this condition is `true`.

```java
import java.time.LocalDateTime;

public class Main {

    public static void main(String[] args) {

        LocalDateTime dateTime1 = LocalDateTime.of(2026, 12, 25, 12, 0, 0);
        LocalDateTime dateTime2 = LocalDateTime.of(2025, 1, 1, 0, 0, 0);

        if(dateTime1.isBefore(dateTime2)){
            System.out.println(dateTime1 + " is earlier than " + dateTime2);
        }
        else if(dateTime1.isAfter(dateTime2)){
            System.out.println(dateTime1 + " is later than " + dateTime2);
        }
        else if(dateTime1.isEqual(dateTime2)){
            System.out.println(dateTime1 + " is equal to " + dateTime2);
        }

    }

}
```

- Output:

    ```
    2026-12-25T12:00 is later than 2025-01-01T00:00
    ```

- The `.isAfter()` method checks if `dateTime1` comes after `dateTime2`. Since December 25th, 2026 is later than January 1st, 2025, this condition is `true`.

```java
import java.time.LocalDateTime;

public class Main {

    public static void main(String[] args) {

        LocalDateTime dateTime1 = LocalDateTime.of(2025, 1, 1, 0, 0, 0);
        LocalDateTime dateTime2 = LocalDateTime.of(2025, 1, 1, 0, 0, 0);

        if(dateTime1.isBefore(dateTime2)){
            System.out.println(dateTime1 + " is earlier than " + dateTime2);
        }
        else if(dateTime1.isAfter(dateTime2)){
            System.out.println(dateTime1 + " is later than " + dateTime2);
        }
        else if(dateTime1.isEqual(dateTime2)){
            System.out.println(dateTime1 + " is equal to " + dateTime2);
        }

    }

}
```

- Output:

    ```
    2025-01-01T00:00 is equal to 2025-01-01T00:00
    ```

- The `.isEqual()` method checks if two dates and times are exactly the same. Since both `dateTime1` and `dateTime2` are January 1st, 2025 at midnight, they are equal.
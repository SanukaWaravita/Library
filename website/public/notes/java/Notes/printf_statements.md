# Specifier Characters

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        String name = "Spongebob";

        System.out.printf("Hello %s\n", name);

    }

}
```

- Output:

    ```
    Hello Spongebob
    ```

- The statement `String name = "Spongebob";` assigns the string `"Spongebob"` to the variable `name` with the datatype `String`.

- The `System.out.printf("Hello %s\n", name);` statement uses the `printf()` method to format and print output. Here, `"Hello %s\n"` is the *format string* where `%s` is a placeholder for a string value; the `name` variable replaces `%s`.

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        char firstLetter = 'S';

        System.out.printf("Your name starts with a %c\n", firstLetter);

    }

}
```

- Output:

    ```
    Your name starts with a S
    ```

- The statement `char firstLetter = 'S';` assigns the character `'S'` to the variable `firstLetter` with the datatype `char`.

- The `System.out.printf("Your name starts with a %c\n", firstLetter);` statement uses the `printf()` method to print formatted text. Here, `%c` is a placeholder for a *character*, which gets replaced by the value stored in `firstLetter`.

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        int age = 30;

        System.out.printf("You are %d years old\n", age);

    }

}
```

- Output:

    ```
    You are 30 years old
    ```

- The statement `int age = 30;` assigns the *integer* value `30` to the variable `age`, with the datatype `int`.

- The `System.out.printf("You are %d years old\n", age);` statement uses the `printf()` method to print a formatted message. The `%d` is a placeholder for an *integer*, which is replaced by the value in `age`.

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        double height = 60.5;

        System.out.printf("You are %f inches tall\n", height);

    }

}
```

- Output:

    ```
    You are 60.500000 inches tall
    ```

- The statement `double height = 60.5;` assigns the decimal value `60.5` to the variable `height`, which has the datatype `double`.

- The `System.out.printf("You are %f inches tall\n", height);` statement uses the `printf()` method to format and print the output. The `%f` is a placeholder for a *floating-point number*, which is replaced by the value of `height`.

- The default formatting will display six digits after the decimal, so the output will be: `You are 60.500000 inches tall` followed by a new line (`\n`).

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        boolean isEmployed = true;

        System.out.printf("Employed: %b\n", isEmployed);

    }

}
```

- Output:

    ```
    Employed: true
    ```

- The statement `boolean isEmployed = true;` assigns the *boolean* value `true` to the variable `isEmployed`, with the datatype `boolean`.

- The `System.out.printf("Employed: %b\n", isEmployed);` statement uses the `printf()` method to print a formatted message. Here, `%b` is the format specifier for a *boolean* value, which is replaced by the value stored in `isEmployed`.

## Using Multiple Specifiers

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        String name = "Spongebob";
        char firstLetter = 'S';
        int age = 30;
        double height = 60.5;
        boolean isEmployed = true;

        System.out.printf("%s is %d years old", name, age);

    }

}
```

- Output:

    ```
    Spongebob is 30 years old
    ```

- The statement `String name = "Spongebob";` assigns the string `"Spongebob"` to the variable `name`.

- The statement `char firstLetter = 'S';` stores the character `'S'` in the variable `firstLetter` with the datatype `char`.

- The statement `int age = 30;` assigns the *integer* value `30` to the variable `age`.

- The statement `double height = 60.5;` assigns the decimal number `60.5` to the variable `height`, using the `double` datatype.

- The statement `boolean isEmployed = true;` assigns the *boolean* value `true` to the variable `isEmployed`.

- The `System.out.printf("%s is %d years old", name, age);` statement uses the `printf()` method to print a formatted sentence. Here, `%s` is replaced by the value of `name` (`"Spongebob"`) and `%d` is replaced by the value of `age` (`30`).

---

# Precision

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        double price1 = 9.99;
        double price2 = 100.15;
        double price3 = -54.01;

        System.out.printf("%f\n", price1);
        System.out.printf("%f\n", price2);
        System.out.printf("%f\n", price3);

    }

}
```

- Output:

    ```
    9.990000
    100.150000
    -54.010000
    ```

- Without any *precision* specified, `%f` defaults to six decimal places.

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        double price1 = 9.99;
        double price2 = 100.15;
        double price3 = -54.01;

        System.out.printf("%.1f\n", price1);
        System.out.printf("%.1f\n", price2);
        System.out.printf("%.1f\n", price3);

    }

}
```

- Output:

    ```
    10.0
    100.2
    -54.0
    ```

- Using `%.1f` limits the output to `1` decimal place, rounding the value as needed.

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        double price1 = 9.99;
        double price2 = 100.15;
        double price3 = -54.01;

        System.out.printf("%.2f\n", price1);
        System.out.printf("%.2f\n", price2);
        System.out.printf("%.2f\n", price3);

    }

}
```

- Output:

    ```
    9.99
    100.15
    -54.01
    ```

- Using `%.2f` limits the output to `2` decimal places.

```java
public class Main {

    public static void main(String[] args) {

        // printf() = is a method used to format output
        // %[flags][width][.precision][specifier-character]

        double price1 = 9.99;
        double price2 = 100.15;
        double price3 = -54.01;

        System.out.printf("%.3f\n", price1);
        System.out.printf("%.3f\n", price2);
        System.out.printf("%.3f\n", price3);

    }

}
```

- Output:

    ```
    9.990
    100.150
    -54.010
    ```

- Using `%.3f` limits the output to `3` decimal places, adding trailing zeros if necessary.

---

# Flags

| FLAGS | DESCRIPTION |
|---|---|
| `+` | Output a plus sign for positive numbers |
| `,` | Comma grouping separator |
| `(` | Negative numbers are enclosed in `()` |
| ` ` (space) | Display a minus if negative, space if positive |

## The + Flag

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]

        double price1 = 9.99;
        double price2 = 100.15;
        double price3 = -54.01;

        System.out.printf("%+.3f\n", price1);
        System.out.printf("%+.3f\n", price2);
        System.out.printf("%+.3f\n", price3);

    }

}
```

- Output:

    ```
    +9.990
    +100.150
    -54.010
    ```

- The `+` flag forces a `+` sign to appear before positive numbers and a `-` sign before negative numbers.

## The , Flag

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]

        double price1 = 9000.99;
        double price2 = 100000.15;
        double price3 = -54000.01;

        System.out.printf("%+.3f\n", price1);
        System.out.printf("%+.3f\n", price2);
        System.out.printf("%+.3f\n", price3);

    }

}
```

- Output:

    ```
    +9000.990
    +100000.150
    -54000.010
    ```

- This flag adds a *comma separator* at any thousandth place (essentially after every three digits).

## The ( Flag

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]

        double price1 = 9.99;
        double price2 = 100.15;
        double price3 = -54.01;

        System.out.printf("%(.3f\n", price1);
        System.out.printf("%(.3f\n", price2);
        System.out.printf("%(.3f\n", price3);

    }

}
```

- Output:

    ```
    9.990
    100.150
    (54.010)
    ```

- The `(` flag encloses negative numbers in parentheses instead of using a minus sign.

## The Space Flag

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]

        double price1 = 9.99;
        double price2 = 100.15;
        double price3 = -54.01;

        System.out.printf("% .3f\n", price1);
        System.out.printf("% .3f\n", price2);
        System.out.printf("% .3f\n", price3);

    }

}
```

- Output:

    ```
     9.990
     100.150
    -54.010
    ```

- Any positive number is preceded with a space, while negative numbers get a `-` sign.

- This is useful for aligning numbers in a column.

---

# Width

- The *width* in `%[flags][width][.precision][specifier-character]` refers to the minimum number of characters the output should occupy.

- A positive width adds spaces (or zeros, if specified) to the left of the value, aligning it to the right (*right justified padding*).

- A negative width aligns the value to the left by adding padding to the right (*left justified padding*).

## Zero Padding Error

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]
        // [width]
        // number = right justified padding
        // negative number = left justified padding

        int id1 = 1;
        int id2 = 23;
        int id3 = 456;
        int id4 = 7890;

        System.out.printf("%0d\n", id1);
        System.out.printf("%0d\n", id2);
        System.out.printf("%0d\n", id3);
        System.out.printf("%0d\n", id4);

    }

}
```

- Output:

    ```
    [MissingFormatWidthException Error]
    ```

- The error occurs with the format specifier `%0d`.

- When you use `%d`, it formats an *integer*.

- If you want to specify width or padding, the format should be `%[width]d`.

- The `0` flag indicates that *zero padding* should be used, but it must be followed by a width.

- The issue is that `%0d` doesn't specify a width between the `0` and `d`, which is required when using the zero-padding flag.

- You need to specify a width after the `0` flag. For example, `%05d` would format an *integer* with a minimum width of `5` characters, padding with zeros if necessary.

## Zero Padding

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]
        // [width]
        // number = right justified padding
        // negative number = left justified padding

        int id1 = 1;
        int id2 = 23;
        int id3 = 456;
        int id4 = 7890;

        System.out.printf("%04d\n", id1);
        System.out.printf("%04d\n", id2);
        System.out.printf("%04d\n", id3);
        System.out.printf("%04d\n", id4);

    }

}
```

- Output:

    ```
    0001
    0023
    0456
    7890
    ```

- The statement `int id1 = 1;` assigns the value `1` to the variable `id1`. Similarly, `id2 = 23`, `id3 = 456`, and `id4 = 7890` assign increasing values to their respective variables.

- The `System.out.printf("%04d\n", id1);` statement prints the value of `id1` using a format specifier:
    - `%d` = placeholder for an *integer*
    - `4` = total width of `4` digits
    - `0` = pads with leading zeroes if the number is shorter than `4` digits
    - Output: `0001`

- The `System.out.printf("%04d\n", id2);` formats `id2 = 23` the same way, producing: `0023`

- The `System.out.printf("%04d\n", id3);` prints `id3 = 456` as: `0456`

- The `System.out.printf("%04d\n", id4);` prints `id4 = 7890`, which already has `4` digits, so it is printed as-is: `7890`

## Right Justified Padding (Space)

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]
        // [width]
        // number = right justified padding
        // negative number = left justified padding

        int id1 = 1;
        int id2 = 23;
        int id3 = 456;
        int id4 = 7890;

        System.out.printf("%4d\n", id1);
        System.out.printf("%4d\n", id2);
        System.out.printf("%4d\n", id3);
        System.out.printf("%4d\n", id4);

    }

}
```

- Output:

    ```
       1
      23
     456
    7890
    ```

- The statement `int id1 = 1;` stores the *integer* `1` in the variable `id1`. The following statements store `23`, `456`, and `7890` into `id2`, `id3`, and `id4` respectively.

- The `System.out.printf("%4d\n", id1);` line formats and prints `id1`:
    - `%d` is the *integer* placeholder
    - `4` sets the width to `4` characters
    - Since `1` is only one digit, it will be *right-justified*, and `3` spaces will pad the left
    - Output: `"   1"`

- The `System.out.printf("%4d\n", id2);` prints `23`, which has `2` digits, so it adds `2` spaces to the left: `"  23"`

- The `System.out.printf("%4d\n", id3);` prints `456`, which has `3` digits, so only `1` space is added to the left: `" 456"`

- The `System.out.printf("%4d\n", id4);` prints `7890`, which is already `4` digits, so it is printed as-is: `"7890"`

## Left Justified Padding

```java
public class Main {

    public static void main(String[] args) {

        // %[flags][width][.precision][specifier-character]
        // [width]
        // number = right justified padding
        // negative number = left justified padding

        int id1 = 1;
        int id2 = 23;
        int id3 = 456;
        int id4 = 7890;

        System.out.printf("%-4d\n", id1);
        System.out.printf("%-4d\n", id2);
        System.out.printf("%-4d\n", id3);
        System.out.printf("%-4d\n", id4);

    }

}
```

- Output:

    ```
    1   
    23  
    456 
    7890
    ```

- The statements `int id1 = 1;`, `int id2 = 23;`, `int id3 = 456;`, and `int id4 = 7890;` assign various *integer* values to the corresponding variables.

- Each of the `System.out.printf("%-4d\n", idX);` statements uses:
    - `%d` to format an *integer*
    - `4` as the width (minimum `4` characters total)
    - `-` flag to indicate *left justification*, meaning the value will appear on the left and any remaining space will be padded on the right with spaces.

- The outputs will be:
    - `1` followed by `3` spaces
    - `23` followed by `2` spaces
    - `456` followed by `1` space
    - `7890` with no padding needed since it's already `4` digits
[< Back to Station](../station.md)

---

# Math Class

## Math.PI

```java
public class Main {

    public static void main(String[] args) {

        System.out.println(Math.PI);

    }

}
```

- Output:

    ```
    3.141592653589793
    ```

- The statement `System.out.println(Math.PI);` prints the value of *pi* (π) to the console.

- `Math.PI` is a constant in Java's `Math` class representing the mathematical constant *pi*, approximately `3.14159`.

- This value is useful for calculations involving circles, angles, or any geometry where *pi* is needed.

---

## Math.E

```java
public class Main {

    public static void main(String[] args) {

        System.out.println(Math.E);

    }

}
```

- Output:

    ```
    2.718281828459045
    ```

- The statement `System.out.println(Math.E);` prints the value of *Euler's number* `e` to the console.

- `Math.E` is a constant in Java's `Math` class representing the mathematical constant `e`, approximately `2.71828`.

- This constant is used in many areas of mathematics, especially in *exponential growth*, *natural logarithms*, and *calculus*.

---

## Math.pow()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.pow(2, 3);

        System.out.println(result);

    }

}
```

- Output:

    ```
    8.0
    ```

- The statement `result = Math.pow(2, 3);` calculates `2` raised to the power of `3`, which is 2³.

- `Math.pow(x, y)` is a method from Java's `Math` class that returns the value of `x` to the power of `y` as a *double*.

- So here, 2³ = `8.0` is stored in `result`.

---

## Math.abs()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.abs(-5);

        System.out.println(result);

    }

}
```

- Output:

    ```
    5.0
    ```

- The statement `result = Math.abs(-5);` returns the *absolute value* of `-5`.

- `Math.abs(x)` is a method from the `Math` class that removes any negative sign and returns the positive equivalent of a number.

- So here, the *absolute value* of `-5` is `5.0`, which is stored in `result`.

- Think of `Math.abs()`'s function as finding the distance away from zero.

---

## Math.sqrt()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.sqrt(9);

        System.out.println(result);

    }

}
```

- Output:

    ```
    3.0
    ```

- The statement `result = Math.sqrt(9);` calculates the *square root* of `9`.

- `Math.sqrt(x)` is a method from the `Math` class that returns the non-negative *square root* of the number `x`.

- Since the *square root* of `9` is `3.0`, that value is assigned to `result`.

---

## Math.round()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.round(3.14);

        System.out.println(result);

    }

}
```

- Output:

    ```
    3.0
    ```

- The statement `result = Math.round(3.14);` rounds the value `3.14` to the nearest whole number.

- `Math.round(x)` returns the closest `long` value to the argument. But since `result` is declared as a *double*, the `long` value will be automatically converted to *double*.

- In this case, `3.14` is closer to `3` than to `4`, so the result is `3.0`.

---

## Math.ceil()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.ceil(3.14);

        System.out.println(result);

    }

}
```

- Output:

    ```
    4.0
    ```

- The statement `result = Math.ceil(3.14);` uses the `Math.ceil()` method to round the number *up* to the nearest whole number.

- `Math.ceil(x)` always returns the smallest *integer* greater than or equal to `x`, as a *double*.

- In this case, `3.14` is rounded up to `4.0`.

---

## Math.floor()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.floor(3.14);

        System.out.println(result);

    }

}
```

- Output:

    ```
    3.0
    ```

- The statement `result = Math.floor(3.14);` uses the `Math.floor()` method to round the number *down* to the nearest whole number.

- `Math.floor(x)` always returns the largest *integer* less than or equal to `x`, as a *double*.

- Since `3.14` is greater than `3` but less than `4`, the result will be `3.0`.

---

## Math.max()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.max(10, 20);

        System.out.println(result);

    }

}
```

- Output:

    ```
    20.0
    ```

- The statement `result = Math.max(10, 20);` uses the `Math.max()` method to find the larger of the two values provided.

- `Math.max(a, b)` compares the two numbers and returns the greater one.

- In this case, since `20` is greater than `10`, the result will be `20.0`.

```java
public class Main {

    public static void main(String[] args) {

        double result;
        double x = 10;
        double y = 20;

        result = Math.max(x, y);

        System.out.println(result);

    }

}
```

- Output:

    ```
    20.0
    ```

- The statements `double x = 10;` and `double y = 20;` declare two *double* variables `x` and `y`, and assign them the values `10` and `20` respectively.

- The statement `result = Math.max(x, y);` uses the `Math.max()` method to compare `x` and `y`, and assigns the larger value to the variable `result`.

- Since `20` is greater than `10`, `result` becomes `20.0`.

---

## Math.min()

```java
public class Main {

    public static void main(String[] args) {

        double result;

        result = Math.min(10, 20);

        System.out.println(result);

    }

}
```

- Output:

    ```
    10.0
    ```

- The statement `result = Math.min(10, 20);` uses the `Math.min()` method to find the smaller of the two values provided.

- `Math.min(a, b)` compares the two numbers and returns the lesser one.

- In this case, since `10` is less than `20`, the result will be `10.0`.

```java
public class Main {

    public static void main(String[] args) {

        double result;
        double x = 10;
        double y = 20;

        result = Math.min(x, y);

        System.out.println(result);

    }

}
```

- Output:

    ```
    10.0
    ```

- The statements `double x = 10;` and `double y = 20;` declare two *double* variables `x` and `y`, and assign them the values `10` and `20` respectively.

- The statement `result = Math.min(x, y);` uses the `Math.min()` method to compare `x` and `y`, and assigns the smaller value to the variable `result`.

- Since `10` is less than `20`, `result` becomes `10.0`.

---

# Hypotenuse Calculator

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // HYPOTENUSE OF A RIGHT ANGLE
        // c = Math.sqrt(a² + b²)

        Scanner scanner = new Scanner(System.in);

        double a;
        double b;
        double c;

        System.out.print("Enter the length of side A: ");
        a = scanner.nextDouble();

        System.out.print("Enter the length of side B: ");
        b = scanner.nextDouble();

        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        System.out.println("The hypotenuse (side c) is: " + c + " cm");

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter the length of side A: 3
    Enter the length of side B: 4
    ```

- Output:

    ```
    The hypotenuse (side c) is: 5.0 cm
    ```

- The statement `Scanner scanner = new Scanner(System.in);` allows the user to input values from the keyboard.

- `double a;` `double b;` `double c;` declares three variables to store the side lengths of the triangle.

- `a = scanner.nextDouble();` and `b = scanner.nextDouble();` take user input for the two shorter sides of a right-angled triangle.

- The statement `c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));` calculates the *hypotenuse* using the *Pythagorean theorem*:
    - `Math.pow(a, 2)` squares side A.
    - `Math.pow(b, 2)` squares side B.
    - `Math.sqrt(...)` returns the *square root* of the sum of those squares.

---

# Circle and Sphere Calculator

## Using String Concatenation

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // circumference = 2 * Math.PI * radius
        // area = Math.PI * Math.pow(radius, 2);
        // volume = (4.8 / 3.0) * Math.PI * Math.pow(radius, 3);

        Scanner scanner = new Scanner(System.in);

        double radius;
        double circumference;
        double area;
        double volume;

        System.out.print("Enter the radius: ");
        radius = scanner.nextDouble();

        circumference = 2 * Math.PI * radius;
        area = Math.PI * Math.pow(radius, 2);
        volume = (4.8 / 3.0) * Math.PI * Math.pow(radius, 3);

        System.out.printf("The circumference is: " + circumference + " cm");
        System.out.printf("The area is: " + area + " cm²");
        System.out.printf("The volume is: " + volume + " cm³");

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter the radius: 5
    ```

- Output:

    ```
    The circumference is: 31.41592653589793 cm
    The area is: 78.53981633974483 cm²
    The volume is: 628.3185307179587 cm³
    ```

- The statement `Scanner scanner = new Scanner(System.in);` creates a scanner object that allows the user to input data through the keyboard.

- The statement `System.out.print("Enter the radius: ");` displays the message "Enter the radius: " in the console, prompting the user to enter a value.

- The statement `radius = scanner.nextDouble();` waits for the user to input a decimal number (i.e., the radius), which is then stored in the variable `radius`.

- The statement `circumference = 2 * Math.PI * radius;` calculates the *circumference* of a circle using the formula 2πr and stores the result in the variable `circumference`.

- The statement `area = Math.PI * Math.pow(radius, 2);` calculates the *area* of the circle using the formula πr² and stores the result in the variable `area`.

- The statement `volume = (4.8 / 3.0) * Math.PI * Math.pow(radius, 3);` calculates the *volume* of a sphere using the formula (4.8 / 3) × π × r³ and stores the result in the variable `volume`. (Note: `4.8` is used instead of the standard `4.0` — possibly intentional or a typo.)

- The `System.out.printf(...)` statements display the calculated values using string concatenation. However, since no newline characters (`\n`) are included, all outputs will appear on the same line.

- The statement `scanner.close();` properly closes the scanner object to free system resources.

## Using Formatted Output

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // circumference = 2 * Math.PI * radius
        // area = Math.PI * Math.pow(radius, 2);
        // volume = (4.8 / 3.0) * Math.PI * Math.pow(radius, 3);

        Scanner scanner = new Scanner(System.in);

        double radius;
        double circumference;
        double area;
        double volume;

        System.out.print("Enter the radius: ");
        radius = scanner.nextDouble();

        circumference = 2 * Math.PI * radius;
        area = Math.PI * Math.pow(radius, 2);
        volume = (4.8 / 3.0) * Math.PI * Math.pow(radius, 3);

        System.out.printf("The circumference is: %.1fcm\n", circumference);
        System.out.printf("The area is: %.1fcm²\n", area);
        System.out.printf("The volume is: %.1fcm³\n", volume);

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter the radius: 5
    ```

- Output:

    ```
    The circumference is: 31.4cm
    The area is: 78.5cm²
    The volume is: 628.3cm³
    ```

- The statement `Scanner scanner = new Scanner(System.in);` creates a scanner object that enables the user to input data through the keyboard.

- The statement `System.out.print("Enter the radius: ");` displays the message "Enter the radius: " in the console, prompting the user to input a radius value.

- The statement `radius = scanner.nextDouble();` allows the user to enter a decimal number (the radius), which is stored in the variable `radius` as a *double* datatype.

- The statement `circumference = 2 * Math.PI * radius;` calculates the *circumference* of a circle using the formula 2πr and assigns the result to the variable `circumference`.

- The statement `area = Math.PI * Math.pow(radius, 2);` calculates the *area* of the circle using the formula πr², where `Math.pow(radius, 2)` computes the square of the radius.

- The statement `volume = (4.8 / 3.0) * Math.PI * Math.pow(radius, 3);` calculates the *volume* of a sphere using the formula (4.8 / 3) × π × r³ and stores it in the variable `volume`.

- The three `System.out.printf(...)` statements display the calculated values using *formatted output*, where `%.1f` ensures that each number is shown with one decimal place. The `\n` at the end of each line moves the cursor to the next line for clean output formatting.

- Finally, `scanner.close();` closes the scanner object to free up system resources and avoid potential memory leaks.
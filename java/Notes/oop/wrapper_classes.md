# Wrapper Classes

- *Wrapper classes* allow primitive values (`int`, `char`, `double`, `boolean`) to be used as objects by "wrapping" them in an object.

- Generally, don't wrap primitives unless you need an object.

- Wrapper classes allow the use of the **Collections Framework** and **static utility methods**.

---

# Autoboxing

```java
public class Main {

    public static void main(String[] args) {

        Integer a = 123;

        Double b = 3.14;

        Character c = '$';

        Boolean d = true;

    }

}
```

- This is known as *autoboxing*.

- We are directly assigning primitives (e.g. `123`, `3.14`, `'$'`, `true`) to an object (e.g. `a`, `b`, `c`, `d`) using a wrapper class (e.g. `Integer`, `Double`, `Character`, `Boolean`).

- `Integer`, `Double`, `Character`, and `Boolean` are all **reference datatypes** -- they are a type of object.

---

# Unboxing

```java
public class Main {

    public static void main(String[] args) {

        Integer a = 123;

        Double b = 3.14;

        Character c = '$';

        Boolean d = true;

        int w = a;

        double x = b;

        char y = c;

        boolean z = d;

        System.out.println(w);

        System.out.println(x);

        System.out.println(y);

        System.out.println(z);

    }

}
```

- Output:

    ```
    123
    3.14
    $
    true
    ```

- The statement `int w = a;` is an example of *unboxing*. We are assigning a wrapper class object (`a`, which is an `Integer`) back to a primitive type (`int`).

- The same applies to `double x = b;`, `char y = c;`, and `boolean z = d;` -- each one *unboxes* a wrapper class object back into its corresponding primitive type.

---

# toString()

```java
public class Main {

    public static void main(String[] args) {

        String a = Integer.toString(123);

        String b = Double.toString(3.14);

        String c = Character.toString('$');

        String d = Boolean.toString(false);

        String x = a + b + c + d;

        System.out.println(x);

    }

}
```

- Output:

    ```
    1233.14$false
    ```

- The primitive datatypes (`123`, `3.14`, `'$'`, `false`) are being converted to strings using the `toString()` static method and concatenated in `String x = a + b + c + d;`.

- If you ever need to convert a primitive to a string, use that primitive's wrapper class followed by the `toString()` method, and pass the primitive value as an argument. For example, `String a = Integer.toString(123);`.

---

# Parse Methods

```java
public class Main {

    public static void main(String[] args) {

        int a = Integer.parseInt("123");

        double b = Double.parseDouble("3.14");

        char c = "Pizza".charAt(0);

        boolean d = Boolean.parseBoolean("true");

    }

}
```

- The statement `Integer.parseInt("123");` calls the `Integer` wrapper class, followed by the static method `parseInt()`, and passes in a string as an argument.

- The available parse methods are:
    - `.parseInt()`
    - `.parseDouble()`
    - `.parseBoolean()`

- The `char` datatype does not have a parse method similar to `int` or `double`. Instead, `.charAt()` is used as a workaround. It is not a utility method of a wrapper class, but rather a **String method**.

- The statement `"Pizza".charAt(0);` calls the `charAt()` method on the string `"Pizza"`, taking the character at index `0`, which is `'P'`.

---

# Utility Methods

## isLetter()

```java
public class Main {

    public static void main(String[] args) {

        char letter = 'l';

        System.out.println(Character.isLetter(letter));

    }

}
```

- Output:

    ```
    true
    ```

- `Character` is the wrapper class, and `isLetter()` is a built-in *utility method* of the `Character` wrapper class.

- The method `isLetter()` checks whether a provided character is a letter or not, and returns a `boolean` value.

- This is useful for verifying user input.

```java
public class Main {

    public static void main(String[] args) {

        char letter = '$';

        System.out.println(Character.isLetter(letter));

    }

}
```

- Output:

    ```
    false
    ```

- Since `'$'` is not a letter, `Character.isLetter(letter)` returns `false`.

---

## isUpperCase()

```java
public class Main {

    public static void main(String[] args) {

        char letter = 'b';

        System.out.println(Character.isUpperCase(letter));

    }

}
```

- Output:

    ```
    false
    ```

- The built-in `isUpperCase()` utility method of the `Character` wrapper class checks whether a provided character is upper case or not and returns a `boolean` value.

- Since `'b'` is a lowercase letter, `Character.isUpperCase(letter)` returns `false`.

- This is useful for verifying user input.

```java
public class Main {

    public static void main(String[] args) {

        char letter = 'B';

        System.out.println(Character.isUpperCase(letter));

    }

}
```

- Output:

    ```
    true
    ```

- Since `'B'` is an uppercase letter, `Character.isUpperCase(letter)` returns `true`.

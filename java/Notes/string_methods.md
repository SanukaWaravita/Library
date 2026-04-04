# String Methods

## Master Program

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        // Length Method - returns the number of characters of a string
        int length = name.length();
        System.out.println(length);

        // .charAt method - returns the character at a specified index of a string
        char letter = name.charAt(0);
        System.out.println(letter);

        letter = name.charAt(1);
        System.out.println(letter);

        letter = name.charAt(2);
        System.out.println(letter);

        // .indexOf method - returns the first occurence of a specified character in a string
        int index = name.indexOf("0");
        System.out.println(index);

        index = name.indexOf(" ");
        System.out.println(index);

        // .lastIndexOf method - returns the last occurence of a specified character in a string
        int lastindex = name.lastIndexOf("0");
        System.out.println(lastindex);

        // .toUpperCase method - makes the characters of a string uppercase
        name = name.toUpperCase();
        System.out.println(name);

        // .toLowerCase method - makes the characters of a string lowercase
        name = name.toLowerCase();
        System.out.println(name);

        // .trim method - removes any white space before and after the string of characters
        name = "  Bro Code      ";
        name = name.trim();
        System.out.println(name);

        // .replace method - replaces a character of a string with a different character
        name = name.replace("0", "a");
        System.out.println(name);

        // .isEmpty method - returns a boolean value; checks whether a string is empty or occupied
        System.out.println(name.isEmpty());

        String emptyname = "";
        System.out.println(emptyname.isEmpty());

        // .contains method - checks to see if a specified character is present in a string
        System.out.println(name.contains("B"));
        System.out.println(name.contains("b"));
        System.out.println(name.contains("q"));

        // .equals method - used to check whether two strings are equal
        String username = "BroCode";

        if(username.equals("password")){
            System.out.println("Your username is your password");
        }
        else{
            System.out.println("Your username is not your password");
        }

        // .equalsIgnoreCase method - compares two strings, ignoring case
        username = "PASSWORD";

        if(username.equalsIgnoreCase("password")){
            System.out.println("Your username is your password");
        }
        else{
            System.out.println("Your username is not your password");
        }

    }

}
```

- The program above demonstrates all the common `String` methods in Java. Each method is broken down individually below.

---

# .length()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        int length = name.length();

        System.out.println(length);

    }

}
```

- Output:

    ```
    8
    ```

- The statement `String name = "Bro Code";` declares a `String` variable `name` and assigns it the value `"Bro Code"`.

- The statement `int length = name.length();` calls the `.length()` method on `name`, which returns the number of characters in the string (including spaces). The result `8` is stored in the *integer* variable `length`.

- The statement `System.out.println(length);` displays `8` in the console.

- **Use-case:** You ask a user to set a password, and want to check whether the password is under a certain number of characters.

---

# .charAt()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        char letter = name.charAt(0);

        System.out.println(letter);

    }

}
```

- Output:

    ```
    B
    ```

- The statement `char letter = name.charAt(0);` calls the `.charAt()` method, which returns the character at a specified *index* of a string. Here it returns the character at index `0`, which is `'B'`.

- Strings in Java are *zero-indexed*, meaning the first character is at index `0`, the second at index `1`, and so on.

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        System.out.println(name.charAt(0));
        System.out.println(name.charAt(1));
        System.out.println(name.charAt(2));

    }

}
```

- Output:

    ```
    B
    r
    o
    ```

- `name.charAt(0)` returns `'B'`, `name.charAt(1)` returns `'r'`, and `name.charAt(2)` returns `'o'` — the first three characters of `"Bro Code"`.

---

# .indexOf()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        int index = name.indexOf("o");

        System.out.println(index);

    }

}
```

- Output:

    ```
    2
    ```

- The statement `int index = name.indexOf("o");` calls the `.indexOf()` method, which returns the *index* of the **first occurrence** of a specified character in a string.

- The first `"o"` in `"Bro Code"` is at index `2`, so `index` becomes `2`.

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        int index = name.indexOf("z");

        System.out.println(index);

    }

}
```

- Output:

    ```
    -1
    ```

- If the character is **not found** in the string, `.indexOf()` returns `-1`.

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        int index = name.indexOf(" ");

        System.out.println(index);

    }

}
```

- Output:

    ```
    3
    ```

- The space character `" "` is at index `3` in `"Bro Code"`. Spaces count as characters just like letters.

---

# .lastIndexOf()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        int lastIndex = name.lastIndexOf("o");

        System.out.println(lastIndex);

    }

}
```

- Output:

    ```
    5
    ```

- The statement `int lastIndex = name.lastIndexOf("o");` calls the `.lastIndexOf()` method, which returns the *index* of the **last occurrence** of a specified character in a string.

- In `"Bro Code"`, the letter `"o"` appears at index `2` and index `5`. Since `.lastIndexOf()` looks for the last one, it returns `5`.

---

# .toUpperCase()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        name = name.toUpperCase();

        System.out.println(name);

    }

}
```

- Output:

    ```
    BRO CODE
    ```

- The statement `name = name.toUpperCase();` calls the `.toUpperCase()` method, which returns a new string with all characters converted to *uppercase*.

- The original string `"Bro Code"` becomes `"BRO CODE"`.

- Note that strings in Java are **immutable** — `.toUpperCase()` does not modify the original string, it returns a new one. That's why we reassign it back to `name`.

---

# .toLowerCase()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        name = name.toLowerCase();

        System.out.println(name);

    }

}
```

- Output:

    ```
    bro code
    ```

- The statement `name = name.toLowerCase();` calls the `.toLowerCase()` method, which returns a new string with all characters converted to *lowercase*.

- The original string `"Bro Code"` becomes `"bro code"`.

---

# .trim()

```java
public class Main {

    public static void main(String[] args) {

        String name = "  Bro Code      ";

        name = name.trim();

        System.out.println(name);

    }

}
```

- Output:

    ```
    Bro Code
    ```

- The statement `name = name.trim();` calls the `.trim()` method, which removes any *whitespace* before and after the string of characters.

- The original string `"  Bro Code      "` had `2` spaces at the start and `6` spaces at the end. After trimming, it becomes `"Bro Code"`.

- Note that `.trim()` only removes **leading and trailing** whitespace — it does not affect spaces in the middle of the string.

---

# .replace()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        name = name.replace("o", "a");

        System.out.println(name);

    }

}
```

- Output:

    ```
    Bra Cade
    ```

- The statement `name = name.replace("o", "a");` calls the `.replace()` method, which replaces **all occurrences** of a specified character with a different character.

- In `"Bro Code"`, both `"o"` characters are replaced with `"a"`, resulting in `"Bra Cade"`.

---

# .isEmpty()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        System.out.println(name.isEmpty());

    }

}
```

- Output:

    ```
    false
    ```

- The `.isEmpty()` method returns a *boolean* value — `true` if the string has no characters (`""`), and `false` if it contains any characters.

- Since `name` contains `"Bro Code"`, `name.isEmpty()` returns `false`.

```java
public class Main {

    public static void main(String[] args) {

        String emptyName = "";

        System.out.println(emptyName.isEmpty());

    }

}
```

- Output:

    ```
    true
    ```

- Since `emptyName` is an empty string `""`, `emptyName.isEmpty()` returns `true`.

## Using .isEmpty() With an If Statement

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        if(name.isEmpty()){
            System.out.println("Your name is empty!");
        }
        else{
            System.out.println("Hello " + name);
        }

    }

}
```

- Output:

    ```
    Hello Bro Code
    ```

- The `if(name.isEmpty())` checks if `name` is empty. Since `name` is `"Bro Code"`, the condition is `false`, so the `else` block runs and prints `"Hello Bro Code"`.

```java
public class Main {

    public static void main(String[] args) {

        String name = "";

        if(name.isEmpty()){
            System.out.println("Your name is empty!");
        }
        else{
            System.out.println("Hello " + name);
        }

    }

}
```

- Output:

    ```
    Your name is empty!
    ```

- Since `name` is an empty string `""`, `name.isEmpty()` returns `true`, and the `if` block runs.

---

# .contains()

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        System.out.println(name.contains("B"));
        System.out.println(name.contains("b"));
        System.out.println(name.contains("q"));

    }

}
```

- Output:

    ```
    true
    false
    false
    ```

- The `.contains()` method checks to see if a specified character or substring is present in a string. It returns a *boolean* value.

- `name.contains("B")` returns `true` because `"B"` is in `"Bro Code"`.

- `name.contains("b")` returns `false` because the `.contains()` method is **case sensitive** — `"B"` and `"b"` are not considered equal.

- `name.contains("q")` returns `false` because `"q"` does not appear anywhere in `"Bro Code"`.

## Using .contains() With an If Statement

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        if(name.contains(" ")){
            System.out.println("Your name contains a space");
        }
        else{
            System.out.println("Your name does not contain a space");
        }

    }

}
```

- Output:

    ```
    Your name contains a space
    ```

- The `if(name.contains(" "))` checks if `name` contains a space character. Since `"Bro Code"` has a space between `"Bro"` and `"Code"`, the condition is `true`.

---

# .equals()

```java
public class Main {

    public static void main(String[] args) {

        String username = "BroCode";

        if(username.equals("password")){
            System.out.println("Your username is your password");
        }
        else{
            System.out.println("Your username is not your password");
        }

    }

}
```

- Output:

    ```
    Your username is not your password
    ```

- The `.equals()` method is used to check whether two strings are equal. It returns a *boolean* value.

- Since `"BroCode"` does not equal `"password"`, the condition is `false` and the `else` block runs.

```java
public class Main {

    public static void main(String[] args) {

        String username = "password";

        if(username.equals("password")){
            System.out.println("Your username is your password");
        }
        else{
            System.out.println("Your username is not your password");
        }

    }

}
```

- Output:

    ```
    Your username is your password
    ```

- Since `username` is `"password"` and we compare it to `"password"`, the strings are equal and the `if` block runs.

```java
public class Main {

    public static void main(String[] args) {

        String username = "PASSWORD";

        if(username.equals("password")){
            System.out.println("Your username is your password");
        }
        else{
            System.out.println("Your username is not your password");
        }

    }

}
```

- Output:

    ```
    Your username is not your password
    ```

- Even though `"PASSWORD"` and `"password"` contain the same letters, the `.equals()` method is **case sensitive**, so they are not considered equal.

---

# .equalsIgnoreCase()

```java
public class Main {

    public static void main(String[] args) {

        String username = "PASSWORD";

        if(username.equalsIgnoreCase("password")){
            System.out.println("Your username is your password");
        }
        else{
            System.out.println("Your username is not your password");
        }

    }

}
```

- Output:

    ```
    Your username is your password
    ```

- The `.equalsIgnoreCase()` method works the same as `.equals()`, but it **ignores case sensitivity**.

- Since `"PASSWORD"` and `"password"` contain the same letters (just different cases), `.equalsIgnoreCase()` returns `true` and the `if` block runs.

- Use `.equalsIgnoreCase()` when you want to compare strings without worrying about uppercase vs lowercase (e.g., checking usernames or emails).

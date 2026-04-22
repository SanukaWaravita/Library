[< Back to Station](../station.md)

---

# Substrings

- The `.substring()` method is used to extract a portion of a string.

- The syntax is: `String.substring(start [inclusive], end [exclusive])`

- The *start* index is **inclusive** (the character at that index is included), and the *end* index is **exclusive** (the character at that index is not included).

---

## Basic Usage

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        String sub = name.substring(0, 3);

        System.out.println(sub);

    }

}
```

- Output:

    ```
    Bro
    ```

- The statement `String sub = name.substring(0, 3);` extracts characters from index `0` up to (but not including) index `3`.

- In `"Bro Code"`, index `0` is `'B'`, index `1` is `'r'`, and index `2` is `'o'` — so the result is `"Bro"`.

```java
public class Main {

    public static void main(String[] args) {

        String name = "Bro Code";

        String sub = name.substring(4);

        System.out.println(sub);

    }

}
```

- Output:

    ```
    Code
    ```

- The statement `String sub = name.substring(4);` extracts characters from index `4` all the way to the end of the string.

- If you are taking all the characters till the very last, you don't necessarily need to mention the ending index.

---

# Email Slicer Program

```java
public class Main {

    public static void main(String[] args) {

        // .substring() = A method used to extract a portion of a string
        // String.substring(start [inclusive], end [exclusive])

        // Email Slicer Program

        String email = "Bro123@gmail.com";
        String username = email.substring(0, 6);
        String domain = email.substring(7, 16);
        String domain2 = email.substring(7);

        System.out.println(email);
        System.out.println(username);
        System.out.println(domain);
        System.out.println(domain2);

    }

}
```

- Output:

    ```
    Bro123@gmail.com
    Bro123
    gmail.com
    gmail.com
    ```

- The statement `String username = email.substring(0, 6);` extracts characters from index `0` to index `5` (6 is exclusive), giving us the username `"Bro123"`.

- The statement `String domain = email.substring(7, 16);` extracts characters from index `7` to index `15`, giving us the domain `"gmail.com"`.

- The statement `String domain2 = email.substring(7);` extracts from index `7` to the end of the string. Since we want everything after the `@` symbol, we don't need to specify an ending index — the result is also `"gmail.com"`.

- However, this program is **not flexible** — the indices are hardcoded, so it only works for this specific email.

---

## The Problem With Hardcoded Indices

```java
public class Main {

    public static void main(String[] args) {

        // This program is however not flexible.
        // For example in a case as follows:

        String email = "BroCode1@gmail.com";
        String username = email.substring(0, 6);
        String domain = email.substring(7, 16);

        System.out.println(email);
        System.out.println(username);
        System.out.println(domain);

    }

}
```

- Output:

    ```
    BroCode1@gmail.com
    BroCod
    1@gmail.c
    ```

- The email changed to `"BroCode1@gmail.com"`, but the indices `0, 6` and `7, 16` stayed the same.

- The username should be `"BroCode1"` but we only get `"BroCod"` because `substring(0, 6)` still cuts at index `6`.

- The domain should be `"gmail.com"` but we get `"1@gmail.c"` because `substring(7, 16)` starts too early.

- This shows why hardcoding indices is a problem — if the email length changes, the slicing breaks.

## The Fix Using .indexOf()

```java
public class Main {

    public static void main(String[] args) {

        String email = "BroCode1@gmail.com";

        int atIndex = email.indexOf("@");

        String username = email.substring(0, atIndex);
        String domain = email.substring(atIndex + 1);

        System.out.println(email);
        System.out.println(username);
        System.out.println(domain);

    }

}
```

- Output:

    ```
    BroCode1@gmail.com
    BroCode1
    gmail.com
    ```

- The statement `int atIndex = email.indexOf("@");` finds the index of the `@` symbol dynamically, no matter where it appears in the email.

- The statement `String username = email.substring(0, atIndex);` extracts everything before the `@`, giving us `"BroCode1"`.

- The statement `String domain = email.substring(atIndex + 1);` extracts everything after the `@`, giving us `"gmail.com"`. We use `atIndex + 1` to skip over the `@` symbol itself.

- This approach works with **any email**, regardless of the length of the username or domain.
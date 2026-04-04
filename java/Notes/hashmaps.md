# HashMaps

- A *HashMap* is a data structure that stores **key-value pairs**.

- Keys are **unique**, but values can be duplicated.

- Does not maintain any order, but is memory efficient.

- Syntax: `HashMap<Key, Value>`

---

## Creating a HashMap and Adding Elements

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("Banana", 0.75);
        map.put("Orange", 0.25);

        System.out.println(map);

    }

}
```

- Output:

    ```
    {Apple=0.5, Orange=0.25, Banana=0.75}
    ```

- The `HashMap<String, Double>` tells the HashMap that the *key* will be of `String` datatype and the *value* will be of `Double` datatype.

- We use the `.put()` method to add something to a HashMap. With this method, we pass in two arguments — one is the key and the other is the value.

---

## Duplicate Keys (Override)

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("Banana", 0.75);
        map.put("Orange", 0.25);

        System.out.println(map);

        map.put("Orange", 100000.00);

        System.out.println(map);

    }

}
```

- Output:

    ```
    {Apple=0.5, Orange=0.25, Banana=0.75}
    {Apple=0.5, Orange=100000.0, Banana=0.75}
    ```

- You cannot have duplicate keys. Java will not prevent you from using `.put()` with an existing key, but the original key-value pair will be **overridden**.

- In this case, `"Orange"` originally had the value `0.25`, but it was replaced with `100000.00`.

---

## .remove()

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("Banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map);

        map.remove("Apple");

        System.out.println(map);

    }

}
```

- Output:

    ```
    {Apple=0.5, Coconut=1.0, Orange=0.25, Banana=0.75}
    {Coconut=1.0, Orange=0.25, Banana=0.75}
    ```

- The `.remove()` method removes a key-value pair from the HashMap. You only have to pass in the **key** as an argument.

---

## .get()

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map.get("Apple"));

    }

}
```

- Output:

    ```
    0.5
    ```

- The `.get()` method retrieves the *value* associated with a given key. Syntax: `map.get(<Key>)`

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map.get("apple"));

    }

}
```

- Output:

    ```
    null
    ```

- Note that `"apple"` has been used instead of `"Apple"`. The keys are **case sensitive**, which is why the output is `null` — the key `"apple"` does not exist in the HashMap.

---

## .containsKey()

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map.containsKey("banana"));

    }

}
```

- Output:

    ```
    true
    ```

- The `.containsKey()` method checks if a specific key exists in the HashMap. It returns a *boolean* value. Syntax: `map.containsKey(<Key>)`

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map.containsKey("Pineapple"));

    }

}
```

- Output:

    ```
    false
    ```

- Since `"Pineapple"` is not a key in the HashMap, `.containsKey()` returns `false`.

## Using .containsKey() With an If Statement

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        if(map.containsKey("Apple")){
            System.out.println(map.get("Apple"));
        }
        else{
            System.out.println("Key not found!");
        }

    }

}
```

- Output:

    ```
    0.5
    ```

- A practical use-case for `.containsKey()` — check if the key exists before trying to `.get()` its value. If the key is not found, the `else` block handles it gracefully.

---

## .containsValue()

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map.containsValue(1.00));

    }

}
```

- Output:

    ```
    true
    ```

- The `.containsValue()` method checks if a specific value exists in the HashMap. Syntax: `map.containsValue(<Value>)`

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map.containsValue(1));

    }

}
```

- Output:

    ```
    false
    ```

- Note that `1` has been used instead of `1.00`. The HashMap stores `Double` values, and `1` is an `int` — the datatypes don't match, which is why the output is `false`. Pay attention to the datatype of the value.

---

## .size()

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        System.out.println(map.size());

    }

}
```

- Output:

    ```
    4
    ```

- The `.size()` method returns the number of key-value pairs in the HashMap. Since there are `4` entries, it returns `4`.

---

## Iterating Through a HashMap

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<String, Double> map = new HashMap<>();

        map.put("Apple", 0.50);
        map.put("banana", 0.75);
        map.put("Orange", 0.25);
        map.put("Coconut", 1.00);

        for(String key : map.keySet()){
            System.out.println(key + " : $" + map.get(key));
        }

    }

}
```

- Output:

    ```
    banana : $0.75
    Apple : $0.5
    Coconut : $1.0
    Orange : $0.25
    ```

- The *for-each loop* `for(String key : map.keySet())` iterates through all the keys in the HashMap:
    - `String` is the datatype of the keys.
    - `key` is the variable name assigned to each key on every iteration.
    - `.keySet()` returns a set of all the keys in the HashMap.

- Inside the loop, `map.get(key)` retrieves the value associated with the current key.

- This is a beginner-friendly way to print all the key-value pairs inside a HashMap in a presentable manner.
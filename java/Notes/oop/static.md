[< Back to Station](../../station.md)

---

# Static Keyword

- The `static` keyword makes a variable or method belong to the **class** rather than to any specific object.

- To make more sense: consider creating two objects `obj1` and `obj2`. Each object has a **copy** of the attributes and methods of the class they are created from. Changing the value of an attribute inside `obj1` will not be reflected in `obj2`.

- When using the `static` keyword, the attribute belongs to the class itself. Objects won't have a copy of it — instead, any changes made by either object will remain and be accessible by all other objects.

- In other words, all objects are **sharing a single attribute** that none of them own, but rather is owned by the class itself — they are just accessing it.

- Commonly used for utility methods or shared resources.

---

## The Class We Are Working With

```java
public class Friend {

    static int numberOfFriends;
    String name;

    Friend(String name){
        this.name = name;
        numberOfFriends++;
    }

}
```

- The attribute `static int numberOfFriends;` is a *static field* — it belongs to the `Friend` class, not to any individual object.

- Every time a new `Friend` object is created, the constructor increments `numberOfFriends` by `1`.

---

## Static Variables Are Shared

```java
public class Main {

    public static void main(String[] args) {

        Friend friend1 = new Friend("Itadori");

        System.out.println(friend1.numberOfFriends);

    }

}
```

- Output:

    ```
    1
    ```

- One `Friend` object is created, so `numberOfFriends` is `1`.

```java
public class Main {

    public static void main(String[] args) {

        Friend friend1 = new Friend("Itadori");
        Friend friend2 = new Friend("Jogo");

        System.out.println(friend1.numberOfFriends);

    }

}
```

- Output:

    ```
    2
    ```

- Even though we access `numberOfFriends` through `friend1`, it shows `2` because `friend2` also incremented the **same shared variable**.

```java
public class Main {

    public static void main(String[] args) {

        Friend friend1 = new Friend("Itadori");
        Friend friend2 = new Friend("Jogo");
        Friend friend3 = new Friend("Gojo");

        System.out.println(friend1.numberOfFriends);

    }

}
```

- Output:

    ```
    3
    ```

- Three objects created, so the shared `numberOfFriends` is `3` — regardless of which object you access it through.

---

## Accessing Static Fields With the Class Name

```java
public class Main {

    public static void main(String[] args) {

        Friend[] friends = {new Friend("Itadori"),
                            new Friend("Jogo"),
                            new Friend("Gojo"),
                            new Friend("Maki"),
                            new Friend("Yuta")};

        System.out.println(Friend.numberOfFriends);

    }

}
```

- Output:

    ```
    5
    ```

- An array of `Friend` objects is created. Each element stores a reference to a different `Friend` object, and each creation increments `numberOfFriends`.

- Because `numberOfFriends` is a *class-level field*, it should be accessed using the **class name**: `Friend.numberOfFriends` rather than through an object.

- Here, the class name `Friend` is used to directly refer to the shared field `numberOfFriends`, which keeps track of how many `Friend` objects have been created.

---

## Static Methods

```java
public class Friend {

    static int numberOfFriends;
    String name;

    Friend(String name){
        this.name = name;
        numberOfFriends++;
    }

    static void showFriends(){
        System.out.println("You have a total of "
                            + numberOfFriends
                            + " friends.");
    }

}
```

- You can also add the `static` keyword to methods. The `static void showFriends()` method belongs to the class, not to any specific object.

```java
public class Main {

    public static void main(String[] args) {

        Friend friend1 = new Friend("Itadori");
        Friend friend2 = new Friend("Jogo");
        Friend friend3 = new Friend("Gojo");
        Friend friend4 = new Friend("Maki");
        Friend friend5 = new Friend("Yuta");

        Friend.showFriends();

    }

}
```

- Output:

    ```
    You have a total of 5 friends.
    ```

- *Static methods* can only be accessed using the **class name** (here `Friend.showFriends()`), not the object name (such as `friend1.showFriends()`).

- Since the method is `static`, it can access the `static` field `numberOfFriends` directly — but it **cannot** access non-static fields like `name` without a specific object reference.
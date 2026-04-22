[< Back to Station](../../station.md)

---

# Multiple Interfaces

```java
public interface Prey {

    void flee();

}
```

```java
public interface Predator {

    void hunt();

}
```

- The `Prey` interface declares an abstract method `flee()`, and the `Predator` interface declares an abstract method `hunt()`.
- Any class that implements these interfaces **must** provide concrete implementations of these methods.

---

```java
public class Fish implements Prey, Predator {

    @Override
    public void flee() {
        System.out.println("*The fish is swimming away*");
    }

    @Override
    public void hunt() {
        System.out.println("*The fish is hunting*");
    }

}
```

- The `Fish` class implements **both** `Prey` and `Predator` by listing them after the `implements` keyword, separated by a comma.
- You can include more than one interface to a class; you just separate the interface names with a comma (`,`).
- The `@Override` annotation indicates that the method is overriding a method declared in an interface.
- The `flee()` method prints `"*The fish is swimming away*"` to the console.
- The `hunt()` method prints `"*The fish is hunting*"` to the console.

---

```java
public class Main {

    public static void main(String[] args) {

        Fish fish = new Fish();

        fish.flee();
        fish.hunt();

    }

}
```

- The statement `Fish fish = new Fish();` creates a new `Fish` object.
- The statement `fish.flee();` calls the `flee()` method on the `fish` object, which prints `"*The fish is swimming away*"`.
- The statement `fish.hunt();` calls the `hunt()` method on the `fish` object, which prints `"*The fish is hunting*"`.

- Output:

    ```
    *The fish is swimming away*
    *The fish is hunting*
    ```

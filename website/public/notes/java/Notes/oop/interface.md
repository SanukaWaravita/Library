[< Back to Station](../../station.md)

---

# Interfaces

- An *interface* is a blueprint for a class that specifies a set of abstract methods that implementing classes **must** define.
- Interfaces support *multiple inheritance-like behavior* in Java.

---

## Defining Interfaces

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

- The `Prey` interface declares an abstract method `flee()` that any implementing class must define.
- The `Predator` interface declares an abstract method `hunt()` that any implementing class must define.
- Methods declared inside an interface do not have a body -- they only have a signature.

---

## Implementing an Interface

```java
public class Hawk implements Predator {

    @Override
    public void hunt() {
        System.out.println("*The hawk is hunting*");
    }
}
```

- To add an interface to a class, follow the class name with the keyword `implements` followed by the interface name -- in this case `Hawk implements Predator`.
- The class must then define the method specified by the interface; in this case, the `hunt()` method. You do this by overriding the method with `@Override`.
- These methods **need** an access specifier (e.g., `public`). Without one, the code will not compile.

```java
public class Rabbit implements Prey {

    @Override
    public void flee() {
        System.out.println("*The rabbit is running away*");
    }
}
```

- The `Rabbit` class implements the `Prey` interface and overrides the `flee()` method.
- Just like `Hawk`, it provides a concrete implementation of the abstract method declared in its interface.

---

## Using Interfaces in a Program

```java
public class Main {

    public static void main(String[] args) {

        Rabbit rabbit = new Rabbit();
        Hawk hawk = new Hawk();

        rabbit.flee();
        hawk.hunt();
    }
}
```

- Output:

    ```
    *The rabbit is running away*
    *The hawk is hunting*
    ```

- The statement `Rabbit rabbit = new Rabbit();` creates a new `Rabbit` object.
- The statement `Hawk hawk = new Hawk();` creates a new `Hawk` object.
- Calling `rabbit.flee()` invokes the `flee()` method defined in the `Rabbit` class, which prints `*The rabbit is running away*`.
- Calling `hawk.hunt()` invokes the `hunt()` method defined in the `Hawk` class, which prints `*The hawk is hunting*`.

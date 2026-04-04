[< Back to Station](../../station.md)

---

# Polymorphism

- The word *polymorphism* comes from two Greek words: "poly" meaning **many**, and "morph" meaning **shape**.
- In Java, *polymorphism* means that objects can identify as other objects. Specifically, objects can be treated as objects of a common superclass or interface.
- This allows you to write code that works with a general type, and it will automatically use the correct behavior for each specific subclass.

---

# Polymorphism With Abstract Classes

```java
public abstract class Vehicle {

    abstract void go();
}
```

```java
public class Car extends Vehicle {

    @Override
    void go() {
        System.out.println("You drive the car!");
    }
}
```

```java
public class Bike extends Vehicle {

    @Override
    void go() {
        System.out.println("You ride the bike!");
    }
}
```

```java
public class Boat extends Vehicle {

    @Override
    void go() {
        System.out.println("You sail the car!");
    }
}
```

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();
        Bike bike = new Bike();
        Boat boat = new Boat();

        Vehicle[] vehicles = {car, bike, boat};

        for (Vehicle vehicle : vehicles) {
            vehicle.go();
        }
    }
}
```

- Output:

    ```
    You drive the car!
    You ride the bike!
    You sail the car!
    ```

- The `Vehicle` class is declared as `abstract`, which means it cannot be instantiated directly. It contains an *abstract method* `go()` that each subclass must override.
- The classes `Car`, `Bike`, and `Boat` each `extend` the `Vehicle` class and provide their own implementation of the `go()` method using the `@Override` annotation.
- In the `Main` class, we create instances of `Car`, `Bike`, and `Boat`, and store them in a `Vehicle[]` array. This is *polymorphism* in action -- even though the array type is `Vehicle`, it holds objects of different subclasses.
- The `for` loop iterates over the `vehicles` array. Each time `vehicle.go()` is called, Java determines **at runtime** which version of `go()` to execute based on the actual object type, not the declared type. This is known as *dynamic method dispatch*.

---

# Polymorphism With Interfaces

```java
public interface Vehicle {

    void go();
}
```

```java
public class Car implements Vehicle {

    @Override
    public void go() {
        System.out.println("You drive the car!");
    }
}
```

```java
public class Bike implements Vehicle {

    @Override
    public void go() {
        System.out.println("You ride the bike!");
    }
}
```

```java
public class Boat implements Vehicle {

    @Override
    public void go() {
        System.out.println("You sail the car!");
    }
}
```

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();
        Bike bike = new Bike();
        Boat boat = new Boat();

        Vehicle[] vehicles = {car, bike, boat};

        for (Vehicle vehicle : vehicles) {
            vehicle.go();
        }
    }
}
```

- Output:

    ```
    You drive the car!
    You ride the bike!
    You sail the car!
    ```

- In this version, `Vehicle` is declared as an `interface` instead of an abstract class. The `go()` method is defined without a body -- classes that implement the interface must provide their own implementation.
- The classes `Car`, `Bike`, and `Boat` use the `implements` keyword instead of `extends` to adopt the `Vehicle` interface. Notice that the `go()` method must be declared `public` when implementing an interface method.
- The `Main` class and its output are **identical** to the abstract class example. This demonstrates that you can achieve *polymorphism* using either abstract classes or interfaces.
- The key difference is that a class can only `extend` **one** abstract class, but it can `implement` **multiple** interfaces. Interfaces are often preferred when you want to define a common behavior across unrelated classes.

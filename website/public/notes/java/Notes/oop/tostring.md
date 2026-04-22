[< Back to Station](../../station.md)

---

# `toString()` Method

- The `toString()` method is inherited from the `Object` class
- It is used to return a *string representation* of an object
- By default, it returns a hash code as a unique identifier
- It can be **overridden** to provide meaningful details about the object

---

## Overriding `toString()`

```java
public class Car {
    String make;
    String model;
    int year;
    String colour;

    Car(String make, String model, int year, String colour) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.colour = colour;
    }

    @Override
    public String toString() {
        return this.colour + " " + this.year + " " + this.make + " " + this.model;
    }
}
```

- With the `toString()` method, we use the `@Override` annotation because all objects inherit from the `Object` class, which already has a `toString()` method
- We are overriding this inherited method using *method overriding*

---

## Using `toString()` with `println()`

```java
public class Main {
    public static void main(String[] args) {
        Car car = new Car("Ford", "Mustang", 2025, "Red");
        System.out.println(car);
    }
}
```

- Output:

    ```
    Red 2025 Ford Mustang
    ```

- Typically, printing an object directly with `System.out.println()` provides the **memory reference** of the object, rather than the contents of the object
- This limitation can be overcome by preceding the `@Override` annotation with the `toString()` method in the class definition

---

## Multiple Objects Example

```java
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Ford", "Mustang", 2025, "Red");
        Car car2 = new Car("Chevrolet", "Corvette", 2025, "Blue");
        System.out.println(car1);
        System.out.println(car2);
    }
}
```

- Output:

    ```
    Red 2025 Ford Mustang
    Blue 2025 Chevrolet Corvette
    ```
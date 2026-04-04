# Classes

- A *class* is a blueprint for creating an object.

---

## Defining a Class

```java
public class Car {

    String make = "Ford";
    String model = "Mustang";
    int year = 2025;
    double price = 58000.00;
    boolean isRunning = false;

}
```

- All of these (`make`, `model`, `year`, `price`, `isRunning`) are *attributes* (also known as *fields* or *properties*) of the `Car` class.

- Each attribute has a datatype and a default value:
    - `String make = "Ford";` — a `String` attribute storing the car's make.
    - `String model = "Mustang";` — a `String` attribute storing the car's model.
    - `int year = 2025;` — an `int` attribute storing the car's year.
    - `double price = 58000.00;` — a `double` attribute storing the car's price.
    - `boolean isRunning = false;` — a `boolean` attribute storing whether the car is currently running.

- This class serves as a **template** — you can create multiple `Car` objects from it, each with these attributes.
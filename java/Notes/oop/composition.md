# Composition

- *Composition* represents a **"part-of"** relationship between objects.

- For example, an `Engine` is "part of" a `Car`.

- Composition allows complex objects to be constructed from smaller, simpler objects.

---

## Basic Composition

```java
public class Car
{
    String model;
    int year;
    Engine engine;

    Car(String model, int year, String engineType)
    {
        this.model = model;
        this.year = year;
        this.engine = new Engine(engineType);
    }
}
```

```java
public class Engine
{
    String type;

    Engine(String type)
    {
        this.type = type;
    }
}
```

```java
public class Main
{
    public static void main(String[] args)
    {
        Car car = new Car("Corvette", 2025, "V8");

        System.out.println(car.model);
        System.out.println(car.year);
        System.out.println(car.engine.type);
    }
}
```

- The `Car` class has three fields: `model`, `year`, and `engine`. The `engine` field is of type `Engine`, meaning a `Car` object contains an `Engine` object.

- The `Car` constructor takes three parameters: `model`, `year`, and `engineType`. Inside the constructor, the statement `this.engine = new Engine(engineType)` creates a new `Engine` object and assigns it to the `engine` field. This is composition -- the `Engine` is constructed **inside** the `Car`.

- The `Engine` class has a single field `type`. Its constructor takes a `String` parameter and assigns it to `this.type`.

- In `Main`, the statement `Car car = new Car("Corvette", 2025, "V8")` creates a new `Car` object, which internally also creates a new `Engine` object with the type `"V8"`.

- The statement `System.out.println(car.engine.type)` accesses the `Engine` object inside the `Car` object and prints its `type` field. This is how you access a composed object's properties.

---

## Composition With Methods

```java
public class Car
{
    String model;
    int year;
    Engine engine;

    Car(String model, int year, String engineType)
    {
        this.model = model;
        this.year = year;
        this.engine = new Engine(engineType);
    }

    void start()
    {
        this.engine.start();
        System.out.println("The " + this.model + " is running!");
    }
}
```

```java
public class Engine
{
    String type;

    Engine(String type)
    {
        this.type = type;
    }

    void start()
    {
        System.out.println("You started the " + this.type + " engine!");
    }
}
```

```java
public class Main
{
    public static void main(String[] args)
    {
        Car car = new Car("Corvette", 2025, "V8");

        System.out.println(car.model);
        System.out.println(car.year);
        System.out.println(car.engine.type);

        car.start();
    }
}
```

- Output:

    ```
    Corvette
    2025
    V8
    You started the V8 engine!
    The Corvette is running!
    ```

- The `Engine` class now has a `start()` method that prints `"You started the V8 engine!"` by accessing `this.type`.

- The `Car` class now has a `start()` method that first calls `this.engine.start()`, which triggers the `Engine`'s `start()` method, and then prints `"The Corvette is running!"`. This shows how a composed object's methods can be called from within the containing object.

- In `Main`, the statement `car.start()` calls the `Car`'s `start()` method, which in turn calls the `Engine`'s `start()` method. This demonstrates how composition lets objects **delegate behavior** to their component objects.

---

## Key Points

- When constructing a `Car` object, we are also constructing a new `Engine` object internally. The `Engine` object is **dependent** on the `Car` object -- it is created inside the `Car` constructor, not passed in from outside.

- Parameter names in a constructor can be **different** from the argument names you pass in. For example, the `Car` constructor accepts a parameter called `engineType`, which is then passed to the `Engine` constructor as the argument for its parameter called `type`.

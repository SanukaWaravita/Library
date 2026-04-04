# Objects

- An *object* is an entity that holds data (*attributes*) and can perform actions (*methods*).

- It is a *reference datatype*.

---

## The Class We Are Working With

```java
public class Car {

    String make = "Ford";
    String model = "Mustang";
    int year = 2025;
    double price = 58000.00;
    boolean isRunning = false;

}
```

---

## Creating an Object

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

    }

}
```

- The statement `Car car = new Car();` creates an *object* named `car` using the class `Car`.

- `Car` is the datatype (the class), `car` is the variable name (the object), and `new Car()` calls the *constructor* to create a new instance.

## Printing an Object

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();
        System.out.println(car);

    }

}
```

- Output:

    ```
    Car@8efb846
    ```

- `Car@8efb846` is a **memory reference**. This is because objects are a *reference datatype*, so printing an object will give you a reference to its memory location, not its actual data.

## Creating Multiple Objects

```java
public class Main {

    public static void main(String[] args) {

        Car car1 = new Car();
        Car car2 = new Car();

    }

}
```

- You can create more than one object from a class. Here, `car1` and `car2` are two separate `Car` objects — each has its own copy of the attributes.

---

# Attributes

## Accessing Attributes

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        System.out.println(car.make);
        System.out.println(car.model);
        System.out.println(car.year);
        System.out.println(car.price);
        System.out.println(car.isRunning);

    }

}
```

- Output:

    ```
    Ford
    Mustang
    2025
    58000.0
    false
    ```

- To access the data inside *attributes*, use the object name followed by a `.` and the attribute name — for example, `car.make`.

- Each `System.out.println()` prints the value stored in the corresponding attribute of the `car` object.

## Storing Attributes in Variables

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        String make = car.make;
        String model = car.model;
        int year = car.year;
        double price = car.price;
        boolean isRunning = car.isRunning;

        System.out.println(make);
        System.out.println(model);
        System.out.println(year);
        System.out.println(model);
        System.out.println(isRunning);

    }

}
```

- Output:

    ```
    Ford
    Mustang
    2025
    Mustang
    false
    ```

- You can assign the values stored in a class's attributes to local variables. For example, `String make = car.make;` copies the value `"Ford"` from the `car` object's `make` attribute into the local variable `make`.

---

## Changing Attribute Values

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        boolean isRunning1 = car.isRunning;
        System.out.println(isRunning1);

        car.isRunning = true;

        boolean isRunning2 = car.isRunning;
        System.out.println(isRunning2);

    }

}
```

- Output:

    ```
    false
    true
    ```

- The value stored in the attribute `isRunning` starts as `false` (the default from the class).

- The statement `car.isRunning = true;` changes the attribute's value to `true`.

- To access and change the value of an attribute, use the syntax: `<objectName>.<attributeName> = <value>;`

- For example: `car.isRunning = true;`

| Part | Value |
|---|---|
| `<objectName>` | `car` |
| `.` | dot operator |
| `<attributeName>` | `isRunning` |
| `=` | assignment |
| `<value>` | `true` |

---

# Methods

## The Class We Are Working With

```java
public class Car {

    String make = "Ford";
    String model = "Mustang";
    int year = 2025;
    double price = 58000.00;
    boolean isRunning = false;

    void engineStart(){
        isRunning = true;
        System.out.println("Engine has started.");
    }

    void engineStop(){
        isRunning = false;
        System.out.println("Engine has stopped.");
    }

    void driving(){
        System.out.println("You are driving a " + model);
    }

    void braking(){
        System.out.println("You are breaking a " + model);
    }

}
```

- This `Car` class now has both *attributes* and *methods*.

- `void` is the *return type* of the methods. A `void` return type simply means there will be no value returned from this method back to the place where it was called.

- The methods `engineStart()`, `engineStop()`, `driving()`, and `braking()` define **actions** that a `Car` object can perform.

---

## Calling Methods

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.engineStart();
        car.engineStop();

    }

}
```

- Output:

    ```
    Engine has started.
    Engine has stopped.
    ```

- Calling a method is similar to accessing an attribute — use the object name followed by a `.` and the method name with parentheses: `car.engineStart()` and `car.engineStop()`.

- `car.engineStart()` sets `isRunning` to `true` and prints "Engine has started.".

- `car.engineStop()` sets `isRunning` back to `false` and prints "Engine has stopped.".

## Methods That Change Attributes

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        System.out.println(car.isRunning);

        car.engineStart();

        System.out.println(car.isRunning);

        car.engineStop();

        System.out.println(car.isRunning);

    }

}
```

- Output:

    ```
    false
    Engine has started.
    true
    Engine has stopped.
    false
    ```

- Initially, `car.isRunning` is `false` (the default from the class).

- After calling `car.engineStart()`, the method sets `isRunning` to `true` — so the second `System.out.println(car.isRunning);` prints `true`.

- After calling `car.engineStop()`, the method sets `isRunning` back to `false` — so the third print shows `false` again.

- This demonstrates how methods can **modify an object's attributes**.

## Methods That Use Attributes

```java
public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.driving();
        car.braking();

    }

}
```

- Output:

    ```
    You are driving a Mustang
    You are breaking a Mustang
    ```

- The `driving()` method uses the `model` attribute inside its print statement: `"You are driving a " + model`, which outputs `"You are driving a Mustang"`.

- The `braking()` method similarly uses `model` to print `"You are breaking a Mustang"`.

- This shows how methods can **read an object's attributes** to produce dynamic output.
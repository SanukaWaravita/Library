# Getters and Setters

- *Getters* and *setters* help protect object data and add rules for accessing or modifying it.
- **Getters** are methods that make a field **readable**.
- **Setters** are methods that make a field **writeable**.

---

# Basic Getters

```java
public class Car
{
    private String model;
    private String color;
    private int price;

    Car(String model, String color, int price)
    {
        this.model = model;
        this.color = color;
        this.price = price;
    }

    String getModel()
    {
        return this.model;
    }

    String getColor()
    {
        return this.color;
    }

    int getPrice()
    {
        return this.price;
    }
}
```

```java
public class Main
{
    public static void main(String[] args)
    {
        Car car = new Car("Charger", "red", 100000);

        System.out.println("Model: " + car.getModel());
        System.out.println("Color: " + car.getColor());
        System.out.println("Price: " + car.getPrice());
    }
}
```

- Output:

    ```
    Model: Charger
    Color: red
    Price: 100000
    ```

- The `Car` class has three `private` fields: `model`, `color`, and `price`. Since they are `private`, they cannot be accessed directly from outside the class.
- The constructor `Car(String model, String color, int price)` takes in three parameters and assigns them to the corresponding fields using the `this` keyword.
- The method `getModel()` returns the value of the `model` field. This is a *getter* method.
- The method `getColor()` returns the value of the `color` field.
- The method `getPrice()` returns the value of the `price` field as an `int`.
- In `Main`, we create a new `Car` object with `new Car("Charger", "red", 100000)` and use the getter methods to print each field's value.

---

# Getters with Logic

```java
public class Car
{
    private String model;
    private String color;
    private int price;

    Car(String model, String color, int price)
    {
        this.model = model;
        this.color = color;
        this.price = price;
    }

    String getModel()
    {
        return this.model;
    }

    String getColor()
    {
        return this.color;
    }

    String getPrice()
    {
        return "$" + this.price;
    }
}
```

```java
public class Main
{
    public static void main(String[] args)
    {
        Car car = new Car("Charger", "red", 100000);

        System.out.println("Model: " + car.getModel());
        System.out.println("Color: " + car.getColor());
        System.out.println("Price: " + car.getPrice());
    }
}
```

- Output:

    ```
    Model: Charger
    Color: red
    Price: $100000
    ```

- The `getPrice()` method now returns a `String` instead of an `int`. It concatenates `"$"` with `this.price` to format the price with a dollar sign.
- You can add additional logic to getter methods. They do not have to simply return the raw field value -- they can transform or format the data before returning it.

---

# Adding Setters

```java
public class Car
{
    private String model;
    private String color;
    private int price;

    Car(String model, String color, int price)
    {
        this.model = model;
        this.color = color;
        this.price = price;
    }

    String getModel()
    {
        return this.model;
    }

    String getColor()
    {
        return this.color;
    }

    String getPrice()
    {
        return "$" + this.price;
    }

    void setColour(String color)
    {
        this.color = color;
    }

    void setPrice(int price)
    {
        this.price = price;
    }
}
```

```java
public class Main
{
    public static void main(String[] args)
    {
        Car car = new Car("Charger", "red", 100000);

        System.out.println("Model: " + car.getModel());
        System.out.println("Color: " + car.getColor());
        System.out.println("Price: " + car.getPrice());

        car.setColour("Blue");
        car.setPrice(50000);
        System.out.println();

        System.out.println("Model: " + car.getModel());
        System.out.println("Color: " + car.getColor());
        System.out.println("Price: " + car.getPrice());
    }
}
```

- Output:

    ```
    Model: Charger
    Color: red
    Price: $100000

    Model: Charger
    Color: Blue
    Price: $50000
    ```

- The `setColour(String color)` method is a *setter* that takes a `String` parameter and assigns it to the `color` field using `this.color = color`.
- The `setPrice(int price)` method is a *setter* that takes an `int` parameter and assigns it to the `price` field.
- Both setter methods have a `void` return type because they only modify the field and do not return anything.
- In `Main`, after printing the initial values, we call `car.setColour("Blue")` and `car.setPrice(50000)` to change the car's color and price. Printing again shows the updated values.

---

# Setter Validation

```java
public class Car
{
    private String model;
    private String color;
    private int price;

    Car(String model, String color, int price)
    {
        this.model = model;
        this.color = color;
        this.price = price;
    }

    String getModel()
    {
        return this.model;
    }

    String getColor()
    {
        return this.color;
    }

    String getPrice()
    {
        return "$" + this.price;
    }

    void setColour(String color)
    {
        this.color = color;
    }

    void setPrice(int price)
    {
        if(price == 0)
        {
            System.out.println("The price of the car cannot be 0");
        }
        else if(price < 0)
        {
            System.out.println("The price of the car cannot be less than 0");
        }
        else
        {
            this.price = price;
        }
    }
}
```

```java
public class Main
{
    public static void main(String[] args)
    {
        Car car = new Car("Charger", "red", 100000);

        car.setColour("Blue");
        car.setPrice(0);
        System.out.println();

        System.out.println("Model: " + car.getModel());
        System.out.println("Color: " + car.getColor());
        System.out.println("Price: " + car.getPrice());
    }
}
```

- Output:

    ```
    The price of the car cannot be 0

    Model: Charger
    Color: Blue
    Price: $100000
    ```

- The `setPrice()` method now includes *validation logic*. Before setting the price, it checks whether the value is `0` or negative.
- If `price == 0`, it prints `"The price of the car cannot be 0"` and does **not** update the field.
- If `price < 0`, it prints `"The price of the car cannot be less than 0"` and does **not** update the field.
- Only if the price passes both checks does the `else` block execute, assigning the new value with `this.price = price`.
- Since `setPrice(0)` was called, the price remains at `$100000` because the setter rejected the invalid value.

---

## Trying a Negative Price

```java
public class Main
{
    public static void main(String[] args)
    {
        Car car = new Car("Charger", "red", 100000);

        car.setColour("Blue");
        car.setPrice(-1);
        System.out.println();

        System.out.println("Model: " + car.getModel());
        System.out.println("Color: " + car.getColor());
        System.out.println("Price: " + car.getPrice());
    }
}
```

- Output:

    ```
    The price of the car cannot be less than 0

    Model: Charger
    Color: Blue
    Price: $100000
    ```

- Here we call `car.setPrice(-1)`, which triggers the `else if(price < 0)` branch in the setter.
- The error message `"The price of the car cannot be less than 0"` is printed, and the price remains unchanged at `$100000`.
- This demonstrates how setters can **protect** your object's data by enforcing rules before allowing modifications.

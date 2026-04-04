# Array of Objects

## The Class We Are Working With

```java
public class Car {

    String model;
    String colour;

    Car(String model, String colour){
        this.model = model;
        this.colour = colour;
    }

    void Drive(){
        System.out.println("You drive this "
                            + this.colour
                            + " "
                            + this.model);
    }

}
```

---

## Creating an Array of Objects (For Loop)

```java
public class Main {

    public static void main(String[] args) {

        Car car1 = new Car("Corvette", "blue");
        Car car2 = new Car("Mustang", "red");
        Car car3 = new Car("Charger", "yellow");

        Car[] cars = {car1, car2, car3};

        for(int i = 0; i < cars.length; i++){
            cars[i].Drive();
        }

    }

}
```

- Output:

    ```
    You drive this blue Corvette
    You drive this red Mustang
    You drive this yellow Charger
    ```

- Three `Car` objects are created and then stored in an array `Car[] cars = {car1, car2, car3};`.

- The `for` loop iterates through the array using an index. `cars[i]` accesses each `Car` object, and `.Drive()` calls the method on it.

---

## Using an Enhanced For Loop (For-Each)

```java
public class Main {

    public static void main(String[] args) {

        Car car1 = new Car("Corvette", "blue");
        Car car2 = new Car("Mustang", "red");
        Car car3 = new Car("Charger", "yellow");

        Car[] cars = {car1, car2, car3};

        for(Car car : cars){
            car.Drive();
        }

    }

}
```

- Output:

    ```
    You drive this blue Corvette
    You drive this red Mustang
    You drive this yellow Charger
    ```

- The `for(Car car : cars)` is called an *enhanced for loop* (or *for-each loop*). The syntax is `for(<x> <y> : <z>){}`:
    - `x` — datatype of each element in the array (in this case `Car`, because the datatype of an object is its class)
    - `y` — nickname for each element in the array
    - `:` — similar to saying "as in"
    - `z` — name of the array (in this case `cars`)

- For each `car` object in the array, the `Drive()` method is called.

---

## Anonymous Objects

```java
public class Main {

    public static void main(String[] args) {

        Car[] cars = {  new Car("Corvette", "blue"),
                        new Car("Mustang", "red"),
                        new Car("Charger", "yellow")};

        for(Car car : cars){
            car.Drive();
        }

    }

}
```

- Output:

    ```
    You drive this blue Corvette
    You drive this red Mustang
    You drive this yellow Charger
    ```

- Instead of first instantiating an object and then assigning it into an array, you can create it inside the array itself — this creates *anonymous objects*.

- *Anonymous objects* are objects that are instantiated without a unique identifier (like `car1` or `car2`) for them.

---

## Modifying Objects in an Array

```java
public class Main {

    public static void main(String[] args) {

        Car[] cars = {  new Car("Corvette", "blue"),
                        new Car("Mustang", "red"),
                        new Car("Charger", "yellow")};

        for(Car car : cars){
            car.colour = "black";
            car.Drive();
        }

    }

}
```

- Output:

    ```
    You drive this black Corvette
    You drive this black Mustang
    You drive this black Charger
    ```

- Inside the for-each loop, `car.colour = "black";` changes the `colour` attribute of each `Car` object to `"black"` before calling `Drive()`.

- This demonstrates that you can **modify an object's attributes** while iterating through an array of objects.
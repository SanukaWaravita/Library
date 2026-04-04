# Generics

A concept where you can write a class, interface, or method that is compatible with different data types.

- `<T>` is a *type parameter* (a placeholder that gets replaced with a real type).

- `<String>` is a *type argument* (specifies the actual type).

---

# The Box Class

```java
public class Box<T> {

    T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return this.item;
    }

}
```

- `T` is just a common convention for naming the type parameter.

- The `Box` class is a **reusable** class that can accept values of **any** datatype.

- The method `public void setItem(T item)` is used to add items to the `Box` class. It assigns the given `item` to `this.item`.

- The method `public T getItem()` is used to get items from the `Box` class. Here, `T` is the *return type* of the method.

- Essentially, we are writing the **logic** of how the `Box` works, without committing to a specific datatype.

---

## Using Box With String

```java
public class Main {

    public static void main(String[] args) {

        Box<String> box = new Box<>();

        box.setItem("banana");
        System.out.println(box.getItem());

    }

}
```

- Output:

    ```
    banana
    ```

- When creating an object out of the `Box` class, we follow the class name with `<>` (e.g., `Box<String> box = new Box<>()`). In the first pair of angle brackets, we specify the datatype using its *wrapper class* (e.g., `Box<String>`).

- The statement `box.setItem("banana")` stores the `String` value `"banana"` in the box.

- The statement `System.out.println(box.getItem())` retrieves and prints the stored item, which is `banana`.

---

## Using Box With Integer

```java
public class Main {

    public static void main(String[] args) {

        Box<Integer> box = new Box<>();

        box.setItem(123);
        System.out.println(box.getItem());

    }

}
```

- Output:

    ```
    123
    ```

- Here, we create a `Box<Integer>`, so the type parameter `T` is replaced with `Integer`.

- The statement `box.setItem(123)` stores the `Integer` value `123` in the box.

- The statement `System.out.println(box.getItem())` retrieves and prints `123`.

---

## Using Box With Double

```java
public class Main {

    public static void main(String[] args) {

        Box<Double> box = new Box<>();

        box.setItem(0.123);
        System.out.println(box.getItem());

    }

}
```

- Output:

    ```
    0.123
    ```

- Here, we create a `Box<Double>`, so the type parameter `T` is replaced with `Double`.

- The statement `box.setItem(0.123)` stores the `Double` value `0.123` in the box.

---

## Using Box With Boolean

```java
public class Main {

    public static void main(String[] args) {

        Box<Boolean> box = new Box<>();

        box.setItem(true);
        System.out.println(box.getItem());

    }

}
```

- Output:

    ```
    true
    ```

- Here, we create a `Box<Boolean>`, so the type parameter `T` is replaced with `Boolean`.

- The statement `box.setItem(true)` stores the `Boolean` value `true` in the box.

- These examples demonstrate that the same `Box` class works seamlessly with `String`, `Integer`, `Double`, and `Boolean` -- **any** datatype.

---

# Multiple Type Parameters

```java
public class Product<T, U> {

    T item;
    U price;

    Product(T item, U price) {
        this.item = item;
        this.price = price;
    }

    public T getItem() {
        return this.item;
    }

    public U getPrice() {
        return this.price;
    }

}
```

- `<T, U>` uses two type parameters. This is common convention; `U` comes after `T` in the alphabet.

- The `Product` class has two fields: `item` of type `T` and `price` of type `U`.

- The constructor `Product(T item, U price)` accepts both values and assigns them to the corresponding fields.

- The method `public T getItem()` returns the item, and `public U getPrice()` returns the price.

---

## Using Product With Two Type Arguments

```java
public class Main {

    public static void main(String[] args) {

        Product<String, Double> product = new Product<>("apple", 0.50);

        System.out.println(product.getItem());
        System.out.println(product.getPrice());

    }

}
```

- Output:

    ```
    apple
    0.5
    ```

- The statement `Product<String, Double> product = new Product<>("apple", 0.50)` creates a `Product` where `T` is `String` and `U` is `Double`.

- The statement `product.getItem()` returns `"apple"` and `product.getPrice()` returns `0.5`.

---

## Multiple Product Objects With Different Types

```java
public class Main {

    public static void main(String[] args) {

        Product<String, Double> product1 = new Product<>("apple", 0.50);
        Product<String, Integer> product2 = new Product<>("ticket", 15);

        System.out.println(product1.getItem());
        System.out.println(product1.getPrice());

        System.out.println(product2.getItem());
        System.out.println(product2.getPrice());

    }

}
```

- Output:

    ```
    apple
    0.5
    ticket
    15
    ```

- The statement `Product<String, Double> product1 = new Product<>("apple", 0.50)` creates a product with a `String` item and a `Double` price.

- The statement `Product<String, Integer> product2 = new Product<>("ticket", 15)` creates a product with a `String` item and an `Integer` price.

- This demonstrates that **multiple objects** of the same generic class can each use **different type arguments**, giving us maximum flexibility.

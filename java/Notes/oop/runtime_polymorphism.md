# Runtime Polymorphism

- *Runtime polymorphism* is when the method that gets executed is decided at **runtime** based on the actual type of the object, not the declared type of the reference variable.

---

## Animal Classes

```java
public abstract class Animal {

    abstract void speak();
}
```

```java
public class Dog extends Animal {

    @Override
    void speak() {

        System.out.println("*The dog goes woof woof*");
    }
}
```

```java
public class Cat extends Animal {

    @Override
    void speak() {

        System.out.println("*The cat goes meow*");
    }
}
```

- The `Animal` class is declared as `abstract`, meaning it cannot be instantiated directly. It contains an *abstract method* `speak()` which has no body.
- The `Dog` class extends `Animal` and provides its own implementation of the `speak()` method using the `@Override` annotation.
- The `Cat` class also extends `Animal` and overrides `speak()` with its own implementation.
- Each subclass **must** provide an implementation of `speak()` because it is declared as `abstract` in the parent class.

---

## Basic Example

```java
public class Main {

    public static void main(String[] args) {

        Animal animal1 = new Dog();
        Animal animal2 = new Cat();

        animal1.speak();
        animal2.speak();
    }
}
```

- Output:

    ```
    *The dog goes woof woof*
    *The cat goes meow*
    ```

- The statement `Animal animal1 = new Dog();` declares a variable of type `Animal` but assigns it a `Dog` object. This is possible because `Dog` is a subclass of `Animal`.
- The statement `Animal animal2 = new Cat();` does the same thing but with a `Cat` object.
- When `animal1.speak()` is called, Java looks at the **actual object type** at runtime (which is `Dog`), not the declared type (`Animal`). So the `Dog` version of `speak()` runs.
- When `animal2.speak()` is called, the `Cat` version of `speak()` runs for the same reason.
- This is *runtime polymorphism* in action -- the same method call `speak()` produces different behavior depending on the actual object.

---

## Example With User Input

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Animal animal;

        System.out.print("Would you like a dog or cat? (1 = dog, 2 = cat): ");
        int choice = scanner.nextInt();

        if (choice == 1) {
            animal = new Dog();
            animal.speak();
        }
        else if (choice == 2) {
            animal = new Cat();
            animal.speak();
        }
    }
}
```

- Output + User Input (variation 1):

    ```
    Would you like a dog or cat? (1 = dog, 2 = cat): 1
    ```

- Output:

    ```
    *The dog goes woof woof*
    ```

- Output + User Input (variation 2):

    ```
    Would you like a dog or cat? (1 = dog, 2 = cat): 2
    ```

- Output:

    ```
    *The cat goes meow*
    ```

- The statement `Animal animal;` declares a variable of type `Animal` without assigning it an object yet. The actual object is decided later based on user input.
- The statement `scanner.nextInt()` reads an integer from the user and stores it in `choice`.
- If the user enters `1`, a new `Dog` object is created and assigned to `animal`, then `animal.speak()` calls the `Dog` version of `speak()`.
- If the user enters `2`, a new `Cat` object is created instead, and `animal.speak()` calls the `Cat` version.
- This example demonstrates how *runtime polymorphism* allows the **same variable** `animal` to hold different object types, and the correct `speak()` method is chosen at runtime based on what the user picked.

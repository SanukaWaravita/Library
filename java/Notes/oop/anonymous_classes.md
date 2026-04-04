# Anonymous Classes

- An *anonymous class* is a class that doesn't have a name.
- It **cannot be reused** — it is meant for one-time use only.
- Anonymous classes let you add custom behaviour without having to create a whole new class.
- They are often used for one-time uses such as `TimerTask`, `Runnable`, and callbacks.

---

## Using an Anonymous Class to Override a Method

```java
public class Main {

    public static void main(String[] args) {

        Dog dog1 = new Dog();

        Dog dog2 = new Dog() {

            @Override
            void speak() {
                System.out.println("Scooby Doo says *Ruh Roh*");
            }

        };

        dog1.speak();
        System.out.println();
        dog2.speak();
    }
}
```

- Output:

    ```
    *The dog goes woof woof*

    Scooby Doo says *Ruh Roh*
    ```

- The statement `Dog dog1 = new Dog();` creates a normal `Dog` object using the regular constructor.
- The statement `Dog dog2 = new Dog() { ... };` creates an *anonymous class*. Instead of just calling the constructor, we follow it with `{}` and override the `speak()` method inside the curly braces.
- When `dog1.speak()` is called, it uses the **original** `speak()` method defined in the `Dog` class, which prints `*The dog goes woof woof*`.
- When `dog2.speak()` is called, it uses the **overridden** `speak()` method defined inside the anonymous class, which prints `Scooby Doo says *Ruh Roh*`.
- In other words, to add custom behaviour to a class without having to create a whole new subclass, simply create an object, follow the constructor call with `{}`, and override the method within those curly braces.

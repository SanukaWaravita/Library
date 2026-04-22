[< Back to Station](../../station.md)

---

# Method Overriding

- *Method overriding* is when a subclass provides its own implementation of a method that is already defined in the parent class.

- Allows for code reusability and gives specific implementations.

---

## The Problem

```java
public class Animal {

    void move(){
        System.out.println("This animal is running");
    }

}
```

```java
public class Dog extends Animal {

}
```

```java
public class Cat extends Animal {

}
```

```java
public class Fish extends Animal {

}
```

```java
public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();
        Cat cat = new Cat();
        Fish fish = new Fish();

        dog.move();
        cat.move();
        fish.move();

    }

}
```

- Output:

    ```
    This animal is running
    This animal is running
    This animal is running
    ```

- All three animals print "This animal is running" because they all inherit the same `move()` method from `Animal`.

- Realistically this is not appropriate — a fish cannot run, it swims. We need a way to give `Fish` its own version of `move()`.

---

## Overriding a Method

### Parent Class

```java
public class Animal {

    void move(){
        System.out.println("This animal is running");
    }

}
```

### Child Classes

```java
public class Dog extends Animal {

}
```

```java
public class Cat extends Animal {

}
```

```java
public class Fish extends Animal {

    @Override
    void move(){
        System.out.println("This animal is swimming!");
    }

}
```

- The `Fish` class is exhibiting *method overriding*. It defines its own `move()` method with a different implementation.

- The `@Override` annotation is used to tell yourself and other developers that this method is being overridden.

- When there is a method with the same name (in this case `move`) in both the parent class and the child class, the method in the **child class has precedence** and will be executed, not the one in the parent class.

### Result

```java
public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();
        Cat cat = new Cat();
        Fish fish = new Fish();

        dog.move();
        cat.move();
        fish.move();

    }

}
```

- Output:

    ```
    This animal is running
    This animal is running
    This animal is swimming!
    ```

- `dog.move()` and `cat.move()` still use the inherited `move()` from `Animal` — "This animal is running".

- `fish.move()` uses the **overridden** version — "This animal is swimming!" — because `Fish` provides its own implementation.

---

## The @Override Annotation

```java
public class Animal {

    void move(){
        System.out.println("This animal is running");
    }

}
```

```java
public class Fish extends Animal {

    @Override
    void move(){
        System.out.println("This animal is swimming!");
    }

}
```

- The `@Override` annotation also serves another purpose — **catching typos**.

### Without @Override (Typo Goes Unnoticed)

```java
public class Fish extends Animal {

    void moves(){
        System.out.println("This animal is swimming!");
    }

}
```

- If you accidentally type `moves()` instead of `move()`, the methods will be completely different from one another and the method in the parent class will **not be overridden**. Java won't give you an error — it will just treat `moves()` as a brand new method.

### With @Override (Typo Is Caught)

```java
public class Fish extends Animal {

    @Override
    void moves(){
        System.out.println("This animal is swimming!");
    }

}
```

- If you include the `@Override` annotation and make a typo in the method name, Java will point out the **error** — because `moves()` does not exist in the parent class and therefore cannot be overridden.

- This is why it's good practice to always use `@Override` when overriding a method — it acts as a safety net against typos.
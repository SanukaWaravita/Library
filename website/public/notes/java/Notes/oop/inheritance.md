[< Back to Station](../../station.md)

---

# Inheritance

- *Inheritance* is where one class inherits the methods and attributes from another class.

- The relationship is **Parent → Child**.

- Apart from inheriting attributes and methods from the parent class, child classes can have their own unique attributes and methods too.

- To inherit from a class, use the keyword `extends` followed by the parent class name.

---

## Basic Inheritance

### Parent Class

```java
public class Animal {

    boolean isAlive;

    Animal(){
        isAlive = true;
    }

    void eating(){
        System.out.println("This animal is eating!");
    }

}
```

- This is the *parent class* (also called *superclass*). It has one attribute `isAlive` and one method `eating()`.

### Child Classes

```java
public class Dog extends Animal {

}
```

- This is a *child class* (also called *subclass*).

- The `extends Animal` statement classifies this class as a child of the `Animal` class, meaning it will inherit the attributes and methods of `Animal`.

- This child class may not have any implementations in its body, however an object created from it will have access to `boolean isAlive` and `void eating()` from the parent class.

```java
public class Cat extends Animal {

}
```

- Another class inheriting from the `Animal` class.

### Using Inherited Attributes

```java
public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();
        Cat cat = new Cat();

        System.out.println("Is the dog alive?");
        System.out.println(dog.isAlive);

        System.out.println();

        System.out.println("Is the cat alive?");
        System.out.println(cat.isAlive);

    }

}
```

- Output:

    ```
    Is the dog alive?
    true

    Is the cat alive?
    true
    ```

- Both `dog.isAlive` and `cat.isAlive` return `true` — even though `Dog` and `Cat` don't define `isAlive` themselves. They **inherit** it from the `Animal` class, where the constructor sets it to `true`.

---

## Child Classes With Unique Implementations

### Updated Parent Class

```java
public class Animal {

    boolean isAlive;

    Animal(){
        isAlive = true;
    }

    void eating(){
        System.out.println("This animal is eating!");
    }

}
```

### Updated Child Classes

```java
public class Dog extends Animal {

    int lives = 1;

    void speak(){
        System.out.println("The dog goes *woof*");
    }

}
```

- The `Dog` class inherits everything from `Animal` **and** adds its own attribute `int lives = 1;` and its own method `void speak()`.

```java
public class Cat extends Animal {

    int lives = 9;

    void speak(){
        System.out.println("The cat goes *meow*");
    }

}
```

- The `Cat` class also inherits from `Animal` and adds its own `lives` attribute (set to `9`) and its own `speak()` method.

### Accessing Both Inherited and Unique Members

```java
public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();
        Cat cat = new Cat();

        System.out.println("Dog:");
        System.out.print("Is it alive?");
        System.out.println(" " + dog.isAlive);

        System.out.print("How many lives? ");
        System.out.println(dog.lives);
        dog.speak();

        System.out.println();

        System.out.println("Cat:");
        System.out.print("Is it alive?");
        System.out.println(" " + cat.isAlive);

        System.out.print("How many lives? ");
        System.out.println(cat.lives);
        cat.speak();

    }

}
```

- Output:

    ```
    Dog:
    Is it alive? true
    How many lives? 1
    The dog goes *woof*

    Cat:
    Is it alive? true
    How many lives? 9
    The cat goes *meow*
    ```

- `dog.isAlive` and `cat.isAlive` come from the **inherited** `Animal` class — both are `true`.

- `dog.lives` is `1` and `cat.lives` is `9` — these are **unique** to each child class.

- `dog.speak()` prints "The dog goes *woof*" and `cat.speak()` prints "The cat goes *meow*" — each child class has its own implementation of `speak()`.

- This demonstrates the power of *inheritance*: shared behavior lives in the parent, while unique behavior lives in each child.
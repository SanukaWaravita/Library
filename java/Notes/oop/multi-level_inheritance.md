[< Back to Station](../../station.md)

---

# Multi-Level Inheritance

- *Multi-level inheritance* is a chain of inheritance: **Grandparent → Parent → Child**.

---

## Three-Level Hierarchy

### Grandparent Class

```java
public class Organism {

    boolean isAlive;

    Organism(){
        isAlive = true;
    }

}
```

- `Organism` is the *grandparent class*. It has one attribute `isAlive`, which is set to `true` in the constructor.

### Parent Class

```java
public class Animal extends Organism {

    void eating(){
        System.out.println("This animal is eating!");
    }

}
```

- `Animal` is the *parent class*. It inherits from `Organism` (gaining `isAlive`) and adds its own method `eating()`.

### Child Classes

```java
public class Dog extends Animal {

    int lives = 1;

    void speak(){
        System.out.println("The dog goes *woof*");
    }

}
```

- `Dog` is a *child class*. It inherits from `Animal`, which inherits from `Organism` — so `Dog` has access to everything from both the parent and grandparent classes.

```java
public class Cat extends Animal {

    int lives = 9;

    void speak(){
        System.out.println("The cat goes *meow*");
    }

}
```

- `Cat` is another *child class* with the same inheritance chain.

### Using the Hierarchy

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

- `dog.isAlive` comes from the **grandparent** class `Organism`, `eating()` comes from the **parent** class `Animal`, and `lives` and `speak()` are **unique** to the `Dog` child class.

- The inheritance chain flows: `Organism` → `Animal` → `Dog`/`Cat`. Each level adds its own attributes and methods while inheriting everything from above.

---

## Adding a Sibling Branch (Plant)

### Grandparent Class

```java
public class Organism {

    boolean isAlive;

    Organism(){
        isAlive = true;
    }

}
```

### Parent Classes

```java
public class Animal extends Organism {

    void eating(){
        System.out.println("This animal is eating!");
    }

}
```

```java
public class Plant extends Organism {

    void photosynthesize(){
        System.out.println("This plant is absorbing sunlight");
    }

}
```

- `Plant` is a new *parent class* that also inherits from `Organism`. It has its own unique method `photosynthesize()`.

- Now `Organism` has **two branches**: `Animal` and `Plant` — both share `isAlive`, but each has its own unique methods.

### Child Classes

```java
public class Dog extends Animal {

    int lives = 1;

    void speak(){
        System.out.println("The dog goes *woof*");
    }

}
```

```java
public class Cat extends Animal {

    int lives = 9;

    void speak(){
        System.out.println("The cat goes *meow*");
    }

}
```

### Using Both Branches

```java
public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();
        Cat cat = new Cat();
        Plant plant = new Plant();

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

        System.out.println();

        System.out.println("Plant:");
        System.out.print("Is it alive?");
        System.out.println(" " + plant.isAlive);

        plant.photosynthesize();

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

    Plant:
    Is it alive? true
    This plant is absorbing sunlight
    ```

- All three objects (`dog`, `cat`, `plant`) share `isAlive` from the *grandparent* class `Organism`.

- `dog` and `cat` have access to `eating()` from `Animal`, plus their own `lives` and `speak()`.

- `plant` has access to `photosynthesize()` from `Plant`, but **not** to `eating()`, `lives`, or `speak()` — those belong to the `Animal` branch, not the `Plant` branch.

- This shows how *multi-level inheritance* can branch into a tree structure, with shared behavior at the top and specialized behavior at each branch.
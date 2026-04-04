[< Back to Station](../../station.md)

---

# Abstraction

- *Abstraction* is the process of hiding implementation details and showing only the essential features.
- The `abstract` keyword is used to define *abstract classes* and *abstract methods*.
- Abstract classes **cannot** be instantiated directly -- you cannot create an object of an abstract class using `new`.
- They can contain *abstract methods*, which have no body and **must** be implemented by any child class.
- They can contain *concrete methods*, which have a body and are **inherited** by child classes automatically.

---

# Stage 1 -- Basic Abstract Class and Methods

## Parent Class

```java
public abstract class Shape {
    abstract double area();

    void display() {
        System.out.println("This is a shape!");
    }
}
```

- The statement `public abstract class Shape` declares an *abstract class* called `Shape`. Because it is abstract, you cannot do `new Shape()`.
- The statement `abstract double area();` declares an *abstract method*. It has **no body** -- just a semicolon. Every child class that extends `Shape` **must** provide its own implementation of `area()`.
- The method `void display()` is a *concrete method*. It has a full body that prints `"This is a shape!"`. Child classes inherit this method and can use it without overriding it.

## Child Classes

```java
public class Circle extends Shape {
    @Override
    double area() {
        return 0;
    }
}

public class Triangle extends Shape {
    @Override
    double area() {
        return 0;
    }
}

public class Rectangle extends Shape {
    @Override
    double area() {
        return 0;
    }
}
```

- Each child class (`Circle`, `Triangle`, `Rectangle`) extends `Shape` and is therefore **required** to implement the abstract method `area()`.
- The `@Override` annotation indicates that the method is overriding an abstract method from the parent class. All children classes **must** implement this method.
- For now, each `area()` method simply returns `0` as a placeholder.
- None of these classes override `display()`, so they all inherit the parent's version which prints `"This is a shape!"`.

## Main Class

```java
public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle();
        Triangle triangle = new Triangle();
        Rectangle rectangle = new Rectangle();

        circle.display();
        triangle.display();
        rectangle.display();
    }
}
```

- The statement `Circle circle = new Circle();` creates a new `Circle` object. We can instantiate `Circle` because it is a **concrete** class (not abstract) that has implemented all abstract methods from `Shape`.
- The same applies to `Triangle` and `Rectangle`.
- Calling `circle.display()`, `triangle.display()`, and `rectangle.display()` all invoke the inherited `display()` method from the `Shape` parent class, since none of them override it.

- Output:

    ```
    This is a shape!
    This is a shape!
    This is a shape!
    ```

---

# Stage 2 -- Overriding the `display()` Method

## Parent Class

```java
public abstract class Shape {
    abstract double area();

    void display() {
        System.out.println("This is a shape!");
    }
}
```

- The parent class `Shape` remains the same as before.

## Child Classes With Method Overriding

```java
public class Circle extends Shape {
    @Override
    double area() {
        return 0;
    }

    @Override
    void display() {
        System.out.println("This is a circle!");
    }
}

public class Triangle extends Shape {
    @Override
    double area() {
        return 0;
    }

    @Override
    void display() {
        System.out.println("This is a triangle!");
    }
}

public class Rectangle extends Shape {
    @Override
    double area() {
        return 0;
    }

    @Override
    void display() {
        System.out.println("This is a rectangle!");
    }
}
```

- Now each child class **overrides** the concrete `display()` method from the parent class using the `@Override` annotation.
- `Circle` overrides `display()` to print `"This is a circle!"` instead of the parent's `"This is a shape!"`.
- `Triangle` overrides `display()` to print `"This is a triangle!"`.
- `Rectangle` overrides `display()` to print `"This is a rectangle!"`.
- This demonstrates that concrete methods in an abstract class **can** be overridden by child classes when they need custom behavior.

## Main Class

```java
public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle();
        Triangle triangle = new Triangle();
        Rectangle rectangle = new Rectangle();

        circle.display();
        triangle.display();
        rectangle.display();
    }
}
```

- The `main` method is the same as before, but now each object calls its **own overridden** version of `display()` instead of the inherited one.

- Output:

    ```
    This is a circle!
    This is a triangle!
    This is a rectangle!
    ```

---

# Stage 3 -- Full Implementations With Area Calculations

## Parent Class

```java
public abstract class Shape {
    abstract double area();

    void display() {
        System.out.println("This is a shape!");
    }
}
```

- The parent class `Shape` still remains unchanged. The abstract method `area()` is now ready to be implemented with actual calculations in each child class.

## Child Classes With Attributes, Constructors, and Area Logic

### Circle

```java
public class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }

    @Override
    void display() {
        System.out.println("This is a circle!");
    }
}
```

- The `Circle` class now has a `double radius` attribute to store the radius of the circle.
- The constructor `Circle(double radius)` takes a `radius` parameter and assigns it to the instance variable using `this.radius = radius;`.
- The `area()` method now returns `Math.PI * radius * radius`, which calculates the area of a circle using the formula *pi * r squared*.

### Triangle

```java
public class Triangle extends Shape {
    double base;
    double height;

    Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    double area() {
        return 0.5 * base * height;
    }

    @Override
    void display() {
        System.out.println("This is a triangle!");
    }
}
```

- The `Triangle` class has two attributes: `double base` and `double height`.
- The constructor `Triangle(double base, double height)` assigns both parameters to their respective instance variables.
- The `area()` method returns `0.5 * base * height`, which calculates the area of a triangle using the formula *half * base * height*.

### Rectangle

```java
public class Rectangle extends Shape {
    double length;
    double width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return length * width;
    }

    @Override
    void display() {
        System.out.println("This is a rectangle!");
    }
}
```

- The `Rectangle` class has two attributes: `double length` and `double width`.
- The constructor `Rectangle(double length, double width)` assigns both parameters to their respective instance variables.
- The `area()` method returns `length * width`, which calculates the area of a rectangle.

## Main Class

```java
public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(3);
        Triangle triangle = new Triangle(4, 5);
        Rectangle rectangle = new Rectangle(6, 7);

        System.out.println(circle.area());
        System.out.println(triangle.area());
        System.out.println(rectangle.area());
    }
}
```

- The statement `Circle circle = new Circle(3);` creates a `Circle` with a radius of `3`.
- The statement `Triangle triangle = new Triangle(4, 5);` creates a `Triangle` with a base of `4` and a height of `5`.
- The statement `Rectangle rectangle = new Rectangle(6, 7);` creates a `Rectangle` with a length of `6` and a width of `7`.
- Each `System.out.println()` call invokes the respective `area()` method and prints the calculated result.

- Output:

    ```
    28.274333882308138
    10.0
    42.0
    ```

- The circle's area is approximately `28.27` (pi * 3 * 3).
- The triangle's area is `10.0` (0.5 * 4 * 5).
- The rectangle's area is `42.0` (6 * 7).
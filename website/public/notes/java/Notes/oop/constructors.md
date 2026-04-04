# Constructors

- A *constructor* is a special method used to initialize objects.

- You can pass in arguments to a constructor and set up initial values.

- A constructor (default, non-parameterized, or parameterized) is **automatically called** when we instantiate an object of a class.

---

## Parameterized Constructor

```java
public class Student {

    String name;
    int year;
    double gpa;
    boolean isEnrolled;

    Student(String name, int year, double gpa){
        this.name = name;
        this.year = year;
        this.gpa = gpa;
    }

}
```

- The `Student(String name, int year, double gpa){ ... }` block is a *constructor* — specifically a *parameterized* one.

- You use the `this` keyword (followed by `.`) to point to the attribute within the class. In other words, we use it to point to the object we are currently constructing.

- To understand this better, imagine we are creating an object `student1`. When we instantiate the object and this constructor is automatically called, think of the `this` keyword being replaced by the name of the object:

    ```java
    Student(String name, int year, double gpa){
        student1.name = name;
        student1.year = year;
        student1.gpa = gpa;
    }
    ```

- This is typically done when both the attribute and the parameter have the same name, for example `name`.

## When Attribute and Parameter Names Differ

```java
public class Student {

    String name;
    int year;
    double gpa;
    boolean isEnrolled;

    Student(String Name, int Year, double GPA){
        name = Name;
        year = Year;
        gpa = GPA;
    }

}
```

- Here the attribute names and the parameter names are different (`name` vs `Name`, `year` vs `Year`, etc.), therefore we do not need to use the `this` keyword.

- The parameters do not necessarily need to match the attribute names...

```java
public class Student {

    String name;
    int year;
    double gpa;
    boolean isEnrolled;

    Student(String a, int b, double c){
        this.name = a;
        this.year = b;
        this.gpa = c;
    }

}
```

- This works too. The parameter names `a`, `b`, `c` are completely different from the attribute names, but the values are still assigned correctly.

---

## Creating Objects With a Constructor

```java
public class Student {

    String name;
    int year;
    double gpa;
    boolean isEnrolled;

    Student(String name, int year, double gpa){
        this.name = name;
        this.year = year;
        this.gpa = gpa;
    }

}
```

- For now, we will be working with this class.

```java
public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Jogo", 25, 3.5);

    }

}
```

- The statement `Student student1 = new Student("Jogo", 25, 3.5);` creates an object and passes `"Jogo"`, `25`, and `3.5` as arguments.

- These arguments will be received by the *parameterized constructor*, which assigns them to the object's attributes.

## Missing Arguments Error

```java
public class Main {

    public static void main(String[] args) {

        Student student1 = new Student();

    }

}
```

- Output:

    ```
    java: constructor Student in class Student cannot be applied to given types;
      required: java.lang.String,int,double
      found:    no arguments
      reason: actual and formal argument lists differ in length
    ```

- When there is a *parameterized constructor*, and you don't pass in arguments when creating an object, it will result in a **compile error**. The constructor expects `String`, `int`, and `double` — but no arguments were provided.

---

## Accessing Constructor-Set Attributes

```java
public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Jogo", 25, 3.5);
        Student student2 = new Student("Gojo", 29, 3.0);

        System.out.println(student1.name);
        System.out.println(student2.name);

    }

}
```

- Output:

    ```
    Jogo
    Gojo
    ```

- Each object has its own copy of the attributes. `student1.name` is `"Jogo"` and `student2.name` is `"Gojo"` because each object was constructed with different arguments.

```java
public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Jogo", 2000, 3.5);
        Student student2 = new Student("Gojo", 2001, 3.0);

        System.out.println("Student 1");
        System.out.println(student1.name);
        System.out.println(student1.year);
        System.out.println(student1.gpa);

        System.out.println("Student 2");
        System.out.println(student2.name);
        System.out.println(student2.year);
        System.out.println(student2.gpa);

    }

}
```

- Output:

    ```
    Student 1
    Jogo
    2000
    3.5
    Student 2
    Gojo
    2001
    3.0
    ```

- Both objects are created from the same `Student` class, but each holds different data based on the arguments passed to the constructor.

---

## Adding More Parameters

```java
public class Student {

    String name;
    int year;
    double gpa;
    boolean isEnrolled;

    Student(String name, int year, double gpa, boolean isEnrolled){
        this.name = name;
        this.year = year;
        this.gpa = gpa;
        this.isEnrolled = isEnrolled;
    }

}
```

- The constructor now accepts a fourth parameter `boolean isEnrolled`, so all four attributes can be set when creating an object.

```java
public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Jogo", 2000, 3.5, true);
        Student student2 = new Student("Gojo", 2001, 3.0, true);

        System.out.println("Student 1");
        System.out.println(student1.name);
        System.out.println(student1.year);
        System.out.println(student1.gpa);
        System.out.println(student1.isEnrolled);

        System.out.println("Student 2");
        System.out.println(student2.name);
        System.out.println(student2.year);
        System.out.println(student2.gpa);
        System.out.println(student1.isEnrolled);

    }

}
```

- Output:

    ```
    Student 1
    Jogo
    2000
    3.5
    true
    Student 2
    Gojo
    2001
    3.0
    true
    ```

---

## Using `this` in Methods

```java
public class Student {

    String name;
    int year;
    double gpa;
    boolean isEnrolled;

    Student(String name, int year, double gpa, boolean isEnrolled){
        this.name = name;
        this.year = year;
        this.gpa = gpa;
        this.isEnrolled = isEnrolled;
    }

    void Study(){
        System.out.println(this.name + " is a year "
                + this.year
                + " student with a gpa of "
                + this.gpa);
        System.out.println("Enrolled for the following academic year: " + this.isEnrolled);
    }

}
```

```java
public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Jogo", 2, 3.5, true);
        Student student2 = new Student("Gojo", 1, 3.0, true);
        Student student3 = new Student("Ichigo", 3, 4.0, true);

        student1.Study();
        System.out.println();
        student2.Study();
        System.out.println();
        student3.Study();

    }

}
```

- Output:

    ```
    Jogo is a year 2 student with a gpa of 3.5
    Enrolled for the following academic year: true

    Gojo is a year 1 student with a gpa of 3.0
    Enrolled for the following academic year: true

    Ichigo is a year 3 student with a gpa of 4.0
    Enrolled for the following academic year: true
    ```

- The `Study()` method uses `this.name`, `this.year`, `this.gpa`, and `this.isEnrolled` to access the attributes of whichever object calls it.

- When `student1.Study()` is called, `this` refers to `student1`, so it prints Jogo's data. When `student2.Study()` is called, `this` refers to `student2`, and so on.

- This example should help you understand the functioning of the `this` keyword better — it always refers to the **current object** that is using the method.
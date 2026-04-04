[< Back to Station](../../station.md)

---

# Super Keyword

- The `super` keyword refers to the **parent class** (subclass ← superclass).

- Used in constructors and method overriding.

- Calls the parent constructor to initialize inherited attributes.

---

## Using super() in Constructors

### Parent Class

```java
public class Person {

    String first;
    String last;

    Person(String first, String last){
        this.first = first;
        this.last = last;
    }

    void showName(){
        System.out.println(this.first + " " + this.last);
    }

}
```

- `Person` is the *parent class* with two attributes (`first`, `last`) and a method `showName()`.

### Child Class

```java
public class Student extends Person {

    double gpa;

    Student(String first, String last, double gpa){
        super(first, last);
        this.gpa = gpa;
    }

    void showGPA(){
        System.out.println(this.first
                            + "'s GPA is: "
                            + this.gpa);
    }

}
```

- `Student` is a *child class* inheriting from `Person`.

- The `super(first, last);` call sends the arguments `first` and `last` to the **parent class constructor** (`Person`). This lets the parent handle initializing its own attributes.

- After `super()` runs, `this.gpa = gpa;` initializes the child class's own attribute.

- `super()` must be the **first statement** in the child constructor.

### Using Both Classes

```java
public class Main {

    public static void main(String[] args) {

        Person person = new Person("Yuta", "Okotsu");
        Student student = new Student("Toji", "Fushiguro", 3.99);

        person.showName();
        student.showName();
        student.showGPA();

    }

}
```

- Output:

    ```
    Yuta Okotsu
    Toji Fushiguro
    Toji's GPA is: 3.99
    ```

- `person.showName()` prints "Yuta Okotsu" — a regular `Person` object.

- `student.showName()` prints "Toji Fushiguro" — the `Student` object can call `showName()` because it **inherited** it from `Person`. The `first` and `last` attributes were set by the parent constructor via `super(first, last);`.

- `student.showGPA()` prints "Toji's GPA is: 3.99" — this method is **unique** to the `Student` class.

---

## Another Example (Employee)

### Parent Class

```java
public class Person {

    String first;
    String last;

    Person(String first, String last){
        this.first = first;
        this.last = last;
    }

    void showName(){
        System.out.println(this.first + " " + this.last);
    }

}
```

### Child Class

```java
public class Employee extends Person {

    int salary;

    Employee(String first, String last, int salary){
        super(first, last);
        this.salary = salary;
    }

    void showSalary(){
        System.out.println(this.first
                            + "'s salary is: "
                            + this.salary);
    }

}
```

- `Employee` is another child class of `Person`. It uses `super(first, last);` to let the parent constructor handle the name attributes, and only initializes its own unique attribute `salary`.

```java
public class Main {

    public static void main(String[] args) {

        Employee employee = new Employee("Maki", "Zenin", 1000000);

        employee.showSalary();

    }

}
```

- Output:

    ```
    Maki's salary is: 1000000
    ```

- The `Employee` object was created with three arguments. `super(first, last)` passed `"Maki"` and `"Zenin"` to the `Person` constructor, and `this.salary = 1000000;` set the salary.

- `employee.showSalary()` accesses `this.first` (inherited from `Person`) and `this.salary` (unique to `Employee`) to print the result.
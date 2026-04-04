# Variable Scope

- *Variable scope* refers to where a variable can be accessed.

- There are two levels: **Local** and **Class**.

---

## Local Scope

```java
public class Main {

    public static void main(String[] args) {

        // VARIABLE SCOPE

        int x = 1; // Variable declared inside a method has local scope

        System.out.println(x);
        doSomething();

    }

    static void doSomething(){
        int x = 2;

        System.out.println(x);
    }

}
```

- Output:

    ```
    1
    2
    ```

- The variable `int x = 1;` in `main` has *local scope* — it can only be accessed within the `main` method.

- The variable `int x = 2;` in `doSomething()` also has *local scope* — it can only be accessed within `doSomething()`.

- As long as the methods are different, it is allowed to have variables of the same name. Each `x` is completely independent of the other.

---

## Class Scope vs Local Scope

```java
public class Main {

    static int x = 3; // Class scope

    public static void main(String[] args) {

        // VARIABLE SCOPE

        int x = 1; // Local variable
        System.out.println(x);

        doSomething();

    }

    static void doSomething(){

        int x = 2; // Local variable
        System.out.println(x);

    }

}
```

- Output:

    ```
    1
    2
    ```

- The statement `static int x = 3;` declares a *class-level variable* outside of any method. This variable has **class scope** — it is accessible by all methods within the class.

- However, both `main` and `doSomething()` also declare their own *local* `x` variables (`1` and `2`).

- Java **prioritizes local variables first**. When a local variable has the same name as a class variable, the local one takes precedence. That's why `1` and `2` are printed instead of `3`.

- A good usage scenario for *class variables* is when you have **constants** where the value does not change, and multiple methods need access to the same value.
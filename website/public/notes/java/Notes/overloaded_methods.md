[< Back to Station](../station.md)

---

# Overloaded Methods

- *Overloaded methods* are methods that share the **same name**, but have **different parameters**.

- The *method signature* = name + parameters. As long as the signatures are different, Java knows which method to call.

---

## Basic Overloading (Add Method)

```java
public class Main {

    public static void main(String[] args) {

        System.out.println(add(1, 2));

    }

    static double add(double a, double b){
        return a + b;
    }

}
```

- Output:

    ```
    3.0
    ```

- The `add` method takes two `double` parameters and returns their sum.

- `add(1, 2)` returns `3.0` because the return type is `double`.

## Multiple Overloaded Methods

```java
public class Main {

    public static void main(String[] args) {

        System.out.println(add(1, 2));
        System.out.println(add(1, 2, 3));
        System.out.println(add(1, 2, 3, 4));

    }

    static double add(double a, double b){
        return a + b;
    }

    static double add(double a, double b, double c){
        return a + b + c;
    }

    static double add(double a, double b, double c, double d){
        return a + b + c + d;
    }

}
```

- Output:

    ```
    3.0
    6.0
    10.0
    ```

- There are now three `add` methods, each with a different number of parameters (`2`, `3`, and `4`).

- Java determines which method to call based on the **number of arguments** passed:
    - `add(1, 2)` calls the version with `2` parameters → returns `3.0`
    - `add(1, 2, 3)` calls the version with `3` parameters → returns `6.0`
    - `add(1, 2, 3, 4)` calls the version with `4` parameters → returns `10.0`

---

## Overloading With Different Logic (Pizza Example)

```java
public class Main {

    public static void main(String[] args) {

        String pizza = bakePizza("flat bread");
        System.out.println(pizza);

        pizza = bakePizza("flat bread", "mozzarella");
        System.out.println(pizza);

        pizza = bakePizza("flat bread", "mozzarella", "pepperoni");
        System.out.println(pizza);

    }

    static String bakePizza(String bread){
        return bread + "pizza";
    }

    static String bakePizza(String bread, String cheese){
        return cheese + " " + bread + " pizza";
    }

    static String bakePizza(String bread, String cheese, String topping){
        return topping + " " + cheese + " " + bread + " pizza";
    }

}
```

- Output:

    ```
    flat breadpizza
    mozzarella flat bread pizza
    pepperoni mozzarella flat bread pizza
    ```

- The `bakePizza` method is overloaded with three versions — one that takes just `bread`, one that takes `bread` and `cheese`, and one that takes `bread`, `cheese`, and `topping`.

- Each version builds a different pizza description depending on how many ingredients are provided:
    - `bakePizza("flat bread")` → `"flat breadpizza"` (just bread)
    - `bakePizza("flat bread", "mozzarella")` → `"mozzarella flat bread pizza"` (bread + cheese)
    - `bakePizza("flat bread", "mozzarella", "pepperoni")` → `"pepperoni mozzarella flat bread pizza"` (bread + cheese + topping)

- This shows how *overloaded methods* can provide flexible behavior — the same method name handles different amounts of input.
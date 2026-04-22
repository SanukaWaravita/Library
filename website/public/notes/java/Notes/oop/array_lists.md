[< Back to Station](../../station.md)

---

# ArrayLists

- An *ArrayList* is a **resizable array** that stores objects. Arrays are fixed in size, but ArrayLists can change in size dynamically.

- When storing primitive types inside an ArrayList, Java uses *autoboxing* to automatically convert them to their corresponding wrapper class objects.

---

# Creating an ArrayList

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>();

        list.add(3);
        list.add(1);
        list.add(2);

        System.out.println(list);
    }
}
```

- Output:

    ```
    [3, 1, 2]
    ```

- If we are storing primitives inside the ArrayList, we must specify the *wrapper class* for that primitive type inside the `<>`, like so: `ArrayList<Integer>`.

- You do not need to mention the wrapper class in the second `<>`, because Java will automatically infer the type.

---

## ArrayList of Doubles

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Double> list = new ArrayList<>();

        list.add(3.14);
        list.add(1.99);
        list.add(2.5555);

        System.out.println(list);
    }
}
```

- Output:

    ```
    [3.14, 1.99, 2.5555]
    ```

- The statement `ArrayList<Double> list = new ArrayList<>();` creates a new ArrayList that stores `Double` wrapper objects.

- The `.add()` method appends each element to the end of the ArrayList.

---

## ArrayList of Strings

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        System.out.println(fruits);
    }
}
```

- Output:

    ```
    [Mango, Apple, Orange, Coconut]
    ```

- The statement `ArrayList<String> fruits = new ArrayList<>();` creates a new ArrayList that stores `String` objects.

- Since `String` is already a reference type (not a primitive), no wrapper class is needed.

---

# The `.remove()` Method

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        System.out.println("Before .remove()");
        System.out.println(fruits);

        fruits.remove(0);

        System.out.println("After .remove()");
        System.out.println(fruits);
    }
}
```

- Output:

    ```
    Before .remove()
    [Mango, Apple, Orange, Coconut]
    After .remove()
    [Apple, Orange, Coconut]
    ```

- The statement `fruits.remove(0)` removes the element at index `0`, which is `"Mango"`.

---

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        System.out.println("Before .remove()");
        System.out.println(fruits);

        fruits.remove(2);

        System.out.println("After .remove()");
        System.out.println(fruits);
    }
}
```

- Output:

    ```
    Before .remove()
    [Mango, Apple, Orange, Coconut]
    After .remove()
    [Mango, Apple, Coconut]
    ```

- The statement `fruits.remove(2)` removes the element at index `2`, which is `"Orange"`.

- The `.remove()` method removes an element at the specified index from the ArrayList.

---

# The `.set()` Method

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        System.out.println("Before .set()");
        System.out.println(fruits);

        fruits.set(0, "Pineapple");

        System.out.println();
        System.out.println("After .set()");
        System.out.println(fruits);
    }
}
```

- Output:

    ```
    Before .set()
    [Mango, Apple, Orange, Coconut]

    After .set()
    [Pineapple, Apple, Orange, Coconut]
    ```

- The statement `fruits.set(0, "Pineapple")` replaces the element at index `0` with `"Pineapple"`.

- The `.set()` method sets (replaces) an element at a specified index inside the ArrayList.

---

# The `.get()` Method

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        System.out.println(fruits.get(0));
        System.out.println(fruits.get(1));
        System.out.println(fruits.get(2));
    }
}
```

- Output:

    ```
    Mango
    Apple
    Orange
    ```

- The statement `fruits.get(0)` retrieves the element at index `0`, which is `"Mango"`.

- The `.get()` method is used to retrieve the element at a specified index inside the ArrayList.

---

# The `.size()` Method

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        System.out.println(fruits.size());
    }
}
```

- Output:

    ```
    4
    ```

- The statement `fruits.size()` returns the total number of elements within the ArrayList.

---

# Sorting an ArrayList

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        System.out.println("Before sorting: ");
        System.out.println(fruits);

        Collections.sort(fruits);

        System.out.println("After sorting: ");
        System.out.println(fruits);
    }
}
```

- Output:

    ```
    Before sorting: 
    [Mango, Apple, Orange, Coconut]
    After sorting: 
    [Apple, Coconut, Mango, Orange]
    ```

- To sort the elements inside an ArrayList, you have to use the *Collections* framework.

- You have to import the class using `import java.util.Collections;`.

- The statement `Collections.sort(fruits)` sorts the ArrayList in **ascending** (alphabetical) order.

---

## Iterating With an Enhanced For Loop

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Coconut");

        Collections.sort(fruits);

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

- Output:

    ```
    Apple
    Coconut
    Mango
    Orange
    ```

- You can use an *enhanced for loop* to iterate over the elements of an ArrayList.

- The statement `for (String fruit : fruits)` iterates through each `String` element in the `fruits` ArrayList, assigning it to the variable `fruit` on each iteration.

---

# Exercise

```java
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayList<String> foods = new ArrayList<>();

        System.out.print("Enter the # of food you would like: ");
        int numOfFood = scanner.nextInt();
        scanner.nextLine();

        for (int i = 1; i <= numOfFood; i++) {
            System.out.print("Enter food #" + i + ": ");
            String food = scanner.nextLine();
            foods.add(food);
        }

        System.out.println(foods);

        scanner.close();
    }
}
```

- Output + User Input:

    ```
    Enter the # of food you would like: 4
    Enter food #1: Pizza
    Enter food #2: Hotdog
    Enter food #3: Hamburger
    Enter food #4: Taco
    ```

- Output:

    ```
    [Pizza, Hotdog, Hamburger, Taco]
    ```

- The statement `scanner.nextInt()` reads the number of foods the user wants to enter.

- The statement `scanner.nextLine()` after `nextInt()` consumes the leftover newline character from the input buffer.

- The `for` loop runs from `1` to `numOfFood`, prompting the user to enter each food item and adding it to the `foods` ArrayList using `foods.add(food)`.

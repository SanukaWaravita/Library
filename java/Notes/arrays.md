[< Back to Station](../station.md)

---

# Arrays

- An *array* is a collection of values of the same data type.

- Think of it as a variable that can store more than one value.

- Anything inside an array is known as an *element*.

- The name of your array should be descriptive of what it contains.

---

## Printing an Array Directly

```java
public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        System.out.println(fruits);

    }

}
```

- Output:

    ```
    [Ljava.lang.String;@27716f4
    ```

- We receive a **memory address** instead of the actual contents. This is because arrays fall under the category of *reference datatype* — printing an array directly shows its reference in memory, not its values.

---

## Accessing Elements by Index

```java
public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        System.out.println(fruits[0]);
        System.out.println(fruits[1]);
        System.out.println(fruits[2]);
        System.out.println(fruits[3]);

    }

}
```

- Output:

    ```
    apple
    orange
    banana
    coconut
    ```

- To access individual *elements*, use the array name followed by the *index* in square brackets: `fruits[0]`, `fruits[1]`, etc.

- Arrays are *zero-indexed* — the first element is at index `0`, the second at `1`, and so on.

---

## Modifying Elements

```java
public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        System.out.println("Before: ");
        System.out.println(fruits[0]);
        System.out.println(fruits[1]);
        System.out.println(fruits[2]);
        System.out.println(fruits[3]);

        fruits[0] = "Pineapple";
        fruits[2] = "Mango";

        System.out.println();
        System.out.println("After: ");
        System.out.println(fruits[0]);
        System.out.println(fruits[1]);
        System.out.println(fruits[2]);
        System.out.println(fruits[3]);

    }

}
```

- Output:

    ```
    Before: 
    apple
    orange
    banana
    coconut

    After: 
    Pineapple
    orange
    Mango
    coconut
    ```

- The statement `fruits[0] = "Pineapple";` replaces the element at index `0` (which was `"apple"`) with `"Pineapple"`.

- The statement `fruits[2] = "Mango";` replaces the element at index `2` (which was `"banana"`) with `"Mango"`.

- Elements at index `1` and `3` remain unchanged.

---

## .length Property

```java
public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        int numOfFruits = fruits.length;

        System.out.println(numOfFruits);

    }

}
```

- Output:

    ```
    4
    ```

- The `.length` property returns the number of *elements* in the array. Since `fruits` has `4` elements, `fruits.length` returns `4`.

---

## Looping Through an Array (For Loop)

```java
public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        for (int i = 0; i < fruits.length; i++){
            System.out.println(fruits[i]);
        }

    }

}
```

- Output:

    ```
    apple
    orange
    banana
    coconut
    ```

- The `for` loop starts at index `0` and runs while `i < fruits.length` (which is `4`), so it iterates through indices `0`, `1`, `2`, and `3`.

- `fruits[i]` accesses each element using the loop control variable `i` as the index.

---

## Looping Through an Array (For-Each Loop)

```java
public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        for(String fruit : fruits){
            System.out.println(fruit);
        }

    }

}
```

- Output:

    ```
    apple
    orange
    banana
    coconut
    ```

- The *for-each loop* `for(String fruit : fruits)` is a simpler way to iterate through an array. It automatically assigns each element to the variable `fruit` on every iteration.

- You don't need to manage an index variable — it's cleaner when you just need to access each element.

---

## Arrays.sort()

```java
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        Arrays.sort(fruits);

        for(String fruit : fruits){
            System.out.println(fruit);
        }

    }

}
```

- Output:

    ```
    apple
    banana
    coconut
    orange
    ```

- The `import java.util.Arrays;` statement imports the `Arrays` class, which provides utility methods for working with arrays.

- The `Arrays.sort(fruits);` method sorts the array in *alphabetical order* (for strings) or *ascending order* (for numbers).

---

## Arrays.fill()

```java
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        String[] fruits = {"apple", "orange", "banana", "coconut"};

        Arrays.fill(fruits, "pinapple");

        for(String fruit : fruits){
            System.out.println(fruit);
        }

    }

}
```

- Output:

    ```
    pinapple
    pinapple
    pinapple
    pinapple
    ```

- The `Arrays.fill(fruits, "pinapple");` method replaces **every element** in the array with the specified value `"pinapple"`.

- This is useful when you want to initialize or reset all elements of an array to the same value.
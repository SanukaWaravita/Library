# Arithmetic Operators

```java
public class Main { 
    public static void main(String[] args) { 
        // Arithmetic Operators 

        int x = 10; 
        int y = 2; 
        int z; 

        z = x + y; 

        System.out.println(z); 
    } 
} 
```

- Output:

    ```
    12
    ```

- The statement `int x = 10;` declares an integer variable `x` and assigns it the value `10`. 

- The statement `int y = 2;` declares another integer variable `y` and assigns it the value `2`. 

- The statement `int z`; declares an integer variable `z` without assigning a value yet. 

- The statement `z = x + y;` performs an arithmetic addition operation between `x` and `y`, resulting in 10 + 2, which equals `12`. This result is then stored in the variable `z`. 

- The statement `System.out.println(z);` outputs the value stored in `z` (which is `12`) to the console. 

```java
public class Main { 
    public static void main(String[] args) { 
        // Arithmetic Operators 

        int x = 10; 
        int y = 2; 
        int z; 

        z = x - y; 

        System.out.println(z); 
    } 
} 
```

- Output:

    ```
    8
    ```

- The statement `z = x - y;` performs an arithmetic subtraction operation between `x` and `y`, resulting in 10 - 2, which equals `8`. This result is then stored in the variable `z`. 

- The statement `System.out.println(z);` outputs the value stored in `z` (which is `8`) to the console. 

```java
public class Main { 
    public static void main(String[] args) { 
        // Arithmetic Operators 

        int x = 10; 
        int y = 2; 
        int z; 

        z = x * y; 

        System.out.println(z); 
    } 
} 
```

- Output:

    ```
    20 
    ``

- The statement `z = x * y;` performs an arithmetic multiplication operation between `x` and `y`, resulting in 10 × 2, which equals `20`. This result is then stored in the variable `z`. 

- The statement `System.out.println(z);` outputs the value stored in `z` (which is `8`) to the console. 

```java
public class Main { 
    public static void main(String[] args) { 
        // Arithmetic Operators 

        int x = 10; 
        int y = 2; 
        int z; 
        
        z = x / y; 

        System.out.println(z); 
    } 
} 
```

- Output:

    ```
    5
    ```

- The statement `z = x / y;` performs an arithmetic division operation between `x` and `y`, resulting in 10 ÷ 2, which equals `5`. This result is then stored in the variable `z`. 

- The statement `System.out.println(z);` outputs the value stored in `z` (which is `8`) to the console.

```java
public class Main { 
    public static void main(String[] args) { 

        // Arithmetic Operators 

        int x = 10; 
        int y = 2; 
        int z; 

        z = x % y; 

        System.out.println(z); 
    } 
} 
```

- Output:

    ```
    0
    ```

- The statement `z = x % y;` uses the modulus operator `%`, which returns the remainder when `x` is divided by `y`. 

- Since "10 % 2" results in `0` (because `10` is evenly divisible by `2`), the value `0` is assigned to `z`. 


```java
public class Main { 
    public static void main(String[] args) { 
        // Arithmetic Operators 

        int x = 10; 
        int y = 3; 
        int z; 

        z = x % y; 

        System.out.println(z); 
    } 
} 
```

- Output:

    ```
    1
    ```

- Since '10 % 3' results in `1` (because `10` is not evenly divisible by `3`), the value `1` is assigned to `z`. 


# Augmented Assignment Operators

```java
public class Main { 
    public static void main(String[] args) { 
        // Augmented Assignment Operators 

        int x = 10; 
        int y = 3; 

        x += y; 

        System.out.println(x); 
    } 
} 
```

- Output:

```
13 
```

- The statement `int x = 10;` declares an *integer variable* `x` and assigns it the value `10`. 

- The statement `int y = 3;` declares another *integer variable* `y` and assigns it the value `3`. 

- The statement `x += y;` is an *augmented assignment operator*, which is a shorthand for `x = x + y`. 

- This means `x` will now be `10 + 3`, which results in `13`. 

- The statement `System.out.println(x);` will display the value of `x` (which is now `13`) in the console. 

```java
public class Main { 
    public static void main(String[] args) { 
        // Augmented Assignment Operators 

        int x = 10; 
        int y = 3; 

        x -= y; 

        System.out.println(x); 
    } 
} 
```

- Output:

    ```
    7
    ```

- The statement `int x = 10;` declares an *integer variable* `x` and assigns it the value `10`. 

- The statement `int y = 3;` declares another *integer variable* `y` and assigns it the value 3. 

- The statement `x -= y;` is an *augmented assignment operator*, which is a shorthand for `x = x - y`. 

- This means `x` will now be `10 - 3`, which equals `7`. 

- The statement `System.out.println(x);` will display the value of `x` (which is now `7`) in the console. 

```java
public class Main { 
    public static void main(String[] args) { 
        // Augmented Assignment Operators 

        int x = 10; 
        int y = 3; 

        x *= y; 

        System.out.println(x); 
    } 
} 
```

- Output:

    ```
    30
    ```

- The statement `int x = 10;` declares an *integer variable* `x` and assigns it the value `10`. 

- The statement `int y = 3;` declares another *integer variable* `y` and assigns it the value `3`. 

- The statement `x *= y;` is an *augmented assignment operator*, which is a shorthand for `x = x * y`. 

- This means `x` will now be `10 * 3`, which equals `30`. 

- The `statement System.out.println(x);` will display the value of `x` (which is now `30`) in the console. 

```java
public class Main { 
    public static void main(String[] args) { 
        // Augmented Assignment Operators 

        int x = 10; 
        int y = 2; 

        x /= y; 

        System.out.println(x); 
    } 
} 
```

- Output

    ```
    5
    ```

- The statement `int x = 10;` declares an *integer variable* `x` and assigns it the value `10`. 

- The statement `int y = 2;` declares another *integer variable* `y` and assigns it the value `2`. 

- The statement `x /= y;` is an *augmented assignment operator*, which is a shorthand for `x = x / y`. 

- This performs *integer division*, meaning any decimal part will be discarded (not rounded). 

- In this case, `10 / 2` equals `5`, so `x` becomes `5`. 

- The statement `System.out.println(x);` will display the value of `x` (which is now `5`) in the console. 

```java
public class Main { 

    public static void main(String[] args) { 
        // Augmented Assignment Operators 

        int x = 10; 
        int y = 3; 

        x /= y; 

        System.out.println(x); 
    } 
} 
```

- Output:

    ```
    3
    ```

- The statement `int x = 10;` declares an *integer variable* `x` and assigns it the value `10`. 

- The statement `int y = 3;` declares another *integer variable* `y` and assigns it the value `3`. 

- The statement `x /= y;` is an *augmented assignment operator*, which is a shorthand for x = x / y. 

- Since both operands are *integers*, integer division occurs — so `10 / 3` results in `3` (the `.333`... part is discarded). 

- The statement `System.out.println(x);` will display the value of `x` (which is now `3`) in the console.


```java
public class Main { 

    public static void main(String[] args) { 
        // Augmented Assignment Operators 

        double x = 10; 
        double y = 3; 

        x /= y; 

        System.out.println(x); 
    } 
} 
```

- Output:

```
3.3333333333333335 
```

- The statement `double x = 10;` declares a *double variable* `x` and assigns it the value `10.0`. 

- The statement `double y = 3;` declares another *double variable* `y` and assigns it the value `3.0`. 

- The statement `x /= y;` is an *augmented assignment operator*, which is a shorthand for `x = x / y`. 

- Since both `x` and `y` are *doubles*, *floating-point division* occurs, meaning the result includes decimal values. 

- Here, `10.0 / 3.0` results in approximately `3.3333333333333335`. 

- The statement `System.out.println(x);` will display the value of `x` (which is now about `3.3333333333333335`) in the console. 

```java
public class Main { 

    public static void main(String[] args) { 
        // Augmented Assignment Operators 

        int x = 10; 
        int y = 3; 

        x %= y; 

        System.out.println(x); 
    } 
} 
```

- Output:

```
1 
```

- The statement `int x = 10;` declares an *integer variable* `x` and assigns it the value `10`. 

- The statement `int y = 3;` declares another *integer variable* `y` and assigns it the value `3`. 

- The statement `x %= y;` is an *augmented assignment operator*, which is a shorthand for `x = x % y`. 

- This means `x` will now be assigned the remainder when `10` is divided by `3`. 

- Since `10 / 3` is `3` with a remainder of `1`, `x` becomes `1`. 

- The statement `System.out.println(x);` will display the value of `x` (which is now `1`) in the console. 
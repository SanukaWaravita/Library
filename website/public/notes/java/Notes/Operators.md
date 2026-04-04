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

# Decrement and Increment Operators

```java
public class Main {

    public static void main(String[] args) {

        // Increment and Decrement Operators

        int x = 1;

        x++;

        System.out.println(x);

    }

}
```

- Output:

    ```
    2
    ```

- The statement `int x = 1;` declares an *integer variable* `x` and assigns it the value `1`.

- The statement `x++;` is the *increment operator*, which increases the value of `x` by `1`. This is shorthand for `x = x + 1;`. After this line, `x` becomes `2`.

- The statement `System.out.println(x);` will display the value of `x` (which is now `2`) in the console.

```java
public class Main {

    public static void main(String[] args) {

        // Increment and Decrement Operators

        int x = 1;

        x++;
        x++;

        System.out.println(x);

    }

}
```

- Output:

    ```
    3
    ```

- The statement `int x = 1;` declares an *integer variable* `x` and assigns it the value `1`.

- The statement `x++;` increases the value of `x` by `1`, making `x` equal to `2`.

- The next statement `x++;` again increases the value of `x` by `1`, so now `x` is `3`.

- The statement `System.out.println(x);` displays the value of `x` (which is now `3`) in the console.

```java
public class Main {

    public static void main(String[] args) {

        // Increment and Decrement Operators

        int x = 1;

        x--;

        System.out.println(x);

    }

}
```

- Output:

    ```
    0
    ```

- The statement `int x = 1;` declares an *integer variable* `x` and assigns it the value `1`.

- The statement `x--;` is the *decrement operator*, which decreases the value of `x` by `1`. This is shorthand for `x = x - 1;`. After this line, `x` becomes `0`.

- The statement `System.out.println(x);` will display the value of `x` (which is now `0`) in the console.

```java
public class Main {

    public static void main(String[] args) {

        // Increment and Decrement Operators

        int x = 1;

        x--;
        x--;

        System.out.println(x);

    }

}
```

- Output:

    ```
    -1
    ```

- The statement `int x = 1;` declares an *integer variable* `x` and assigns it the value `1`.

- The first `x--;` decreases the value of `x` by `1`, making `x` equal to `0`.

- The second `x--;` decreases the value of `x` by `1` again, so now `x` is `-1`.

- The statement `System.out.println(x);` displays the value of `x` (which is now `-1`) in the console.


# Order of Operators

```java
public class Main {

    public static void main(String[] args) {

        // ORDER OF OPERATIONS [P-E-M-D-A-S/
        //                      Please Excuse My Dear Aunt Sally/
        //                      Please Excuse My Dope Ass Swag]

        double result = 3 + 4 * (7 - 5) / 2.0;

        System.out.println(result);

    }

}
```

- Output:

    ```
    7.0
    ```

- The comment explains *Order of Operations* using the mnemonic **P-E-M-D-A-S**, which stands for:
    - **P**arentheses
    - **E**xponents
    - **M**ultiplication
    - **D**ivision
    - **A**ddition
    - **S**ubtraction

- The statement `double result = 3 + 4 * (7 - 5) / 2.0;` calculates a value following this order:
    1. Parentheses first: `(7 - 5)` equals `2`.
    2. Then multiplication: `4 * 2` equals `8`.
    3. Then division: `8 / 2.0` equals `4.0` (note `2.0` is a *double*, so division results in a *double*).
    4. Finally addition: `3 + 4.0` equals `7.0`.

- The statement `System.out.println(result);` displays the final result `7.0` in the console.


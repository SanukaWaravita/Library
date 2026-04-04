- A variable if a placeholder for a value that behaves as the value it contains.  

- Types of variables:
    - boolean:
        - 1 bit
        - primitive
        - true or false
    - byte
        - 1 byte
        - primitive
        - -128 to 127
    - short
        - 2 bytes
        - primitive
        - -32,768 to 32,767
    - int
        - 4 bytes
        - primitive
        - -2 billion to 2 billion
    - long
        - 8 bytes
        - primitive
        - -9 quintillion to 9 quitillion
    - float
        - 4 bytes
        - primitive
        - Fractional number up to 6-7 digits.
            - *ex. 3.141592*
    - double
        - 8 bytes
        - primitive
        - Fractional number up to 15 digits
            - *ex. 3.141592653589793*
    - char
        - 2 bytes
        - primitive
        - Single character/ letter/ ASCII value
            - *ex. 'f'*
    - string
        - varies
        - reference
        - A sequeunce of characters
            - *ex. "Hello world"*

- Remember, variables don't necessarily need to be a single letter like "x" or "y", it can also be a word like "symbol" or "variable". 

---

# Primitive Vs. Reference

| Primitive | Reference | 
|---|---|
| 8 (boolean, byte, etc.) | Unlimited (user defined) |
| Stores data | Stores an address | 
| Can only hold 1 value | Could hold more than 1 value | 
| Less memory | More memory |
| Fast | Slower |

---

# Creating Variables

- Involves two steps:
    1. Declaration
    2. Assignment

    Or

    - Initialization (declaration + assignment)

    ## 1. Declaration

    ```java
    public class Main { 

        public static void main(String[] args) { 

            int x; //Declaration 
        }  
    } 
    ```

    - This is **declaration** of a variable. 

    ## 2. Assignment

    ```java
    public class Main { 

        public static void main(String[] args) { 

            int x; 

            x = 123; //Assignment 
        }
    }
    ```

    - This is **assignment** of a variable. 

    ## Initialization

    ```java
    public class Main { 

        public static void main(String[] args) { 

            int x = 123; //Initialization 
        }  
    } 
    ```

    - The above two steps combined (declaration + assignment) is *initialization*. 

--- 

# Printing Variables

```java
public class Main { 

    public static void main(String[] args) { 

        int x = 123; 

        System.out.println("x"); 
    }  
} 
```

- In the console, this program will print a literal `x` instead of `123`, as `x` is between two quotes. 

```java
public class Main { 

    public static void main(String[] args) { 

        int x = 123; 

        System.out.println(x); 
    }  
} 
```

- To print the value stored in a variable, only the variable alone is required within the parenthesis ('()'). 

- This program will print `123` in the console.  

---

# String Concathenation

## String Datatyppe

```java
public class Main { 

    public static void main(String[] args) { 

        String name = "Sukuna"; 

        System.out.println(name); 

    }  
} 
```

- "String" is a reference datatype, and so must start with a capital letter.  

- When assigning a value, they must be between ""  (double quotes). 

- The console will display `Sukuna`. 

```java
public class Main { 

    public static void main(String[] args) { 

        String name = "Sukuna"; 

        System.out.println("Hello, my name is "+name); 
    }  
} 
```

- (In this program, string concatenation is taking place.) 

- The console will display `Hello, my name is Sukuna`.  

---

## Integer Datatype

```java
public class Main { 

    public static void main(String[] args) { 

        int x = 123; 

        System.out.println("My number is: "+x); 
    }  
} 
```

- If you want to display a string literal followed by a variable, this can be done `string concatenation`.  

- This program will display `My number is: 123` in the console.  

```java
public class Main { 

    public static void main(String[] args) { 

        int x = 123490253205859203; 

        System.out.println("My number is: "+x); 
    }  
} 
```

- This program will display an error as `123490253205859203858029520583290` is too large to be stored as an integer. 

---

## Long Datatype

```java
public class Main { 

    public static void main(String[] args) { 

        long x = 123490253205859209; 

        System.out.println("My number is: "+x); 
    }  
} 
```

- For a number as large as `123490253205859209`, the `long` datatype is suitable.  

- However, this program too will not work and will produce an error; this is because there has to be an `L` after `123490253205859209` for some reason.

```java
public class Main { 

    public static void main(String[] args) { 

        long x = 123490253205859209L; 

        System.out.println("My number is: "+x); 
    }  
} 
```

- The console will display `My number is: 123490253205859209`. 

---

## Byte Datatype

```java
public class Main { 

    public static void main(String[] args) { 

        byte x = 130; 

        System.out.println("My number is: "+x); 
    }  
} 
```

- This program will not work and the console will not display any output.

```java
public class Main { 

    public static void main(String[] args) { 

        byte x = 100; 

        System.out.println("My number is: "+x); 
    }  
} 
```

- This program will work and the console will display `My number is: 100`. 

---

## Float Datatype

```java
public class Main { 

    public static void main(String[] args) { 

        int x = 123.01; 

        System.out.println("My number is: "+x); 
    }  
} 
```

- This program will not work and the console will not display any output. 

```java
public class Main { 

    public static void main(String[] args) { 

        float y = 3.14; 

        System.out.println("My number is: "+y); 
    }  
} 
```

- Although the datatype `float` is suitable for a value of this nature (`3.14`), this program will still result in an error and no output will be seen in the console.  

- This is because an `f` is required following the value `3.14`. 

```java
public class Main { 

    public static void main(String[] args) { 

        float y = 3.14f; 

        System.out.println("My number is: "+y); 
    }  
} 
```

- This program will work and the console will display `My number is: 3.14`. 

---

## Double Datatype

```java
public class Main {

    public static void main(String[] args) {

        double y = 3.142352543464;

        System.out.println("My number is: "+y);
    }
}
```

- A majority tends to use this datatype (`double`) more, because of its higher precision (`3.142352543464` - 12 decimal places/ 12 digits following the decimal), however do note that this precision is only until 15 digits following the decimal_↗, and not having to add an `f` after the value being assigned to the variable.

- The console will display `My number is: 3.142352543464`.

```java
public class Main {

    public static void main(String[] args) {

        double y = 3.123456789012345;

        System.out.println("My number is: "+y);
    }
}
```

- This program will not have any error and the console will display `My number is: 3.123456789012345`.

---

## Boolean Datatype

```java
public class Main {

    public static void main(String[] args) {

        boolean y = true;

        System.out.println("My statement is "+y);
    }
}
```

- This will display `My statement is true` in the console.

```java
public class Main {

    public static void main(String[] args) {

        boolean y = false;

        System.out.println("My statement is "+y);
    }
}
```

- This will display `My statement is false` in the console.

```java
public class Main {

    public static void main(String[] args) {

        boolean y = pizza;

        System.out.println("My statement is "+y);
    }
}
```

- This program will not work and will result in an error.

- This is because `boolean` datatypes can only store `true` or `false` and nothing else_↗.

--- 

## Character Datatype

```java
public class Main {

    public static void main(String[] args) {

        char y = '@';

        System.out.println(y);
    }
}
```

- The console will display `@`.

```java
public class Main {

    public static void main(String[] args) {

        char symbol = '@';

        System.out.println(symbol);
    }
}
```

- The console will display `@`. 

---

# Swapping Two variables

```java
public class Main { 

    public static void main(String[] args) { 

        String x = "water"; 
        String y = "Kool-Aid"; 

        System.out.println("x: "+x); 
        System.out.println("y: "+y); 
    }  
} 
```

- The console will display: 
 
    ```
    x: water 
    y: Kool-Aid
    ```

---

## Trying Out Direct Swapping

```java
public class Main { 

    public static void main(String[] args) { 

        String x = "water"; 
        String y = "Kool-Aid"; 

        System.out.println("x: "+x); 
        System.out.println("y: "+y); 
    }  
} 
```

- The console will display: 
 
    ```
    x: water 
    y: Kool-Aid 
    ```

```java 
public class Main { 

    public static void main(String[] args) { 

        String x = "water"; 
        String y = "Kool-Aid"; 

        x=y; 


        System.out.println("x: "+x); 
        System.out.println("y: "+y); 
}  
}
```

- The console will display: 

    ```    
    x: Kool-Aid 
    y: Kool-Aid 
    ```

```java
public class Main { 

    public static void main(String[] args) { 

        String x = "water"; 
        String y = "Kool-Aid"; 

        
        y=x; 

        
        System.out.println("x: "+x); 
        System.out.println("y: "+y); 
    }  
} 
```

- The console will display: 
 
    ```
    x: water 
    y: water 
    ```
 

- From these trials, it appears this way of trying to swap variables is unsuccessful.  

---

## Introducing a Temporary Variable

```java
public class Main { 

    public static void main(String[] args) { 

        String x = "water"; 
        String y = "Kool-Aid"; 

        
        System.out.println("x: "+x); 
        System.out.println("y: "+y); 
    }  
} 
```

- The console will display: 
 
    ```
    x: water 
    y: Kool-Aid 
    ```

```java
public class Main { 

    public static void main(String[] args) { 

        String x = "water"; 
        String y = "Kool-Aid"; 
        String temp=null; 

        
        temp = x; 
        x=y; 
        y = temp; 

        
        System.out.println("x: "+x); 
        System.out.println("y: "+y); 
    }  
} 
```

OR

```java
public class Main { 

    public static void main(String[] args) { 

        String x = "water"; 
        String y = "Kool-Aid"; 
        String temp; 

        
        temp = x; 
        x=y; 
        y = temp; 

        
        System.out.println("x: "+x); 
        System.out.println("y: "+y); 
    }  
} 
```

- We must resort to storing one of these variables within another variable. 

- So, we can introduce another temporary variable into the program, but we will not assign it any value, and only declare it as a variable; this can be done by adding `=null` after the variable or just simply putting `;` after the variable and leaving it at that.  

- The console will display: 
 
    ```
    x: Kool-Aid 
    y: water 
    ```

- The steps taking place in this program is simple; 

    1. Value of variable `x` is stored in the variable `temp`. 

    2. Value of variable `y` is stored in the variable `x`. 

    3. Value of the variable `temp` is stored in the variable `y`. 

- In summary, if in the programming language you are choosing there is no specific function to switch variables, you can achieve this manually by introducing a new empty variable to temporarily store the value of another variable.  
- This is done using 'scanner', which is usually included in your Java utility pack of your library; this class has to be imported before being able to use it.

# Scanner Class

```java
import java.util.Scanner; 
```

- This program imports the Scanner class to your program from your Java utilities package in your library. 

```java
package testingpackage; 
import java.util.Scanner; 

public class Main { 

    public static void main(String[] args) { 

        Scanner scanner = new Scanner(System.in); 
    }  
} 
```

- To use a `Scanner`, you must create a new one and name it, for example, in this program the name of the new scanner is `scanner`. 

- In other words this statement `Scanner scanner = new Scanner(System.in);` creates a new scanner with the name `scanner`.

```java
package testingpackage; 

import java.util.Scanner; 

public class Main { 

    public static void main(String[] args) { 

        Scanner scanner = new Scanner(System.in); 

        scanner.close(); 
    }  
} 
```

- Here is a tip for best practices; always make sure to close resources (for example, here the `scanner` is a resource) after their use. 

- This is done using a statement `[resource].close();`, for in the case of this specific program, `scanner.close();`. 

---

- Scanner object has several methods for different datatypes. 

- The Scanner class in Java (from java.util) provides a range of methods for reading different types of input. Here's a breakdown:

    - `next()`: Reads the next **word/token** (up to whitespace). 

    - `nextLine()`: Reads the entire **line of input**. 

    - `nextInt()`: Reads the next token as an **int**. 

    - `nextDouble()`: Reads the next token as a **double**. 

    - `nextFloat()`: Reads the next token as a **float**. 

    - `nextLong()`: Reads the next token as a **long**. 

    - `nextShort()`: Reads the next token as a **short**. 

    - `nextByte()`: Reads the next token as a **byte**. 

    - `nextBoolean()`: Reads the next token as a **boolean**. 

## Accepting String Datatype Input

```java
import java.util.Scanner; 

public class Main { 

    public static void main(String[] args) { 

        Scanner scanner = new Scanner(System.in); 


        System.out.println("What is your name?"); 


        String name = scanner.nextLine(); 


        System.out.println("Hello "+name); 


        scanner.close(); 
    }  
} 
```

- In this program, the `System.out.println("What is your name?");` statement will print the text `What is your name?` in the console. The program will now be paused until there is user input and the enter key is pressed. 

- The `String name = scanner.nextLine();` statement will allow for the user to enter text in the next line, following the previous `What is your name?`, and this text will be assigned as string datatype value for the variable `name`.

- The `scanner` in the statement `String name = scanner.nextLine();` is the name of the `Scanner`, which was previously named in the statement `Scanner scanner = new Scanner(System.in);`. 

- The statement `System.out.println("Hello "+name);` will then carry out string concatenation between the text within the quotation marks and the variable. *For example*, if the user input was `Sukuna`, after the user presses enter, the console will then display `Hello Sukuna`.  

## Accepting Integer Datatype Input

```java
import java.util.Scanner; 

public class Main { 

    public static void main(String[] args) { 

        Scanner scanner = new Scanner(System.in); 


        System.out.println("What is your name?"); 

        String name = scanner.nextLine(); 

        System.out.println("How old are you?"); 

        int age = scanner.nextInt(); 

        
        System.out.println("Hello "+name); 

        System.out.println("You are "+age+" years old"); 

    }  
} 
```
- In this program, the `System.out.println("What is your name?");` statement will display the text `What is your name?` in the console.  

- The `String name = scanner.nextLine();` statement will allow for the user to input text (technically a response to the question) in the following line; this text will be assigned to the variable `name` as a string datatype.

- Next, the `System.out.println("How old are you?");` statement will display the text `How old are you?` in the console.  

- The `int age = scanner.nextInt();` statement will then allow for the user to input text in the following line; this input will be assigned to the variable `age` as an integer datatype. 

- The `System.out.println("Hello "+name);` and `System.out.println("You are "+age+" years old");` statements will then carry out string concatenation between `Hello ` and the value stored in the variable `name`; then string concatenation between `You are `, the value stored in the variable `age` and ` years old` and will display the final result; *for example*, if the user input was `Sukuna` for the first question (`What is your name?`) and 20 to the next question (`How old are you?`)… 

    ```
    What is your name? 
    Sukuna 
    How old are you? 
    20 
    ```

… the console will display: 

    ```
    Hello Sukuna 
    You are 20 years old 
    ```

```java
package testingpackage; 

import java.util.Scanner; 

public class Main { 

    public static void main(String[] args) { 

        Scanner scanner = new Scanner(System.in); 

        
        System.out.println("What is your name?"); 

        String name = scanner.nextLine(); 

        System.out.println("How old are you?"); 

        int age = scanner.nextInt(); 

        
        System.out.println("Hello "+name); 

        System.out.println("You are "+age+" years old"); 

        
        scanner.close(); 
    }  
} 
```

- If you were to proceed with the input as follows:  

    ```
    What is your name? 
    Sukuna 
    How old are you? 
    20.9 
    ```

… the console will display an error message: 

    ```
    Exception in thread "main" java.util.InputMismatchException 
    at java.base/java.util.Scanner.throwFor(Scanner.java:947) 
    at java.base/java.util.Scanner.next(Scanner.java:1602) 
    at java.base/java.util.Scanner.nextInt(Scanner.java:2267) 
    at java.base/java.util.Scanner.nextInt(Scanner.java:2221) 
    at MyFirstProgram/testingpackage.Main.main(Main.java:13) 
    ```

- This is because `20.9` is a decimal and falls suitable under the variable type `float`, not `integer`, and the user input excepted by the statement `int age = scanner.nextInt();` for the variable `age` is considered as an integer, so inputting a decimal prompts the error message. 

## Accepting Double Datatype Input

- This is done using the `.nextDouble();` method of scanners; *for example*, `double gpa = scanner.nextDouble();`. 

```java
package testingpackage; 

import java.util.Scanner; 

public class Main { 

    public static void main(String[] args) { 

        Scanner scanner = new Scanner(System.in); 

        
        System.out.print("What is your name? "); 

        String name = scanner.nextLine(); 

        
        System.out.print("How old are you? "); 

        int age = scanner.nextInt(); 

        
        System.out.print("What is your gpa: "); 

        double gpa = scanner.nextDouble(); 

        
        System.out.println("Hello "+name); 

        System.out.println("You are "+age+" years old"); 

        System.out.println("Your gpa is: " + gpa); 

        
        scanner.close(); 
    }  
} 
```

- The… 
 
    ```java
    System.out.print("What is your name? "); 

    String name = scanner.nextLine(); 


    System.out.print("How old are you? "); 

    int age = scanner.nextInt(); 
    ```

    … works similar to before.  

- *(However, there is only one slight difference compared the code before, this time instead of having "println", we have "print", meaning the user input will be on the same like as the printed text in the console.)*

- Next, the `System.out.print("What is your gpa: ");` statement will display the text `What is your gpa: ` in the console.  

- The `double gpa = scanner.nextDouble();` statement will then allow for the user to input text in the following line; this input will be assigned to the variable `gpa` as a double datatype. 

- The statements: 

    ```java
    System.out.println("Hello "+name); 
    System.out.println("You are "+age+" years old"); 
    System.out.println("Your gpa is: " + gpa);
    ```

    will then carry out string concatenation between `Hello ` and the value stored in the variable `name`,  

    then string concatenation between `You are `, the value stored in the variable `age` and ` years old`,  
 
    and then string concatenation between `Your gpa is: ` and the value stored in the variable `gpa`, displaying the final result accordingly to the user's inputs. 

 
- *For example:*  

    ```
    What is your name? Sukuna 
    How old are you? 2000 
    What is your gpa: 2.1
    ```

    … the console will display: 

    ```
    Hello Sukuna 
    You are 2000 years old 
    Your gpa is: 2.1 
    ```

## Accepting Boolean Datatype Input

```java

package testingpackage; 

import java.util.Scanner; 

public class Main { 
    public static void main(String[] args) { 
        Scanner scanner = new Scanner(System.in); 

        System.out.print("What is your name? "); 
        String name = scanner.nextLine(); 
 
        System.out.print("How old are you? "); 
        int age = scanner.nextInt(); 

        System.out.print("What is your gpa: "); 
        double gpa = scanner.nextDouble(); 

        System.out.print("Are you a student? (true/ false): "); 
        boolean isStudent = scanner.nextBoolean(); 

 
        System.out.println("Hello "+name); 
        System.out.println("You are "+age+" years old"); 
        System.out.println("Your gpa is: " + gpa); 
        System.out.println("Student: " + isStudent); 

        scanner.close(); 
    } 
} 
```

- Output + User input
    ```
    What is your name? Batman 
    How old are you? 21 
    What is your gpa: 3.9 
    Are you a student? (true/ false): true 
    ```

- Output
    ```
    Hello Batman 
    You are 21 years old 
    Your gpa is: 3.9 
    Student: true 
    ```

```java
package testingpackage; 

import java.util.Scanner; 

public class Main { 
    public static void main(String[] args) { 
        Scanner scanner = new Scanner(System.in); 

        System.out.print("What is your name? "); 
        String name = scanner.nextLine(); 

        System.out.print("How old are you? "); 
        int age = scanner.nextInt(); 

        System.out.print("What is your gpa: "); 
        double gpa = scanner.nextDouble(); 

        System.out.print("Are you a student? (true/ false): "); 
        boolean isStudent = scanner.nextBoolean(); 

        System.out.println("Hello "+name); 
        System.out.println("You are "+age+" years old"); 
        System.out.println("Your gpa is: " + gpa); 

        if(isStudent){ 
            System.out.println("You are enrolled as a student"); 
        } 
        else{ 
            System.out.println("You are NOT enrolled"); 
        } 

        scanner.close(); 
    } 
} 
```

### Version-1

- Output + User Input

    ```
    What is your name? Batman 
    How old are you? 20 
    What is your gpa: 3.5 
    Are you a student? (true/ false): true 
    ```

- Output: 

    ```
    Hello Batman 
    You are 20 years old 
    Your gpa is: 3.5 
    You are enrolled as a student 
    ```

### Version-2

- Output + User Input:

    ```
    What is your name? Batman 
    How old are you? 20 
    What is your gpa: 3.    5 
    Are you a student? (true/ false): false 
    ```

- Output: 

    ```
    Hello Batman 
    You are 20 years old 
    Your gpa is: 3.5 
    You are NOT enrolled 
    ```

## Common Problem when Accepting an Integer and a String

```java
import java.util.Scanner; 

public class Main { 
    public static void main(String[] args) { 
        Scanner scanner = new Scanner(System.in); 

        System.out.println("Enter your age: "); 
        int age = scanner.nextInt(); 

        System.out.println("Enter your favorite color: "); 
        String color = scanner.nextLine(); 

        System.out.println("You are " + age + " years old."); 
        System.out.println("You like the color " + color); 

        scanner.close(); 
    } 
} 
```

- Output + User Input:

    ```
    Enter your age:  
    21 
    Enter your favorite color:  
    ```

- Output:

    ```
    You are 21 years old. 
    You like the color 
    ```

- When the `System.out.println("Enter your age: ");` statement is executed, it displays the text `Enter your age:` in the console. 

- The `int age = scanner.nextInt();` statement allows the user to enter a number (e.g., `21`) in the next line; this number is assigned to the variable `age` as an integer. 

- However, when the user presses the `Enter` key after typing the number, a newline character (`\n`) is also added to the input buffer. The `nextInt()` method only reads the number—not the newline—so the newline stays in the buffer. 

- Next, the `String color = scanner.nextLine();` statement is meant to let the user enter a line of text (e.g., a favorite color). But instead of waiting for the user’s input, it immediately reads the leftover newline character from the buffer. 

- As a result, the variable `color` ends up holding an empty string (`""`), and the user never gets a chance to actually type in their favorite color. 

```java
import java.util.Scanner; 

public class Main { 
    public static void main(String[] args) { 
        Scanner scanner = new Scanner(System.in); 

        System.out.println("Enter your age: "); 
        int age = scanner.nextInt(); 
        scanner.nextLine(); 

        System.out.println("Enter your favorite color: "); 
        String color = scanner.nextLine(); 

        System.out.println("You are " + age + " years old."); 
        System.out.println("You like the color " + color); 

        scanner.close(); 
    } 
} 
```

- Output + User Input:

    ```
    Enter your age:  
    21 
    Enter your favorite color:  
    Black 
    ```

- Output:

    ```
    You are 21 years old. 
    You like the color Black 
    ```

- To prevent the `nextLine()`; method from reading the leftover newline character in the input buffer, we can add an extra `scanner.nextLine();` right after reading the integer. 

- This extra `scanner.nextLine();` does not store any input—it simply consumes the remaining newline character (`\n`) that was left in the buffer after the `nextLine()` statement. 

- This clears the buffer and allows the following `nextLine()` method to properly wait for and capture the user's actual text input (such as a favorite color, name, etc.). 
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
- In this program, the `System.out.println("What is your name?");` statement will display the text "What is your name?" in the console.  

 

- The "String name = scanner.nextLine();" statement will allow for the user to input text (technically a response to the question) in the following line; this text will be assigned to the variable "name" as a string datatype. (📄🔗↗) 

 

- Next, the "System.out.println("How old are you?");" statement will display the text "How old are you?" in the console.  

 

- The "int age = scanner.nextInt();" statement will then allow for the user to input text in the following line; this input will be assigned to the variable "age" as an integer datatype. 

 

- The "System.out.println("Hello "+name);" and "System.out.println("You are "+age+" years old");" statements will then carry out string concatenation between "Hello " and the value stored in the variable "name"; then string concatenation between "You are ", the value stored in the variable "age" and " years old" and will display the final result; for example, if the user input was "Sukuna" for the first question ("What is your name?") and 20 to the next question ("How old are you?")… 

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
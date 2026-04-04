[< Back to Station](../station.md)

---

# While Loops

- A *while loop* repeats a block of code as long as a condition remains `true`.

- Very useful when accepting user input, because the user might not always input something valid.

- You can choose between typical `while` loops or `do while` loops depending on whether you want to check the condition **before** or **after** entering the loop.

---

## Basic While Loop (Name Input)

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // WHILE LOOPS
        // While loop - repeats some code forever while some conditions remains true

        Scanner scanner = new Scanner(System.in);

        String name = "";

        while(name.isEmpty()){
            System.out.println("Enter your name: ");
            name = scanner.nextLine();
        }

        System.out.println("Hello " + name);

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter your name: 
    
    Enter your name: 
    
    Enter your name: 
    Bro
    ```

- Output:

    ```
    Hello Bro
    ```

- The statement `String name = "";` initializes `name` as an empty string.

- The `while(name.isEmpty())` loop keeps repeating as long as `name` is empty. Each iteration prompts the user to enter their name.

- If the user presses Enter without typing anything, `name` stays empty and the loop repeats. Once a valid name is entered, the loop exits and prints the greeting.

---

## Infinite Loops (Beware!)

```java
public class Main {

    public static void main(String[] args) {

        // WHILE LOOPS
        // Beware of infinite loops

        while(1 == 1){
            System.out.println("HELP! I'M STUCK IN A LOOP!");
        }

    }

}
```

- Output:

    ```
    HELP! I'M STUCK IN A LOOP!
    HELP! I'M STUCK IN A LOOP!
    HELP! I'M STUCK IN A LOOP!
    ...
    ```

- The condition `1 == 1` is **always** `true`, so this loop will never stop — it's an *infinite loop*.

- This will keep printing the message forever until the program is forcefully terminated. Always make sure your loop has a way to exit!

---

## Game Quit Loop

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // WHILE LOOPS

        Scanner scanner = new Scanner(System.in);

        String response = "";

        while(!response.equals("Q")){
            System.out.println("You are playing a game");
            System.out.println("Press Q to quit: ");
            response = scanner.next().toUpperCase();
        }

        System.out.println("You have quit the game");

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    You are playing a game
    Press Q to quit: 
    n
    You are playing a game
    Press Q to quit: 
    q
    ```

- Output:

    ```
    You have quit the game
    ```

- The `while(!response.equals("Q"))` loop continues as long as the user's response is **not** `"Q"`.

- The `!` (*NOT*) operator reverses the condition — `!response.equals("Q")` means "while response does NOT equal Q".

- The `.toUpperCase()` method converts the user's input to uppercase, so both `"q"` and `"Q"` will work to quit the game.

---

## Age Validation (While Loop)

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // WHILE LOOPS

        Scanner scanner = new Scanner(System.in);

        int age = 0;

        System.out.println("Enter your age: ");
        age = scanner.nextInt();

        while(age < 0){
            System.out.println("Your age can't be negative");
            System.out.println("Enter your age: ");
            age = scanner.nextInt();
        }

        System.out.println("You are " + age + " years old");

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter your age: 
    -5
    Your age can't be negative
    Enter your age: 
    -2
    Your age can't be negative
    Enter your age: 
    25
    ```

- Output:

    ```
    You are 25 years old
    ```

- The program first asks for the age **before** the loop. If the user enters a valid (non-negative) age, the `while(age < 0)` condition is `false` and the loop is **never entered**.

- If the user enters a negative number, the loop keeps asking until they provide a valid age.

---

## Age Validation (Do While Loop)

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // WHILE LOOPS

        Scanner scanner = new Scanner(System.in);

        int age = 0;

        System.out.println("Enter your age: ");
        age = scanner.nextInt();

        // DO WHILE LOOP
        // Do the code within the loop first, and then check the condition

        do{
            System.out.println("Your age can't be negative");
            System.out.println("Enter your age: ");
            age = scanner.nextInt();
        }while(age < 0);

        System.out.println("You are " + age + " years old");

        scanner.close();

    }

}
```

- In a typical `while` loop, there is a chance you may **never enter** the loop if the condition is already `false`. However with a `do while` loop, you will always execute the code inside the loop **at least once** before checking the condition.

- The `do { ... } while(condition);` structure runs the code block first, then checks whether to repeat.

---

## Number Range Validation (While Loop)

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // WHILE LOOPS

        Scanner scanner = new Scanner(System.in);

        int number = 0;

        while(number < 1 || number > 10){
            System.out.print("Enter a number between 1 - 10: ");
            number = scanner.nextInt();
        }

        System.out.println("You picked " + number);

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter a number between 1 - 10: 0
    Enter a number between 1 - 10: 15
    Enter a number between 1 - 10: 7
    ```

- Output:

    ```
    You picked 7
    ```

- The `while(number < 1 || number > 10)` condition uses the `||` (*OR*) operator — the loop continues if the number is less than `1` **or** greater than `10`.

- Since `number` starts at `0`, which is less than `1`, the loop runs immediately. It keeps asking until the user enters a number between `1` and `10`.

## Number Range Validation (Do While Loop)

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // WHILE LOOPS

        Scanner scanner = new Scanner(System.in);

        int number = 0;

        do {
            System.out.print("Enter a number between 1 - 10: ");
            number = scanner.nextInt();
        } while(number < 1 || number > 10);

        System.out.println("You picked " + number);

        scanner.close();

    }

}
```

- Output + User Input:

    ```
    Enter a number between 1 - 10: 0
    Enter a number between 1 - 10: 5
    ```

- Output:

    ```
    You picked 5
    ```

- This is the `do while` version of the same program. The loop body runs at least once, prompting the user immediately, then checks if the number is out of range.

- In this case, the `do while` approach is cleaner because we don't need to initialize `number` to a specific value that forces the loop to start — the prompt always runs at least once regardless.
# If Statements

```java
public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        int age = 25;

        if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else{
            System.out.println("You are a child!");
        }

    }

}
```

- Output:

    ```
    Your are an adult!
    ```

- The variable `age` is declared as an *integer* and assigned the value `25`.

- The `if` statement checks whether the condition `age >= 18` is true.

- If the condition is true (meaning the age is `18` or older), the program executes the code inside the first block: `System.out.println("You are an adult!");` which displays the message "You are an adult!".

- If the condition is false (meaning the age is less than `18`), the program executes the code inside the `else` block: `System.out.println("You are a child!");` which displays "You are a child!".

---

## Adding Else If

```java
public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        int age = 19;

        if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else if(age < 0){
            System.out.println("You haven't been born yet!");
        }
        else{
            System.out.println("You are a child!");
        }

    }

}
```

- Output:

    ```
    Your are an adult!
    ```

- The variable `age` is declared as an *integer* and assigned the value `19`.

- The `if` statement first checks if the condition `age >= 18` is true.

- If this condition is true, it executes the code block: `System.out.println("You are an adult!");` which prints "You are an adult!".

- If the first condition is false, the program moves to the `else if` and checks if `age < 0`.

- If `age < 0` is true, it executes: `System.out.println("You haven't been born yet!");` which prints that message.

- If neither of the above conditions are true, the `else` block runs, printing `System.out.println("You are a child!");`.

```java
public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        int age = -1;

        if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else if(age < 0){
            System.out.println("You haven't been born yet!");
        }
        else{
            System.out.println("You are a child!");
        }

    }

}
```

- Output:

    ```
    You haven't been born yet!
    ```

- The variable `age` is declared as an *integer* and assigned the value `-1`.

- The `if` statement first checks if `age >= 18`. Since `-1` is less than `18`, this condition is false.

- The program then checks the `else if` condition `age < 0`. Since `-1` is less than `0`, this condition is true.

```java
public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        int age = 10;

        if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else if(age < 0){
            System.out.println("You haven't been born yet!");
        }
        else{
            System.out.println("You are a child!");
        }

    }

}
```

- Output:

    ```
    You are a child!
    ```

- The variable `age` is declared as an *integer* and assigned the value `10`.

- The `if` statement first checks if `age >= 18`. Since `10` is less than `18`, this condition is false.

- The program then checks the `else if` condition `age < 0`. Since `10` is not less than `0`, this condition is also false.

- Since none of the conditions are true, the `else` block runs, printing "You are a child!".

---

## Multiple Else If Conditions

```java
public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        int age = 0;

        if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else if(age < 0){
            System.out.println("You haven't been born yet!");
        }
        else if(age == 0){
            System.out.println("You are a baby!");
        }
        else{
            System.out.println("You are a child!");
        }

    }

}
```

- Output:

    ```
    You are a baby!
    ```

- The program declares an *integer variable* `age` and assigns it the value `0`.

- The `if` statement checks if `age` is greater than or equal to `18`; if true, it prints "Your are an adult!".

- The `else if` statement checks if `age` is less than `0`; if true, it prints "You haven't been born yet!".

- The next `else if` statement checks if `age` is exactly `0`; if true, it prints "You are a baby!".

- If none of the above conditions are true, the final `else` block runs, printing "You are a child!".

- In this case, since `age` is `0`, the program will print "You are a baby!".

---

## Order of Conditions Matters

```java
public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        int age = 70;

        if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else if(age <=65){
            System.out.println("You are a senior!");
        }
        else if(age < 0){
            System.out.println("You haven't been born yet!");
        }
        else if(age == 0){
            System.out.println("You are a baby!");
        }
        else{
            System.out.println("You are a child!");
        }

    }

}
```

- Output:

    ```
    Your are an adult!
    ```

- The program declares an *integer variable* `age` and assigns it the value `70`.

- The `if` statement first checks if `age >= 18`; since `70` is greater than `18`, this condition is true, so it prints "Your are an adult!".

- Because the first condition is true, the rest of the `else if` and `else` blocks are skipped — meaning it never reaches the check for seniors (`age <= 65`).

- Therefore, even though `age` is `70` (which you might want to consider a senior), the program prints "Your are an adult!" because of the order of conditions.

- To fix this, you should check for seniors before the adult check, or change the conditions to cover all age ranges properly.

```java
public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        int age = 70;

        if(age >=65){
            System.out.println("You are a senior!");
        }
        else if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else if(age < 0){
            System.out.println("You haven't been born yet!");
        }
        else if(age == 0){
            System.out.println("You are a baby!");
        }
        else{
            System.out.println("You are a child!");
        }

    }

}
```

- Output:

    ```
    You are a senior!
    ```

- The statement `int age = 70;` assigns the value `70` to the variable `age` as an *integer* datatype.

- The `if(age >= 65)` condition checks if the value stored in `age` is greater than or equal to `65`. Since `age` is `70`, this condition is true.

- Because the first condition is true, the code inside this block `System.out.println("You are a senior!");` executes and prints "You are a senior!" in the console.

- Since the first condition was true, the rest of the `else if` and `else` blocks are skipped and not checked.

- If `age` was between `18` and `64`, the program would print "Your are an adult!".

- If `age` was less than `0`, the program would print "You haven't been born yet!".

- If `age` was exactly `0`, the program would print "You are a baby!".

- For all other cases (ages between `1` and `17`), the program would print "You are a child!".

---

## If Statement With User Input

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // if statement = performs a block of code if its condition is true

        Scanner scanner = new Scanner(System.in);

        int age;

        System.out.print("Enter your age: ");
        age = scanner.nextInt();

        if(age >=65){
            System.out.println("You are a senior!");
        }
        else if(age >= 18){
            System.out.println("Your are an adult!");
        }
        else if(age < 0){
            System.out.println("You haven't been born yet!");
        }
        else if(age == 0){
            System.out.println("You are a baby!");
        }
        else{
            System.out.println("You are a child!");
        }

        scanner.close();

    }

}
```

- The program asks the user to enter their age using the `Scanner`.

- It reads the age as an *integer* with `scanner.nextInt()`.

- Then it checks the age using `if`-`else` conditions in this order:
    - If `age` is `65` or more, prints: "You are a senior!"
    - Else if `age` is `18` or more, prints: "Your are an adult!"
    - Else if `age` is less than `0`, prints: "You haven't been born yet!"
    - Else if `age` is exactly `0`, prints: "You are a baby!"
    - Otherwise (ages `1` to `17`), prints: "You are a child!"

- Finally, it closes the `scanner` to free resources.

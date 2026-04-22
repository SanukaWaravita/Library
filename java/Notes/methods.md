[< Back to Station](../station.md)

---

# Methods

- A *method* is a block of reusable code that is executed when called.

- Methods cannot see inside of each other — they are unfamiliar with variables declared within other methods.

- When calling a method from another method that has the keyword `static`, that method must also contain the keyword `static`.

---

## Basic Method

```java
public class Main {

    public static void main(String[] args){

        happyBirthday();

    }

    static void happyBirthday(){
        System.out.println("Happy Birthday to you!");
        System.out.println("Happy Birthday dear you!");
        System.out.println("You are x years old!");
        System.out.println("Happy Birthday to you!\n");
    }

}
```

- Output:

    ```
    Happy Birthday to you!
    Happy Birthday dear you!
    You are x years old!
    Happy Birthday to you!
    ```

- The `happyBirthday()` method is defined **outside** of the `main` method using `static void`.

- `void` means the method does not return any value — it just executes the code inside it.

- The statement `happyBirthday();` in `main` calls the method, which prints the birthday message.

## Calling a Method Multiple Times

```java
public class Main {

    public static void main(String[] args){

        happyBirthday();
        happyBirthday();
        happyBirthday();

    }

    static void happyBirthday(){
        System.out.println("Happy Birthday to you!");
        System.out.println("Happy Birthday dear you!");
        System.out.println("You are x years old!");
        System.out.println("Happy Birthday to you!\n");
    }

}
```

- Output:

    ```
    Happy Birthday to you!
    Happy Birthday dear you!
    You are x years old!
    Happy Birthday to you!

    Happy Birthday to you!
    Happy Birthday dear you!
    You are x years old!
    Happy Birthday to you!

    Happy Birthday to you!
    Happy Birthday dear you!
    You are x years old!
    Happy Birthday to you!
    ```

- Since we call `happyBirthday()` three times, the method's code block executes three times. This is the power of methods — write once, reuse as many times as you need.

---

## Methods Can't See Other Methods' Variables

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args){

        String name = "Bro";
        int age = 17;

        happyBirthday();

    }

    static void happyBirthday(){
        System.out.println("Happy Birthday to you!");
        System.out.printf("Happy Birthday dear %s!", name);
        System.out.println("You are x years old!");
        System.out.println("Happy Birthday to you!\n");

        // Methods are unfamiliar with variables declared within other methods
    }

}
```

- Output:

    ```
    java: cannot find symbol
      symbol:   variable name
      location: class Main
    ```

- This causes a **compile error** because the `happyBirthday()` method tries to use the variable `name`, which was declared inside `main`. Methods cannot access variables from other methods.

---

## Passing Arguments and Parameters

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args){

        String name = "Bro";
        int age = 17;

        happyBirthday(name); // Argument

    }

    static void happyBirthday(String name){ // Parameter
        System.out.println("Happy Birthday to you!");
        System.out.printf("Happy Birthday dear %s!", name);
        System.out.println("You are x years old!");
        System.out.println("Happy Birthday to you!\n");
    }

}
```

- Output:

    ```
    Happy Birthday to you!
    Happy Birthday dear Bro!You are x years old!
    Happy Birthday to you!
    ```

- You can pass variables from one method to another by passing them as **arguments** when calling the method.

- The method being called will receive these variables as **parameters**.

- Here, `name` is passed as an *argument* in `happyBirthday(name);`, and the method receives it as a *parameter* `String name`.

## Passing Multiple Arguments

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args){

        String name = "Bro";
        int age = 17;

        happyBirthday(name, age); // Arguments

    }

    static void happyBirthday(String name, int age){ // Parameters
        System.out.println("Happy Birthday to you!");
        System.out.printf("Happy Birthday dear %s!\n", name);
        System.out.printf("You are %d years old!\n", age);
        System.out.println("Happy Birthday to you!\n");
    }

}
```

- Output:

    ```
    Happy Birthday to you!
    Happy Birthday dear Bro!
    You are 17 years old!
    Happy Birthday to you!
    ```

- The set of *arguments* and set of *parameters* must be equal — both in number and in order.

## Parameter Names Don't Have to Match

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args){

        String name = "Bro";
        int age = 17;

        happyBirthday(name, age); // Argument

    }

    static void happyBirthday(String birthdayBoy, int age){ // Parameters
        System.out.println("Happy Birthday to you!");
        System.out.printf("Happy Birthday dear %s!\n", birthdayBoy);
        System.out.printf("You are %d years old!\n", age);
        System.out.println("Happy Birthday to you!\n");
    }

}
```

- Output:

    ```
    Happy Birthday to you!
    Happy Birthday dear Bro!
    You are 17 years old!
    Happy Birthday to you!
    ```

- The argument `name` is passed to the parameter `birthdayBoy` — this works because the **value** is passed, not the variable name itself.

- Make sure the **order** of arguments and parameters is correct. The first argument maps to the first parameter, the second to the second, and so on.

---

# Return Values

## Returning a Double

```java
public class Main {

    public static void main(String[] args) {

        double result = square(3);
        System.out.println(result);

        // OR

        System.out.println(square(3));

    }

    static double square(double number){
        return number * number;
    }

}
```

- Output:

    ```
    9.0
    9.0
    ```

- The method `static double square(double number)` uses `double` instead of `void` as the *return type* — this means it **returns a value** of type `double`.

- The `return number * number;` statement sends the result back to wherever the method was called.

- You can store the return value in a variable (`double result = square(3);`) or use it directly inside a `System.out.println()`.

## Returning a String

```java
public class Main {

    public static void main(String[] args) {

        String fullName = getFullName("Spongebob", "Squarepants");
        System.out.println(fullName);

    }

    static String getFullName(String first, String last){
        return first + " " + last;
    }

}
```

- Output:

    ```
    Spongebob Squarepants
    ```

- The method `getFullName` takes two `String` parameters and returns them concatenated with a space in between.

- The return type is `String`, so the method sends back a `String` value that we store in `fullName`.

## Returning a Boolean

```java
public class Main {

    public static void main(String[] args) {

        int age = 21;

        if(ageCheck(age)){
            System.out.println("You may sign up!");
        }
        else{
            System.out.println("You must be 18+ to sign up");
        }

    }

    static boolean ageCheck(int age){
        if(age >= 18){
            return true;
        }
        else{
            return false;
        }
    }

}
```

- Output:

    ```
    You may sign up!
    ```

- The method `ageCheck` has a return type of `boolean` — it returns `true` if `age` is `18` or older, and `false` otherwise.

- Since `age` is `21`, the method returns `true`, which makes the `if(ageCheck(age))` condition `true`, and "You may sign up!" is printed.

- Methods that return *boolean* values are very useful inside `if` statements for making decisions.
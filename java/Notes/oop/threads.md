[< Back to Station](../../station.md)

---

# Threads

- *Threads* allow a program to run multiple tasks simultaneously.

- They help improve performance with time-consuming operations such as file I/O, network communications, or any background tasks.

- There are two ways to create a thread in Java:
    1. **Extend the `Thread` class** — simpler, but limited to single inheritance.
    2. **Implement the `Runnable` interface** — the better approach, since a class can implement multiple interfaces.

---

# Creating a Thread With the Runnable Interface

Below is a program that gives the user 5 seconds to enter their name. A *daemon thread* runs in the background counting down, while the *main thread* waits for input.

## The MyRunnable Class

```java
public class MyRunnable implements Runnable {

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {

            try {
                Thread.sleep(1000);
            }
            catch (InterruptedException e) {
                System.out.println("Thread was interrupted.");
            }

            if (i == 5) {
                System.out.println("Time's up!");
                System.exit(0);
            }
        }
    }
}
```

- The class `MyRunnable` implements the `Runnable` interface, which requires you to override the `run()` method. Any code you want to execute on a separate thread goes inside this method.

- The `for` loop runs 5 times, with `i` going from `1` to `5`.

- The statement `Thread.sleep(1000)` pauses the thread for 1000 milliseconds (1 second) on each iteration. This is wrapped in a `try`/`catch` block because `Thread.sleep()` can throw an `InterruptedException`.

- The `if (i == 5)` check runs on the final iteration. It prints `"Time's up!"` and then calls `System.exit(0)`, which **terminates the entire program immediately**.

---

## The Main Class

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        MyRunnable myRunnable = new MyRunnable();

        Thread thread = new Thread(myRunnable);

        thread.setDaemon(true);

        thread.start();

        System.out.println("You have 5 seconds to enter your name!");
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello " + name);

        scanner.close();
    }
}
```

- The statement `Scanner scanner = new Scanner(System.in)` creates a `Scanner` object to read user input from the console.

- The statement `MyRunnable myRunnable = new MyRunnable()` creates an instance of our `MyRunnable` class.

- The statement `Thread thread = new Thread(myRunnable)` wraps the `MyRunnable` instance inside a `Thread` object. This is how you pass a `Runnable` to a thread.

- The statement `thread.setDaemon(true)` marks the thread as a *daemon thread*. A **daemon thread** runs in the background and does **not** prevent the program from exiting. If all remaining threads are daemon threads, the JVM will shut down.

- The statement `thread.start()` begins executing the `run()` method of `MyRunnable` on a separate thread. From this point, two threads are running at the same time: the **main thread** and the **daemon thread**.

- The main thread then prints `"You have 5 seconds to enter your name!"` and waits for user input with `scanner.nextLine()`.

- If the user enters their name in time, the statement `System.out.println("Hello " + name)` prints a greeting, and the program finishes normally. Since the background thread is a daemon, it does not keep the program alive.

---

## How the Program Works

1. `"You have 5 seconds to enter your name!"` is printed.
2. `"Enter your name: "` is printed.
3. The main thread waits for user input (the `Scanner` blocks until the user types something and presses Enter).
4. Meanwhile, the daemon thread starts running in the background, looping 5 times with a 1-second pause on each iteration.
5. After 5 seconds, if the user has still not entered their name, the daemon thread prints `"Time's up!"` and calls `System.exit(0)`, which ends the entire program immediately.
6. If the user does enter their name before time runs out, the main thread continues and prints `"Hello <name>"`. The program finishes normally, and the daemon thread is terminated automatically.

- Output + User Input (if input is entered in time):

    ```
    You have 5 seconds to enter your name!
    Enter your name: Sanuka
    Hello Sanuka
    ```

- Output (if time runs out):

    ```
    You have 5 seconds to enter your name!
    Enter your name: Time's up!
    ```

---

- **Note:** Any code you want to run on a separate thread should be placed within the overridden `run()` method of a class that implements the `Runnable` interface.

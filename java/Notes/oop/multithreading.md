# Multithreading

Enables a program to run multiple *threads* concurrently. A *thread* is a set of instructions that run independently. This is useful for background tasks or time-consuming operations.

---

# Basic Multithreading

```java
public class MyRunnable implements Runnable {

    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            try {
                Thread.sleep(1000);
                System.out.println(Thread.currentThread().getName() + " " + i);
            } catch (InterruptedException e) {
                System.out.println("Thread was interrupted");
            }
        }
    }
}
```

```java
public class Main {

    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable());
        Thread thread2 = new Thread(new MyRunnable());

        thread1.start();
        thread2.start();
    }
}
```

- Output:

    ```
    Thread-0 1
    Thread-1 1
    Thread-1 2
    Thread-0 2
    Thread-1 3
    Thread-0 3
    Thread-1 4
    Thread-0 4
    Thread-1 5
    Thread-0 5

    Process finished with exit code 0
    ```

- The `MyRunnable` class implements the `Runnable` *interface*, which requires us to override the `run()` method. This method contains the code that will execute on the new thread.

- The `Thread.sleep(1000)` statement pauses the current thread for **1000 milliseconds** (1 second). Because it can be interrupted, it must be wrapped in a `try`/`catch` block that handles `InterruptedException`.

- The statement `System.out.println(Thread.currentThread().getName() + " " + i)` prints the name of the current thread (e.g., `Thread-0` or `Thread-1`) along with the loop counter `i`.

- In `main`, we create two `Thread` objects by passing a `new MyRunnable()` instance to each. The expression `new Thread(new MyRunnable())` creates an *anonymous object* of the `MyRunnable` class and passes it to the `Thread` constructor.

- Calling `thread1.start()` and `thread2.start()` begins executing both threads **concurrently**. The output is *interleaved* because both threads run at the same time, and the order depends on the thread scheduler.

---

# Passing Data to a Thread

```java
public class MyRunnable implements Runnable {

    private final String text;

    MyRunnable(String text) {
        this.text = text;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            try {
                Thread.sleep(1000);
                System.out.println(text);
            } catch (InterruptedException e) {
                System.out.println("Thread was interrupted");
            }
        }
    }
}
```

```java
public class Main {

    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable("Ping"));
        Thread thread2 = new Thread(new MyRunnable("Pong"));

        thread1.start();
        thread2.start();
    }
}
```

- Output:

    ```
    Pong
    Ping
    Pong
    Ping
    Ping
    Pong
    Pong
    Ping
    Pong
    Ping

    Process finished with exit code 0
    ```

- The `private final String text` field stores the text that the thread will print. It is marked `final` so it cannot be changed after construction, which is a good practice for data shared across threads.

- The constructor `MyRunnable(String text)` accepts a `String` parameter and assigns it to `this.text`. This lets us customize what each thread prints.

- In `main`, `thread1` is created with `"Ping"` and `thread2` is created with `"Pong"`. Each thread prints its own text five times, and the output is interleaved because both threads run concurrently.

---

# Joining Threads

```java
public class Main {

    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable("Ping"));
        Thread thread2 = new Thread(new MyRunnable("Pong"));

        System.out.println("GAME START!");

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread was interrupted!");
        }

        System.out.println("GAME OVER!");
    }
}
```

- Output:

    ```
    GAME START!
    Ping
    Pong
    Pong
    Ping
    Pong
    Ping
    Pong
    Ping
    Pong
    Ping
    GAME OVER!
    ```

- The `thread1.join()` statement tells the **main thread** to pause and wait until `thread1` has finished executing. Similarly, `thread2.join()` waits for `thread2` to finish.

- Because `join()` can throw an `InterruptedException`, both calls are wrapped in a `try`/`catch` block.

- The statement `System.out.println("GAME START!")` runs **before** the threads start, and `System.out.println("GAME OVER!")` runs **after** both threads have completed, thanks to the `join()` calls. Without `join()`, `"GAME OVER!"` could print before the threads finish.

- The `join()` method is essential when you need to **guarantee** that certain code runs only after all threads have completed their work.
[< Back to Station](../../station.md)

---

# Timer Tasks

- `Timer` is a class that schedules tasks to be executed at specific times or periodically.
- It is useful for sending notifications, scheduled updates, and repetitive actions.
- `TimerTask` represents the *task* that will be executed by the `Timer`.
- You extend the `TimerTask` class to define your task, and `@Override` the `run()` method.

---

## Scheduling a Task With a Delay

```java
import java.util.Timer;
import java.util.TimerTask;

public class Main {

    public static void main(String[] args) {

        Timer timer = new Timer();

        TimerTask task = new TimerTask() {

            @Override
            public void run() {
                System.out.println("Hello!");
            }

        };

        timer.schedule(task, 3000);
    }
}
```

- Output:

    ```
    Hello!
    ```

- An *anonymous class* is used here to create the `TimerTask` object inline.
- The statement `Timer timer = new Timer();` creates a new `Timer` object called `timer`.
- The statement `TimerTask task = new TimerTask() { ... };` creates a new `TimerTask` *anonymous class* that overrides the `run()` method to print `"Hello!"`.
- The statement `timer.schedule(task, 3000);` schedules the task to run after `3000` milliseconds (3 seconds).
- The parameters of the `schedule()` method are as follows: `.schedule(TimerTask, delay, period)`.
    - **TimerTask** -- the task to execute.
    - **delay** -- the delay in milliseconds before the task is first executed.
    - **period** -- *(optional)* the interval in milliseconds between repeated executions.

---

## Repeating a Task Immediately

```java
import java.util.Timer;
import java.util.TimerTask;

public class Main {

    public static void main(String[] args) {

        Timer timer = new Timer();

        TimerTask task = new TimerTask() {

            @Override
            public void run() {
                System.out.println("Hello!");
            }

        };

        timer.schedule(task, 0, 1000);
    }
}
```

- Output:

    ```
    Hello!
    Hello!
    Hello!
    ...
    ```

- The statement `timer.schedule(task, 0, 1000);` schedules the task with a delay of `0` milliseconds and a period of `1000` milliseconds.
- This means the task executes **immediately** and then repeats every `1000` milliseconds (1 second).

---

## Repeating a Task After a Delay

```java
import java.util.Timer;
import java.util.TimerTask;

public class Main {

    public static void main(String[] args) {

        Timer timer = new Timer();

        TimerTask task = new TimerTask() {

            @Override
            public void run() {
                System.out.println("Hello!");
            }

        };

        timer.schedule(task, 3000, 1000);
    }
}
```

- Output:

    ```
    Hello!
    Hello!
    Hello!
    ...
    ```

- The statement `timer.schedule(task, 3000, 1000);` schedules the task with a delay of `3000` milliseconds and a period of `1000` milliseconds.
- This means the program waits `3000` milliseconds (3 seconds), prints `"Hello!"`, then waits `1000` milliseconds (1 second), prints `"Hello!"`, waits `1000` milliseconds, prints `"Hello!"`, and so on.

---

## Countdown With cancel()

```java
import java.util.Timer;
import java.util.TimerTask;

public class Main {

    public static void main(String[] args) {

        Timer timer = new Timer();

        TimerTask task = new TimerTask() {

            int count = 3;

            @Override
            public void run() {
                System.out.println("Hello!");
                count--;

                if (count <= 0) {
                    System.out.println("TASK COMPLETE!");
                    timer.cancel();
                }
            }

        };

        timer.schedule(task, 3000, 1000);
    }
}
```

- Output:

    ```
    Hello!
    Hello!
    Hello!
    TASK COMPLETE!
    ```

- The statement `int count = 3;` declares an *instance variable* `count` inside the anonymous `TimerTask` class and sets it to `3`.
- The statement `timer.cancel();` calls the `cancel()` method on the `Timer` object to terminate the scheduled task.
- Here is the step-by-step logic of this program:

1. After `3000` milliseconds (3 seconds), `"Hello!"` is printed.
2. `count` decreases from `3` to `2` because `count--` is executed after printing `"Hello!"`.
3. After `1000` milliseconds (1 second), `"Hello!"` is printed again.
4. `count` decreases from `2` to `1` because `count--` is executed after printing `"Hello!"`.
5. After `1000` milliseconds, `"Hello!"` is printed again.
6. `count` decreases from `1` to `0` because `count--` is executed after printing `"Hello!"`.
7. The `count` value of `0` now fulfills the `if` statement's condition `if (count <= 0)`.
8. `"TASK COMPLETE!"` is printed, and `timer.cancel()` is called, terminating the task.

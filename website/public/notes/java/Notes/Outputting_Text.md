```java
public class Main {

    public static void main(String[] args) {
        
        System.out.print("I love pizza");
    }	

}
```

- To print something, the ''`System.out.print("");`" must be used.

- The text to be output must be within '("[TEXT]")'.

- Here, in the console, the phrase "I love pizza" will be displayed.


```java
public class Main {

    public static void main(String[] args) {
        
        System.out.print("I love pizza");
        System.out.print("It's really good!");
    }	

}
```

- Here, the console will display `I love pizzaIt's really good!`.

- This is because after printing the first statement, `I love pizza`, the cursor does not move to a new line to print the next, it prints the second statement, `It's really good`, on the same line as the first. 


```java
public class Main {

    public static void main(String[] args) {

        System.out.println("I love pizza");
        System.out.println("It's really good!");
    }	

}
```

- Printing the two statement on two different lines requires the use of a `println` statement, short for "print line".

- Now, the console will display:

```
I love pizza
It's really good!
```

- Essentially, `println` moves the cursor to a new line before printing the text.



```java
public class Main {

    public static void main(String[] args) {

        System.out.print("I love pizza\n");
        System.out.print("It's really good!");
    }	

}
```

- Another way of doing the above is using an "escape sequence", `\n`, for a new line character. 

- An escape sequence is a character followed by a "\".

- The escape sequence is added within the string of text `I love pizza\n` of the first line, `I love pizza\n`.

- The console will display:

```
I love pizza
It's really good!
```

- Also in other words, use of an escape sequence, for example `\n`, has the same effect as a `println` statement.


```java
public class Main {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        
        System.out.println("I love pizza\n");
        System.out.println("It's really good!");
    }	

}
```

- Here, the console will display: 

```
I love pizza
It's really good!
```

- This is because, technically, the line of output is being printed, `I love pizza`, then a new line is added because of the escape sequence `\n`, and then cursor is moved to a new line because of `println`. 
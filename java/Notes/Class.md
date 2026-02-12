```java
public class Main {

}
```
- After creating a Java Project folder in your preferable IDE (here I'll be using EclipseIDE), you need to add what is known as a `class` to this project.

- Class is a collection of related code. 

- After adding a new class through your IDE, a new file will appear in your projects folder with the name of the class your created.

- For example, here, the name of the class is `Main`, so the name of the file created will also be 'Main.java'.

- Anything within the curly braces belongs to the `Main` class and is contained within. 

- Running only just this code will result in an error:

```
Main method not found in class testingpackage.Main, please define the main method as:
   public static void main(String[] args)
```

- This is error is because of the absence of the `main method` within the class `Main`.

```java
public class Main {

    public static void main(String[] args) {
        
    }

}
```

- `public static void main(String[] args) {}` is called the 'main method'

- Running this code in your IDE will open the console, but will not give any output. 

- Think of the main method as a **magical spell** or **incantation** that we have to say in order to get the program to run 😅😂. 

- Within the main method, the code that is placed first will be executed first; in other words, the code will be executed in their respective order. 
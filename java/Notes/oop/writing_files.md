# Writing Files

There are 4 popular options for writing files in Java:

- `FileWriter` - Good for small or medium-sized text files.
- `BufferedWriter` - Better performance for large amounts of text.
- `PrintWriter` - Best for structured data, like reports or logs.
- `FileOutputStream` - Best for binary files (e.g. images, audio files).

---

# FileWriter With a Relative File Path

```java
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        try (FileWriter writer = new FileWriter("test.txt");) {

            writer.write("I like fries!");
            System.out.println("File has been written.");

        }
        catch (FileNotFoundException e) {

            System.out.println("Could not locate the file!");

        }
        catch (IOException e) {

            System.out.println("Could not write file");

        }

    }

}
```

- The statement `FileWriter writer = new FileWriter("test.txt")` creates a new `FileWriter` object that will write to a file called `test.txt`.

- The file path used here, `"test.txt"`, is called a *relative file path*. This means the file will be created relative to the project's working directory.

- The `writer.write("I like fries!")` statement writes the string `"I like fries!"` into the file.

- The `System.out.println("File has been written.")` statement prints a confirmation message to the console after the file is successfully written.

- The `try-with-resources` block (the `try(...)` syntax) automatically closes the `FileWriter` when the block finishes, so you do not need to manually call `writer.close()`.

- The `catch (FileNotFoundException e)` block handles the case where the specified file path cannot be found or created.

- The `catch (IOException e)` block handles any other input/output errors that may occur during the writing process.

---

# FileWriter With an Absolute File Path

```java
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        try (FileWriter writer = new FileWriter("D:\\test.txt");) {

            writer.write("I like fries!");
            System.out.println("File has been written.");

        }
        catch (FileNotFoundException e) {

            System.out.println("Could not locate the file!");

        }
        catch (IOException e) {

            System.out.println("Could not write file");

        }

    }

}
```

- Console:

    ```
    File has been written.
    ```

- File content (test.txt):

    ```
    I like fries!
    ```

- The file path used here, `"D:\\test.txt"`, is called an *absolute file path*. This specifies the exact location on the file system where the file will be written.

- The double backslash `\\` is needed because the backslash is an *escape character* in Java, so `\\` represents a single `\` in the actual path.

---

# Handling an Invalid File Path

```java
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        try (FileWriter writer = new FileWriter("F:\\test.txt");) {

            writer.write("I like fries!");
            System.out.println("File has been written.");

        }
        catch (FileNotFoundException e) {

            System.out.println("Could not locate the file!");

        }
        catch (IOException e) {

            System.out.println("Could not write file");

        }

    }

}
```

- Output:

    ```
    Could not locate the file!
    ```

- The absolute file path `"F:\\test.txt"` points to a drive (`F:\`) that does not exist on this machine, so a `FileNotFoundException` is thrown.

- The `catch (FileNotFoundException e)` block catches this exception and prints the error message `"Could not locate the file!"` to the console instead of crashing the program.

---

# Writing Multi-Line Content

```java
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        try (FileWriter writer = new FileWriter("text.txt");) {

            writer.write("I like fries!\nIt's really good!");
            System.out.println("File has been written.");

        }
        catch (FileNotFoundException e) {

            System.out.println("Could not locate the file!");

        }
        catch (IOException e) {

            System.out.println("Could not write file");

        }

    }

}
```

- Console:

    ```
    File has been written.
    ```

- File content (text.txt):

    ```
    I like fries!
    It's really good!
    ```

- The `\n` inside the string `"I like fries!\nIt's really good!"` is a *newline escape sequence* that causes the text after it to be written on a new line in the file.

---

# Using Variables for File Path and Content

```java
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        String filePath = "text.txt";
        String textContent = "I like fries!\nIt's really good!\nBuy me pizza!";

        try (FileWriter writer = new FileWriter(filePath);) {

            writer.write(textContent);
            System.out.println("File has been written.");

        }
        catch (FileNotFoundException e) {

            System.out.println("Could not locate the file!");

        }
        catch (IOException e) {

            System.out.println("Could not write file");

        }

    }

}
```

- Console:

    ```
    File has been written.
    ```

- File content (text.txt):

    ```
    I like fries!
    It's really good!
    Buy me pizza!
    ```

- The statement `String filePath = "text.txt"` stores the file path in a *String variable* called `filePath`.

- The statement `String textContent = "I like fries!\nIt's really good!\nBuy me pizza!"` stores the text content in a *String variable* called `textContent`.

- For better organization, you can assign the file path and file content to variables and pass those variables into `FileWriter()` and `write()` instead of hardcoding the values directly.

---

# Using Text Blocks for Multi-Line Strings

```java
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        String filePath = "text.txt";
        String textContent = """
                Roses are red,
                Violets are Blue,
                BOOTY BOOTY BOOTY,
                ROCKIN' EVERYWHERE!
                """;

        try (FileWriter writer = new FileWriter(filePath);) {

            writer.write(textContent);
            System.out.println("File has been written.");

        }
        catch (FileNotFoundException e) {

            System.out.println("Could not locate the file!");

        }
        catch (IOException e) {

            System.out.println("Could not write file");

        }

    }

}
```

- Console:

    ```
    File has been written.
    ```

- File content (text.txt):

    ```
    Roses are red,
    Violets are Blue,
    BOOTY BOOTY BOOTY,
    ROCKIN' EVERYWHERE!
    ```

- You can use *text blocks* (`"""  """`) to pass in multi-line strings to the `write()` method. This is cleaner than using `\n` for each new line.

- **Text blocks** were introduced in Java 13 (preview) and became a standard feature in Java 15. They automatically handle line breaks and strip common leading whitespace.

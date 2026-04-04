[< Back to Station](../../station.md)

---

# Reading Files

There are 3 popular options for reading files in Java:

- `BufferedReader` + `FileReader`: Best for reading *text files* line-by-line.
- `FileInputStream`: Best for *binary files* (e.g. images, audio files).
- `RandomAccessFile`: Best for reading/writing *specific portions* of a large file.

---

## BufferedReader With FileReader

```java
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        String filePath = "D:\\test.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;

            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        }
        catch (FileNotFoundException e) {
            System.out.println("Could not locate file!");
        }
        catch (IOException e) {
            System.out.println("Something went wrong!");
        }
    }
}
```

- The file `D:\test.txt` contains the following:

    ```
    Roses are red,
    Violets are Blue,
    BOOTY BOOTY BOOTY,
    ROCKIN' EVERYWHERE!
    ```

- Output:

    ```
    Roses are red,
    Violets are Blue,
    BOOTY BOOTY BOOTY,
    ROCKIN' EVERYWHERE!
    ```

- The statement `String filePath = "D:\\test.txt";` stores the *file path* as a `String`. The double backslash `\\` is needed because `\` is an escape character in Java.

- The statement `new BufferedReader(new FileReader(filePath))` creates a `FileReader` that opens the file, and wraps it in a `BufferedReader` for efficient line-by-line reading.

- This is wrapped in a **try-with-resources** block (`try (...) { }`) which automatically closes the `BufferedReader` when the block finishes, even if an exception is thrown.

- The `while ((line = reader.readLine()) != null)` loop reads one line at a time from the file. The `readLine()` method returns `null` when the end of the file is reached, which stops the loop.

- The statement `System.out.println(line);` prints each line that was read from the file.

- The first `catch` block handles a `FileNotFoundException`, which is thrown if the file at the given path does not exist.

- The second `catch` block handles a general `IOException`, which covers other issues that may occur during reading (e.g. the file being locked or a disk error).

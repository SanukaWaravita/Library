```java
public class Main { 

public static void main(String[] args) { 

// TODO Auto-generated method stub 

System.out.println("I love pizza\n"); 
System.out.println("It's really good!"); 

}  

} 
```

- This escape sequence was already looked at in previously, but anyhow, here, the console will display: 

    ```
    I love pizza 
    It's really good! 
    ```

- This is because, technically, the line of output is being printed, `I love pizza`, then a new line is added because of the escape sequence, `\n`, and then cursor is moved to a new line because of `println`.

---

```java

public class Main { 

public static void main(String[] args) { 
// TODO Auto-generated method stub 

System.out.println("\tI love pizza"); 
System.out.println("It's really good!"); 
}  

} 
```

- Here, the escape sequence used is `\t`. 

- This acts as a tab button/ adds a tab for example, here the console will display:

    ```
        I love pizza 
    It's really good! 
    ```

---

```java
public class Main { 

public static void main(String[] args) { 
// TODO Auto-generated method stub 

System.out.println(""I love pizza""); 
System.out.println("It's really good!"); 
}  

} 
```

- This way of adding quotes will not work as intended because any text that needs to be printed already has to be within quotes, and so adding another set of codes will confuse the compiler. 

---

```java
public class Main { 

public static void main(String[] args) { 
// TODO Auto-generated method stub 

System.out.println("\"I love pizza\""); 
System.out.println("It's really good!"); 
}  

} 
```

- In order to add a set of quotes to the printing text itself, the `\"[TEXT]\"` must be used.  

- The console will display:  

    ```
    "I love pizza" 
    It's really good! 
    ```

---

```java
public class Main { 

public static void main(String[] args) { 
// TODO Auto-generated method stub 

System.out.println("\I love pizza"); 
System.out.println("It's really good!"); 
}  

} 
```

- If the intention is to add a backlash ("\") to the text being printed, using a single `\` will not work, because this will also confuse the compiler, making it think you are trying to use an escape sequence.  

---

```java
public class Main { 

public static void main(String[] args) { 
// TODO Auto-generated method stub 

System.out.println("\\I love pizza"); 
System.out.println("It's really good!"); 

}  

} 
```

- To print a backslash along with the text, you must use `\\` (double backslash). 

- Now, the console will display:  

    ```
    \I love pizza 
    It's really good! 
    ```

---

```java
public class Main { 

public static void main(String[] args) { 

System.out.println("\tI love pizza"); 
System.out.println("It's really good!\n"); 
System.out.println("\"It's really good!\""); 
System.out.println("\\It's really good!"); 

}  

} 
```

- Here, the console will display:

    ```
            I love pizza 
    It's really good! 

    "It's really good!" 
    \It's really good! 
    ```

- To summarise, anything proceeding a backslash is the beginning of an '*escape sequence*'.  
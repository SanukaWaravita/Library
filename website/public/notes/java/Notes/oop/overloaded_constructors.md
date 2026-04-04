# Overloaded Constructors

- *Overloaded constructors* allow a class to have multiple constructors with **different parameter lists**.

- This enables objects to be initialized in various ways.

---

## One Parameter Constructor

```java
public class User {

    String username;
    String email;
    int age;

    User(String username){
        this.username = username;
        this.email = "Not provided";
        this.age = 0;
    }

    void Details(){
        System.out.println("Username: " + this.username);
        System.out.println("Email: " + this.email);
        System.out.println("Age: " + this.age);
    }

}
```

- A constructor does not necessarily only use arguments to set attribute values. It can also assign default values or execute other code when the constructor is automatically called.

- Here, only `username` is passed as an argument. The constructor sets `email` to `"Not provided"` and `age` to `0` as defaults.

```java
public class Main {

    public static void main(String[] args) {

        User user1 = new User("Itadori");

        user1.Details();

    }

}
```

- Output:

    ```
    Username: Itadori
    Email: Not provided
    Age: 0
    ```

- `user1` was created with only a username, so `email` and `age` use their default values.

---

## Adding a Two Parameter Constructor

```java
public class User {

    String username;
    String email;
    int age;

    User(String username){
        this.username = username;
        this.email = "Not provided";
        this.age = 0;
    }

    User(String username, String email){
        this.username = username;
        this.email = email;
        this.age = 0;
    }

    void Details(){
        System.out.println("Username: " + this.username);
        System.out.println("Email: " + this.email);
        System.out.println("Age: " + this.age);
    }

}
```

- Another constructor with a different parameter list has been added. This one accepts both `username` and `email`.

```java
public class Main {

    public static void main(String[] args) {

        User user1 = new User("Itadori");
        User user2 = new User("Jogo", "jogo@jujutsuhigh.ac.jp");

        System.out.println(user1.username);
        user1.Details();

        System.out.println();

        System.out.println(user2.username);
        user2.Details();

    }

}
```

- Output:

    ```
    Itadori
    Username: Itadori
    Email: Not provided
    Age: 0

    Jogo
    Username: Jogo
    Email: jogo@jujutsuhigh.ac.jp
    Age: 0
    ```

- `user1` was created with one argument, so Java calls the first constructor (username only, defaults for the rest).

- `user2` was created with two arguments, so Java calls the second constructor (username + email, default for age).

---

## Adding a Three Parameter Constructor

```java
public class User {

    String username;
    String email;
    int age;

    User(String username){
        this.username = username;
        this.email = "Not provided";
        this.age = 0;
    }

    User(String username, String email){
        this.username = username;
        this.email = email;
        this.age = 0;
    }

    User(String username, String email, int age){
        this.username = username;
        this.email = email;
        this.age = age;
    }

    void Details(){
        System.out.println("Username: " + this.username);
        System.out.println("Email: " + this.email);
        System.out.println("Age: " + this.age);
    }

}
```

- A third constructor has been added that accepts all three parameters: `username`, `email`, and `age`.

```java
public class Main {

    public static void main(String[] args) {

        User user1 = new User("Itadori");
        User user2 = new User("Jogo", "jogo@jjh.ac.jp");
        User user3 = new User("Gojo", "gojo@jjh.ac.jp", 29);

        System.out.println(user1.username);
        user1.Details();

        System.out.println();

        System.out.println(user2.username);
        user2.Details();

        System.out.println();

        System.out.println(user3.username);
        user3.Details();

    }

}
```

- Output:

    ```
    Itadori
    Username: Itadori
    Email: Not provided
    Age: 0

    Jogo
    Username: Jogo
    Email: jogo@jjh.ac.jp
    Age: 0

    Gojo
    Username: Gojo
    Email: gojo@jjh.ac.jp
    Age: 29
    ```

- Java determines which constructor to call based on the **number and types of arguments**:
    - `user1` passes `1` argument → calls the one-parameter constructor
    - `user2` passes `2` arguments → calls the two-parameter constructor
    - `user3` passes `3` arguments → calls the three-parameter constructor

---

## No-Parameter Constructor (Default Values)

```java
public class User {

    String username;
    String email;
    int age;

    User(){
        this.username = "Guest";
        this.email = "Not provided";
        this.age = 0;
    }

    User(String username){
        this.username = username;
        this.email = "Not provided";
        this.age = 0;
    }

    User(String username, String email){
        this.username = username;
        this.email = email;
        this.age = 0;
    }

    User(String username, String email, int age){
        this.username = username;
        this.email = email;
        this.age = age;
    }

    void Details(){
        System.out.println("Username: " + this.username);
        System.out.println("Email: " + this.email);
        System.out.println("Age: " + this.age);
    }

}
```

- A constructor **without any parameters** has been added. It assigns default values to all attributes: `"Guest"` for username, `"Not provided"` for email, and `0` for age.

```java
public class Main {

    public static void main(String[] args) {

        User user1 = new User("Itadori");
        User user2 = new User("Jogo", "jogo@jjh.ac.jp");
        User user3 = new User("Gojo", "gojo@jjh.ac.jp", 29);
        User user4 = new User();

        System.out.println(user1.username);
        user1.Details();

        System.out.println();

        System.out.println(user2.username);
        user2.Details();

        System.out.println();

        System.out.println(user3.username);
        user3.Details();

        System.out.println();

        System.out.println(user4.username);
        user4.Details();

    }

}
```

- Output:

    ```
    Itadori
    Username: Itadori
    Email: Not provided
    Age: 0

    Jogo
    Username: Jogo
    Email: jogo@jjh.ac.jp
    Age: 0

    Gojo
    Username: Gojo
    Email: gojo@jjh.ac.jp
    Age: 29

    Guest
    Username: Guest
    Email: Not provided
    Age: 0
    ```

- When an object is created without any arguments (`new User()`), the *parameterless constructor* is automatically called.

- You can set up a parameterless constructor to assign default values to attributes in the case that an object is being created without passing any arguments.

- For example, `user4` passes no arguments, so it gets the defaults: username `"Guest"`, email `"Not provided"`, and age `0`.
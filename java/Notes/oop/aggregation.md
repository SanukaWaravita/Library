# Aggregation

Aggregation represents a *"has-a"* relationship between objects. One object contains another object as part of its structure, but the contained object/s can exist **independently**.

---

## The Book Class

```java
public class Book {

    String title;
    int pages;

    Book(String title, int pages) {
        this.title = title;
        this.pages = pages;
    }

    String displayInfo() {
        return this.title
                + " ("
                + this.pages
                + " pages)";
    }
}
```

- The `Book` class has two *instance variables*: `String title` and `int pages`.
- The *constructor* `Book(String title, int pages)` assigns the passed arguments to the instance variables using `this.title = title` and `this.pages = pages`.
- The `displayInfo()` method returns a `String` containing the book's title and page count in the format `"Title (X pages)"`.

---

## The Library Class

```java
public class Library {

    String name;
    int year;
    Book[] books;

    Library(String name, int year, Book[] books) {
        this.name = name;
        this.year = year;
        this.books = books;
    }

    void displayInfo() {
        System.out.println("The "
                            + this.year
                            + " "
                            + this.name);
        System.out.println("Books available: ");

        for (Book book : books) {
            System.out.println(book.displayInfo());
        }
    }
}
```

- The `Library` class has three *instance variables*: `String name`, `int year`, and `Book[] books`.
- The *constructor* `Library(String name, int year, Book[] books)` assigns the passed arguments to the instance variables.
- The `displayInfo()` method prints the library's year and name, then prints `"Books available: "`.
- An *enhanced for loop* `for (Book book : books)` iterates through every `Book` object in the `books` array and calls `book.displayInfo()` on each one, printing the result.

---

## The Main Class

```java
public class Main {

    public static void main(String[] args) {

        Book book1 = new Book("The Fellow of the Ring", 423);
        Book book2 = new Book("The Two Towers", 352);
        Book book3 = new Book("The Return of the King", 416);

        Book[] books = {book1, book2, book3};

        Library library = new Library("Great Library", 1888, books);

        library.displayInfo();
    }
}
```

- Output:

    ```
    The 1888 Great Library
    Books available: 
    The Fellow of the Ring (423 pages)
    The Two Towers (352 pages)
    The Return of the King (416 pages)
    ```

- The statements `Book book1 = new Book(...)`, `Book book2 = new Book(...)`, and `Book book3 = new Book(...)` create three `Book` objects, each with a title and page count.
- The statement `Book[] books = {book1, book2, book3}` stores all three `Book` objects in an array.
- The statement `Library library = new Library("Great Library", 1888, books)` creates a `Library` object, passing in the name, year, and the array of `Book` objects.
- The statement `library.displayInfo()` calls the `displayInfo()` method on the `library` object, which prints the library info and then loops through each `Book` to print its info.

---

## Key Concept

- The `Library` class has a reference to an array of `Book` objects (`Book[] books`). This is *aggregation* -- the `Library` **"has"** `Book` objects.
- The `Book` objects are **not dependent** on the `Library` for their existence. A `Book` can exist even if there is no `Library` object.
- When `library.displayInfo()` is called, it executes an *enhanced for loop* that calls the `displayInfo()` method available to all `Book` objects for every `Book` in the `Book[]` array.
- In simple terms, the `library` object **has** objects (`Book` objects), but those objects can live independently -- this is what makes it *aggregation* rather than *composition*.

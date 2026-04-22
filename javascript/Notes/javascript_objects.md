[< Back to Station](../station.md)

---

# JavaScript Objects

A **JavaScript object** is a *collection of related properties and/or methods*. Objects can represent real world things such as people, products, or places.

The general structure of an object is: `Object = {key:value, function()}`

---

## Creating an Object

```javascript
const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
}
```

- The statement `const person = { ... }` creates an object named `person` using *object literal notation*.

- Inside the curly braces, we define **properties** as `key:value` pairs. `firstName`, `lastName`, `age`, and `isEmployed` are the keys, and `"Spongebob"`, `"Squarepants"`, `30`, and `true` are their respective values.

- Using `const` is not strictly necessary -- you can use `let` as well -- but `const` prevents the variable from being reassigned to a different value.

---

## Accessing Properties

```javascript
const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
```

- Output:

    ```
    Spongebob
    Squarepants
    30
    true
    ```

- The statement `console.log(person.firstName)` accesses the `firstName` property of the `person` object using *dot notation* and prints its value, `"Spongebob"`.

- Similarly, `person.lastName` returns `"Squarepants"`, `person.age` returns `30`, and `person.isEmployed` returns `true`.

---

## Multiple Objects

```javascript
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
```

- Output:

    ```
    Spongebob
    Squarepants
    30
    true
    Patrick
    Star
    42
    false
    ```

- Here we create two separate objects, `person1` and `person2`, each with the same set of property keys but different values.

- `person1.firstName` returns `"Spongebob"` while `person2.firstName` returns `"Patrick"`. Each object maintains its own independent set of values.

---

## Adding Methods

A **method** is a function that is stored as a property inside an object.

```javascript
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hi! I am Patrick...")},
}

person1.sayHello();
person2.sayHello();
```

- Output:

    ```
    Hi! I am Spongebob!
    Hi! I am Patrick...
    ```

- The `sayHello` property in `person1` is defined using a *function expression*: `function(){console.log("Hi! I am Spongebob!")}`.

- The `sayHello` property in `person2` is defined using an *arrow function*: `() => {console.log("Hi! I am Patrick...")}`.

- Both syntax styles work for defining methods. You call a method using dot notation followed by parentheses, like `person1.sayHello()`.

### Adding Multiple Methods

```javascript
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: () => {console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hi! I am Patrick...")},
    eat: function(){console.log("I am eating roast beef, chicken, and pizza")}
}

person1.eat();
person2.eat();
```

- Output:

    ```
    I am eating a Krabby Patty
    I am eating roast beef, chicken, and pizza
    ```

- Here each object has two methods: `sayHello` and `eat`. The `eat` method in `person1` uses an *arrow function*, while the `eat` method in `person2` uses a *function expression*.

- We can use both **function expressions** and **arrow functions** interchangeably when defining object methods. The statement `person1.eat()` calls the `eat` method on `person1`, printing `"I am eating a Krabby Patty"`.

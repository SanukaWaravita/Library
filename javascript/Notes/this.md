[< Back to Station](../station.md)

---

# The this Keyword

`this` is a reference to the object where `this` is used. The object it refers to depends on the immediate context.

For example: `person.name = this.name` -- inside a method of `person`, `this` refers to that `person` object.

---

## Using this in Object Methods

```javascript
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();
```

- Output:

    ```
    Hi! I am Spongebob
    Spongebob is eating hamburgers
    ```

- The `this` keyword inside `person1.sayHello()` refers to the `person1` object, so `this.name` evaluates to `"Spongebob"`.
- Similarly, `this.favFood` inside `person1.eat()` evaluates to `"hamburgers"` because `this` refers to `person1`.
- Each object has its own `name` and `favFood` properties, and `this` ensures the method accesses the correct object's properties.

```javascript
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person2.sayHello();
person2.eat();
```

- Output:

    ```
    Hi! I am Patrick
    Patrick is eating pizza
    ```

- When we call `person2.sayHello()`, `this` now refers to the `person2` object, so `this.name` evaluates to `"Patrick"`.
- `person2.eat()` uses `this.favFood` which resolves to `"pizza"` because `this` points to `person2`.
- The same method code works differently depending on which object calls it -- that is the power of `this`.

---

## Arrow Functions and this (Gotcha)

```javascript
const person = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: () => {console.log(`Hi! I am ${this.name}`)},
    eat: () => {console.log(`${this.name} is eating ${this.favFood}`)}
}

person.sayHello();
person.eat();
```

- Output:

    ```
    Hi! I am 
    is eating undefined
    ```

- **Arrow functions do not have their own `this` context.** Instead, they inherit `this` from the enclosing *lexical scope*, which in this case is the `window` object (in a browser).
- Since the `window` object does not have `name` or `favFood` properties, `this.name` is empty and `this.favFood` is `undefined`.
- This is a common gotcha -- when defining methods inside an object that use `this`, always use a regular `function()` declaration instead of an arrow function `() =>`.

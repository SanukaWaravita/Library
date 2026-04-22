[< Back to Station](../station.md)

---

# Constructors

**Constructors** are *special methods* for defining the properties and methods of objects. A constructor function acts as a blueprint, allowing you to create multiple objects with the same structure without repeating code.

## Basic Constructor

```javascript
function Car(make, model, year, color)
{
    this.make = make,
    this.mode = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
```

- Output:

    ```
    Ford
    Mustang
    2024
    red
    ```

- The `function Car(make, model, year, color)` statement defines a **constructor function** called `Car` that accepts four parameters: `make`, `model`, `year`, and `color`.
- Inside the constructor, `this.make = make` assigns the value of the `make` parameter to the `make` property of the newly created object. The `this` keyword refers to the object being created.
- The same pattern applies to `this.model`, `this.year`, and `this.color` -- each one assigns the corresponding parameter to a property on the object.
- The statement `const car1 = new Car("Ford", "Mustang", 2024, "red")` creates a new `Car` object using the `new` keyword and stores it in the variable `car1`.
- The `console.log(car1.make)` statement accesses the `make` property of the `car1` object and prints `"Ford"` to the console. The remaining `console.log` calls do the same for `model`, `year`, and `color`.

---

## Creating Multiple Objects

```javascript
function Car(make, model, year, color)
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

const car2 = new Car("Chervrolet", "Camaro", 2025, "blue");

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
```

- Output:

    ```
    Chervrolet
    Camaro
    2025
    blue
    ```

- The same `Car` constructor is reused to create a second object, `car2`, with different values: `"Chervrolet"`, `"Camaro"`, `2025`, and `"blue"`.
- This demonstrates the power of constructors -- you can create as many objects as you want from a single constructor function without rewriting the property definitions.

```javascript
function Car(make, model, year, color)
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

const car2 = new Car("Chervrolet", "Camaro", 2025, "blue");

const car3 = new Car("Dodge", "Charger", 2026, "silver");

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
```

- Output:

    ```
    Dodge
    Charger
    2026
    silver
    ```

- Here a third object `car3` is created using the same `Car` constructor with the values `"Dodge"`, `"Charger"`, `2026`, and `"silver"`.
- All three objects (`car1`, `car2`, `car3`) share the same structure but hold different data. Each object is independent -- changing one does not affect the others.

---

## Parameter Naming

```javascript
function Car(a, b, c, d)
{
    this.make = a,
    this.model = b,
    this.year = c,
    this.color = d
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

const car2 = new Car("Chervrolet", "Camaro", 2025, "blue");

const car3 = new Car("Dodge", "Charger", 2026, "silver");

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
```

- Output:

    ```
    Dodge
    Charger
    2026
    silver
    ```

- We can write the constructor this way too, using abbreviated parameter names like `a`, `b`, `c`, `d` instead of `make`, `model`, `year`, `color`.
- The code still works because the parameter names are just local variable names -- what matters is the order of arguments passed when calling `new Car(...)`.
- However, this makes the constructor **less readable**. Using descriptive parameter names like `make`, `model`, `year`, `color` is a best practice because it makes the code self-documenting.

---

## Adding Methods to a Constructor

```javascript
function Car(make, model, year, color)
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color

    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chervrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

car1.drive();
car2.drive();
car3.drive();
```

- Output:

    ```
    You drive the Mustang
    You drive the Camaro
    You drive the Charger
    ```

- In addition to properties, you can also add **methods** (functions) inside a constructor using `this.drive = function(){...}`.
- The `drive` method uses a *template literal* (`` `You drive the ${this.model}` ``) to dynamically insert the `model` property of whichever object calls it.
- When `car1.drive()` is called, `this` refers to `car1`, so `this.model` is `"Mustang"`. When `car2.drive()` is called, `this` refers to `car2`, so `this.model` is `"Camaro"`, and so on.
- Every object created with the `Car` constructor will have its own copy of the `drive` method, allowing each car to describe itself correctly.

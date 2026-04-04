Special method for defining the properties and methods of objects. 

---

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

Ford 

Mustang 

2024 

red 


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

Chervrolet 

Camaro 

2025 

blue 


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

Dodge 

Charger 

2026 

silver 


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

Dodge 

Charger 

2026 

silver 

We can write the constructor this way to, but this makes the constructor less readable. 


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

You drive the Mustang 

You drive the Camaro 

You drive the Charger 
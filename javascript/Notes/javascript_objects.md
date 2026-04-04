A collection of related properties and/ or methods. 

 

Can represent real world objects (people, products, places). 

 

Object = {key:value, function()} 

---

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

Spongebob 

Squarepants 

30 

true 

"const" is not necessary. 


const person1 = { 

    firstName: "Spongebob", 

    lastName: "Squarepants", 

    age: 30, 

    isEmployed: true, 

} 

 

const person2 ={ 

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

Spongebob 

Squarepants 

30 

true 

Patrick 

Star 

42 

false 


const person1 = { 

    firstName: "Spongebob", 

    lastName: "Squarepants", 

    age: 30, 

    isEmployed: true, 

    sayHello: function(){console.log("Hi! I am Spongebob!")}, 

} 

 

const person2 ={ 

    firstName: "Patrick", 

    lastName: "Star", 

    age: 42, 

    isEmployed: false, 

    sayHello: () => {console.log("Hi! I am Patrick...")}, 

} 

 

person1.sayHello(); 

person2.sayHello(); 

Hi! I am Spongbob! 

Hi! I am Patrick… 

We can use function expressions ("function(){console.log("Hi! I am Spongebob!")}") or arrow functions ("() => {console.log("Hi! I am Patrick...")}"). 


const person1 = { 

    firstName: "Spongebob", 

    lastName: "Squarepants", 

    age: 30, 

    isEmployed: true, 

    sayHello: function(){console.log("Hi! I am Spongebob!")}, 

    eat: () => {console.log("I am eating a Krabby Patty")}, 

} 

 

const person2 ={ 

    firstName: "Patrick", 

    lastName: "Star", 

    age: 42, 

    isEmployed: false, 

    sayHello: () => {console.log("Hi! I am Patrick...")}, 

    eat: function(){console.log("I am eating roast beef, chicken, and pizza")} 

} 

 

person1.eat(); 

person2.eat(); 

I am eating a Krabby Patty 
I am eating roast beef, chicken, and pizza 
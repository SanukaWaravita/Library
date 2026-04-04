this = reference to the object where THIS is used. 

 

(the object depends on the immediate context). 

 

person.name = this.name. 

---

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

Hi! I am Spongebob 

Spongebob is eating hamburgers 


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

Hi! I am Patrick 

Patrick is eating pizza 


const person = { 

    name: "Spongebob", 

    favFood: "hamburgers",  

    sayHello: () => {console.log(`Hi! I am ${this.name}`)}, 

    eat: () => {console.log(`${this.name} is eating ${this.favFood}`)} 

} 

 

person.sayHello(); 

person.eat(); 

Hi! I am 

is eating undefined 

Here, the "this" keyword is making a reference to the window object, which is why its empty. 
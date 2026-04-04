Spread operator = '…' 

 

Allows an iterable such as n array or string to be expanded into separate elements (unpacks the elements). 

---

 

let numbers = [1, 2, 3, 4, 5]; 

let maximum = Math.max(numbers); 

window.alert(maximum); 

NaN 


 

let numbers = [1, 2, 3, 4, 5]; 

let maximum = Math.max(...numbers); 

window.alert(maximum); 

 

let numbers = [1, 2, 3, 4, 5]; 

let maximum = Math.max(...numbers); 

window.alert(maximum); 

5 


 

let username = "Bro Code"; 

let letters = [...username]; 

window.alert(letters); 

B,r,o, ,C,o,d,e 


 

let username = "Bro Code"; 

let letters = [...username].join("-"); 

window.alert(letters); 

B-r-o- -C-o-d-e 


let fruits = ["apple", "orange", "banana"]; 

 

window.alert(fruits); 

apple,orange,banana 


 

let fruits = ["apple", "orange", "banana"]; 

let newFruits = [...fruits]; 

window.alert(newFruits); 

apple,orange,banana 

Shallow copy - different datatype, but contains identical values 


 

let fruits = ["apple", "orange", "banana"]; 

let vegetables = ["carrots", "celery", "potatoes"]; 

let foods = [...fruits, ...vegetables] 

window.alert(foods); 

apple,orange,banana,carrots,celery,potatoes 


 

let fruits = ["apple", "orange", "banana"]; 

let vegetables = ["carrots", "celery", "potatoes"]; 

let foods = [...fruits, ...vegetables, "eggs", "milk"]; 

window.alert(foods); 

apple,orange,banana,carrots,celery,potatoes,eggs,milk 
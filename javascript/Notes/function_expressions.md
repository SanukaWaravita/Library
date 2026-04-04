Function declaration 
→
 defines a reesuable block of code that performs a specific task. 

 

Function expressions 
→
 a way to define functions as values or variables. 

 

Benefits are you do not have to constantly think of function names, rather you can just write a function and then forget about it. 

 

They are used in: 

 

Callbacks in asynchronous operations 

 

Higher-Order functions 

 

Closures 

 

Even Listeners 

---

function hello() 

{ 

    console.log("Hello"); 

} 

 

hello(); 

Hello 

Function declaration 


const hello = function() 

{ 

    console.log("Hello"); 

} 

 

hello(); 

Hello 

Here, a function is being assigned to a constant ("const") variable, in this case "hello" - Function expression 


function hello() 

{ 

    console.log("Hello"); 

} 

 

setTimeout(hello, 3000); 

Hello 

"Hello" will be displayed after 3 seconds (3 sec = 3000 ms). 


setTimeout(function() 

{ 

    console.log("Hello"); 

}, 3000); 

Hello 

"Hello" will be displayed after 3 seconds (3 sec = 3000 ms). 


function square(element) 

{ 

    return Math.pow(element, 2); 

} 

 

const numbers = [1, 2, 3, 4, 5, 6]; 

 

const squares = numbers.map(square); 

 

console.log(squares); 

[1, 4, 9, 16, 25, 36] 


const numbers = [1, 2, 3, 4, 5, 6]; 

 

const squares = numbers.map(function(element) 

{ 

    return Math.pow(element, 2); 

}); 

 

console.log(squares); 

We do not necessirily need a function name, this still works. 

 

A benefit of this is that we are not polluting the global name space with function names. 


const numbers = [1, 2, 3, 4, 5, 6]; 

 

const cubes = numbers.map(function(element) 

{ 

    return Math.pow(element, 3); 

}); 

 

console.log(cubes); 

[1, 8, 27, 64, 125, 216] 


const evenNums = numbers.filter(function(element) 

{ 

    return element % 2 === 0; 

}); 

 

console.log(evenNums); 

[2, 4, 6] 


const oddNums = numbers.filter(function(element) 

{ 

    return element % 2 !== 0; 

}); 

 

console.log(oddNums); 

[1, 3, 5] 


const total = numbers.reduce(function(accumulator, element) 

{ 

    return accumulator + element; 

}); 

 

console.log(total); 

21 
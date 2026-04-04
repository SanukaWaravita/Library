Callback - a function that is passed as an argument to another function. 

 

Used to handle asynchronous operations: 

Reading a file 

Network requests 

Interacting with databases 

 

"Hey, when you're done, call this next." 

---

function hello(callback) 

{ 

    console.log("Hello!"); 

    callback(); 

} 

function goodbye() 

{ 

    console.log("Goodbye!"); 

} 

hello(goodbye); 

Hello! 

Goodbye! 


 

function sum(callback, x, y) 

{ 

    let result = x + y; 

    callback(result); 

} 

function displayConsole(result) 

{ 

    console.log(result); 

} 

sum(displayConsole, 1, 2); 

3 


function sum(callback, x, y) 

{ 

    let result = x + y; 

    callback(result); 

} 

 

function displayConsole(result) 

{ 

    console.log(result); 

} 

 

function displayPage(result) 

{ 

    document.getElementById("myH1").textContent = result; 

} 

 

sum(displayPage, 1, 2); 

3 (displayed in webpage) 

HTML:  

 

<!DOCTYPE html> 

<html lang="en"> 

    <head> 

        <meta charset="UTF-8"> 

        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

        <title>Document</title> 

        <link rel="stylesheet" href="styles.css"> 

    </head> 

    <body> 

        <h1 id="myH1"></h1> 

        <script src="index.js"></script> 

    </body> 

</html> 
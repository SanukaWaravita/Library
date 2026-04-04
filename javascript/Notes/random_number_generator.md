const min = 50; 

const max = 100; 

 

// Random number between 0 and 6 (exclusive), including decimal portion 

let randomNum = Math.random() * 6; 

console.log(randomNum); // e.g., 0.48294 up to 5.9999... 

 

// Random integer between 1 and 6 (inclusive), excluding decimal portion 

randomNum = Math.floor(Math.random() * 6) + 1; 

console.log(randomNum); // e.g., 1 to 6 

 

// Random integer between min and max (excluding max) 

randomNum = Math.floor(Math.random() * (max - min)) + min; 

console.log(randomNum); // e.g., 50 to 99 


<!DOCTYPE html> 

<html lang="en"> 

    <head> 

        <meta charset="UTF-8"> 

        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

        <title>Document</title> 

        <link rel="stylesheet" href="style.css"> 

    </head> 

    <body> 

        <button id="myButton">roll</button><br> 

        <label id="label1" class="myLabels"></label><br> 

        <label id="label2" class="myLabels"></label><br> 

        <label id="label3" class="myLabels"></label> 

        <script src="index.js"></script> 

    </body> 

</html> 


body{ 

    font-family: verdana; 

    text-align: center; 

} 

#myButton{ 

    font-size: 3em; 

    padding: 5px 25px; 

    border-radius: 5px; 

} 

#label1{ 

    font-size: 3em; 

} 

#label2{ 

    font-size: 3em; 

} 

#label3{ 

    font-size: 3em; 

} 


// RANDOM NUMBER GENERATOR 

 

const myButton = document.getElementById("myButton"); 

const Label1 = document.getElementById("label1"); 

const Label2 = document.getElementById("label2"); 

const Label3 = document.getElementById("label3"); 

const min = 1; 

const max = 6; 

 

let randomNum1; 

let randomNum2; 

let randomNum3; 

 

myButton.onclick = function(){ 

 

    randomNum1 = Math.floor(Math.random() * max) + min; 

    randomNum2 = Math.floor(Math.random() * max) + min; 

    randomNum3 = Math.floor(Math.random() * max) + min; 

 

    Label1.textContent = randomNum1; 

    Label2.textContent = randomNum2; 

    Label3.textContent = randomNum3; 

} 
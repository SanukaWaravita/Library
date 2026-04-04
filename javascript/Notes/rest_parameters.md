rest parameters = … rest 

 

Allows a function work with a variable number of arguments by bundling them into an array. 

 

Spread = expands an array into separate elements. 

Rest = bundles separate elements into an array. 

---

const food1 = "pizza"; 

const food2 = "hamburger"; 

const food3 = "hotdog"; 

const food4 = "sushi"; 

const food5 = "ramen"; 

function openFridge(...foods) 

{ 

    console.log(...foods); 

} 

openFridge(food1, food2, food3, food4, food5); 

pizza hamburger hotdog sushi ramen 


 

const food1 = "pizza"; 

const food2 = "hamburger"; 

const food3 = "hotdog"; 

const food4 = "sushi"; 

const food5 = "ramen"; 

function getFood(...foods) 

{ 

    return foods; 

} 

const foods = getFood(food1, food2, food3, food4, food5); 

console.log(foods); 

['pizza', 'hamburger', 'hotdog', 'sushi', 'ramen'] 


 

function sum(...numbers) 

{ 

    let result = 0; 

    for(let number of numbers) 

    { 

        result += number; 

    } 

    return result; 

} 

const total = sum(1); 

console.log(`Your total is $${total}`); 

Your total is $1 


 

function sum(...numbers) 

{ 

    let result = 0; 

    for(let number of numbers) 

    { 

        result += number; 

    } 

    return result; 

} 

const total = sum(1, 2, 3); 

console.log(`Your total is $${total}`); 

Your total is $6 


 

function getAverage(...numbers) 

{ 

    let result = 0; 

    for(let number of numbers) 

    { 

        result += number; 

    } 

    return result/ numbers.length; 

} 

const total = getAverage(75, 100, 85, 90, 50); 

console.log(total); 

80 


function combineStrings(...strings) 

{ 

    return strings.join(" "); 

} 

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III"); 

console.log(fullName); 

Mr. Spongebob Squarepants III 
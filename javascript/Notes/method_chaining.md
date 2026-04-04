// METHOD CHAINING 

 

// Calling one method after another in one continuous line of code. 

 

// --- No Method Chaining ---  

let username = window.prompt("Enter your username: "); 

 

username = username.trim(); // removing white space before and after the name    

let letter = username.charAt(0); 

letter = letter.toUpperCase(); 

 

let extraChars = username.slice(1); // slicing everything after the first character 

extraChars = extraChars.toLowerCase(); 

username = letter + extraChars; 

 

window.alert(username); 

 

// --- Method Chaining --- 

 

let username = window.prompt("Enter your username: "); 

 

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); 

// Tip: Don't over use method chaining, tends to get confusing. 

 

window.alert(username); 
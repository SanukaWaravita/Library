Accepting user inputs; 

Easy method  = Window prompt. 

Professional method = HTML textbox with a button. 

---

# Window Prompt Method

For this, '[variable] = window.prompt("[Text displayed on window prompt]");' statement is used. 


let username; 

 

username = window.prompt("What's your username?"); 

 

console.log(username); 

Here, the variable 'username' has been declared, but not yet assigned. 

 

The 'username = window.prompt("What's your username?");' will cause a window prompt to appear with the text 'What's your username?' along with a text box in which the user can type in anything (in this case possibly something related to 'username') which will then be assigned as the value for the variable 'username'. 

 

The console will display whatever the text that was typed in the window prompt.  

 

For example: If the user input was 'Ryomen Sukuna', then the console will display the text 'Ryomen Sukuna'. 


let username = window.prompt("What's your username?"); 

 

console.log(username); 

The declaration and assignment can be written in a single statement.  

 

Similar to the above, the console will display whatever the text that was typed in the window prompt.  

 

For example: If the user input was 'Ryomen Sukuna', then the console will display the text 'Ryomen Sukuna'. 


# HTML Textbox

<!DOCTYPE html> 

<html lang="en"> 

<head> 

    <meta charset="UTF-8"> 

    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

    <title>My Website</title> 

    <link rel="stylesheet" href="style.css"> 

</head> 

<body> 

    <h1>Welcome</h1> 

    <label>username:</label> 

    <input id="myText"><br><br> 

    <button id="mySubmit">Submit</button> 

    <script src="index.js"></script> 

</body> 

</html> 

let username; 

 

document.getElementById("mySubmit").onclick = function(){ 

    username = document.getElementById("myText").value; 

    console.log(username); 

} 


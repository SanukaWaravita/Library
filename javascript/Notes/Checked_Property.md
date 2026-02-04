# Checked Property

- `.checked` - property that determines the checked state of an HTML checkbox or radio button element.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>checked-property</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <input type="checkbox" id="myCheckBox">
        <label for="myCheckBox">Subscribe</label><br><br>

        <input type="radio" id="visaBtn" name="card">
        <label for="visaBtn">Visa</label><br>
        
        <input type="radio" id="masterCardBtn" name="card">
        <label for="visaBtn">MasterCard</label><br>
        
        <input type="radio" id="payPalBtn" name="card">
        <label for="visaBtn">PayPal</label><br><br>

        <button type="submit" id="mySubmit">Submit</button>

        <p id="subResult"></p>
        <p id="paymentResult"></p>

        <script src="index.js"></script>
    </body>
</html>
```

```css
body{
    font-family: verdana;
    font-size: 2em;
}

#mySubmit{
    font-size: 1em;
}
```

```js
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResults");
mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if (masterCardBtn.checked){
        masterCardBtn.textContent = `You are paying with MasterCard`;
    }
    else if (payPalBtn.checked){
        payPalBtn.textContent = `You are paying with Paypal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}
```

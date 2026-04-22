[< Back to Station](../station.md)

---

# Checked Property

- The `.checked` property determines the **checked state** of an HTML checkbox or radio button element. It returns `true` if the element is checked, and `false` if it is not.

---

## JavaScript (index.js)

```javascript
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

- The first several lines use `document.getElementById()` to grab references to the checkbox, radio buttons, submit button, and result display elements from the HTML.

- The statement `mySubmit.onclick = function(){...}` assigns a function to run when the submit button is clicked.

- The `if(myCheckBox.checked)` block checks whether the checkbox is checked. If it is, the text `"You are subscribed"` is displayed. Otherwise, `"You are NOT subscribed"` is shown.

- The `if(visaBtn.checked)` block checks which radio button is selected: Visa, MasterCard, or PayPal. Depending on the selection, the appropriate message is displayed. If none are selected, the message `"You must select a payment type"` is shown.

---

## HTML (index.html)

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

- The `<input type="checkbox" id="myCheckBox">` creates a checkbox for the subscription option.

- The three `<input type="radio" name="card">` elements create radio buttons for payment type selection. They all share the same `name="card"` attribute, which ensures only one can be selected at a time.

- The `<button type="submit" id="mySubmit">Submit</button>` creates the submit button that triggers the JavaScript logic.

- The `<p id="subResult"></p>` and `<p id="paymentResult"></p>` are empty paragraphs where the JavaScript will display the results.

---

## CSS (style.css)

```css
body{
    font-family: verdana;
    font-size: 2em;
}

#mySubmit{
    font-size: 1em;
}
```

- The `body` rule sets the font to `verdana` and the base font size to `2em`.

- The `#mySubmit` rule sets the submit button's font size to `1em`.

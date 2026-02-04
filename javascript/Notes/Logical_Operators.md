# Logical Operators

- Used to combine or manipulate boolean values (true or false)

    - AND = &&
    - OR = ||
    - NOT = !

## AND (&&) Operator

- Used to check more than one condition;
- Both conditions must be met to execute something.

### Without Logical Operators

    ```js
    const temp = 20;
    
    if (temp > 0){
        window.alert("The weather is GOOD");
    }
    else if (temp <= 30){
        window.alert("The weather is GOOD");
    }
    else{
        window.alert("The weather is BAD");
    }
    ```

### With Logical Operators

    ```js
    const temp = 20;
    
    if (temp > 0 && temp <= 30){
        window.alert("The weather is GOOD");
    }
    else{
        window.alert("The weather is BAD");
    }
    ```

## OR (||) Operator

- Only one condition has to be met to execute something.

```js
const temperature = 20;

if (temperature || 0 && temperature <= 30){
    window.alert("The weather is GOOD"); 
    // If even one of the two conditions are true, this code will be executed
}
else{
    window.alert("The weather is BAD");
}
```

## NOT (!) Operator

- Switch a Boolean value from true -> false or from false -> true.

```js
const isSunny =  true;

if(!isSunny){
    window.alert("It is CLOUDY!");
}
else{
    window.alert("It is SUNNY!");
}
```

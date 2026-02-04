# Switches

- An efficient replacement to many else-if statements.

```js
let dayNumber = 1;
switch(day){
    case 1: 
        console.log("It is Monday");
        break;
    case 2: 
        console.log("It is Teusday");
        break;
    case 3: 
        console.log("It is Wednesday");
        break;
    case 4: 
        console.log("It is Thursday");
        break;
    case 5: 
        console.log("It is Friday");
        break;
    case 6: 
        console.log("It is Saturday");
        break;
    case 7: 
        console.log("It is Sunday");
        break;
    default:
        console.log(`${dayNumber} is not a day`)
}
```
- *OUTPUT*: It is Monday

- `break;`:

    - Important because, once a case matches, the code underneath it will be executed; in the absence of `break;` statements, the execution will cascade down and all the cases following the matching case will also be executed. 

    - So the `break;` statement is to 'break' out/ exit the switch once the code indented underneath a matching case is executed.

- Example:

```js
// Score related switch (Ex)
let testScore = 92;
let letterGrade;
switch(true){
    // This will check whether a condition in some case evaluates to true
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade =B;
        break;
    case testScore >= 70:
        letterGrade = C;
        break;
    case testScore >= 60:
        letterGrade = D;
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);
```
- *OUTPUT*: A

```js

switch(dayNumber){
    case 1: 
        console.log("It is Monday");
        break;
    case 2: 
        console.log("It is Teusday");
        break;
    case 3: 
        console.log("It is Wednesday");
        break;
    case 4: 
        console.log("It is Thursday");
        break;
    case 5: 
        console.log("It is Friday");
        break;
    case 6: 
        console.log("It is Saturday");
        break;
    case 7: 
        console.log("It is Sunday");
        break;
    default:
        console.log(`${dayNumber} is not a day`)
}

```
- *OUTPUT*: pizza is not a day

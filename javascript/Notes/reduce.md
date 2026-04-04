Reduces the elements of an array to a single value. 

---

const prices = [5, 30, 10, 25, 15, 20]; 

const total = prices.reduce(sum); 

 

function sum(accumulator, element) 

{ 

    return accumulator + element; 

} 

 

console.log(`$${total.toFixed(2)}`); 

$105.00 


const grades = [75, 50, 90, 80, 65, 95]; 

const maximum = grades.reduce(getMax); 

 

function getMax(accumulator, element) 

{ 

    return Math.max(accumulator, element); 

} 

 

console.log(maximum); 

95 


const grades = [75, 50, 90, 80, 65, 95]; 

const minimum = grades.reduce(getMin); 

 

function getMin(accumulator, element) 

{ 

    return Math.min(accumulator, element); 

} 

 

console.log(minimum); 

50 
Creates a new array by filtering out elements. 

---

let numbers = [1, 2, 3, 4, 5, 6, 7]; 

let evenNumbs = numbers.filter(isEven); 

console.log(evenNumbs); 

function isEven(element) 

{ 

    return element % 2 === 0; 

} 

[2, 4, 6] 


let numbers = [1, 2, 3, 4, 5, 6, 7]; 

let oddNumbs = numbers.filter(isOdd); 

console.log(oddNumbs); 

function isOdd(element) 

{ 

    return element % 2 !== 0; 

} 

[1, 3, 5, 7] 


const ages = [16, 17, 18, 18, 19, 20, 60]; 

const adults = ages.filter(isAdult); 

function isAdult(element) 

{ 

    return element >= 18; 

} 

console.log(adults) 

[18, 18, 19, 20, 60] 


const ages = [16, 17, 18, 18, 19, 20, 60]; 

const children = ages.filter(isChild); 

function isChild(element) 

{ 

    return element < 18; 

} 

console.log(children) 

[16, 17] 


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]; 

function getShortWords(element) 

{ 

    return element.length <= 6; 

} 

const shortWords = words.filter(getShortWords); 

console.log(shortWords); 

['apple', 'orange', 'banana', 'kiwi'] 


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]; 

function getLongWords(element) 

{ 

    return element.length > 6; 

} 

const longWords = words.filter(getLongWords); 

console.log(longWords); 

['pomegranate', 'coconut'] 
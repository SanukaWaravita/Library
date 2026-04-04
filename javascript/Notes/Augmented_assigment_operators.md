This is a shortcut to writing arithmetic expressions without having to type the variables twice. 

---

# Assignment Operators


PROGRAM 

OUTPUT 

DESCRIPTION 

let x = 10 + 5; 

15 

 

x += 10; 

 

x = x + 10 

x *= 4; 

 

x = x * 4 

x++ 

 

x = x + 1 

x-- 

 

x = x - 1 

console.log(x); 

 
# Addition

let students = 30; 

 

students += 1; 

 

console.log(students); 

The variable 'students' is now assigned the value '30' and acts as that value. 

 

'+' - Addition operator. 

 

The console log will display '31' because 30 + 1 (from the arithmetic expression 'students += 1;') is 31. 


# Subtraction

let students = 30; 

 

students -= 1; 

 

console.log(students) 

'-' - Subtraction operator. 

 

The console log will display '29' because 30 - 1 (from the arithmetic expression 'students -= 1;') is 29. 


# Multiplication

let students = 30; 

 

students *= 2; 

 

console.log(students); 

'*' - Multiplication operator. 

 

The console log will display '60' because 30 * 2 (from the arithmetic expression 'students *= 1') is 60. 


# Division

let students = 30; 

 

students /= 2; 

 

console.log(students); 

'/' - Division operator. 

 

The console log will display '15' because 30 / 2 (from the arithmetic expression 'students /= 1;') is 15. 


# Exponent

let students = 30; 

 

students **= 2; 

 

console.log(students); 

'**' - Exponent operator. 

 

The console will display '900' because 302 (from the arithmetic expression 'students **= 2;') is 900 (also equal to 30 × 30 = 900). 


# Modulus

let students = 30; 

 

students %= 2; 

 

console.log(students); 

'%' - Modulus operator. 

 

The console log will display '0' because 30 can be equally divided to 2. 


let students = 30; 

 

students %= 2; 

 

console.log(students); 

The modulus operator can be helpful in the event you are having to find whether a number is even or odd.  

 

The console will display '0' because 30 can equally be divided to two/ or divided by two; this shows that 30 is an even number. 


let students = 31; 

 

students %= 2; 

 

console.log(students); 

The console will display '1' (because 31 cannot be equally divided to two parts); this shows that 31 is an odd number. 


# Increment and Decrement

let students = 30; 

 

students++; 

 

console.log(students); 

'++' - Increment operator. 

 

Increases the value (e.g. '30') of the specified operator (e.g. 'students') by 1. 

 

The console will display '31', as 30 + 1 = 31.  


let students = 30; 

 

students--; 

 

console.log(students); 

'--' - Decrement operator. 

 

Decreases the value (e.g. '30') of the specified operator (e.g. 'students') by 1. 

 

The console will display '29', as 30 - 1 = 29 . 


# Operator Recedence

Given a very complex equation, for example 'let result = 1 + 2 * 3 + 4 ** 2;', operator precedence is in which order each part of the equation is supposed to be solved. 

Operator precedence: 

Parenthesis '()' 

Exponents '**' 

Multiplication '*' & division '/' & modulo '%' 

Addition '+' & subtraction '-' 

let result = 1 + 2 * 3 + 4 ** 2; 

 
console.log(result); 

The console will display '23', because, starting from the left and working through to the right following the operator procedence, 42 = 16, 2 × 3 = 6 and finally 16 + 6 + 1 = 23. 

 

1 + 2 × 3 + 42; 
1 + 2 × 3 + 16; 
1 + 6 + 16;  
1 + 22; 
23.    


let result = 12 % 5 + 8 / 2; 

 

console.log(result); 12 % 5 + 8 ÷ 2; 
2 + 8 ÷ 2; 
2 + 4; 
6 

 

The console will display '6'. 


let result = 6 / 128; 

 

console.log(result); 

The console will display '0.046875'. 
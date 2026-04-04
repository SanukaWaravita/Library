// VARIABLE SCOPE 

 

// Where a variable is recognized and accessible (local vs global) 

In large programs stick with local variables instead of global ones, because you might run into naming conflicts as there is a change you may reuse the same global scope variable. 

---

function function1(){ 

    let x = 1; 

    // This variable has a different scope to function2 x 

    // This variable is local scope 

    console.log(x); 

} 

function function2(){ 

    let x = 2; 

    // This variable has a different scope to function1 x 

    // This variable is also local scope 

    console.log(x); 

} 

function1(); 

function2(); 


function function1(){ 

    let x = 1; 

    console.log(y); 

} 

function function2(){ 

    let y = 2; 

    console.log(x); 

} 

// Functions cannot see inside of other functions 

function1(); 

function2(); 


let x = 3; // This is global scope 

function function1(){ 

    console.log(x); 

} 

function function2(){ 

    console.log(x); 

} 

function1(); 

function2(); 


3 

3 


let x = 3; 

function function1(){ 

    let x = 1; 

    console.log(x); 

} 

function function2(){ 

    let x = 2; 

    console.log(x); 

} 

function1(); 

function2(); 

// Local variables get looked for first, and then afterwards global variables. 

// In the absence of local variables, global variables will be used. 

1 

2 
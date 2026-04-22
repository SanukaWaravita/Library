[< Back to Station](../station.md)

---

# Variable Scope

*Variable scope* determines where a variable is recognized and accessible in your code. Variables can have **local scope** or **global scope**.

**Tip:** In large programs, stick with local variables instead of global ones, because you might run into naming conflicts -- there is a chance you may reuse the same variable name.

---

## Local Scope

```javascript
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
```

- Output:

    ```
    1
    2
    ```

- The variable `let x = 1` inside `function1()` is *local* to that function -- it only exists within the curly braces of `function1`.
- The variable `let x = 2` inside `function2()` is a completely separate variable that is *local* to `function2`.
- Even though both variables are named `x`, they do not conflict because each one has its own **local scope** within its respective function.

---

## Functions Cannot Access Other Functions' Variables

```javascript
function function1(){
    let x = 1;
    console.log(y);
}

function function2(){
    let y = 2;
    console.log(x);
}

function1();
function2();
```

- Functions cannot see inside of other functions.
- `function1()` tries to access `y`, which is local to `function2()` -- this will cause a **ReferenceError** because `y` does not exist in `function1`'s scope.
- Similarly, `function2()` tries to access `x`, which is local to `function1()` -- this will also cause an error.
- Each function's local variables are completely isolated from other functions.

---

## Global Scope

```javascript
let x = 3;

function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}

function1();
function2();
```

- Output:

    ```
    3
    3
    ```

- The variable `let x = 3` is declared outside of any function, making it a **global scope** variable.
- Both `function1()` and `function2()` can access `x` because global variables are visible everywhere in the program.
- Both functions print `3` because they are reading the same global variable `x`.

---

## Local Scope Takes Precedence Over Global

```javascript
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
```

- Output:

    ```
    1
    2
    ```

- Even though there is a global variable `let x = 3`, each function declares its own local `let x` variable.
- JavaScript looks for **local variables first**, and then checks for global variables. This is known as *variable shadowing* -- the local variable "shadows" the global one.
- `function1()` prints `1` (its local `x`) and `function2()` prints `2` (its local `x`), ignoring the global `x = 3`.
- In the absence of local variables, global variables will be used instead.

// FOR LOOP 

// Repeat some code a LIMITED amount of times 

---

for(let i = 0; i <= 2; i++){   // has 3 statements 

    window.alert(i); 

} 

for(let i = 1; i <= 20; i++){ 

    if(i == 13){ 

        continue; // This keyword lets you skip an iteration entirely 

    } 

    else{ 

        window.alert(i); 

    } 

} 

for(let i = 1; i <= 20; i++){ 

    if(i == 13){ 

        break; 

    } 

    else{ 

        window.alert(i); 

    } 

} 

for(let i = 1; i <= 20; i++){ 

    if(i == 13){ 

        break; // This keyword lets you break out of the loop and not continue the rest of the iterations. 

    } 

    else{ 

        window.alert(i); 

    } 

} 
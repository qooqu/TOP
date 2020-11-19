// https://coryrylan.com/blog/javascript-module-pattern-basics


// dumb way, a little easier to understand

// let Module = function () {
//     'use strict';
//     // Your code here
//     // All function and variables are scoped to this function

//     let privateYo = 'hello';
//     // console.log(privateYo);

//     return {
//         publicYo: privateYo
//     }
// };

// let moduleRun = Module();

// console.log(moduleRun.privateYo); // undefined
// console.log(moduleRun.publicYo); // hello



// actual way to do it, using an Immediately Invoked Function Expression / IIFE

let Module = (function () {
    'use strict';
    // Your code here
    // All function and variables are scoped to this function

    let privateYo = 'hello';
    // console.log(privateYo);

    // return anything you want public
    return {
        publicYo: privateYo
    }
})();

console.log(Module.privateYo); // undefined
console.log(Module.publicYo); // hello


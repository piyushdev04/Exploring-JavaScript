/*
    let, const & var
    
    - var: Variable can be re-declared & updated. A global scope variable.
    - let: Variable cannot be re-declared but can be updated. A block scope variable.
    - const: Variable cannot be re-declared or updated. A block scope variable.
*/


// var
var age = 21;
var age = 26; // variable got re-declared & also updated

// let
let age = 21;
age = 26; // in "let" we can update variable but not re-declared variable

// const
const age = 21; // we can't update or re-declare variable
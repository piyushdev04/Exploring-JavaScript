/*
    Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
    Start username with @, followed by their full name and ending with the fullname length.

        eg: user name = "piyushbafna", username should be "@piyushbafna11"
*/

let fullName = prompt("enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);
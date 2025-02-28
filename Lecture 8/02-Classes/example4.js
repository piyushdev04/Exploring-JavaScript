/*
    Getters and Setters in Classes:
    Getters and setters allow controlled access to class properties.
*/

class User {
    constructor(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }

    set username(newName) {
        if (newName.length >= 3) {
            this._username = newName;
        } else {
            console.log("Username must be at least 3 characters long.");
        }
    }
}

let user1 = new User("JohnDoe");
console.log(user1.username); // Output: JohnDoe
user1.username = "JD"; // Output: Username must be at least 3 characters long.
user1.username = "Jane";
console.log(user1.username); // Output: Jane
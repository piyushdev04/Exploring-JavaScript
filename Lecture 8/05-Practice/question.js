/*
    Qs. You are creating a website for your college. Create a 
    class User with 2 properties, name & email. It also has a 
    method called viewData( ) that allows user to view website data.

    Qs. Create a new class called Admin which inherits from User. 
    Add a new method called editData to Admin that allows it to edit 
    website data.
*/

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`${this.name} is viewing the website data.`);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        console.log(`${this.name} is editing the website data.`);
    }
}

// Creating User
let student = new User("John", "john@example.com");
student.viewData();

// Creating Admin
let adminUser = new Admin("Professor Alex", "alex@example.com");
adminUser.viewData();
adminUser.editData();
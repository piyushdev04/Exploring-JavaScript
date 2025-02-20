// while loop

// let i = 1;
// while (i <= 5) {
//     console.log("i=", i);
//     i++;
// }

// do-while loop
// let i = 1;
// do {
//     console.log("i =", i);
//     i++;
// } while (i <= 5);

// for-of loop [for-of is used for: string & arrays]
// let str = "BATMAN!";

// let size = 0;
// for (let i of str) {
//     console.log("i =", i);
//     size++;
// }

// console.log("String size = ", size);

// for-in loop [for-in is used for: objec & arrays]

let student = {
    name: "Piyush Bafna",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for (let key in student) {
    console.log("key =",key, "value =", student[key]);
}
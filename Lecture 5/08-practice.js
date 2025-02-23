/*
    Qs. We given array of marks of students. Filter out of the marks of students that scored 90+.
*/

let  marks = [97, 64, 32, 49, 99, 96, 86];

let toppers = marks.filter((val) => {
    return val > 90;
});

console.log(toppers);

/*
    Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array.
*/

let n = prompt("enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum = ",sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial =", factorial);
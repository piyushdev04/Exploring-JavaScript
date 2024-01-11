//getLength: [.length]

// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
// }
// getLength("Ram Ram Bhai Sareyane!!!")

//findIndex: [.indexOf] , [lastIndexOf]

// function findIndexOf(str, target){
//     console.log("Original String:", str);
//     console.log("Index:", str.lastIndexOf(target));
// }
// findIndexOf("RAM RAM BHAI","RAM");

//getSlice: [.slice]

// function getSlice(str,start,end){
//     console.log("Original String:",str);
//     console.log("After slice:", str.slice(start,end));
// }
// getSlice("Hello World",0,5);

// const value= "Piyush Bhai";
// let ans = value.substr(2,5)
// let ans2 = value.slice(2,5)

// console.log(ans)
// console.log(ans2)

// function cutIt(str, startIndex, endIndex){
//     let newStr = "";
//     for (let i = 0; i < str.length; i++){
//         if (i >= startIndex && i < endIndex){
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }

// const value = "Piyush bafna";


// console.log(cutIt(value, 2, 5));

// Replace: [.replace]

// const str = "Piyush Bhai";
// console.log(str.replace("Bhai" , "Kool"))

//Split: [.split]

// const value = "Hi my name is Piyush"
// const words = value.split(" ");

// console.log(words);

// const value = "   Piyush Bafna    "

// console.log(value.trim())

//Upper Case: [.toUpperCase]

// const value = "Piyush Bafna"

// console.log(value.toUpperCase())

//Lower Case: [.toLowerCase]
const value = "PIYUSH BAFNA"

console.log(value.toLowerCase())
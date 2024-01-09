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

const value= "Piyush Bhai";
let ans = value.substr(2,5)
let ans2 = value.slice(2,5)

console.log(ans)
console.log(ans2)
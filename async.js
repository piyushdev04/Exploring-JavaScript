// [setTimeout]
// function findsum(n){
//     let ans = 0;
//     for (let i = 0; i<n; i++){
//         ans += i;
//     }
//     return ans;
// }

// function findsumTill100(){
//     console.log(findsum(100));
// }

// setTimeout(findsumTill100, 1000)

// console.log("RAM RAM BHAI SAREYANE!!!");

// [fs.readFile]

const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data);
})

console.log("Systumm!");
let a = 0;
// takes very long, longer than the file read
for(let i = 0; i<10000000; i++){
    a++;
}

console.log("Bhai-chara");
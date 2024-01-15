// const fs = require("fs");

// // my own asynchronous function 
// function BhaiReadFile(){
//     console.log("inside BhaiReadFile");
//     return new Promise(function(resolve){
//         console.log("inside promise");
//         fs.readFile("a.txt", "utf-8", function(err,data){
//             console.log("before resolve");
//             resolve(data);
//         });
//     })
// }

// // callback function to call 
// function onDone(data) {
//     console.log(data)
// }

// BhaiReadFile().then(onDone);

// var d =  new Promise(function(onDone){
//   onDone("Systumm!!");
// });

// function callback(){
// console.log(d);
// }

// d.then(callback)

// d.then(function(){
//     console.log(d)
// })

// function AsyncFunction(){
//     let p = new Promise(function(resolve){
//         resolve("Systum!!");
//     });
//     return p;
// }

// const value = AsyncFunction();
// value.then(function(data){
//     console.log(data);
// })

// function AsyncFunction(){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve, 2000)
//     });
//     return p;
// }

// const value = AsyncFunction();
// value.then(function(){
//     console.log("Systum!");
// })

function PiyushBhaiKaTora(){
    let p = new Promise(function(resolve){
      resolve("Bhai Chalave Se Systum!!")
    });
    return p;
}

function phoneGhuma(){
    PiyushBhaiKaTora().then(function(dabdaba){
        console.log(dabdaba);
    });
}

phoneGhuma(); 
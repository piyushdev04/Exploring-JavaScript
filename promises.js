const fs = require("fs");

// my own asynchronous function 
function BhaiReadFile(){
    console.log("inside BhaiReadFile");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt", "utf-8", function(err,data){
            console.log("before resolve");
            resolve(data);
        });
    })
}

// callback function to call 
function onDone(data) {
    console.log(data)
}

BhaiReadFile().then(onDone);
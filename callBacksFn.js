function sum(num1,num2,fntocall){
    let resut = num1 + num2;
    fntocall(resut);
}

function displayResult(data){
    console.log("Result of sum is: " + data);
}

function displayResultPassive(data){
    console.log("sum of result is : " + data);
}

const ans = sum(1,2, displayResultPassive);
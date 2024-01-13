// function sum(num1,num2,fntocall){
//     let resut = num1 + num2;
//     fntocall(resut);
// }

// function displayResult(data){
//     console.log("Result of sum is: " + data);
// }

// function displayResultPassive(data){
//     console.log("sum of result is : " + data);
// }

// const ans = sum(1,2, displayResultPassive);

// function calArth(a,b,arthFinalFn){
//     const ans = arthFinalFn(a,b)
//     return ans;
// }
// function sum(a,b){
//     return a+b;
// }
// const value = calArth(5,5,sum);
// console.log(value);

function square(a){
    return a * a
}

function cube(a){
    return a * a * a
}

function calOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

console.log(calOfSomething(1,2,cube))
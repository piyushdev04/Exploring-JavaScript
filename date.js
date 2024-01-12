// const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getMonth() + 1);
// console.log(currentDate.getFullYear());

function calculatSum(n){
    let a = 0;
    for (let i=0; i<n; i++){
        a = a + i
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculatSum(1000000);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs)

// Time [setInterval]

function currentTimePrint() {
    console.log(new Date().getTime());
}
setInterval(currentTimePrint, 1000);
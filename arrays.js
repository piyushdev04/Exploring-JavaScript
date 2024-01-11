// MANUPULATING ARRAY

// [.push] >> add to last

const initialArray = [1,2,3,4];
initialArray.push(5);
console.log(initialArray)

// [.pop] >> delete from last

const initialArray1 = [1,2,3,4];
initialArray.pop();
console.log(initialArray1)

// [.shift] >> delete from frnt.

const initialArray2 = [1,2,3,4];
initialArray.shift();
console.log(initialArray2)

// [.unshift] >> add in frnt. 

const initialArray3 = [1,2,3,4];
initialArray.unshift(0);
console.log(initialArray3)

// [.concat] >> merge 2 arrays

const initialArray4 = [1,2,3];
const secondArray = [4,5,6];
console.log(initialArray4.concat(secondArray));

// [.forEach] >> execute seperately each array

const initialArray5 = [1,2,3];

function logThing(str) {
    console.log(str);
}

initialArray5.forEach(logThing)

//--------------------------------

const initialArray6 = [1,2,3];

function logThing(str) {
    console.log(str + " RAM RAM!!!");
}

initialArray6.forEach(logThing)

// additional call back function:

function log1() {
    console.log("RAM RAM BHAI 1")
}

function log2() {
    console.log("RAM RAM BHAI 2")
}

function logWhatsPresent(fn) {
    fn();
}

logWhatsPresent(log2)
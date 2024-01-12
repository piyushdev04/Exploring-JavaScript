// [JSON] >> javascript object notation

// [.parse] >> reading

// const users = '{"name": "harkirat","age": 24,"gender": "male"}'

// const user = JSON.parse(users)
// console.log(user["gender"]);

// [.stringify] >> convert object into a string

const user1 ={
    name: "Piyush",
    gender: "male"
}

const finalString = JSON.stringify(user1)
console.log(finalString)
const allUsers = [{
    firstname: "Max",
    gender: "male",
}, {
    firstname: "John",
    gender: "male",
}, {
    firstname: "Maria",
    gender:"female",
}]

for(let i = 0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstname"])
    }
}
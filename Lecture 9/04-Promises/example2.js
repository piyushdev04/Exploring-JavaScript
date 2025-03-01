function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for user ${userId}`);

        const users = {
            1: { id: 1, name: "Piyush", role: "Student"},
            2: { id: 2, name: "Alex", role: "Student"},
            3: { id: 3, name: "John", role: "student"},
        };

        setTimeout(() => {
            if (users[userId]) {
                resolve(users[userId]);
            } else {
                reject(new Error("User not found!"));
            }
        }, 1500);
    });
}


// Using the Promise
fetchUserData(2)
    .then((user) => console.log("User Data:", user))
    .catch((error) => console.error("Error", error.message));


// "Promise.all()" to fetch user data for multiple user IDs simultaneously.
Promise.all([fetchUserData(1), fetchUserData(3)])
    .then((users) => console.log("User Data:", users))
    .catch((error) => console.error("Error:", error.message));


// "Promise.allSettled()" If you want to continue fetching even if some fail.
Promise.allSettled([fetchUserData(1), fetchUserData(3)])
    .then((results) => console.log("Results:", results));
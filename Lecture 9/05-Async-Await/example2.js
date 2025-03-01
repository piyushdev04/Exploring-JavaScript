async function getUser(userId) {
    console.log("Fetching user data....");

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Piyush", role: "Student" });
            } else {
                reject("User not found!");
            }
        }, 2000);
    });

    try {
        let user = await promise;
        console.log("User Data:", user);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser(1);
getUser(2);

// No callback hell!
// Error handling using "try-catch"!
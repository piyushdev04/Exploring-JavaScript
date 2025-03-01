async function fetchData() {
    try {
        let result = await new Promise((resolve) => 
            setTimeout(() => resolve("Data Fetched!"), 2000)
        );
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();
// Callback with Asynchronous Function (setTimeout)

function fetchData(callback) {
    console.log("Fetching data....");

    setTimeout(() => {
        console.log("Data fetched successfully!");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing fetched data....");
}

fetchData(processData);
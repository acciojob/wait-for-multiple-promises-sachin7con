//SGN your JS code here. If required.
//SGN your JS code here. If required.
const randomTime = () => Math.floor(Math.random() * 3 + 1) * 1000;

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, randomTime());
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, randomTime());
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3");
    }, randomTime());
});

let arr = [promise1, promise2, promise3];
let output = document.getElementById('output');

// Add loading message
let rowLoading = document.createElement('tr');
let tdLoading = document.createElement('td');
tdLoading.colSpan = 2;
tdLoading.textContent = "Loading...";
rowLoading.appendChild(tdLoading);
output.appendChild(rowLoading);

Promise.all(arr)
    .then((results) => {
        // Remove loading message
        output.removeChild(rowLoading);

        let totalTime = 0;
        results.forEach((result) => {
            const row = output.insertRow();
            const col1 = row.insertCell();
            const col2 = row.insertCell();
            col1.textContent = result;
            const timeTaken = randomTime() / 1000; // Time taken in seconds
            col2.textContent = timeTaken.toFixed(3); // Display time with three decimal places
            totalTime += timeTaken;
        });

        // Add total row
        const totalRow = output.insertRow();
        const totalCell1 = totalRow.insertCell();
        const totalCell2 = totalRow.insertCell();
        totalCell1.textContent = 'Total';
        totalCell2.textContent = totalTime.toFixed(3);
    })
    .catch((e) => {
        console.log("Error: ", e);
    });

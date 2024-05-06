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
let rowLoading = document.createElement('tr');
let textLoading = "Loading. . .";
let td = document.createElement('td');
td.colSpan = 2;
td.textContent = textLoading;
rowLoading.appendChild(td);
output.appendChild(rowLoading);

Promise.all(arr)
    .then((results) => {
        output.deleteRow(0);
        let totalTime = 0;
        results.forEach((result) => {
            const row = output.insertRow();
            const col1 = row.insertCell();
            const col2 = row.insertCell();
            col1.textContent = result;
            const timeTaken = randomTime() / 1000; // Storing the random time in a variable
            col2.textContent = timeTaken.toFixed(3); // Using the stored random time in the calculation
            totalTime += timeTaken;
        });
        const totalRow = output.insertRow();
        const totalCell1 = totalRow.insertCell();
        const totalCell2 = totalRow.insertCell();
        totalCell1.textContent = 'Total';
        totalCell2.textContent = totalTime.toFixed(3);
    })
    .catch((e) => {
        console.log("Error: ", e);
    });
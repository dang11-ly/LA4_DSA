let queue = [];
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

for (let i = 0; i < customers.length; i++) {
    let customerName = prompt("Enter customer name:");
    queue.push(customerName);
    let queueNumber = queue.indexOf(customerName) + 1;
    alert("Your queue number is: " + queueNumber);
}

while (queue.length > 0) {
    let serviceNumber = parseInt(prompt("Enter service number:"));
    if (serviceNumber > 0 && serviceNumber <= queue.length) {
        let servedCustomer = queue[serviceNumber - 1];
        alert("Serving customer: " + servedCustomer);
        queue.splice(serviceNumber - 1, 1);
        console.log("Updated queue:", queue);
    } else {
        alert("Invalid service number.");
    }
}

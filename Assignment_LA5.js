let hashTable = [];
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let hashSize = 5; // Adjust as needed

function hash(name) {
    return name.length % hashSize;
}

for (let i = 0; i < customers.length; i++) {
    let customerName = customers[i];
    let index = hash(customerName);
    hashTable[index] = customerName;
    let queueNumber = index + 1;
    alert("Customer " + customerName + ", your queue number is: " + queueNumber);
}

while (hashTable.some(customer => customer !== undefined)) {
    let serviceNumber = parseInt(prompt("Enter service number:"));
    if (serviceNumber > 0 && serviceNumber <= hashSize) {
        if (hashTable[serviceNumber - 1]) {
            let servedCustomer = hashTable[serviceNumber - 1];
            alert("Serving customer: " + servedCustomer);
            hashTable[serviceNumber - 1] = undefined;
            console.log("Updated hash table:", hashTable);
        } else {
            alert("No customer at this service number.");
        }
    } else {
        alert("Invalid service number.");
    }
}

let patients = [
    { id: 1, name: "Alice Brown", age: 30, ward: "Cardiology" },
    { id: 2, name: "Bob Smith", age: 45, ward: "Orthopedics" },
    { id: 3, name: "Carol White", age: 12, ward: "Pediatrics" },
    { id: 4, name: "David Green", age: 60, ward: "Neurology" }
];

patients.push({ id: 5, name: "Eva Martinez", age: 72, ward: "Geriatrics" });

console.log("Patient added successfully.");

let oldestPatient = patients[0];

for (let i = 1; i < patients.length; i++) {
    if (patients[i].age > oldestPatient.age) {
        oldestPatient = patients[i];
    }
}

console.log("--- Oldest Patient ---");
console.log("Name:", oldestPatient.name);
console.log("Age:", oldestPatient.age);
console.log("Ward:", oldestPatient.ward);

let patients = [
    { id: 1, name: "Alice Brown", age: 30, ward: "Cardiology" },
    { id: 2, name: "Bob Smith", age: 45, ward: "Orthopedics" },
    { id: 3, name: "Carol White", age: 12, ward: "Pediatrics" },
    { id: 4, name: "David Green", age: 60, ward: "Neurology" }
];

let minimumAge = 18;

console.log("Patients aged", minimumAge, "and above:");

for (let i = 0; i < patients.length; i++) {
    if (patients[i].age < minimumAge) {
        continue;
    }
    console.log("Name:", patients[i].name, "| Age:", patients[i].age, "| Ward:", patients[i].ward);
}

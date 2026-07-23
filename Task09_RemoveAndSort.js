let patients = [
    { id: 1, name: "Alice Brown", age: 30, ward: "Cardiology" },
    { id: 2, name: "Bob Smith", age: 45, ward: "Orthopedics" },
    { id: 3, name: "Carol White", age: 12, ward: "Pediatrics" },
    { id: 4, name: "David Green", age: 60, ward: "Neurology" }
];

let removedPatient = patients.pop();

console.log("Removed Patient:", removedPatient.name);

patients.sort((a, b) => a.age - b.age);

console.log("Patients sorted by age:");

for (let i = 0; i < patients.length; i++) {
    console.log("Name:", patients[i].name, "| Age:", patients[i].age, "| Ward:", patients[i].ward);
}

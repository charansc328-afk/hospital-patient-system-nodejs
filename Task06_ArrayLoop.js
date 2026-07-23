let patients = [
    { id: 1, name: "Alice Brown", age: 30, ward: "Cardiology" },
    { id: 2, name: "Bob Smith", age: 45, ward: "Orthopedics" },
    { id: 3, name: "Carol White", age: 12, ward: "Pediatrics" },
    { id: 4, name: "David Green", age: 60, ward: "Neurology" }
];

for (let i = 0; i < patients.length; i++) {
    console.log("--- Patient Record ---");
    console.log("ID:", patients[i].id);
    console.log("Name:", patients[i].name);
    console.log("Age:", patients[i].age);
    console.log("Ward:", patients[i].ward);
}

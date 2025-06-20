// objects

const student = {
    name: "Ujjwal",
    age: 21,

};
console.log(student)
console.log(student.age)
console.log(student.name)

student.city = "Madhubani";
console.log(student)

student.city = "jalandhar";
console.log(student) // it will overite the above city name and prints jalandhar
console.log(student["name"])

delete student.city
console.log(student)

console.log(Object.keys(student)) // prints [ 'name', 'age' ]

const keys = Object.keys(student);
console.log(keys)   // prints [ 'name', 'age' ] same as above

const values = Object.values(student)
console.log(values) // prints [ 'Ujjwal', 21 ]



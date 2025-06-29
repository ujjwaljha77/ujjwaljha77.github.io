// from student details take student id to add to adress


db.adresss.insertMany([
  {
    student_id: ObjectId("685cdcc72314a800cc748a5f"),
    city: "Chicago",
    country: "USA"
  },
  {
    student_id: ObjectId("685cdd912314a800cc748a62"),
    city: "Toronto",
    country: "Canada"
  },
  {
    student_id: ObjectId("685cdd912314a800cc748a63"),
    city: "London",
    country: "UK"
  },
  {
    student_id: ObjectId("685cddce2314a800cc748a65"),
    city: "Sydney",
    country: "Australia"
  }
])



// now join both the database

db.student.aggregate([
  {
    $lookup: {
      from: "adresss",              // other collection name
      localField: "_id",            // field in student
      foreignField: "student_id",   // field in adresss
      as: "address"                 // output field (array)
    }
  }
])


db.employee.insertMany([
  {
    name: "Mike Tyson",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2525,
    location: "Hyderabad",
    date: new Date()
  },
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    department: "ML",
    salary: 2535,
    location: "Mumbai",
    date: new Date()
  },
  {
    name: "John Smith",
    email: "john@gmail.com",
    department: "HR",
    salary: 2800,
    location: "Delhi",
    date: new Date()
  },
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "Finance",
    salary: 3000,
    location: "Pune",
    date: new Date()
  },
  {
    name: "Aditya",
    email: "aditya@gmail.com",
    department: "DevOps",
    salary: 2700,
    location: "Bangalore",
    date: new Date()
  }
])


db.employee.UpdateOne({}, {$set:{}}) //  update only one detail
db.employee.UpdateMany({}, {$set:{}}) // update many details

db.employee.updateMany(
  {},
  { $set: { points: 0 } }
) // adds the points ection to every employeee

db.employee.updateMany(
  {},
  { $inc: { score: 10 } }
) // increment to 10


db.employee.updateMany( {},  { $rename: { "points": "score" } }) // renamed points name to score

db.employee.updateMany({}, {$push:{skills:"java, python"}}) // skiils section willl eb added to every employee
db.employee.updateMany({email:"john@gmail.com"}, {$push:{skills:"mern"}}) // mern will be added to john as many times as this cammnd execute this will will add
db.employee.updateMany({email:"john@gmail.com"}, {$pull:{skills:"mern"}}) // mern will be removed last mern if added many 

db.employee.updateMany({email:"john@gmail.com"}, {$addToSet:{skills:"mern"}}) // only one time mern will be added 


db.employye.updateOne({email:"aditya@gmail.com"},{$set:{name: "Brain"}},{upsert:true}) 
// Searches for a document with email: "aditya@gmail.com" in the employye collection.

// If found → updates the name to "Brain".

// If not found → inserts a new document with email: "aditya@gmail.com" and name: "Brain".

db.employee.deleteOne({ email: "aditya@gmail.com" }) //This will delete only one document where email is "aditya@gmail.com" (e.g. Brain).

db.employee.deleteMany({ department: "IT" }) // This will delete all employees from the "IT" department (in your case: 2 Mike Tysons).








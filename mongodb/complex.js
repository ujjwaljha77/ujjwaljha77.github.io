
// 4th task


mongosh

use employee

db.employee.insertOne({name:"john smith",email:"john@gmail.com",department:"SDE",salary:2525,location:"",date:Date()})

db.employee.insertMany([
  {
    name: "mike tyson",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2525,
    location: "Hyderabad",
    date: new Date()
  },
  {
    name: "Rahul",
    email: "rahul@gmmail.com",
    department: "ML",
    salary: 2535,
    location: "Mumbai",
    date: new Date()
  }
])


db.employee.find().skip(1) // skip 1st one i.e john
db.employee.find().skip(1).limit(1) // it will skip one and show only one out of two i.e mike tyson


db.employee.find().sort({name:1}) // it will sort names accordingly i.e john then mike then rahul
db.employee.find().sort({name:-1}) // it will sort reverse i.e mike rahul john
db.employee.find().sort({name:1}).limit(1) // displays john
db.employee.find().sort({name:1}).limit // displays mike

db.employee.find().sort({},{name:1})

db.employee.find({department:"SDE"}) // it will only give details of john as his deparment id SDE
db.employee.find({}, {name: 1 }) // it will print name and id of those
db.employee.find({}, {_id:0, name: 1 }) // it will not show the id part it will be disabled and show only name part
db.employee.find({}, {_id:false, name: true }) //it will not show the id part it will be disabled and show only name part

db.employee.find({location:"Hyderabad"}) // displays the details of the hyderabad person
db.employee.find({}, {EmpName:"$name"}) // it will show the name of every employee along with it but name heading will change to EmpName


db.employee.find({department:"SDE"}) // gives details of sde employye
db.employee.find({department: {$eq: "SDE"} }) // same give details of sde employee (equal to sde) $eq=sde

db.employee.find({ salary: {$gte: 2525} }) // it gives whose salary is greater than or equal 2525 $gte = 2525

db.employee.find({ salary: {$ne: 2525} }) // not equal to 2525
db.employee.find({ salary: {$gt: 2525} }) // greater than 2525
db.employee.find({ salary: {$ne: 2525} }, {name: 1}) // it gives only the names of employeee whose salary  is not equal to 2525

db.employee.find({ salary: {$ne: 2525}, department:{$eq: "SDE"} }, {name: 1}) // it gives only the name of that person whose salry is not equal to 2525 and department is equal to SDE
db.employee.find({ salary: {$ne: 2525}, department:{$eq: "SDE"} }, {_id: 0, name: 1}).limit(1) // show only one employyee name and asle disable the id part 


db.employee.find({salary: {gt:2525}} , {_id:0, salary:1}).limit(2)


db.users.deleteOne({ name: "Rahul" }) // it will delete the employee name if many rahul names are their then only one rahul details will be deleted


db.users.updateOne({ salary: { $eq: 2535 } }, { $set: { salary: 4001 } }) // here the employee whoose salary will be 2535 will be updated to 4001


db.employee.find({
  $and: [
    { salary: { $ne: 2001 } },
    { department: { $eq: "SDE" } }
  ]
})





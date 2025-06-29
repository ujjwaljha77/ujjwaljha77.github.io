db.employee.getIndexes() //  This will return a list of all indexes on the employee collection — usually includes at least the _id index by default.

db.employee.createIndex({email:1}) // Creates an ascending index on the email field.

db.employee.find({ email: "john@gmail.com" }).explain("executionStats")
// It gives detailed execution info, including:

// Field	Meaning
// "executionSuccess"	Whether the query ran successfully (true = ✅)
// "nReturned"	How many documents matched and were returned
// "totalKeysExamined"	How many index entries were scanned
// "totalDocsExamined"	How many actual documents were scanned
// "executionTimeMillis"	Time (in ms) it took to run the query
// "stage"	IXSCAN = Index used, COLLSCAN = Full scan (slow)



db.employee.aggregate([{ $match: { department: "IT" } }, { $project: { name: 1, salary: 1 } }]) // Match employees from IT department and show only their name and salary
 db.employee.aggregate([{ $match: { department: "IT" } }, { $project: { name: 1, salary: 1 } }, {$sort:{salary:1}},]) // it woill also sort
 db.employee.aggregate([{ $match: { department: "IT" } }, { $project: { name: 1, salary: 1 } }, {$sort:{salary:1}},{$limit:3}]) // it will also limit

db.employee.aggregate([{ $group: { _id: "department", total: {$sum: "$salary"} } } ])   //  This groups everything under a string "department" instead of grouping by the field.


db.employee.aggregate([{ $group: { _id: "$department", total: { $sum: "$salary" } } }])
// Groups employees by department
// Calculates the total salary for each department

db.employee.aggregate([{empname:{$name}}])


// spread operators
let marks = {
  English: 20,
};

marks = { ...marks, Maths: 90 };
console.log(marks);  // { English: 20, Maths: 90 }


let students =['Ujjwal','Jyoti']
students =[...students,'rahul']
console.log(students)
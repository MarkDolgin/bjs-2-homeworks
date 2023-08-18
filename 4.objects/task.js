function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Майя", "женский", 20);
let student2 = new Student("Марк", "мужской", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
    return undefined;
}
  this.marks.push(...marks);
} 

Student.prototype.getAverage = function () {
  if(this.marks === undefined || this.marks.lenght === 0){
    return 0;
}
  let avg = this.marks.reduce((acc, marc) => acc + marc, 0) / this.marks.lenght;
  return avg;
}

Student.prototype.exclude = function (reason) {
  delete this.subjects;
  delete this.marks;
  this.exludes = reason;
}

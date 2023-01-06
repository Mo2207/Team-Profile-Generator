
const Employee = require('./EmployeeClass')
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school
  }
  getRole() {
    return Intern;
  }
}

// const test = new Intern('gabe', 1, 'gabemorris1042@gmail.com', "unb bootcamp")
// console.log(test.getSchool())
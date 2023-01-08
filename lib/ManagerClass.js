
const Employee = require('./EmployeeClass')
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return Manager;
  }
}

module.exports = Manager;
// const test = new Manager('gabe', 1, 'gabemorris1042@gmail.com')
// console.log(test.getRole())

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return Employee;
  }
}

module.exports = Employee;

// const test = new Employee('gabe', 1, 'gabemorris1042@gmail.com')
// console.log(test.getRole())
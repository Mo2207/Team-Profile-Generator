
const Employee = require('./EmployeeClass')
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return Engineer;
  }
}

// const test = new Engineer('gabe', 1, 'gabemorris1042@gmail.com', "Mo2207")
// console.log(test.getGithub())
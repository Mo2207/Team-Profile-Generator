
const inquirer = require('inquirer');
const fs = require('fs');

let allInput;

function managerPrompts() {
  inquirer
  // required manager prompts
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Enter the name of the team manager'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the employee Id of the team manager'
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Enter the email address of the team manager'
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'Enter the office number of the team manager'
    },
    {
      type: 'list',
      name: 'otherEmployees',
      message: 'Choose to add additional employees, or finish building your team',
      choices: ['Engineer', 'Intern', 'Finish my team']
    }
  ])
  .then((data) => {
    allInput = data
    if(data.otherEmployees == 'Engineer') {
      allInput.engineers = [];
      engineerPrompts();
    }
    if(data.otherEmployees == 'Intern') {
      allInput.interns = [];
      internPrompts();
    }
    else if (data.otherEmployees == 'Finish my team') {
      generateHTML(allInput);
    }
  })
}

function engineerPrompts() {
  inquirer
  // optional engineer prompts
  .prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'Enter the name of the engineer'
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Enter the employee Id of the engineer'
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'Enter the email address of the engineer'
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Enter the Github username of the engineer'
    },
    {
      type: 'list',
      name: 'otherEmployees',
      message: 'Choose to add additional employees, or finish building your team',
      choices: ['Engineer', 'Intern', 'Finish my team']
    }
  ])
  .then((data) => {
    allInput.engineers.push(data)
    if(data.otherEmployees == 'Engineer') {
      engineerPrompts()
    }
    if(data.otherEmployees == 'Intern') {
      if(!allInput.interns) {
        allInput.interns = [];
      }
      internPrompts()
    }
    else if (data.otherEmployees == 'Finish my team') {
      generateHTML(allInput);
    }
  })
}

function internPrompts() {
  inquirer
  // optional engineer prompts
  .prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'Enter the name of the intern'
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Enter the employee Id of the intern'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'Enter the email address of the intern'
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Enter the school on the intern'
    },
    {
      type: 'list',
      name: 'otherEmployees',
      message: 'Choose to add additional employees, or finish building your team',
      choices: ['Engineer', 'Intern', 'Finish my team']
    }
  ])
  .then((data) => {
    allInput.interns.push(data)
    if(data.otherEmployees == 'Engineer') {
      if(!allInput.engineer) {
        allInput.engineers = [];
      }
      engineerPrompts()
    }
    if(data.otherEmployees == 'Intern') internPrompts()
    else if (data.otherEmployees == 'Finish my team') {
      generateHTML(allInput);
    }
  })
}

function generateHTML(input) {
  console.log(input)
}

managerPrompts();
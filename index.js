
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
      if(!allInput.engineers) {
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

  if (input.engineers) {
    // use var to declare variable outside of this if block as well
    var engineerHTML = '';
    input.engineers.forEach(item => {
      engineerHTML += `
  <div class="card" style="width: 17rem;">
    <img src="../images/blank-profile-picture.jpeg" class="card-img-top" alt="default profile picture">
    <div class="card-body">
      <h5 class="card-title">Engineer <span class="material-symbols-outlined">
      terminal
      </span></h5>
      <h3 class="card-name">${item.engineerName}</h3>
      <p class="card-text">ID: ${item.engineerId}</p>
      <p class="card-text">Email: ${item.engineerEmail}</p>
      <a href="https://github.com/${item.engineerGithub}" class="btn btn-primary">Github</a>
    </div>
  </div>
  `
    })
  }

  if (input.interns) {
    // use var to declare variable outside of this if block as well
    var internHTML = '';
    input.interns.forEach(item => {
      internHTML += `
  <div class="card" style="width: 17rem;">
    <img src="../images/blank-profile-picture.jpeg" class="card-img-top" alt="default profile picture">
    <div class="card-body">
      <h5 class="card-title">Intern <span class="material-symbols-outlined">
      school
      </span></h5>
      <h3 class="card-name">${item.internName}</h3>
      <p class="card-text">ID: ${item.internId}</p>
      <p class="card-text">Email: ${item.internEmail}</p>
      <p class="card-text">School: ${item.internSchool}</p>
    </div>
  </div>
  `
    })
  }

  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <title>Our Team</title>
</head>
<body>
<div class="intro">
  <h1>Our Team</h1>
</div>
<div class="employees">
  <div class="card" style="width: 17rem;">
    <img src="../images/blank-profile-picture.jpeg" class="card-img-top" alt="default profile picture">
    <div class="card-body">
      <h5 class="card-title">Manager <span class="material-symbols-outlined">
      coffee
      </span></h5>
      <h3 class="card-name">${input.managerName}</h3>
      <p class="card-text">ID: ${input.managerId}</p>
      <p class="card-text">Email: ${input.managerEmail}</p>
      <p class="card-text">Office #${input.managerOfficeNumber}</p>
    </div>
  </div>
  ${engineerHTML || ''}
  ${internHTML || ''}
</div>
</body>
</html>
`

  fs.writeFile('./dist/index.html', html, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully");
    }
  })
}

managerPrompts();
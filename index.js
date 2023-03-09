// TODO: Include packages needed for this application
var fs = require ('fs');
const inquirer =require('inquirer');
var gM = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Describe your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Installation instructions?',
        name: 'instructions',
      },
      {
        type: 'list',
        message: 'License',
        name: 'license',
        choices:["The MIT License","Mozilla Public License 2.0","Attribution License (BY)","Open Database License (ODbL)"],
      },
      {
        type: 'input',
        message: 'How do users access your project?',
        name: 'usageInfo',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contributionGuidelines',
      },
      {
        type: 'input',
        message: 'what is your github username?',
        name: 'githubUsername',
      },
      {
        type: 'email',
        message: 'what is your email?',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var answers = gM.generateMarkdown(data)
  fs.writeFile(fileName,answers, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("./results/README.md",data);
  })
}

// Function call to initialize app
init();

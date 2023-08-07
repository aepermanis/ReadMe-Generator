// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = 
[
    {
        name: "Title",
        message: "What is the title of your project?",
        type: "input",
    },
    {
        name: "Description",
        message: "Describe the functionality and purpose of your project?",
        type: "input",
    },
    {
        name: "Installation",
        message: "What steps are required to install your project?",
        type: "input",
    },
    {
        name: "Usage",
        message: "How would a user go about interacting with your project?",
        type: "input"
    },
    {
        name: "Credits",
        message: "Who helped contribute to this project?",
        type: "input"
    },
    {
        name: "License",
        message: "What license is this project using?",
        type: "input"
    },
    {
        name: "Features",
        message: "Describe the project features",
        type: "input"
    },
    {
        name: "Contribute",
        message: "How can the Community add to your project?",
        type: "input"
    },
    {
        name: "Tests",
        message: "What tests have been run and how do users run them?",
        type: "input"
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const mark = generateMarkdown(data)
    fs.writeFileSync(fileName,mark);
    
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile(answers.Title, answers);
    })
    
    
}

// Function call to initialize app
init();

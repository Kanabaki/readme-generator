// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const genMark = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
 const questions = [
        {
            type: "input",
            message: "What would you like to title your readme?",
            name: "title",
        },
        {
            type: "input",
            message:"What was your motivation for the project?",
            name: "description",
        },
        {
            type: "input",
            message:"Why did you build this project?",
            name: "description",
        },
        {
            type: "input",
            message:"What problem does it solve?",
            name: "description",
        },
        {
            type: "input",
            message:"What did you learn?",
            name: "description",
        },
        {
            type: "input",
            message:"What are the steps required to install your project?",
            name: "installation",
        },
        {
            type: "input",
            message:"Enter instructions and examples for use.",
            name: "usage",
        },
        {
            type: "list",
            message: "Choose a License",
            name: "license",
            choices: ["MIT","Apache","GPLv2","GPLv3","none",]   
        },
        {
            type: "input",
            message:"Contributing",
            name: "contributing",
        },
        {
            type: "input",
            message:"Tests",
            name: "tests",
        },
        {
            type: "input",
            message:"Questions",
            name: "questions",
        },
        {
            type: "input",
            message:"Enter your GitHub username",
            name: "github",
        },
        {
            type: "input",
            message:"Enter your email address",
            name: "email",
        },
];
   

// TODO: Create a function to write README file =========================================
// function writeToFile(fileName,Data)

function writeToFile(markdown) {
fs.writeFile("MikanREADME.md", markdown, (err) => {
if (err)
console.log(err);
else {
    console.log("File written successfully\n")
}
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answeredData) => {
        console.log(answeredData.title)
        const importedGen = genMark(answeredData);
        console.log(importedGen)
        writeToFile(importedGen)
    })
}

// Function call to initialize app
init();

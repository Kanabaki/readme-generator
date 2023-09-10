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
        // Description:
        // What was your motivation?
        // Why did you build this project?
        // What problem does it solve?
        // What did you learn?
        // Table of Contents
        // Installation
        // Usage

        {
            type: "list",
            message: "Choose a License",
            name: "license",
            choices: ["MIT","none",]   
        }

        // Contributing
        // Tests
        // Questions
        // enter my GitHub username
        // enter my email address
];
   

// TODO: Create a function to write README file =========================================
// function writeToFile(fileName,Data)

function writeToFile(markdown) {
fs.writeFile("MikanREADME.md", markdown, (err) => {
if (err)
console.log(err);
else {
    console.log("File written successfully\n")
    console.log("mikankanmikankanmikan")
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

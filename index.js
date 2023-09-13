// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const genMark = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
 const questions = [
        {
            type: "input",
            message:`Title:
"What would you like to title your readme?\n`,
            name: "title",
        },
        {
            type: "input",
            message:`Description:
What was your motivation for the project?\n`,
            name: "description",
        },
        {
            type: "input",
            message:`Description:
Why did you build this project?\n`,
            name: "description1",
        },
        {
            type: "input",
            message:`Description:
What problem does it solve?\n`,
            name: "description2",
        },
        {
            type: "input",
            message:`Description:
What did you learn?\n`,
            name: "description3",
        },
        {
            type: "input",
            message:`Installation:
What are the steps required to install your project?\n`,
            name: "installation",
        },
        {
            type: "input",
            message:`Usage:
Enter instructions and examples for use.\n`,
            name: "usage",
        },
        {
            type: "list",
            message: `License:
Choose a License (Use Arrow keys and press Enter to make your selection)`,
            name: "license",
            choices: ["MIT","Apache","GPLv2","GPLv3","none",]   
        },
        {
            type: "input",
            message:`Contributing:
If you would like other developers to contribute to this app or package, you 
can include guidelines for it here\n`,
            name: "contributing",
        },
        {
            type: "input",
            message:`Tests:
If you've written tests for your app, you can provide examples on how to run them here\n`,
            name: "tests",
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
fs.writeFile("Sample-README.md", markdown, (err) => {
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

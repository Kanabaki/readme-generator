// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT" ){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else{
return ""
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "none"){
return "";
  }else{
  return  "- [License](#License)"
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "none"){
    return "";
      }else{
      return `## License
${license}`
      }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(inputData) {
  return `
  # ${inputData.title}
${renderLicenseBadge(inputData.license)}
  ## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
${renderLicenseLink(inputData.license)}
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Description 
${inputData.description}

## Installation
${inputData.installation}

## Usage
${inputData.usage}

${renderLicenseSection(inputData.license)}

## Contributing 
${inputData.contributing}

## Tests 
${inputData.tests}

## Questions 
${inputData.github}
${inputData.email}

`;
}

module.exports = generateMarkdown;

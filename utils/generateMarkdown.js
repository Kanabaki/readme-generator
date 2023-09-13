// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT" ){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license == "Apache"){
return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if (license == "GPLv2"){
return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
}else if (license == "GPLv3"){
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
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
  return"- [License](#license)"
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "none"){
    return "";
      }else{
      return `## License
License: ${license}`
      }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(inputData) {
  return `
  # ${inputData.title}
${renderLicenseBadge(inputData.license)}
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(inputData.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

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
If you have questions regarding the app, you can reach out to my github or email.

GitHub: https://github.com/${inputData.github}

Email: ${inputData.email}

`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  }
  else if (license === "Apache2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  }
  else if (license === "GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  }
  else if (license === "Boost Software License 1.0") {
    return "https://choosealicense.com/licenses/bsl-1.0/"
  }
  else { return "" }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

----

![${data.license}](https://img.shields.io/badge/License-${data.license}-blueviolet)

## Table of Contents

*[Description](#description)

*[Installation](#installation)

*[Usage](#usage)

*[Contribution](#contribute)

*[How to test](#test)

*[Contact Me](#Contact-Information)
  
## Description
${data.description}
  
## Installation
${data.installation}
  
## Usage
${data.usage}

## License
${data.license}

## Contribution
${data.contribute}
  
## How to Test
${data.test}
  
## Contact-Information
[Github Profile](https://github.com/${data.username})

${data.email}
`;
}

module.exports = generateMarkdown;

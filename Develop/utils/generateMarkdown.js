// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");
let licResponse = ["None",
"Apache2.0",
"GNU Public v3.0",
"MIT",
"Boost Software 1.0",
"Creative Commons Zero v1.0 Universal",
"Eclipse Public 2.0",
"GNU Affero General Public v3.0",
"GNU General Public v2.0",
"GNU Lesser General Public v2.1",
"Mozilla Public 2.0",
"the Unilicense"]


// If there is no license, return an empty string
function renderLicenseBadge(license) {
      for (let i = 0; i < licResponse.length; i++) {
        
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

----

<a href="https://img.shields.io/badge/License-${data.choices}-brightgreen"><img src="https://img.shields.io/badge/License-${data.choices}-brightgreen"></a>

## Table of Contents 
  -[Description](#Descriptiod)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribute)
  -[How to test](#test)
  -[Contact Me](#Contact-Information)
  
  ### Description
  ${data.description}
  
  ### Installation
  ${data.installation}
  
  ### Usage
  ${data.usage}

  ### License
  ${data.choices}
  
  ### Contribution
  ${data.contribute}
  
  ### How to Test
  ${data.test}
  
  ### Contact-Information
  [Github Profile](https://github.com/${data.username})
  ${data.email}
  `;
}

module.exports = generateMarkdown;

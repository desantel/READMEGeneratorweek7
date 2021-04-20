// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
let generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "Please desribe application?",
            name: "description",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } }
        },
        {
            type: "input",
            message: "How do you install the application?",
            name: "installation",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } }
        },
        {
            type: "input",
            message: "How do you use the application?",
            name: "usage",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } }
        },
        {
            type: "list",
            message: "What is the license type?",
            name: "license",
            choices: [
                "None",
                "Apache2.0",
                "MIT",
                "GPLv3",
                "GPLv2",
            ]
            // validate: (value) => { if (value) { return true } else { return "Please choose value" } }
        },
        {
            type: "input",
            message: "Who all helped contribute?",
            name: "contribute",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } }
        },
        {
            type: "input",
            message: "How do you test the application?",
            name: "test",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } }
        },
        {
            type: "input",
            message: "Please enter email address",
            name: "email",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } }
        },
        {
            type: "input",
            message: "Please enter github username, @ is not needed",
            name: "username",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } }
        }
    ])
};
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeRead(data, err => {
        if (err) {
            return console.log("error")
        }
        console.log("It worked!")
    });
}

// TODO: Create a function to initialize app
const init = () => {
    promptQuestions()
        .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
        .catch((err) => console.error(err));

};

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        message: "What is the name of your project?",
        name: "Title",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}},
    },
    {
        type: "input",
        message: "What is the table of contents?",
        name: "Table of Contents",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}}
    },
    {
        type: "input",
        message: "How do you install the application?",
        name: "Installation",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}}
    },
    {
        type: "input",
        message: "How do you use the application?",
        name: "Usage",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}}
    },
    {
        type: "input",
        message: "What is the license type?",
        name: "License",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}}
    },
    {
        type: "input",
        message: "Who all helped contribute?",
        name: "Contributing",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}}
    },
    {
        type: "input",
        message: "How do you test the application?",
        name: "Tests",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}}
    },
    {
        type: "input",
        message: "How are you reached for further questions?",
        name: "Questions",
        validate: (value) => {if(value) {return true} else {return "Please enter value"}}
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeRead(fileName, data, err => {
        if (err) {
            return console.log("error")
        }
        console.log("It worked!")
    });
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();

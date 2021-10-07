// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your README project?",
        name: "title",
    },
    {
        type: "checkbox",
        message: "Check off what you want included in the table of contents.",
        name: "content",
        choices: ["Description","Installation","Usage Information","License","Contributors","Tests","Questions"],
    },
    {
        type: "input",
        message: "Write a description of the project.",
        name: "description",
    },
    {
        type: "input",
        message: "Describe how you install the project.",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use your application?",
        name: "usage",
    },
    {
        type: "confirm",
        message: "Would you like to add an MIT License to your project?",
        name: "license",
    },
    {
        type: "input",
        message: "Who contributed to this project? Be sure to include contact info.",
        name: "contributors",
    },
    {
        type: "input",
        message: "Write tests for your application.",
        name: "test",
    },
    {
        type: "input",
        message: "How can users/developers contact you with any questions?",
        name: "questions",
    },

])
.then((response) => {
    //Use user feedback for whatever
    console.log(response);
});




// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


/*
Title
Description
table of contents
installation
usage
license
contributors
tests
questions
*/
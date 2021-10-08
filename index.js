// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/generateMarkdown');
// const fileName;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description of the project.",
        name: "description",
    },
    {
        type: "input",
        message: "What do you need to install this project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use your application?",
        name: "usage",
    },
    {
        type: "list",
        message: "Would you like to add an MIT License to your project?",
        name: "license",
        choices: ["MIT","Apache 2.0", "Mozilla 2.0", "GNU GPLv3"],
    },
    {
        type: "input",
        message: "Who contributed to this project? Be sure to include contact info.",
        name: "contributors",
    },
    {
        type: "input",
        message: "How do you test your application?",
        name: "test",
    },
    {
        type: "input",
        message: "Enter your contact information for user questions.",
        name: "questions",
    },
        ]

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        //Use user feedback for whatever
            console.log(response);
            writeToFile('readMeEx.md', createMarkdown(response));
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

}

    
// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (err) => {
        if(err){
            return console.log(err);
        }
        else{
            console.log(`${fileName} was created`);
        }
    });
}
    

// Function call to initialize app
init();
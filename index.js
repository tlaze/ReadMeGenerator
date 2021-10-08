// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/generateMarkdown');
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your README project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description of the project.",
        name: "description",
    },
    // {
    //     type: "input",
    //     message: "Describe how you install the project.",
    //     name: "installation",
    // },
    // {
    //     type: "input",
    //     message: "How do you use your application?",
    //     name: "usage",
    // },
    // {
    //     type: "list",
    //     message: "Would you like to add an MIT License to your project?",
    //     name: "license",
    //     choices: ["MIT"],
    // },
    // {
    //     type: "input",
    //     message: "Who contributed to this project? Be sure to include contact info.",
    //     name: "contributors",
    // },
    // {
    //     type: "input",
    //     message: "Write tests for your application.",
    //     name: "test",
    // },
    // {
    //     type: "input",
    //     message: "How can users/developers contact you with any questions?",
    //     name: "questions",
    // },
        ]


    
// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, JSON.stringify(response), (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("It worked");
        }
    });
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        //Use user feedback for whatever
         console.log(response);
         writeToFile(fileName, createMarkdown(response));
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

}

// Function call to initialize app
init();
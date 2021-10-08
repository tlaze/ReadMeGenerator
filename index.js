// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/generateMarkdown');
const fileName = "README.md";
// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
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
    //     type: "confirm",
    //     message: "Would you like to add an MIT License to your project?",
    //     name: "license",
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
        ])
    .then((response) => {
        //Use user feedback for whatever
        console.log(response);
        generateMarkdown(response);

    })
    .catch((err) => {
        console.log("Error: ", err);
    });
    
function generateMarkdown(response){
    fs.writeFile('generateMarkdown.js', JSON.stringify(response), (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("It worked");
        }
    });
}


    
//     // TODO: Create a function to write README file
// function writeToFile(createMarkdown, response,(err) => {

// });

    
// TODO: Create a function to initialize app
function init() {
    let response = questions();
    // writeToFile(createMarkdown, response);
}

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
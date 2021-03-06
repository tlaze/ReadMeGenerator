// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/generateMarkdown');
const fileName = 'READMESample.md'; //Name of file that will be created and have data sent to

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "userEmail",
    },
    {
        type: "input",
        message: "What is your Github Username?",
        name: "userGitHub",
    },
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
        choices: ["MIT","Apache", "Mozilla", "GNU", "None"],
    },
    {
        type: "input",
        message: "Who contributed to this project? Be sure to include contact info.",
        name: "contributors",
    },
    {
        type: "input",
        message: "How do you test your application?",
        name: "tests",
    },
    {
        type: "input",
        message: "Copy the path to a screenshot.",
        name: "screenshot",
    },
    {
        type: "input",
        message: "Enter the URL to the live application",
        name: "liveapp",
    },
    {
        type: "input",
        message: "Enter the URL to the project repository",
        name: "repository",
    },
        ]

// TODO: Create a function to initialize app
function init() {
    //calls inquirer dependency and uses questions array as argument
    inquirer.prompt(questions)
    .then((response) => {
            console.log(response);
            //Sends file name and responses to function to create file
            writeToFile(fileName, createMarkdown(response));
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

}

    
// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    //Creates new file and stores answers
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
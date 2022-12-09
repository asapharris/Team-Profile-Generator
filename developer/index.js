const fs = require('fs');
const generateHTML = require('./generateHTML');
const inquirer = require('inquirer');

const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your company's name?",
                name: 'company',
            },
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'manager',
            },
            {
                type: 'input',
                message: "What is the manager's id?",
                name: 'managerId',
            },
            {
                type: 'input',
                message: "what is the manager's email address?",
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: "what is the manager's office number?",
                name: 'officeNumber',
            },
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internName',
            },
            {
                type: 'input',
                message: "What is the intern's id?",
                name: 'internId',
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'internEmail',
            },
            {
                type: 'input',
                message: "what is the intern's school?",
                name: 'school',
            },
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'engineerName',
            },
            {
                type: 'input',
                message: "What is the engineer's id?",
                name: 'engineerId',
            },
            {
                type: 'input',
                message: "what is the engineer'''s email address?",
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: "what is the engineer's Github?",
                name: 'github',
            },
        ])
        .then(input => {
            return input;
        })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('HTML has been created!')
    })
}

function init() {
    addEmployee()
        .then(input => {
            return generateHTML(input);
        })
        .then(html => {
            writeToFile('index.html', html);
        })
        .catch(err => {
            console.log(err);
        })
}

init();



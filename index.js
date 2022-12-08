const fs = require('fs');
const generateHTML = require('./generateHTML');
const inquirer = require('inquirer');
const teamMembers = [];

const managerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your companies name?',
                name: 'company',
            },
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'manager-name',
            },
            {
                type: 'input',
                message: 'What is the managers id?',
                name: 'manager-id',
            },
            {
                type: 'input',
                message: 'what is the managers email address?',
                name: 'manager-email',
            },
            {
                type: 'input',
                message: 'what is the managers office number?',
                name: 'office-number',
            },
        ]).then(input => {
            return input;
        }
        );
}

const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Would you like to add an intern?',
                name: 'add-intern',
                default: false
            },
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'intern-name',
            },
            {
                type: 'input',
                message: 'What is the interns id?',
                name: 'intern-id',
            },
            {
                type: 'input',
                message: 'what is the interns email address?',
                name: 'intern-email',
            },
            {
                type: 'input',
                message: 'what is the interns school?',
                name: 'school',
            },
            {
                type: 'confirm',
                message: 'Would you like to add another intern?',
                name: 'add-intern2',
                default: false
            },
        ])
        .then(input => {
            return input;
        }
        );
}

const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Would you like to add an engineer?',
                name: 'add-intern',
                default: false
            },
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'engineer-name',
            },
            {
                type: 'input',
                message: 'What is the engineers id?',
                name: 'engineer-id',
            },
            {
                type: 'input',
                message: 'what is the engineers email address?',
                name: 'engineer-email',
            },
            {
                type: 'input',
                message: 'what is the engineers Github?',
                name: 'github',
            },
            {
                type: 'confirm',
                message: 'Would you like to add another engineer?',
                name: 'add-engineer2',
                default: false
            },
        ])
        .then(input => {
            return input;
        }
        );
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('HTML has been created!')
    })
}

function init() {
    managerQuestions()
        .then(addIntern)
        .then(addEngineer)
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
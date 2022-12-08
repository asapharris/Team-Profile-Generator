const Manager = require('../Manager');

class Intern extends Manager {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.github = github;
        this.email = email;
    }
}

const Intern = new Intern();
Intern.printInfo();
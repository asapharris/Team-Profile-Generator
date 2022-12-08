const Manager = require('../Manager');

class Engineer extends Manager {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.github = github;
        this.email = email;
    }
}

const Engineer = new Engineer();
Engineer.printInfo();
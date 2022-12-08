class Manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.officeNumber = officeNumber;
      this.email = email;
    }
  
    printInfo() {
      console.log(`The manager's name is ${this.name}, to reach him call ${this.officeNumber} or email ${this.email}.`);
    }
  }
  module.exports = Manager;
const { it } = require('node:test');
const Manager = require('../classes/Manager');

describe ("Manager", () => {
it ("should create a new manager object"), () => {
    const managerObject = new Manager();
    expect(typeof managerObject).toBe('object');
};

it ("should add a name property to manager object"), () => {
    const name = 'Dwight';
    const managerObject = new Manager(name);
    expect(managerObject.name).toBe('Dwight');
};

it ("should add an id property to manager object"), () => {
    const id = 123;
    const managerObject = new Manager('Dwight', id);
    expect(managerObject.id).toBe(123);
};
});
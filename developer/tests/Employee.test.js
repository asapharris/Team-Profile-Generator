const { it } = require('node:test');
const Employee = require('../classes/Employee');

describe ("Employee", () => {
it ("should create a new employee object"), () => {
    const employeeObject = new Employee();
    expect(typeof employeeObject).toBe('object');
};

it ("should add a name property to employee object"), () => {
    const name = 'Dwight';
    const employeeObject = new Employee(name);
    expect(employeeObject.name).toBe('Dwight');
};

it ("should add an id property to engineer object"), () => {
    const id = 123;
    const employeeObject = new Employee('Dwight', id);
    expect(employeeObject.id).toBe(123);
};
});
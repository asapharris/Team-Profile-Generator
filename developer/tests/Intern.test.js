const { it } = require('node:test');
const Intern = require('../classes/Intern');

describe ("Intern", () => {
it ("should create a new intern object"), () => {
    const internObject = new Intern();
    expect(typeof internObject).toBe('object');
};

it ("should add a name property to intern object"), () => {
    const name = 'Dwight';
    const internObject = new Intern(name);
    expect(internObject.name).toBe('Dwight');
};

it ("should add an id property to intern object"), () => {
    const id = 123;
    const internObject = new Intern('Dwight', id);
    expect(internObject.id).toBe(123);
};
});
const { it } = require('node:test');
const Engineer = require('../classes/Engineer');

describe ("Engineer", () => {
it ("should create a new engineer object"), () => {
    const engineerObject = new Engineer();
    expect(typeof engineerObject).toBe('object');
};

it ("should add a name property to engineer object"), () => {
    const name = 'Dwight';
    const engineerObject = new Engineer(name);
    expect(engineerObject.name).toBe('Dwight');
};

it ("should add an id property to engineer object"), () => {
    const id = 123;
    const engineerObject = new Engineer('Dwight', id);
    expect(engineerObject.id).toBe(123);
};
});
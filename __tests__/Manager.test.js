const Manager = require("../lib/Manager.class");

//Shortens the Manager object to include all values as a variable
const createManager = () => new Manager("name", "id", "email", "officeNumber");

describe("Manager", () => {
  //Calling Manager class as a function for a new instance of intern
  it("Should not error when called", () => {
    const manager = createManager();
  });
  //getName, ID, and email already proven in Employee test
  //Testing the role function
  it("Should generate a value of 'Manager' when getRole is called, *overriding* the Employee value", () => {
    const manager = createManager();
    expect(manager.getRole()).toEqual("Manager");
  });
  //Testing the getOfficeNumber function
  it("Should retrieve the user value generated for 'officeNumber' when getOfficeNumber is called", () => {
    const manager = createManager();
    expect(manager.getOfficeNumber()).toEqual("officeNumber");
  });
});

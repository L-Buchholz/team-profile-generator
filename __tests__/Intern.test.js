const Intern = require("../lib/Intern.class");

//Shortens the Intern object to include all values as a variable
const createIntern = () => new Intern("name", "id", "email", "school");

describe("Intern", () => {
  //Calling Intern class as a function for a new instance of intern
  it("Should not error when called", () => {
    const intern = createIntern();
  });
  //getName, ID, and email already proven in Employee test
  //Testing the role function
  it("Should generate a value of 'Intern' when getRole is called, *overriding* the Employee value", () => {
    const intern = createIntern();
    expect(intern.getRole()).toEqual("Intern");
  });
  //Testing the getSchool function
  it("Should retrieve the user value generated for 'school' when getSchool is called", () => {
    const intern = createIntern();
    expect(intern.getSchool()).toEqual("school");
  });
});

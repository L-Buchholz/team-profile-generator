const Engineer = require("../lib/Engineer.class");

//Shortens the Engineer object to include all values as a variable
const createEngineer = () => new Engineer("name", "id", "email", "gitHub");

describe("Engineer", () => {
  //Calling Engineer class as a function for a new instance of engineer
  it("Should not error when called", () => {
    const engineer = createEngineer();
  });
  //getName, ID, and email already proven in Employee test
  //Testing the getGitHub function
  it("Should retrieve the user value generated for 'gitHub' (profile) when getGitHub is called", () => {
    const engineer = createEngineer();
    expect(engineer.getGitHub()).toEqual("gitHub");
  });
  //Testing the getGitHubURL function
  it("Should add the user value generated for 'gitHub' to an existing URL string when getGitHubURL is called", () => {
    const engineer = createEngineer();
    expect(engineer.getGitHubURL()).toEqual("https://github.com/gitHub");
  });
  //Testing the role function
  it("Should generate a value of 'Engineer' when getRole is called, *overriding* the Employee value", () => {
    const engineer = createEngineer();
    expect(engineer.getRole()).toEqual("Engineer");
  });
});

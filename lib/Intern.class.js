const Employee = require("./Employee.class");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  /*For the record, a bug was caught here by the test function 
  ("Itern" was accidentally entered instead of "Intern")*/
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
  // Functions declared in classes don't require "function" keyword
  render() {
    return `a big blob of html`;
  }
}

module.exports = Intern;

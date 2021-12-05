const Employee = require("./Employee.class");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getRole() {
    return "Engineer";
  }
  getGitHub() {
    return this.gitHub;
  }
  getGitHubURL() {
    return "https://github.com/" + this.gitHub;
  }
  // Functions declared in classes don't require "function" keyword
  render() {
    return `a big blob of html`;
  }
}

module.exports = Engineer;

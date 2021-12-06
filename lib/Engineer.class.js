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
    return `<div class="col-12 col-md-4">
    <div class="card">
      <h3 class="card-header">
        <span class="employee-name">${this.name}</span>
        <p>
          <img
            id="employee-role-icon"
            src="https://img.icons8.com/material-rounded/24/000000/small-business.png"
          />
          <span class="employee-role">${this.getRole()}</span>
        </p>
      </h3>
      <div class="card-body row">
        <ul class="card-text" style="list-style-type: none">
          <li>
            ID:
            <span class="employee-number">${this.id}</span>
          </li>
          <li>
            Email:
            <span class="employee-email"><a href="mailto:${this.email}">${
      this.email
    }</a></span>
          </li>
          <li>
            GitHub:
            <span class="engineer-github-link"
              ><a href="${this.getGitHubURL()}" target="_blank"
                >${this.gitHub}</a
              ></span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Engineer;

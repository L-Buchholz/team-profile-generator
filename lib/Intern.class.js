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
                      <span class="employee-email"><a href="mailto:${
                        this.email
                      }">${this.email}</a></span>
                    </li>
                    <li>
                      School:
                      <span class="intern-school">${this.school}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
  }
}

module.exports = Intern;

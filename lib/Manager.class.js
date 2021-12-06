const Employee = require("./Employee.class");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
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
            Office number:
            <span class="manager-office-number"
              >${this.officeNumber}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Manager;

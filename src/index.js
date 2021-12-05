/*Packages required for README application -- JEST not included*/
const inquirer = require("inquirer");

const fs = require("fs");
const Manager = require("../lib/Manager.class");

/*Array of user input questions*/
const managerQuestions = [
  {
    type: "input",
    message: "Welcome! What is your team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter an employee ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter a valid email address for this employee:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the manager's office number:",
    name: "office",
  },
];

const listOptions = [
  {
    type: "list",
    message: "Thank you! Please select one of the following options:",
    name: "license",
    choices: ["* Add an engineer", "* Add an intern", "* Finish and exit"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter an employee ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter a valid email address for this employee:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub username:",
    name: "github-username",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter an employee ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter a valid email address for this intern:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the intern's affiliated school:",
    name: "school",
  },
];

function promptForManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    console.log(response);
  });
}

//function promptForEngineer =

//function promptForIntern =

//function promptForListOptions =

const manager = new Manager("Ted", 23, "email@email", 2);

const htmlString = fs.readFileSync("index.html", "utf8");

const templateHtml = htmlString.replace(
  "<!--THIS IS THE INSERTION POINT-->",
  //Temp code to try this out
  `
  <div class="card">
    <h3 class="card-header">
      <span class="employee-name">${manager.name}</span>
          <p>
            <img
              id="employee-role-icon"
              src="https://img.icons8.com/material-rounded/24/000000/small-business.png"
              />
            <span class="employee-role">${manager.getRole()}</span>
          </p>
    </h3>
    <div class="card-body row">
      <ul class="card-text" style="list-style-type: none">
          <li>
            ID:
            <span class="employee-number">${manager.id}</span>
          </li>
          <li>
            Email:    
            <span class="employee-email">${manager.email}</span>
          </li>
          <li>
            Office number:
            <span class="manager-office-number">${manager.officeNumber}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `
);

/* 
References for engineer and intern class divs:
<!--ENGINEER CLASS-->
<li>
  <span class="engineer-github-link"></span>
</li>
<!--INTERN CLASS-->
<li><span class="intern-school"></span></li>
*/

//Creates new HTML file in dist (output) folder using generated template
fs.writeFileSync("../dist/index.html", templateHtml);

/*
const team = [Manager("something"), Engineer("something"), Intern("something")];

team
  .map((member) => {
    if (member instanceof Manager) {
      return renderManagerCard(member);
    }
    if (member instanceof Engineer) {
      return renderEngineerCard(member);
    }
  })
  .join("");
  */

/*FROM PREVIOUS HW
inquirer.prompt(questions).then((response) => {
  fs.writeFile("user_README.md", generateMarkdown(response), (err) => {
    err
      ? console.error(err)
      : console.log("Responses saved to new README file!");
  });
});
*/

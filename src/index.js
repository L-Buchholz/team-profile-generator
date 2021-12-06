/*Packages required for README application -- JEST not included*/
const inquirer = require("inquirer");

const fs = require("fs");
const Manager = require("../lib/Manager.class");
const Engineer = require("../lib/Engineer.class");
const Intern = require("../lib/Intern.class");

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

/*

function promptForManager() {
  inquirer.prompt(managerQuestions).then((response) => {
    console.log(response);
  });
}
*/

//Insert responses for Manager entries

const htmlString = fs.readFileSync("index.html", "utf8");
const manager = new Manager("Ted", 23, "email@email", 2);
const engineer = new Engineer("Lauren", 33, "email@email", "L-Buchholz");
const intern = new Intern("Felipe", 20, "email@email", "University of Nowhere");

//Iterate for more than one instance of manager, engineer, and/or intern entries

const team = [manager, engineer, intern];

const output = team
  .map((member) => {
    return member.render();
  })
  .join("");

/* The above is an abbreviated way of saying this: 
{
    if (member instanceof Manager) {
      return member.render();
    }
    if (member instanceof Engineer) {
      return member.render();
    }
    if (member instanceof Intern) {
      return member.render();
    }
  }
*/

const templateHtml = htmlString.replace(
  "<!--THIS IS THE INSERTION POINT-->",
  //Replace with the following:
  output
);

//Creates new HTML file in dist (output) folder using generated template
fs.writeFileSync("../dist/index.html", templateHtml);

/*
FROM PREVIOUS HW
inquirer.prompt(questions).then((response) => {
  fs.writeFile("user_README.md", generateMarkdown(response), (err) => {
    err
      ? console.error(err)
      : console.log("Responses saved to new README file!");
  });
});
*/

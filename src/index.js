/*Packages required for README application -- JEST not included*/
const inquirer = require("inquirer");

const fs = require("fs");
const Manager = require("../lib/Manager.class");
const Engineer = require("../lib/Engineer.class");
const Intern = require("../lib/Intern.class");

//Iterate for more than one instance of manager, engineer, and/or intern entries (below functions)
const team = [];

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
    name: "gitHub",
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

//Initiates Manager prompt questions
function promptForManager() {
  //"Return" saves Promise (responses) after following function is run
  return inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.office
    );
    team.push(manager);
  });
}

//Initiates Engineer prompt questions
function promptForEngineer() {
  //"Return" saves Promise (responses) after following function is run
  return inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.gitHub
    );
    team.push(engineer);
  });
}

//Initiates Intern prompt questions
function promptForIntern() {
  //"Return" saves Promise (responses) after following function is run
  return inquirer.prompt(internQuestions).then((response) => {
    const intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    team.push(intern);
  });
}

//Function for generating HTML

function generateHtml() {
  const htmlString = fs.readFileSync("index.html", "utf8");
  const output = team
    .map((member) => {
      return member.render();
    })
    .join("");
  const templateHtml = htmlString.replace(
    "<!--THIS IS THE INSERTION POINT-->",
    //Replace with the following:
    output
  );
  fs.writeFileSync("../dist/index.html", templateHtml);
}

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

//Runs first function results and then moves to subsequent functions
promptForManager()
  .then(promptForEngineer)
  .then(promptForIntern)
  .then(generateHtml);

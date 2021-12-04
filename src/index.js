/*Packages required for README application -- JEST not included*/
const inquirer = require("inquirer");

const fs = require("fs");

/*Array of user input questions -- UPDATE FOR THIS ASSIGNMENT*/
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a brief description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Share the steps required to install your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions on how to use your project, with examples:",
    name: "usage",
  },
  {
    type: "list",
    message:
      "Which license will this project fall under? (Visit ChooseALicense.com for help)",
    name: "license",
    choices: ["Apache License 2.0", "GNU GPLv3", "ISC License", "MIT", "Other"],
  },
  {
    type: "input",
    message:
      "Please list any additional collaborators and include their GitHub profile links (leave blank if none):",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "List any applicable tests for your program here (leave blank if none):",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "questions1",
  },
  {
    type: "input",
    message: "Please enter the link to your GitHub profile:",
    name: "questions2",
  },
  {
    type: "input",
    message: "What is the best way for users of this project to contact you?",
    name: "questions3",
  },
  {
    type: "input",
    message: "Please share an email address where you can be contacted:",
    name: "questions4",
  },
];

inquirer.prompt(questions).then((response) => {
  fs.writeFile("user_README.md", generateMarkdown(response), (err) => {
    err
      ? console.error(err)
      : console.log("Responses saved to new README file!");
  });
});

const team = [Manager("something"), Engineer("something"), Intern("something")];

function renderManagerCard(manager) {
  return `a big blob of html`;
}

function renderEngineerCard() {}

team
  .map((member) => {
    if (member.type === "Manager") {
      return renderManagerCard(member);
    }
    if (member.type === "Engineer") {
      return renderEngineerCard(member);
    }
  })
  .join("");

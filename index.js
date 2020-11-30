const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "what is your project title?"
    },
    {
      type: "input",
      name: "description",
      message: "Briefly describe your project."
    },
    {
      type: "input",
      name: "implementation",
      message: "Describe the implementation process.",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Who are the contributors of this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project used for?",
    },
    {
      type: "input",
      name: "test",
      message: "Describe the test for this project?",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a fitting license for this project",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    {
      type: "input",
      name: "username",
      message: "What is your username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    }
  ])
  .then((response) => {
    console.log(response);
    createReadme(response);
  })
  .catch((err) => {
    console.log(err);
  });
function createReadme(response) {
  let readMe ="";
  readMe += `
  # ${response.projectTitle}

  ### Description
  ${response.description}
  
  ## Table of Contents
- [Description](#description)
- [Implementation](#Implementation)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#Contribution)
- [Tests](#tests)
- [Questions](#questions)

  ### Implementation
  ${response.implementation}
  
  ### Installation
  ${response.installation}

  ### Usage
  ${response.usage}

  ### Tests
  ${response.test}

  ### Contribution
  ${response.contribution}

  ### Questions
  Contact me for questions at ${response.email}
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />

  ### License
  
  ![badge](https://img.shields.io/badge/license-${response.license}-yellow)<br />
  `;
  fs.writeFile("./file/README.md", readMe, err => err ? console.log(err) : console.log("README generated!"));
}
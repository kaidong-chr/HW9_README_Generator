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
  ${response.projectTitle}
  
  ### Implementation
  ${response.implementation}
  
  ### Installation
  ${response.installation}
  
  ### License
  
  ![badge](https://img.shields.io/badge/license-${response.license}-yellow)<br />
  `;
  fs.writeFile("./file/README.md", readMe, err => err ? console.log(err) : console.log("README generated!"));
}
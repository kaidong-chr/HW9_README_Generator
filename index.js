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
      message: [
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

  ### Portfolio Page
  Welcome to my portfolio page, you will find my biography with links to linkedIn, Github, and my resume in the About page. Past projects with repository links can be found on the Portfolio page and you will find a place to enter you contact info in the Contact page. This portfolio is a work in progress, more will get added in the future.
  
  ### Implementation
  ${response.implementation}
  
  ### Installation
  ${response.installation}
  
  ### License
  
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  `;
  fs.writeFileAsync("./file/README.md", readMe, error => error ? console.log(error) : console.log("README generated!"));
}
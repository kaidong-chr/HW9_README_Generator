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

  ])
  .then((response) => {
    console.log(response);
    createReadme(response);
  })
  .catch((err) => {
    console.log(err);
  });
function createReadme(response) {

}
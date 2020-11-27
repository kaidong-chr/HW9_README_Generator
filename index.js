const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "what is your project title?"
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
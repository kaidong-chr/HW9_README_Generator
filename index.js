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
  * Utilize semantic elements in HTML.
  * Use bootstrap to style portfolio, include usage of navbar, sticky footer, forms, grids and rows.
  * Use bootstrap's column sizing to eliminate media query usage.
  * jQuery for repo link click functions. 
  * Validate HTML with W3C Validator Service to ensure there are no errors.
  
  [Portfolio Webpage Link](https://kaidong-chr.github.io/My_Portfolio/)
  
  ### Portfolio Demo
  
  ![Image](./assets/Images/My_Portfolio.gif "Portfolio Demo")
  
  ![Image](https://img.shields.io/badge/Languages-html%20%7C%20css%20%7C%20javascript-yellow)
  
  ### Installation
  ${response.installation}
  
  ### License
  
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  ';
  fs.writeFile("answer.html", htmlContent, error => error ? console.log(error) : console.log("Yay!"));
}
// Variables and dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt user questions for our README
function promptUser(){
  return inquirer.prompt([
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
  ]);
};

// 
const createReadme = (response) =>
  `# ${response.projectTitle}

  ![badge](https://img.shields.io/badge/license-${response.license}-yellow)<br />

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
  Find me on GitHub: [${response.username}](https://github.com/${response.username})<br />

  ### License
  ![badge](https://img.shields.io/badge/license-${response.license}-yellow)<br />
  `;

  // Async function using util.promisify
  const init = async () => {
  try {
      const response = await promptUser();
      const generateContent = createReadme(response);
      await writeFileAsync('./file/README.md', generateContent);
      console.log('README generated!');
  }   catch(err) {
      console.log(err);
  }
};

init();
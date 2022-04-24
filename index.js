const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "readmeTitle",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      type: "input",
      message: "Give a description of your application?",
      name: "description",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      message: "Please provide installation instructions for your application.",
      type: "input",
      name: "instructions",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      message: "Plese explain how the user will utilze this application",
      type: "input",
      name: "usage",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      message: "Plese select an open source license.",
      type: "checkbox",
      choices: [
        "No License",
        "MIT License",
        "GNU General Public License v3.0",
        "Apache License",
        "GPL License",
      ],
      name: "license",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      message:
        "Please include the names or GitHub user ids of all contributors.",
      type: "input",
      name: "contributors",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      message: "Did you preform any tests for your application.",
      type: "input",
      name: "test",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      message: "What is your gitHub username?",
      type: "input",
      name: "gitHubUserName",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },
    
    {
      message: "What is your gitHub url?",
      type: "input",
      name: "gitHubUrl",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },

    {
      message: "What is your email?",
      type: "input",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide an answer to proceed.";
        }
      },
    },
  ])

  .then(
    ({
      readmeTitle,
      description,
      usage,
      instructions,
      license,
      contributors,
      test,
      gitHubUserName,
      gitHubUrl,
      email,
    }) => {
      const template = `
   # ${readmeTitle}
   ## Table Of Contents
* [Description](#description)
* [Usage](#usage)
* [Instructions](#instructions)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)

### Description
      ${description}
### Usage
      ${usage}
### Instructions
      ${instructions}
### License
      ${license}
### Contributors
      ${contributors}
### Test
      ${test}

### Questions
###### Thank you for for looking at this applicattion! If you have any questions about this application please reach out!     
* ${gitHubUserName}
* ${gitHubUrl} 
* ${email}`;

      createNewFile(readmeTitle, template);
    }
  );

function createNewFile(fileName, data) {
  fs.writeFile(
    `./${fileName.toLowerCase().split(" ").join(" ")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Your README file has been created!");
    }
  );
}

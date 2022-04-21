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
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
        }
      },
    },

    {
      message:
        "Select items for Table of Contents. Probably best to have all for a professional README.",
      name: "tableOfContents",
      type: "checkbox",
      choices: [
        "Installation",
        "Usage",
        "License",
        "Contributors",
        "Tests",
        "Questions",
      ],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
        }
      },
    },

    {
      message: "How would you like to be reached if someone has a question?",
      type: "input",
      name: "preferredCommunication",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
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
          return "I need a vlaue to continue";
        }
      },
    },
  ])

  .then(
    ({
      readmeTitle,
      tableOfContents,
      description,
      usage,
      instructions,
      license,
      contributors,
      test,
      preferredCommunication,
      gitHubUserName,
      email,
    }) => {
      const template = `# ${readmeTitle}
      
      *[tableOfContents](#tableOfContents)
      *[description](#description)
      *[usage](#usage)
      *[instructions](#instructions)
      *[license](#license)
      *[contributors](#contributors)
      *[test](#test)

      ## tableOfContents
      ${tableOfContents}
      ## description
      ${description}
      ## usage
      ${usage}
      ## instructions
      ${instructions}
      ## license
      ${license}
      ## contributors
      ${contributors}
      ## test
      ${test}

      *[preferredCommunication](#preferredCommunication)
      ## preferredCommunication
      ${preferredCommunication}
      *GitHub: ${gitHubUserName}
      *Email: ${email}`;

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

// async(init) ( () => {
//     try{
//        // const answers = await askUser();
//         const generateUserReadme = generateReadMe(answers);
//        // await writeFileAsync('./dist/README.md', generateUserReadme);
//         console.log('sucessfully written to README.md');
//     } catch(err){
//         console.log(err);
//     }
// })
//   //fs.writeFile('./README.md')

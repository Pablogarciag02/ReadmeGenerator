const inquirer = require("inquirer");
const fs = require ("fs");

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the Name of your project?',
      },
      {
        type: 'input',
        name: 'link',
        message: 'Please Add a Repository Link',
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'Write a brief description of the motivation behind your project.',
      },
      {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn in the creation of this project?',
      },
      {
        type: 'input',
        name: 'table',
        message: 'Add a table of contents for your project, Seperate each line with a coma.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide a step by step guide seperated by numbers and commas to define each step.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, Seperate each one by using commas.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Type the name of the license you are using:',
      },
      {
        type: 'input',
        name: 'features',
        message: 'If your project has various features, list them here in a comma seperated list',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'add a message detailing how someone can fork and contribute to your project!',
      },
    ]);
  };

const generateREADME = ({name, link,  motivation, why, problem, learn, table, installation, credits, license, features, contribution}) =>
`# ${name}

# Github Repository
${link}

## ${motivation}
-${why}
-${problem}
-${learn}

## Table of Contents
${table}

## Instalation
${installation}

## Credits
${credits}

## License
${license}

## Features
${features}

## How to Contribute
${contribution}
`

const init = () => {
    promptUser()
    .then ((answers) => fs.writeFileSync("README.md", generateREADME(answers)))
    .then (()=> console.log("Succesfully wrote on README.md"))
    .catch ((err) => console.log(err));
}

init();
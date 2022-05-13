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
        message: 'Provide a 3 step guide, (Start by typing STEP1)',
      },
      {
        type: 'input',
        name: 'installation2',
        message: 'Pleas type the next step (STEP2)',
      },
      {
        type: 'input',
        name: 'installation3',
        message: 'Pleas type the next step (STEP3)',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please type your full Name',
      },
      {
        type: 'input',
        name: 'linkedIn',
        message: 'Please add your LinkedIn link',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please add your Github link:',
      },
      {
        type: 'list',
        name: 'license',
        message: "select your license. (Use Arrow Keys)",
        choices: ["GPL License", "MIT License", "Apache License 2.0", "BSD License"]
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

const generateREADME = ({name, link,  motivation, why, problem, learn, table, installation, installation2, installation3, credits, linkedIn, github, license, features, contribution}) =>
`# ${name}

# Github Repository
${link}

## About this Project: 
-${motivation}

-${why}

-${problem}

-${learn}

## Table of Contents
${table}

## Instalation (How to install)
Step 1: ${installation}

Step 2: ${installation2}

Step 3: ${installation3}

## Credits
Created by: ${credits}

LikedIn: ${linkedIn}

Github: ${github}


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
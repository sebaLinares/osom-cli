#!/usr/bin/env node

const inquirer = require('inquirer');
const program = require('commander');
const licenses = require('../modules/create-repo/data/data');
const functionsCreateRepo = require('./../modules/create-repo/functions/functions');
const createGithubRepositoryController = require('../core/controllers/create-github-repository.controller');

const createRepoQuestions = [
  { name: 'name', message: 'Name of the repo' },
  { name: 'description', message: 'Enter a description for the repo' },
  {
    type: 'list',
    name: 'license',
    message: 'What license do you want for your repo',
    choices: licenses.licensesPlain,
  },
  { name: 'username', message: 'Enter your username' },
  { type: 'password', name: 'password', message: 'Write your password' },
];

inquirer.prompt(createRepoQuestions).then(answers => {
  // get keyword for the chosen license
  const license = functionsCreateRepo.getLicenseKeywordByName(answers.license);

  createGithubRepositoryController(
    answers.username,
    answers.password,
    answers.name,
    answers.description,
    license,
  );
});

program.parse(process.argv);

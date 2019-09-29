#!/usr/bin/env node

const inquirer = require('inquirer');
const program = require('commander')
const licenses = require('../modules/create-repo/data/data')
const functionsCreateRepo = require('./../modules/create-repo/functions/functions')
const createRepo = require('./../modules/create-repo/main')

const createRepoQuestions = [
  {name: 'name', message: 'Name of the repo'},
  {name: 'description', message: 'Enter a description for the repo'},
  {type: 'list', name: 'license', message: 'What license do you want for your repo', choices: licenses.licensesPlain},
  {name: 'username', message: 'Enter your username'},
  {type: 'password', name: 'password', message: 'Write your password'}
]

inquirer
  .prompt(createRepoQuestions)
  .then(answers => {
    // get keyword for the chosen license
    const keyword = functionsCreateRepo.getLicenseKeywordByName(answers.license)
    createRepo(answers.username, answers.password, answers.name, answers.description, keyword)
  })


program.parse(process.argv)

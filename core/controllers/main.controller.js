const inquirer = require('inquirer');
const { getCodeByName } = require('../../lib/functions');
const { getGithubRepositoryAnswers } = require('./create-github-repository.controller');

const options = [
  {
    name: 'Connect Github Repository With Local Directory',
    code: 'o-cghr',
  },
  {
    name: 'Connect Gitlab Repository With Local Directory',
    code: 'o-cglr',
  },
];

const optionNames = options.map(option => option.name);

const mainQuestions = [
  {
    type: 'list',
    name: 'mainOption',
    message: 'What do you want me to build for you?',
    choices: optionNames,
  },
];

const taskToComplete = async () => {
  const { mainOption } = await inquirer.prompt(mainQuestions);
  const taskCode = getCodeByName(options, mainOption);

  switch (taskCode) {
    case 'o-cghr':
      getGithubRepositoryAnswers();
      break;
    default:
      console.log('ah?');
  }
};

module.exports = {
  taskToComplete,
};

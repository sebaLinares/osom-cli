// import inquirer from 'inquirer';
import { prompt } from 'enquirer';
import { getCodeByName } from '../../lib/functions.js';
import { getGithubRepositoryAnswers } from './create-github-repository.controller.js';

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
    type: 'select',
    name: 'mainOption',
    message: 'What do you want me to build for you?',
    choices: optionNames,
  },
];

const taskToComplete = async () => {
  const { mainOption } = (await prompt(mainQuestions)) as { mainOption: string };
  const taskCode = getCodeByName(options, mainOption);

  switch (taskCode) {
    case 'o-cghr':
      getGithubRepositoryAnswers();
      break;
    default:
      console.log('ah?');
  }
};

export { taskToComplete };

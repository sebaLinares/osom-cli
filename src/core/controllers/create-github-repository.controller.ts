import shell from 'shelljs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { ApiGithub } from '../frameworks/api-github';
import { getCodeByName } from '../../lib/functions';
import { GithubResponse } from '../adapters/github.adapter';

// Usecase
import { CreateGithubRepository } from '../use-cases/create-github-repository.ucase';

const error = chalk.bgWhite.red;
const custom = chalk.black.bgYellowBright.bold;

const licenses = [
  { name: 'Academic Free License v3.0', code: 'afl-3.0' },
  { name: 'Apache license 2.0', code: 'apache-2.0' },
  { name: 'Artistic license 2.0', code: 'artistic-2.0' },
  { name: 'Boost Software License 1.0', code: 'bsl-1.0' },
  { name: 'BSD 2-clause "Simplified" license', code: 'bsd-2-clause' },
  { name: 'BSD 3-clause "New" or "Revised" license', code: 'bsd-3-clause' },
  { name: 'BSD 3-clause Clear license', code: 'bsd-3-clause-clear' },
  { name: 'Creative Commons license family', code: 'cc' },
  { name: 'Creative Commons Zero v1.0 Universal', code: 'cc0-1.0' },
  { name: 'Creative Commons Attribution 4.0', code: 'cc-by-4.0' },
  {
    name: 'Creative Commons Attribution Share Alike 4.0',
    code: 'cc-by-sa-4.0',
  },
  { name: 'Do What The F*ck You Want To Public License', code: 'wtfpl' },
  { name: 'Educational Community License v2.0', code: 'ecl-2.0' },
  { name: 'Eclipse Public License 1.0', code: 'epl-1.0' },
  { name: 'European Union Public License 1.1', code: 'eupl-1.1' },
  { name: 'GNU Affero General Public License v3.0', code: 'agpl-3.0' },
  { name: 'GNU General Public License family', code: 'gpl' },
  { name: 'GNU General Public License v2.0', code: 'gpl-2.0' },
  { name: 'GNU General Public License v3.0', code: 'gpl-3.0' },
  { name: 'GNU Lesser General Public License family', code: 'lgpl' },
  { name: 'GNU Lesser General Public License v2.1', code: 'lgpl-2.1' },
  { name: 'GNU Lesser General Public License v3.0', code: 'lgpl-3.0' },
  { name: 'ISC', code: 'isc' },
  { name: 'LaTeX Project Public License v1.3c', code: 'lppl-1.3c' },
  { name: 'Microsoft Public License', code: 'ms-pl' },
  { name: 'MIT', code: 'mit' },
  { name: 'Mozilla Public License 2.0', code: 'mpl-2.0' },
  { name: 'Open Software License 3.0', code: 'osl-3.0' },
  { name: 'PostgreSQL License', code: 'postgresql' },
  { name: 'SIL Open Font License 1.1', code: 'ofl-1.1' },
  { name: 'University of Illinois/NCSA Open Source License', code: 'ncsa' },
  { name: 'The Unlicense', code: 'unlicense' },
  { name: 'zLib License', code: 'zlib' },
];

const createGithubRepository = async ({ username, password, name, description, licenseCode }) => {
  const repositoryData = constructRepositoryData({ name, description, licenseCode });
  const authData = constructAuthData({ username, password });
  const api = new ApiGithub(authData);
  const githubAdapter = new GithubResponse();
  await CreateGithubRepository({
    api,
    githubAdapter,
    repositoryData,
    successCallback,
    errorCallback,
  });
};

const getGithubRepositoryAnswers = async () => {
  const { license, ...rest } = await inquirer.prompt(githubRepositoryQuestions);
  const licenseCode = getCodeByName(licenses, license);
  createGithubRepository({ licenseCode, ...rest });
};

const licenseNames = licenses.map(license => license.name);

const githubRepositoryQuestions = [
  { name: 'name', message: 'Name of the repository' },
  { name: 'description', message: 'Enter a description for the repo' },
  {
    type: 'list',
    name: 'license',
    message: 'What license do you want for your repo',
    choices: licenseNames,
  },
  { name: 'username', message: 'Enter your username' },
  { type: 'password', name: 'password', message: 'Write your password' },
];

const createGitIgnore = () => {
  shell.exec('echo /node_modules > .gitignore');
  console.log(custom('.gitignore CREATED'));
};

const initializeGitRepository = () => {
  console.log(custom('Running git init'));
  shell.exec('git init');
};

const addAndFirstCommit = () => {
  shell.exec('git add --all && git commit -m "feat: first commit"');
};

const fetchAndRebaseOrigin = () => {
  console.log(custom('Fetch && Rebase'));
  shell.exec('git fetch && git rebase origin/master');
};

const pushToRemote = () => {
  console.log(custom('Set upstream'));
  shell.exec('git push --set-upstream origin master');
};

const createRepositorySuccessMessage = () => {
  console.log(custom(' ==================================================== '));
  console.log(custom(' All done! Local Repo Synced to remote and up to date '));
  console.log(custom(' ==================================================== '));
};

const errorCallback = err => {
  console.log(custom(' ==================================================== '));
  console.log(error(err));
  console.log(custom(' ==================================================== '));
};

const constructRepositoryData = ({ name, description, licenseCode }) => {
  return {
    name,
    description,
    license_template: licenseCode,
  };
};

const constructAuthData = ({ username, password }) => {
  return {
    username,
    password,
  };
};

const addRemote = remoteUrl => {
  console.log(custom('Remote added'));
  shell.exec(`git remote add origin ${remoteUrl}`);
};

const successCallback = ({ cloneUrl }) => {
  createGitIgnore();
  initializeGitRepository();
  addAndFirstCommit();
  addRemote(cloneUrl);
  fetchAndRebaseOrigin();
  pushToRemote();
  createRepositorySuccessMessage();
};

export { getGithubRepositoryAnswers };

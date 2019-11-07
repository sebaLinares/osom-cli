const shell = require('shelljs');
const colors = require('colors');

const ApiGithub = require('../frameworks/api-github');
const createGithubRepository = require('../use-cases/create-github-repository.ucase');

colors.setTheme({
  custom: ['black', 'bgBrightYellow', 'bold'],
});

/**
 * Executes a bash command that created a repo in the given `username` with the `description` and `license` the user picks.
 */
module.exports = async (username, password, name, description, license) => {
  const repositoryData = {
    name: name,
    description: description,
    license_template: license,
  };

  const auth = {
    username,
    password,
  };

  const api = new ApiGithub(auth);

  const createGitIgnore = () => {
    shell.exec('echo /node_modules > .gitignore');
    console.log('.gitignore CREATED'.custom);
  };

  const initializeGitRepository = () => {
    console.log('Running git init'.custom);
    shell.exec('git init');
  };

  const addAndFirstCommit = () => {
    shell.exec('git add --all && git commit -m "feat: first commit"');
  };

  const addRemote = apiResponse => {
    console.log('Remote added'.custom);
    shell.exec(`git remote add origin ${apiResponse.data.clone_url}`);
  };

  const fetchAndRebaseOrigin = () => {
    console.log('Fetch && Rebase'.inverse);
    shell.exec('git fetch && git rebase origin/master');
  };

  const pushToRemote = () => {
    console.log('Set upstream'.rainbow);
    shell.exec('git push --set-upstream origin master');
  };

  const createRepositorySuccessMessage = () => {
    console.log(' ==================================================== '.custom);
    console.log(' All done! Local Repo Synced to remote and up to date '.custom);
    console.log(' ==================================================== '.custom);
  };

  const errorCallback = err => {
    console.error(err);
  };

  const successCallback = githubApiResponse => {
    createGitIgnore();
    initializeGitRepository();
    addAndFirstCommit();
    addRemote();
    fetchAndRebaseOrigin();
    pushToRemote();
    createRepositorySuccessMessage();
  };

  await createGithubRepository({ api, repositoryData, successCallback, errorCallback });
};

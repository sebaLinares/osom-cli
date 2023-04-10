import shell from 'shelljs';
import chalk from 'chalk';

const commandStyle = chalk.cyanBright;
const eventStyle = chalk.greenBright;

export class GitApplicationService {
  createFirstCommitAndPushRemote(remoteUrl: string) {
    this.createGitIgnore();
    this.initializeGitRepository();
    this.addAndFirstCommit();
    this.addRemote(remoteUrl);
    this.fetchAndRebaseOrigin();
    this.pushToRemote();
    this.createRepositorySuccessMessage();
  }

  private createGitIgnore() {
    console.log(commandStyle('Creating .gitignore'));
    shell.exec('echo /node_modules > .gitignore');
    console.log(eventStyle('Created .gitignore'));
  }

  private initializeGitRepository() {
    console.log(commandStyle('Initializing git repository'));
    shell.exec('git init');
    console.log(eventStyle('Initialized git repository'));
  }

  private addAndFirstCommit() {
    console.log(commandStyle('Adding and commiting first commit'));
    shell.exec('git add --all && git commit -m "feat: first commit"');
    console.log(eventStyle('Added and commited first commit'));
  }

  private addRemote(remoteUrl: string) {
    console.log(commandStyle('Adding remote'));
    shell.exec(`git remote add origin ${remoteUrl}`);
    console.log(eventStyle('Added remote'));
  }

  private fetchAndRebaseOrigin() {
    console.log(commandStyle('Fetching and rebasing origin'));
    shell.exec('git fetch && git rebase origin/main');
    console.log(eventStyle('Fetched and rebased origin'));
  }

  private pushToRemote() {
    console.log(commandStyle('Pushing to remote'));
    shell.exec('git push --set-upstream origin main');
    console.log(eventStyle('Pushed to remote'));
  }

  private createRepositorySuccessMessage() {
    console.log(chalk.greenBright('Repository created successfully!'));
  }
}

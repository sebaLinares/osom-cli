# OSOM CLI! &middot; [![license-badge](https://img.shields.io/npm/l/osom-cli)](https://github.com/sebaLinares/osom-cli/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/osom-cli)](https://www.npmjs.com/package/osom-cli) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Tired of all the commands I had to write to create a new project and connect it to a new repo, I thought about a solution in the form a "personal cli". And because open source is _osom_, everyone else can have it an tweak it and whatever you want to do with it.

## :dart: Purpose

For now the only thing `osom-cli` is able to do it to initialize your current working directory as a git repository, create a remote repo and link them together. Osom cli does all the first _fetching, pulling/rebase, commit_ of a new born repository and leaves it ready for you to start working on a fresh new project.

## Prerequisites

No prerequisites for installation

## :wrench: Installing

Install it with your preffered package manager

npm:

```bash
npm install -g osom-cli
```

yarn:

```bash
yarn global add osom-cli
```

or use it one time with `npx`:

```bash
npx osom-cli osom
```

## Usage

OSOM-CLI uses the [Github API](https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api) to create a remote repository, so a [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) is needed in order to be authorized.

![osom-cli](https://raw.githubusercontent.com/sebaLinares/screenshots/master/osom-cli/osom-demo.jpg)

```bash
# Go to your preffered directory
mkdir project-name && cd project-name

# Create an .env file and add your Github Personal Access Token. Look at the documentation on personal access tokens provided above.
echo 'GITHUB_PERSONAL_ACCESS_TOKEN=' > .env

# Call osom cli
osom

# Follow de instruction
# 1. Choose a name for your repo
# 2. Write a description (optional)
# 3. Choose a license for your project
# 4. Enter your username
# 5. Enter your gihtub password. **Enter your Github Personal Access Token here**
# 6. Start working. Enjoy your project.
```

## :open_hands: Contributing

If you would like to contribute please fork this repository.
Be my guest to contribute with pull requests or participating on any issue. I'm all into open source so any pull request is much appreciated

If you don't know how to contribute to open source I leave you [this link](https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940) with a medium post written by someone else that walks you through open source github contributions.

## :car: Roadmap

| &nbsp;      | Objective              | Status  |
| ----------- | ---------------------- | ------- |
| :hourglass: | Continous Delivery     | Pending |
| :hourglass: | Semantic Versioning    | Pending |
| :hourglass: | Create react project   | Pending |
| :hourglass: | Create angular project | Pending |
| :hourglass: | Create vue project     | Pending |

## :eyes: Authors

- **Sebastián Linares** - [@Twitter](https://twitter.com/slinaresl)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

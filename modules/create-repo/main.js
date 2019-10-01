const shell = require("shelljs");
const axios = require("axios");
const colors = require("colors");

colors.setTheme({
  custom: ["black", "bgBrightYellow", "bold"]
});

/**
 * Executes a bash command that created a repo in the given `username` with the `description` and `license` the user picks.
 */
module.exports = (username, password, name, description, license) => {
  const config = {
    url: "https://api.github.com/user/repos",
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    data: {
      name: name,
      description: description,
      license_template: license
    },
    auth: {
      username,
      password
    }
  };

  axios(config).then(res => {
    /* Create README.md */
    console.log("README Created");
    shell.exec("echo '/node_modules' > .gitignore");

    /* Initializa git repository */
    console.log("Running git init".rainbow);
    shell.exec("git init");

    /* Add new file and make first commit */
    shell.exec('git add --all && git commit -m "feat: first commit"');

    /* Add remote */
    console.log("Remote added".trap);
    shell.exec(`git remote add origin ${res.data.clone_url}`);

    /* Fetch and rebase local with remote */
    console.log("Fetch && Rebase".inverse);
    shell.exec("git fetch && git rebase origin/master");

    /* Push everything to remote */
    console.log("Set upstream".rainbow);
    shell.exec("git push --set-upstream origin master");

    console.log(
      " ==================================================== ".custom
    );
    console.log(
      " All done! Local Repo Synced to remote and up to date ".custom
    );
    console.log(
      " ==================================================== ".custom
    );
  });
};

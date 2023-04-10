import { GitApplicationService } from '../../core/application/git-application.service';
import { VersionControlApplicationService } from '../../core/application/version-control-application.service';
import { PromptAdapter } from '../prompt/prompt.adapter';
import { GithubAdapter } from '../version-control/github.adapter';

const createGithubRepository = async () => {
  const promptService = new PromptAdapter();
  const versionControlService = new GithubAdapter();
  const questionService = new VersionControlApplicationService(
    promptService,
    versionControlService,
  );

  const { data } = await questionService.createVersinControlRepository();
  createLocalRepositoryAndSyncToRemote(data.ssh_url);
};

const createLocalRepositoryAndSyncToRemote = (remoteUrl: string) => {
  const gitService = new GitApplicationService();
  gitService.createFirstCommitAndPushRemote(remoteUrl);
};

export { createGithubRepository };

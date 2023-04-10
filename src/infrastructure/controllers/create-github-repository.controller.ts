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
  await questionService.createVersinControlRepository();
};

export { createGithubRepository };

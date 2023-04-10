import { PromptAdapter } from '../../infrastructure/prompt/prompt.adapter';
import { GithubAdapter } from '../../infrastructure/version-control/github.adapter';
import { rawQuestions } from '../domain/github-repository-questions';

export class VersionControlApplicationService {
  constructor(
    private readonly promptService: PromptAdapter,
    private readonly versionControlService: GithubAdapter,
  ) {}

  async createVersinControlRepository() {
    const githubCredentials = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    if (!githubCredentials) {
      console.log('Please set your Github Personal Access Token as an environment variable');
      process.exit(1);
    }

    const {
      repositoryName,
      repositoryDescription,
      repositoryLicense,
      isRepositoryPrivate,
    } = await this.promptService.promptQuestions(rawQuestions);
    await this.versionControlService.createVersionControlRepository(
      repositoryName,
      repositoryDescription,
      repositoryLicense,
      (isRepositoryPrivate as unknown) as boolean,
    );
  }
}

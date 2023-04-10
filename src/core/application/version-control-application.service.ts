import { PromptAdapter } from '../../infrastructure/prompt/prompt.adapter';
import { GithubAdapter } from '../../infrastructure/version-control/github.adapter';
import { rawQuestions } from '../domain/github-repository-questions';

export class VersionControlApplicationService {
  constructor(
    private readonly promptService: PromptAdapter,
    private readonly versionControlService: GithubAdapter,
  ) {}

  async createVersinControlRepository() {
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

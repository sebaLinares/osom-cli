import { Octokit } from 'octokit';

export class GithubAdapter {
  private readonly github: Octokit;

  constructor() {
    this.github = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
  }

  async createVersionControlRepository(
    name: string,
    description: string,
    license: string,
    privateRepo: boolean,
  ): Promise<void> {
    await this.github.request('POST /user/repos', {
      name,
      description,
      license_template: license,
      private: privateRepo,
    });
  }
}

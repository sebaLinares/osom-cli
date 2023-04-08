import { Octokit } from 'octokit';

export class ApiGithub {
  private readonly octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    });
  }

  async sendPost(data) {
    await this.octokit.request('POST /user/repos', {
      name: data.name,
      description: data.description,
      license_template: data.license,
    });
  }
}

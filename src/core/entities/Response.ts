export class Response {
  private readonly cloneUrl: string;
  constructor({ cloneUrl }: { cloneUrl: string }) {
    this.cloneUrl = cloneUrl;
  }
}

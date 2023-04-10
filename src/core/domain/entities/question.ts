export interface IQuestion {
  type: string;
  name: string;
  message: string;
  choices?: { name: string; value: string }[];
  result?: (...args) => string | Promise<string>;
  default?: unknown;
}

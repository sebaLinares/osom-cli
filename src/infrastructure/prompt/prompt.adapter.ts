import { prompt } from 'enquirer';
import { IQuestion } from '../../core/domain/entities/question';

export class PromptAdapter {
  async promptQuestions(
    questions: IQuestion[],
  ): Promise<{ [K in typeof questions[number]['name']]: string }> {
    return await prompt(questions);
  }
}

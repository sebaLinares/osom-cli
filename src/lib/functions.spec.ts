import { getCodeByName } from './functions';

test('Should return the keyword for the corresponding license name', () => {
  expect(
    getCodeByName(
      [{ name: 'SIL Open Font License 1.1', code: 'ofl-1.1' }],
      'SIL Open Font License 1.1',
    ),
  ).toBe('ofl-1.1');
});

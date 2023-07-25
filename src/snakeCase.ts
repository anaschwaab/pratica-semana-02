/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/Snake_case)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para snakeCase.
 */
export const snakeCase = (word: string): string => {
  word = word.trim();

  word = word.replace(/[^a-zA-Z0-9]/g, '_');

  const result = word.toLowerCase();

  return result;
};

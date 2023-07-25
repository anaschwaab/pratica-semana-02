/**
 * Converts string to start case (https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para startCase.
 */
export const startCase = (word: string): string => {
  const words = word.toLowerCase().split(/[\s_-]+/);

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const result = words.join(' ');

  return result;
};

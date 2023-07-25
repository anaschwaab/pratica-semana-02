/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/CamelCase)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para camelCase.
 */
export const camelCase = (word: string): string => {
  const words = word.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().trim().split(' ');

  
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const result = words.join('');
  console.log(result)
  return result;
};

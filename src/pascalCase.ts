/**
 * Converte a string para pascal case (semelhante ao camel case, mas com a primeira letra maiuscula)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para pascalCase.
 */
export const pascalCase = (word: string): string => {
  word = word.trim();

  const wordsArray = word.split(/[\s_-]+/);

  for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] =
      wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
  }

  const result = wordsArray.join('');

  return result;
};

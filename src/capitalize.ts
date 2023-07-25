/**
 * Coloca a primeira letra do texto em maiúsculas, e o restante em minúsculas.
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para capitalize.
 */
export const capitalize = (text: string): string => {
  const words = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return words;
};

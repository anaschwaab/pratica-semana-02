/**
 * Retorna um array com todos os elementos únicos de todos os arrays operados
 * pela união.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const union = <T>(...args: T[]): T[] => {
  const uniqueItems: T[] = [];

  for (const array of args) {
    if (Array.isArray(array)) {
      for (const item of array) {
        let exists = false;
        for (const uniqueItem of uniqueItems) {
          if (item === uniqueItem) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          uniqueItems.push(item);
        }
      }
    }
  }
  return uniqueItems;
};

/**
 * Remove todos os valores "falsy" da lista de itens. Lembrando que false, 0, '', null e undefined são valores falsy.
 *
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const compact = (items: unknown[]): unknown[] => {
  const result = [];

  for (const item of items) {
    if (
      item !== false &&
      item !== 0 &&
      item !== '' &&
      item !== null &&
      item !== undefined
    ) {
      result.push(item);
    }
  }

  return result;
};

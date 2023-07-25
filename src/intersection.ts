import { customIncludes } from './customIncludes';
/**
 * Retorna um array de itens únicos e comuns entre os arrays da direita e da esquerda.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const intersection = (left: number[], right: number[]): number[] => {
  const result: number[] = [];

  for (const item of left) {
    for (const rightItem of right) {
      if (item === rightItem && !customIncludes(result, item)) {
        result.push(item);
        break;
      }
    }
  }
 

  return result;
};

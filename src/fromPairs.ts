import { KeyAndValue } from '../types/keyAndValue';

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 *
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 *
 * @param args
 * @returns
 */
export const fromPairs = (...args: KeyAndValue[]) => {
  const result: { [key: string]: unknown } = {};

  for (const [key, value] of args) {
    result[key] = value;
  }

  return result;
};

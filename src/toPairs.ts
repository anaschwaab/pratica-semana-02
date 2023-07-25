import { KeyAndValue } from '../types/keyAndValue';
type Record = {
  [key: string]: string | number | symbol | boolean;
};

/**
 * Deve criar uma lista de arrays chave/valor a partir de um objeto
 *
 * Ex.: fromPairs({ a: 'a', b: 1, c: false }) === [['a', 'a'], ['b': 1], ['c': false]]
 *
 * @param args
 * @returns
 */
export const toPairs = (record: Record): KeyAndValue[] => {
  const pairs: KeyAndValue[] = [];

  for (const key in record) {
    if (Object.prototype.hasOwnProperty.call(record, key)) {
      const value = record[key];
      pairs.push([key, value]);
    }
  }
  return pairs;
};

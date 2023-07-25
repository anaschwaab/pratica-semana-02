import { customIncludes } from './customIncludes';
import { Record } from '../types/record';

/**
 * Esta função remove os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: omit({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { c: 'dolor' }
 *
 * @param record
 * @param args
 * @returns
 */
export const omit = <T extends Record>(
  record: T,
  ...args: (keyof T)[]
): Record => {
  const newObject: Partial<T> = {};

  for (const key in record) {
    if (record.hasOwnProperty(key) && !customIncludes(args, key)) {
      newObject[key] = record[key];
    }
  }
  return newObject as Record;
};

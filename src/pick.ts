import { Record } from '../types/record';

/**
 * Esta função mantem somente os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: pick({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { a: 'lorem', b: 'ipsum' }
 *
 * @param record
 * @param args
 * @returns
 */
export const pick = <T extends Record>(
  record: T,
  ...args: (keyof T)[]
): Record => {
  const pickedFields: Partial<T> = {};

  for (const arg of args) {
    if (record.hasOwnProperty(arg)) {
      pickedFields[arg] = record[arg];
    }
  }
  return pickedFields as Record;
};

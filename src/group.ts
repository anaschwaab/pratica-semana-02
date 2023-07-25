import { Record } from '../types/record';

/**
 * Agrupa todos os registros do array passado no primeiro parametro pelos valores contidos na chave de cada um, identificada
 * como o segundo parametro desta função.
 *
 * Ex.:
 *
 * group([
 *  { name: 'Edgar Allan Poe', country: 'USA' },
 *  { name: 'H. P. Lovecraft', country: 'USA' },
 *  {name: 'Mary Shelley', country: 'England'}
 * ], 'country')
 *
 * é igual
 *
 * {
 *   'USA': [{ name: 'Edgar Allan Poe', country: 'USA' }, { name: 'H. P. Lovecraft', country: 'USA' }],
 *   'England': [{name: 'Mary Shelley', country: 'England'}]
 * }
 *
 * @param collection
 * @param key
 * @returns
 */
export const group = <T extends Record>(
  collection: T[],
  key: keyof T,
): { [key: string]: T[] } => {
  const groupedRecords: { [key: string | number | symbol]: T[] } = {};

  for (const record of collection) {
    const keyValue = record[key];
    if (!groupedRecords[keyValue]) {
      groupedRecords[keyValue] = [];
    }

    groupedRecords[keyValue].push(record);
  }
  return groupedRecords;
};

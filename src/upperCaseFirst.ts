export const upperCaseFirst = (text: string): string => {
  const firstChar = text.charAt(0);
  const restOfString = text.slice(1);

  const result = firstChar.toUpperCase() + restOfString;

  return result;
};

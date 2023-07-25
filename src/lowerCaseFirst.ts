export const lowerCaseFirst = (text: string): string => {
  if (test.length === 0) {
    return text;
  }

  const firstLetter = text[0].toLowerCase();
  const restOfText = text.slice(1);

  const result = firstLetter + restOfText;

  return result;
};

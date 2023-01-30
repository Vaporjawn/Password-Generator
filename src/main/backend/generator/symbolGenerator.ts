import { Symbol } from '../../types/symbol';

const SymbolGenerator = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const symbols: Symbol[] = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '[',
    ']',
    '{',
    '}',
    '|',
    ';',
    ':',
    '"',
    "'",
    '<',
    '>',
    ',',
    '.',
    '?',
  ];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

export default SymbolGenerator;

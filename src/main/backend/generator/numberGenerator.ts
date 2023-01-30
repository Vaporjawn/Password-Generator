import { Numbers } from 'main/types/numbers';

const NumberGenerator = () => {
  const number: Numbers = Math.floor(Math.random() * 9) + 1;
  return number;
};

export default NumberGenerator;

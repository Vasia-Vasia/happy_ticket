const isHappyTicket = (string) => {
  if (string.length % 2 !== 0) {
    return false;
  }

  const middle = string.length / 2;

  let i = 0;
  let sum1 = 0;
  while (i < middle) {
    sum1 = sum1 + Number(string[i]);
    i = i + 1;
  }

  let j = middle;
  let sum2 = 0;
  while (j < string.length) {
    sum2 = sum2 + Number(string[j]);
    j = j + 1;
  }

  return sum1 === sum2;
};

export default isHappyTicket;

// Проверка

const string = '385916';
const result = isHappyTicket(string);

console.log(result);
  
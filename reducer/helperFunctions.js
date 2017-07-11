export function sumCredit (arr) {
  return arr.reduce((acc, coin )=> {
    acc += coin;
    return acc;
  },0);

}

export function changeCalculator (change) {

  const coins = [1, 0.50, 0.20, 0.10, 0.05];

  return coins.reduce((acc, val) => {
    if (change >= val) {
      acc[val.toFixed(2)] = Math.floor(change / val);
      const temp = change % val;
      change = temp.toFixed(2);

    }
    return acc;
  }, {});

}
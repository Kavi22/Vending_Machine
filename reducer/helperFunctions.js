export function sumCredit(arr) {
  return arr.reduce((acc, coin) => {
    acc += coin;
    return acc;
  }, 0);

}

export function changeCalculator(change) {

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

export function checkFloat(change, float) {
  let result = false;
  for (let key in change) {
    if (float[key]) {
      if (float[key] > change[key]) {
        result = true;
      }
    }
  }
  return result;
}

export function floatMinusChange(change, float) {
  let floatMinusChange = {}
  for (let key in float) {
    if (change[key]) {
      floatMinusChange[key] = float[key] - change[key]
    } else {
      floatMinusChange[key] = float[key]
    }
  }
  return floatMinusChange;
}

export function addCreditToFloat(credit, float) {
  let newFloat = Object.assign({}, float);
  for (var y = 0; y < credit.length; y++) {
    if(float[credit[y].toFixed(2)]) {
      newFloat[credit[y].toFixed(2)] ++
    } else {
      newFloat[credit[y].toFixed(2)] = 1;
    }
  }
  return newFloat;
}
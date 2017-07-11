export function sumCredit (arr) {
  return arr.reduce((acc, coin )=> {
    acc += coin;
    return acc;
  },0);

}
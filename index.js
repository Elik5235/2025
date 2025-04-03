const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
const sumArray = (...restArray) =>
  restArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

return sum;

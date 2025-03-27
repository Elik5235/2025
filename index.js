const array = [2, 3, 4, 5, 1, 2];

const newArray = array
  .map((item) => {
    return item * 2;
  })
  .reverse().join(',');

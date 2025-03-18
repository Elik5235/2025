function factorial(num) {
  let res = 1;

  for (let it = 1; it <= num; it++) {
    if (num === 0 || num === 1) {
      return 1;
    } else if (num < 0) {
      return null;
    } else {
      res = res * it;
    }
  }
  return res;
}
console.log(factorial(5));

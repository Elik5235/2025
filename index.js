const departmentSalary = {
  HR: 120000,
  development: 5500000,
  finance: 1500000,
  marketing: 1000000,
  sales: undefined,
};

function sumOfWasteSalary(departmentSalary) {
  let total = 0;
  let nameOfUndefined;

  for (const key in departmentSalary) {
    total += departmentSalary[key];
    if (typeof departmentSalary[key] === "number") {
      total += departmentSalary[key];
    } else {
      nameOfUndefined = key;
      console.log(`Немає вірного значення: ${nameOfUndefined}`);
    }
    return total;
  }
}
console.log(sumOfWasteSalary(departmentSalary));

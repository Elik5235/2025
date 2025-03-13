// function sum(a,b){
//     return a + b;
// }
// let superFunction = sum;
// console.log(sum(2,4))

function calculator(num1, num2, functionLink) {
  let result = functionLink(num1, num2);
  return result;
}
console.log(calculator(5, 5, multy));
// Функция для сложения
function add(a, b) {
  return a + b;
}
// Функция для вычитания
function subtract(a, b) {
  return a - b;
}
// Функция для умножения
function multy(a, b) {
  return a * b;
}
// Функция для деления
function divide(a, b) {
  if (b === 0) {
    return "Ошибка: деление на ноль!";
  }
  return a / b;
}

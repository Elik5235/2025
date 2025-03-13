// const number = Number(prompt("введіть число: "));
// if (number % 5 === 0) {
//   console.log(number + " ділиться на 5");
// } else if (number % 3 === 0) {
//   console.log(number + " ділиться на 3");
// } else if (number % 2 === 0) {
//   console.log(number + " ділиться на 2");
// } else{
//   console.log(number + ' число ні ділиться ні на 3, ні на 2, ні на 5');
// };

const monthNumber = 11;
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log("зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("осінь");
    break;
  default: {
    console.log("некоректне значення, введіть від 1 до 12");
  }
}

const menu = Number(prompt('1 - сік 2 - чай 3 - вода 4 - кола 5 - кава'));
switch (menu) {
  case 1: {
    console.log('сік');
    break;
  }
  case 2: {
    console.log('чай');
    break;
  }
  case 3: {
    console.log('вода');
    break;
  }
  case 4: {
    console.log('кола');
    break;
  }
  case 5: { 
    console.log('кава');
    break;
  }
  default: console.log('обкріть щось з меню');
}


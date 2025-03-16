// console.log(1);

//     let i = 0;
//     while(i < 100){
//         console.log(i);
//         i++;
//     }
//     console.log(100);

// while(true){
// console.log('не вірно');
//     break;
// }

// let i = 0;
// while (i < 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

const password = "qwerty123";
let userPassword = prompt("Введіть пароль");
while (userPassword !== password) {
  userPassword = prompt("Введіть вірний пароль");
}
alert("Ласкаво просимо");

// var 2
while (true) {
  const userPass = prompt("Введіть пароль");
  if (userPass === correctPassword) {
    break;
  }
}

//var 3
let isPasswordCorrect = false;
while (!isPasswordCorrect) {
    const userPass = prompt("Введіть пароль");
    if (userPass === correctPassword) {
        isPasswordCorrect = true;
    }
}



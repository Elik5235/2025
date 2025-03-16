// do(
//     циклічний блок кода
// )while(умова)

const correctPass = "qwerty123";
let userPass;
do {
  userPass = prompt("Введіть пароль");
} while (userPass !== correctPass);

if (userPass === correctPass) {
  alert("Ласкаво просимо");
} else {
  alert("Пароль невірний");
}

function diap(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
diap(10, 50);
function count() {
  let num1 = Number(prompt("Введите первое число"));
  let num2 = Number(prompt("Введите второе число"));
  if(num1 >num2){
    console.log('1 число повинно бути менше за 2');
    return;
  }
  for (let i = num1; i <= num2; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }else{
        console.log('Немає числа що ділиться на 5');
    }
  }
}
count()
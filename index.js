// arr.forEach((item) => {
//   console.log(item ** 2);
// });

// Яка різниця між __proto__ та .prototype ?

arr.forEach(
  (item) => {
    //
  },

  // .prototype - коли об'єкти створються за допомогою конструктора

  /* Задача 1

Задача: створити функцію-конструктор для сходів. (ladder)
Об'єкт має властивість:
currentStair - сходинка, на якій ми зараз знаходимось. Початково = 0

Має методи:   <<<--- .prototype
up() - піднімає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує, на якій сходинці ми зараз знаходимось
*/

  function Ladder() {
    this.currentStair = 0;
  },

  function LadderPrototype() {
    this.up = function () {
      this.currentStair++;
      return this;
    };

    this.down = function () {
      this.currentStair--;
      return this;
    };

    this.showStair = function () {
      return this.currentStair;
    };
  }
);

Ladder.prototype = new LadderPrototype();

const ladder = new Ladder();
//1  //2  //3   //2
console.log(ladder.up().up().up().down().showStair());

/* Задача 2 

Перепишіть методи таким чином, щоб можливо було використання чейнінгу, тобто щоб можна було об'єднати виклик методів у ланцюжок

const ladder = new Ladder();

ladder.up().up().down().up().showStair();


*/

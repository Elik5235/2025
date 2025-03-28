function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
  (this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }),
    (this.pop = function () {
      if (this.length > 0) {
        // 1. Зберегти останній елемент
        function MyArray() {}
        {
          return undefined;
        }
      }

      this.forEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
          callback(this[i], i, this);
        }
      };
    });

  MyArray.prototype = new MyArrayPrototype(); // прототипне посилання

  const arr = new MyArray();
  arr.push(1);
  arr.push(2);
  arr.forEach((item) => {
    console.log(item ** 2);
  });

  // Яка різниця між __proto__ та .prototype ?

  // __proto__ працює тільки тоді, коли ми літерально створили об'єкт
  {
    //
  }
}
// .prototype - коли об'єкти створються за допомогою конструктора

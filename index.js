const cat = {
  name: 'Barsik',
  color: 'red',
  age: 1
}

const cat2 = {
  name: 'Murzik',
  color: 'black',
  age: 5
}

const catMethods = { // прототип
  run: function() {
    console.log('Cat is running');
  },
  meow: function() {
    console.log('Meow!');
  }
}

// Як прикрутити catMethods до об'єкту cat?

cat.__proto__ = catMethods; // прототипне посилання
cat2.__proto__ = catMethods;
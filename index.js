// function book(title, author, year, price) {
//   (this.title = title),
//     (this.author = author),
//     (this.year = year),
//     (this.price = price),
//     (this.GetTitle = function () {
//       return this.title;
//     });
//   this.GetAuthor = function () {
//     return this.author;
//   };
//   this.GetYear = function () {
//     return this.year;
//   };
//   this.GetPrice = function () {
//     return this.price;
//   };
//   this.setTitle = function (newTitle) {
//     this.title = newTitle;
//   };
//   this.setAuthor = function (newAuthor) {
//     this.title = newAuthor;
//   };
//   this.setYear = function (newYear) {
//     this.title = newYear;
//   };
//   this.setPrice = function (newPrice) {
//     this.title = newPrice;
//   };

//   this.calculatorDiscount = function(Discount){
//     const DiscountPrice = this.price - (this.price * (Discount / 100))
//     return DiscountPrice;
//   }
// }
// const book1 = new book('FIVE hands','Agata Kristi','1999','1221$')
// console.log(book1.GetAuthor(),book1.GetPrice(),book1.GetTitle(),book1.GetYear());

// book1.setTitle('New Title');

function Country(NameCountry, population, area) {
  (this.NameCountry = NameCountry),
    (this.population = population),
    (this.area = area);

  this.GetDensity = function () {
    return this.population / this.area;
  };
}

const UK = new Country('Uk','67333000',243610)
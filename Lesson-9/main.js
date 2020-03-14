function Animal(name) {
  this.name = name;
  this.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
  };

  var foodAmount = 50;

  this.dailyNorm = function(food) {
    if (!arguments.length) return formatFoodAmount();

    if ((food < 50) || (food > 500)) { 
      
      return console.log('Введите корректное значение корма!');
     }

    foodAmount = food;
  };

  function formatFoodAmount() {
    return foodAmount + ' гр.';
  };

}

function Cat(name) {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;
  this.feed = function() {
    animalFeed.call(this);
    console.log('Кот доволен ^_^');

    return this;
  };

  this.stroke = function() {
    console.log('Гладим кота.');

    return this;
  }
}

var tom = new Cat('Tom');
//console.log(tom.dailyNorm());
//console.log(tom.feed());
//tom = null;
console.log(tom.stroke().feed());
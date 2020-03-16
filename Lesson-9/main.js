function Animal(name) {
  this.name = name;

  var self = this;
  this.feed = function() {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
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
    animalFeed();
    console.log('Кот доволен ^_^');

    return this;
  };

  this.stroke = function() {
    console.log('Гладим кота.');

    return this;
  }
}

var tom = new Cat('Tom');
//console.log(tom.dailyNorm(800));
//console.log(tom.feed());
//tom = null;
console.log(tom.stroke().feed());


// Prototype style

function Animal(name) {
  this._name = name;
  this._foodAmount = 50;

}

Animal.prototype._formatFoodAmount = function() {
  return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function(food) {
  if (!arguments.length) return this._formatFoodAmount();

  if ((food < 50) || (food > 500)) {

    return console.log('Введите корректное значение корма!');
  }
  this._foodAmount = food;
}

Animal.prototype.feed = function() {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}

function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
  Animal.prototype.feed.apply(this);
  console.log('Кот доволен ^_^');

  return this;
}

Cat.prototype.stroke = function() {
  console.log('Гладим кота.');

  return this;
}

var tom = new Cat('Tom');

console.log(tom.dailyNorm(80));
console.log(tom.stroke().feed());

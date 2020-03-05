function Cat(name) {

    Animal.apply(this, arguments);

    this.animalFeed = this.feed;
    this.feed = function () {
        this.animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    };

    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    }

}

var tom = new Cat('Tom');


function Animal(name) {

    this._foodAmount = 50;

    this._formatFoodAmount = function () {
        return this._foodAmount + ' гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return this._formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        this._foodAmount = amount;
    };

    this.name = name;

    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}


tom.feed().stroke();

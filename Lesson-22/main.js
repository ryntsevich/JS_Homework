// Task 7
{
    function getObj(arr) {
        return {
            'Пользователи младше 40': arr.filter(item => item.age < 40),
            'Пользователь с именем Федор': arr.find(item => item.name.startsWith('Fedor'))
        }
    }

    const arr = [
        { name: 'Vasya Pupkin', age: 25 },
        { name: 'Ivan Petrov', age: 30 },
        { name: 'Fedor Ivanov', age: 42 }
    ];
    console.log(getObj(arr));
}


//Task 8
{
    function getArrayObjects(arr) {
        let firstCounter = 1;
        return arr.map(item => {
            return { ['Пользователь ' + firstCounter++]: item };
        });
    }

    const arr = ['Вася', 'Петя', 'Антон', 'Егор', 'Иван'];
    console.log(getArrayObjects(arr));

}


// Task 9
{
    function getObj(arr) {
        const obj = {};
        return arr.reduce((item, nextItem) => {
            return Object.assign(obj, nextItem);
        });

    }

    const arr = [
        { name: 'Vasya' },
        { name: 'Piotr', age: 25 },
        { salary: '2000$' }
    ];

    console.log(getObj(arr));
}


// Task 10
{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }
        _formatFoodAmount() {
            return `${this._foodAmount} гр`;
        }
        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();
            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }
            this._foodAmount = amount;
        }
        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        };
    }

    class Cat extends Animal {
        feed() {
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        }
        stroke() {
            console.log('Гладим кота.');
            return this;
        };
    }
    const tom = new Cat('Tom');
    console.log(tom.dailyNorm(5));
    console.log(tom.feed().stroke());
}


// Task 11
{
    function createPromiseForNumbers(firstNumber, secondNumber) {
        return new Promise((resolve, reject) => {
            console.log('Промис запущен');

            if ((Number.isInteger(firstNumber)) && (Number.isInteger(secondNumber))) {

                let firstCounter = firstNumber,
                    secondCounter = secondNumber;

                (firstNumber > secondNumber) && ([firstCounter, secondCounter] = [secondNumber, firstNumber]);

                let timerId = setInterval(() => {
                    console.log(firstCounter);
                    if (firstCounter == secondCounter) {
                        clearInterval(timerId);
                        resolve(firstCounter);
                    }
                    firstCounter++;
                }, 1000);
            } else {
                reject('В функцию переданы не целые числа');

            }
        }
        );
    }

    createPromiseForNumbers(18, 9)
        .then(firstCounter => console.log(`Результат промиса: ${firstCounter}`))
        .catch(error => console.log(`Возникла ошибка: ${error}`))
        .finally(() => console.log('Работа промиса завершена'));
}

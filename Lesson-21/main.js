// Task 1
{ let { a, b, ...obj } = { a: 1, b: 2, c: 3, d: 4 }; }


//  Task 2
{
    let name = prompt('Ваше имя?');
    const obj = {
        name,
        sayHi() {
            return `Hi, ${this.name}!`;
        }
    };
}

// Task 3
{
    function pow({ a: x, b: y }, z = 1) {
        return (x ** y) * z;
    }

    console.log(pow({ a: 2, b: 3 }, 10));
}


// Task 4
{
    const arr = ['Oleg', '21'];
    function printStr(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`;
    }

    console.log(printStr(...arr));
}


// Task 5
{
    function printElementsArray(...arr) {
        return arr;
    }

    for (let value of printElementsArray(3, 3, 2, 1, 2, 3, 4, 5, 45)) {
        console.log(value);
    }
}

// Task 6
{
    function countVowelLetters(text) {
        text = text.toLowerCase();
        text = [...text];
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;
        text.forEach(item => {
            vowelLetters.includes(item) && counter++;
        });
        
        return counter;
    }

    console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку'));
}











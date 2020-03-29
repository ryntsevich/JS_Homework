//Task1
function getArrayNames(arr) {
    return resultArray = arr.map(function (name) {
        var storage = {};
        storage['name'] = name;
        return storage;
    });
}

var arr = ['Olga', 'Egor', 'Anton', 'Anna'];
console.log(getArrayNames(arr));


// Task2
function getStringCurrentTime(arr) {
    return arr.reduce(function (previousValue, currentValue) {
        return previousValue + ' : ' + currentValue;
    }, 'Текущее время');
}

var arr = ['00', '13', '24'];
console.log(getStringCurrentTime(arr));

Task3
function getSumVowels(word) {
    return word.split('').filter(function (char) {return 'аеёиоуыэюя'.indexOf(char) != -1; }).length;
}

var word = 'слово';
console.log(getSumVowels(word.toLowerCase()));


// Task4
function printSentencesAndCountLetters(text) {
    var sentences = text.split(/[.?!]/);
    var filteredSentences = sentences.filter(function (el) { return el.length > 0; });
    filteredSentences.forEach(printOneSentenceAndCountLetters);
}

function printOneSentenceAndCountLetters(el) {
    var el = el.trim();
    var countLetters = el.split('').filter(isCyryllicLetter).length;
    console.log(el + ': Letters quantity is: ' + countLetters);
}

function isCyryllicLetter(cyryllicSymbol) {
    return (cyryllicSymbol >= 'а' && cyryllicSymbol <= 'я') || (cyryllicSymbol >= 'А' && cyryllicSymbol <= 'Я')
}

var text = 'Привет, студент!              Студент... Как дела, студент?';
printSentencesAndCountLetters(text);


// Task5
function countMaxRepeatWord(sentence) {
    var arraySentences = sentence.split(/[\s.\"?!,;:\(\)]/g);
    var filteredArraySentences = arraySentences.filter(function (el) { return el.length > 0; });

    var storage = {};
    var element = filteredArraySentences[0].toLowerCase();
    var isNotExist;
    storage[element] = 1;
    for (var i = 1; i < filteredArraySentences.length; i++) {
        element = filteredArraySentences[i].toLowerCase();
        isNotExist = true;
        for (key in storage) {

            if (element === key) {
                storage[key] += 1;
                isNotExist = false;
                break;
            }
        }
        if (isNotExist) {
            storage[element] = 1;
        }
    }
    // console.log(storage);

    var maxKey = '';
    var maxValue = 0;
    for (key in storage) {
        if (storage[key] > maxValue) {
            maxValue = storage[key];
            maxKey = key;
        }
    }

    console.log('Максимальное число повторений у слова ' + '"' + maxKey + '"' + ' - ' + maxValue);
}
var sentence = 'Привет, студент! Студент... Как дела дела, студент?';
console.log(countMaxRepeatWord(sentence));

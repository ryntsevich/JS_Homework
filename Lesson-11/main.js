// Task1
var arr = [-1, 0, 2, 34, -2];

function filterNumbersArr(el, i, arr) {
    return el > 0;

}

console.log(arr.filter(filterNumbersArr));


// Task2
var arr = [-1, 0, 2, 34, -2];

console.log(arr.find(findPositiveNumber));

function findPositiveNumber(el, i, arr) {
    return el > 0;
}


// Task3
function isPalindrome(word) {
    return word.trim().toLowerCase() === word.trim().toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome(' шалаШ'));


// Task4
function areAnagrams(word1, word2) {
    return word1.trim().toLowerCase().split('').sort().join('') === word2.trim().toLowerCase().split('').sort().join('');
}

console.log(areAnagrams('коут', 'окТу '));


// Task5
function divideArr(arr, count) {
    var value = 0,
        newArray = [];
    if (arr.length % count === 0) {
        value = Math.floor(arr.length / count);
    } else {
        value = Math.floor(arr.length / count) + 1;
    }
    for (var i = 0; i < value; i++) {
        newArray.push(arr.slice(i * count, count * i + count));
    }
    return newArray;
}

console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));

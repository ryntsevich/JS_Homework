// Task1
var email = 'name_surname-1234@gmail.com',
    regexp = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(-?|\.?)[a-z\d]{1,10}\.com$/i;
console.log(regexp.test(email));


// Task2
function isValidPhoneNumber(str) {
    return /^(\+?375-?|8-?0)(33|29|44|17|25)-?[1-9]{1}\d{2}-?\d{2}-?\d{2}$/.test(str);
}
console.log(isValidPhoneNumber('+375-25-777-77-77'));

// Task3
function countVowelLetters(str) {
    var regexpVowels = /[аеёиоуыэюяaeiouy]/ig,
        countLetters = str.length;
    return countLetters - str.replace(regexpVowels, '').length;
}
console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку'));

// Task3_1
function countVowelLetters(str) {
    var regexpVowels = /[аеёиоуыэюяaeiouy]/ig;
    return str.match(regexpVowels) != null ? (str.match(regexpVowels)).length : 'no vowels';
}
console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку'));

// Task1
var email = 'name_surname-12347@gmail.com',
    regexp = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(-?|\.?)[a-z\d]{1,10}\.com$/i;
console.log(regexp.test(email));
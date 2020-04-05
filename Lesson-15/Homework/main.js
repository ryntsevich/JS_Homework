var form = document.getElementById('form'),
    inputFirst = document.getElementById('inputFirst'),
    inputSecond = document.getElementById('inputSecond'),
    labelFirst = form.getElementsByTagName('label')[0],
    labelSecond = form.getElementsByTagName('label')[1],
    button = document.getElementById('button');


form.addEventListener('keyup', function(event) {
    var inputFirstValue = inputFirst.value.trim(),
        inputSecondValue = inputSecond.value.trim();

    if ((inputFirstValue) && (inputSecondValue)) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

button.addEventListener('click', function(event) {
    event.preventDefault();
    if (document.querySelector('table')) {
        document.querySelector('table').remove();
    }


    if (isValid(inputFirst.value) == false) {
        alert('Введите корректное значение для ' + labelFirst.innerText + ' числа от 1 до 10');
        inputFirst.value = '';
        button.disabled = true;
    }
    if (isValid(inputSecond.value) == false) {
        alert('Введите корректное значение для ' + labelSecond.innerText + ' числа от 1 до 10');
        inputSecond.value = '';
        button.disabled = true;
    }
    if ((isValid(inputSecond.value) == true) && (isValid(inputSecond.value) == true)) {
        var table = document.createElement('table');

        form.appendChild(table);
        for (var i = 0; i < inputSecond.value; i++) {
            var tr = document.createElement('tr');
            table.appendChild(tr);
            for (var j = 0; j < inputFirst.value; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);

                if ((i + j) % 2 === 0) {
                    td.classList.add('black');
                }
            }
        }
        button.disabled = true;

        table.addEventListener('click', function(event) {
            var tds = table.getElementsByTagName('td');

            for (var i = 0; i < tds.length; i++) {
                tds[i].classList.toggle('black');
            }
        });
    };

    function isValid(value) {
        value = value.trim();
        return ("123456789".split('')).indexOf(value) != -1 || "10" === value;
    };
});


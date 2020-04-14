var form = document.getElementById('form');
var names = form.querySelectorAll('input');


if (localStorage.getItem('id')) {
    form.innerHTML = '<div class="message"><p>Пользователь ' + localStorage.getItem('id') + ' успешно создан</p></div>'

} else {
    form.addEventListener('submit', function() {
        event.preventDefault();

        var obj = {};

        for (var i = 0; i < names.length; i++) {
            var name = names[i].name;
            obj[name] = names[i].value;
        }

        var request = new XMLHttpRequest();

        request.open('POST', 'http://dummy.restapiexample.com/api/v1/create');

        request.setRequestHeader('Content-Type', 'application/json');

        request.send(JSON.stringify(obj));

        request.onload = function () {
            try {
                JSON.parse(this.response);
            } catch {
                alert('Ошибка! Не удалось распарсить!');
            }

            localStorage.setItem('id', JSON.parse(this.response).data.id);
            form.insertAdjacentHTML('beforeEnd', '<div class="message"><p>Пользователь ' + localStorage.getItem('id') + ' успешно создан</p></div>')
            names[0].value = '';
            names[0].classList.add('green');
        }
    });
}





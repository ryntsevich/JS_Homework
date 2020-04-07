var button = document.querySelector('button');

button.addEventListener('click', function () {
    if (localStorage.getItem('arrUsers')) {
        alert('Информация о запросе уже сохранена');
        var arrUsers = JSON.parse(localStorage.getItem('arrUsers'));

        var tabs = document.querySelector('.users-tabs'),
            users = document.querySelector('.users-info');

        var arrAvatars = [];
        for (var i = 0; i < arrUsers.length; i++) {
            for (var key in arrUsers[i]) {
                if (key = 'avatar') {
                    arrAvatars.push(arrUsers[i][key]);
                }
                break;
            }
        }

        var arrNames = [];
        for (var i = 0; i < arrUsers.length; i++) {
            for (var key in arrUsers[i]) {
                if (key = 'first_name') {
                    arrNames.push(arrUsers[i][key]);
                }
                break;
            }
        }

        var arrLastNames = [];
        for (var i = 0; i < arrUsers.length; i++) {
            for (var key in arrUsers[i]) {
                if (key = 'last_name') {
                    arrLastNames.push(arrUsers[i][key]);
                }
                break;
            }
        }


        document.querySelector('.users-info').className += " visibility";

        if (document.querySelector('.tab')) {
            tabs.innerHTML = '';
        }
        for (var i = 0; i < arrUsers.length; i++) {
            tabs.insertAdjacentHTML('beforeend', '<div id =' + i + ' class="tab">User ' + (1 + i) + '</div>');
            if (users.childNodes) {
                users.innerHTML = '';
            }
            users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[0] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[0] + ' </p><p>Last Name: ' + arrLastNames[0] + '</p></div>');
        }
        document.getElementById('0').className += ' tab-active';

        tabs.addEventListener('click', function (event) {
            var target = event.target;
            var allTabs = document.querySelectorAll('.tab');
            for (i = 0; i < allTabs.length; i++) {
                allTabs[i].className = allTabs[i].className.replace(' tab-active', '');
            }
            if (target.className === 'tab') {
                target.className += ' tab-active';
            }


            switch (target.id) {
                case '0':
                    if (users.childNodes) {
                        users.innerHTML = '';
                    }
                    users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[0] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[0] + ' </p><p>Last Name: ' + arrLastNames[0] + '</p></div>');
                    break;
                case '1':
                    if (users.childNodes) {
                        users.innerHTML = '';
                    }
                    users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[1] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[1] + ' </p><p>Last Name: ' + arrLastNames[1] + '</p></div>');
                    break;
                case '2':
                    if (users.childNodes) {
                        users.innerHTML = '';
                    }
                    users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[2] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[2] + ' </p><p>Last Name: ' + arrLastNames[2] + '</p></div>');
                    break;
                case '3':
                    if (users.childNodes) {
                        users.innerHTML = '';
                    }
                    users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[3] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[3] + ' </p><p>Last Name: ' + arrLastNames[3] + '</p></div>');
                    break;
                case '4':
                    if (users.childNodes) {
                        users.innerHTML = '';
                    }
                    users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[4] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[4] + ' </p><p>Last Name: ' + arrLastNames[4] + '</p></div>');
                    break;
                case '5':
                    if (users.childNodes) {
                        users.innerHTML = '';
                    }
                    users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[5] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[5] + ' </p><p>Last Name: ' + arrLastNames[5] + '</p></div>');
                    break;
            }
        });

    } else {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users?page=2');
        request.send();
        request.onload = function () {
            var statusType = +String(this.status)[0];
            if (statusType === 2) {
                localStorage.setItem('arrUsers', JSON.stringify(JSON.parse(this.response).data));
                alert('Информация о запросе сохранена');

            } else {
                document.querySelector('.users-info').className += " visibility-error";
                button.className += " button-error";
                button.disabled = true;
                var users = document.querySelector('.users-info');
                users.insertAdjacentHTML('beforeend', '<div class="error"><p>Error ' + this.status + '</p><p>No data received</p></div>');
            }
        }
        request.onerror = function () {
            document.querySelector('.users-info').className += " visibility-error";
            button.className += " button-error";
            button.disabled = true;
            var users = document.querySelector('.users-info');
            users.insertAdjacentHTML('beforeend', '<div class="error"><p>Error ' + this.status + '</p><p>No data received</p></div>');
        };

        request.onloadend = function () {
            console.log('Запрос завершен');
        };
    }
});
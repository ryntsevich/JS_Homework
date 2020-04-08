var button = document.querySelector('button');

button.addEventListener('click', function () {
    if (localStorage.getItem('arrUsers')) {
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


        document.querySelector('.users-info').className += ' visibility';

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
            for (var i = 0; i < allTabs.length; i++) {
                allTabs[i].className = allTabs[i].className.replace(' tab-active', '');
            }
            if (target.className === 'tab') {
                target.className += ' tab-active';
            }

            for (var i = target.id; i < allTabs.length; i++) {
                if (users.childNodes) {
                    users.innerHTML = '';
                }
                users.insertAdjacentHTML('beforeend', '<div class="users-info__image"><img src =' + arrAvatars[i] + '></div><div class = "users-info__text"><p>First Name: ' + arrNames[i] + ' </p><p>Last Name: ' + arrLastNames[i] + '</p></div>');
                break;
            }
            // if (target == this) {
            //     users.innerHTML = '';
            // }
        });

    } else {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users?page=2');
        request.send();
        request.onload = function () {
            var statusType = +String(this.status)[0];
            if (statusType === 2) {
                localStorage.setItem('arrUsers', JSON.stringify(JSON.parse(this.response).data));
            } else {
                document.querySelector('.users-info').className += ' visibility-error';
                button.className += ' button-error';
                button.disabled = true;
                var users = document.querySelector('.users-info');
                users.insertAdjacentHTML('beforeend', '<div class="error"><p>Error ' + this.status + '</p><p>No data received</p></div>');
            }
        }
        request.onerror = function () {
            document.querySelector('.users-info').className += ' visibility-error';
            button.className += ' button-error';
            button.disabled = true;
            var users = document.querySelector('.users-info');
            users.insertAdjacentHTML('beforeend', '<div class="error"><p>Error ' + this.status + '</p><p>No data received</p></div>');
        };
    }
});
var contain = document.getElementById('stopwatch'),
    buttonStart = document.getElementById('start-button'),
    blockTime = document.querySelector('.time'),
    marks = document.querySelector('.marks'),

    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    milliseconds = document.querySelector('.milliseconds'),

    timerID,
    ms = 0,
    s = 0,
    m = 0,
    i = 1;


contain.addEventListener('click', function (event) {
    var target = event.target;

    if (target.id == 'start-button') {
        if (!document.querySelector('.buttons')) {
            blockTime.insertAdjacentHTML('afterend', '<div class="buttons"><button id="reset-button">Reset</button><button id="save-button">Save</button></div>');
        }

        if (!timerID) {
            document.querySelector('.buttons').className = document.querySelector('.buttons').className.replace(' hidden', '');
            timerID = setInterval(function () {
                milliseconds.textContent = ms < 10 ? '0' + ms : ms;
                seconds.textContent = s < 10 ? '0' + s : s;
                minutes.textContent = m < 10 ? '0' + m : m;
                ms++;
                if (ms === 100) {
                    ms = 0;
                    s++;
                }
                if (s === 60) {
                    s = 0;
                    m++;
                }
                if (m === 60) {
                    clearInterval(timerID);
                    timerID = false;

                    buttonStart.className += (' hidden');
                    document.getElementById('save-button').className += (' hidden');
                }

                buttonStart.dataset.state = 'stop';
                buttonStart.textContent = 'Stop';
            }, 10);
        }

        if (buttonStart.dataset.state == 'stop') {
            clearInterval(timerID);
            buttonStart.dataset.state = 'run';
            buttonStart.textContent = 'Run';
            timerID = false;
        }
    }

    if (target.id == 'reset-button') {
        clearInterval(timerID);
        timerID = false;
        ms = 0;
        s = 0;
        m = 0;
        milliseconds.textContent = '00';
        seconds.textContent = '00';
        minutes.textContent = '00';
        buttonStart.dataset.state = 'start';
        buttonStart.textContent = 'Start';
        document.querySelector('.buttons').className += (' hidden');
        marks.innerHTML = '';
        buttonStart.className = buttonStart.className.replace(' hidden', '');
        document.getElementById('save-button').className = document.getElementById('save-button').className.replace(' hidden', '');
    }

    if (target.id == 'save-button') {
        marks.innerHTML += '<p>' + i + ') ' + minutes.textContent + ' : ' + seconds.textContent + ' : ' + milliseconds.textContent + '</p>';
        i++;
    }

});








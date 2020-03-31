var buttonAddRow = document.getElementById('button');
var elementTable = document.getElementById('main-table');

buttonAddRow.addEventListener('click', function () {
  elementTable.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>');
});

elementTable.addEventListener('click', function(event) {
  var target = event.target;
  if (target.tagName === 'TD') {
    // console.log('>> it is TD');
    var tdText = target.innerText;
    target.innerHTML = '<input type="text" name="input" value="' + tdText + '" >';
    var input = target.querySelector('input');
    input.focus();

    input.addEventListener('blur', function() {
      var textInput = input.value;
      target.innerHTML = textInput;
    });
    input.onkeydown = function(event) {
      if (event.key == 'Enter') {
        this.blur();
      }
    };
  }
}, false);

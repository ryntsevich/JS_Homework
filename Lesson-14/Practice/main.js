var block = document.getElementById('container');
var newParagraph = document.createElement('p');
block.appendChild(newParagraph);
newParagraph.innerHTML = 'Hello, here are <a href="http://google.by">Link 1 </a> and <a href="http://google.by">Link 2</a>';
var clonedNewParagraph = newParagraph.cloneNode();
clonedNewParagraph.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';
block.appendChild(clonedNewParagraph);


var button = document.getElementsByTagName('button')[0];
button.onmousedown = function() {
    var linkNewParagraph = newParagraph.children;
    for (var i = 0; i < linkNewParagraph.length; i++) {
        linkNewParagraph[i].className = 'linkNewParagraph';
    }

}

var linkCloneNewParagraph = clonedNewParagraph.children;
for (var i = 0; i < linkCloneNewParagraph.length; i++) {
    linkCloneNewParagraph[i].addEventListener('click', function(event) {
        event.preventDefault();
        var target = event.target;
        var message = target.getAttribute('href');
        alert(message);
    });
}




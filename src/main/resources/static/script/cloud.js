var block1 = document.getElementById('cloud1');
var block2 = document.getElementById('cloud2');

function move(element, from, to, step, delay) {
    var position = parseInt(element.style.left, 10);
    position = isNaN(position) ? from : position;
    if (position >= to) {
        position = from;
    } else {
        position += step;
    }
    element.style.left = position + "px";
    setTimeout(function () {
        move(element, from, to, step, delay);
    }, delay)
}

move(block1, -250, 1800, 1, 45);
move(block2, -350, 1800, 1, 100);

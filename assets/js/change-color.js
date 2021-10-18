const colorChange = [
    '#98e628',
    '#e2b032',
    '#fca7ff',
    '#03ddfe',
    '#fa5d3e',
    '#4cf3b6',
    '#a6fdfd',
];

let i = 0;
setInterval('changeColor()', 500);

function changeColor() {
    if (i === colorChange.length) {
        i = 0;
    } else {
        document.getElementById('chip').style.backgroundColor = colorChange[i++ % colorChange.length]; //循环颜色
    }
}

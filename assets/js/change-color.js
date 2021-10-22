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
changeColor();
setInterval('changeColor()', 500);

function changeColor() {
    if (i === colorChange.length) {
        i = 0;
    } else {
        let chipClass = document.getElementsByClassName('chip');
        for (let chip of chipClass) {
            chip.style.backgroundColor = colorChange[i++ % colorChange.length]; //循环颜色
        }
        let headMessageClass = document.getElementsByClassName('head-message');
        for (let hm of headMessageClass) {
            hm.style.color = colorChange[i++ % colorChange.length]; //循环颜色
        }
    }
}

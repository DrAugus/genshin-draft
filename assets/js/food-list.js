//html 循环最大也是100
const MAX_INDEX = 100
const MAX_BLACK_INDEX = 20

const foodType = {
    'jp_ko_cuisine': 0,//日韩料理
    'eu_cuisine': 1,//西餐
    'tea': 2,//奶茶
    'mala_xiang_guo': 3,//Malatang 串串 麻辣烫 麻辣香锅 冒菜 图片来自美食天下
    'fried_chicken': 4, //炸鸡 烤鸭 Fried chicken and roast duck
    'fen_mian': 5,//粉面
    'dishes': 6,//炒菜
}

function findKey(value, compare = (a, b) => a === b) {
    return Object.keys(data).find(k => compare(data[k], value))
}

// 80 透明度50%
const rateColor = [
    '#98e62880',
    '#e2b03280',
    '#fca7ff80',
    '#03ddfe80',
    '#fa5d3e80',
    '#4cf3b680',
    '#a6fdfd80',
];

const foodTypeColor = [
    'red accent-1',
    'pink accent-1',
    'purple accent-1',
    'deep-purple lighten-4',
    'indigo lighten-4',
    'blue lighten-4',
    'cyan lighten-4',
    'light-blue lighten-4',
    'green lighten-4',
];


const foodTypeName = [
    '日韩料理',
    '西餐',
    '奶茶',
    '香锅串串麻辣烫',
    '炸鸡烤鸭大盘鸡',
    '粉面',
    '炒菜',
];

const foodRate = [
    '',
    '',
    'amber accent-3',
    'light-blue accent-3',
    'cyan accent-3',
    'teal accent-3',
];



// let bestFood=[]
// let length = bestFood.length;
//
// //key 为 name
// let repeatName = new Map()
// bestFood.forEach(v => !repeatName.has(v.name) ? repeatName.set(v.name, v) : repeatName.set(v.name, [repeatName.get(v.name), v]))
// //移除非重复的
// repeatName.forEach((value, key) => {
//     if (!Array.isArray(value))
//         repeatName.delete(key)
// })
// console.log(repeatName)
//下标为name真实的索引值对应name下标的数组内的值
let repeatIndexArr = []





for (let i = 0; i < rateColor.length; ++i) {
    let bg = document.getElementsByClassName('stars-' + i);
    for (let t of bg) {
        t.style.backgroundColor = rateColor[i]
    }
}

const changeInfo = () => {
    for (let i in repeatIndexArr) {
        let arr = repeatIndexArr[i]
        let random = Math.floor((Math.random() * arr.length));
        let index = arr[random]
        console.log('random', random)
        //随机出来的新菜品放在下标0的索引里
        // setBestFood(arr[0], bestFood[index])
    }
}


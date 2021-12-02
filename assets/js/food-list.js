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

//通用变量
const posZijingang = '(紫金港店)';


const restaurant = {
    0: 0,
    1: '汉库麻辣香锅' + posZijingang,
    2: '华莱士·全鸡汉堡(浙港广场店)',
    3: '胖次打面团.烤包.拌粉(城西银泰店)',
    4: '小孔哥湖南津市牛肉粉(太合店)',
    5: '黔缘花溪·苗家牛肉粉' + posZijingang,
    6: '漠漠家.胡辣汤.焖面.肉夹馍(杭州城西店)',
    7: '芝根披萨PIZZA',
    8: '杜小姐在西北·凉皮·肉夹馍·酸辣粉(太和中心店)',
    9: '徐记手撕鸭坊(五洲店)',
    10: '川哥哥.香辣爆炒',
    11: '椒花麻辣香锅' + posZijingang,
    12: '蜜哆哆韩式炸鸡' + posZijingang,
    13: '有间拉面' + posZijingang,
    14: '好口味新疆大盘鸡(拱墅万达店)',
    15: '西北狼只用鲜鸡大盘鸡' + posZijingang,
}

/*
    @name
    @type
    @food
    @food_rate: 食物评级
    @satisfaction: 总体满意度
    @price: 只标记该菜品最低购入价格
    @note: 备注
*/
const foodList = [
    //推荐
    [
        {
            name: 1,
            type: 'mala_xiang_guo',
            food: '香辣-六荤五素单人豪华餐 | 土豆粉 | 雪碧',
            food_rate: 5,
            satisfaction: 3,
            price: '18.67',
            note: '下午会饿 偶现胃痛',
        },
        {
            name: 2,
            type: 'eu_cuisine',
            food: '六件自助-黑胶嫩牛五方+牛气冲天堡+脆皮全腿+鸡米花+香芋派+中可',
            food_rate: 5,
            satisfaction: 4,
            price: '23.8',
            note: '',
        },
        {
            name: 3,
            type: 'fen_mian',
            food: '双主食烤包自选豪华四件套-招牌香酥鸡炭火烤包+铁板烤肉拌粉+可乐+无小食',
            food_rate: 5,
            satisfaction: 4,
            price: '24.8',
            note: '下午会饿',
        },
        {
            name: 4,
            type: 'fen_mian',
            food: '招牌辣椒炒肉汤粉-微辣 | 卤鸡腿',
            food_rate: 4,
            satisfaction: 3,
            price: '17.99',
            note: '16:30会饿',
        },
        {
            name: 5,
            type: 'fen_mian',
            food: '金汤肥牛汤粉 | 椒盐炸脆菇 | 公牛肉饼',
            food_rate: 5,
            satisfaction: 4,
            price: '21',
            note: '下午会饿',
        },
        {
            name: 6,
            type: 'fen_mian',
            food: '焖面自选 | 可乐 | 韭菜盒子 | 加香菜葱花',
            food_rate: 5,
            satisfaction: 4,
            price: '15.79',
            note: '会腻 切忌连续食用 忌香辣焖面',
        },
        {
            name: 6,
            type: 'fen_mian',
            food: '自选焖面单人餐+配胡辣汤 | 藕夹 | 韭菜盒子',
            food_rate: 5,
            satisfaction: 4,
            price: '14.89',
            note: '会腻 切忌连续食用 忌香辣焖面',
        },
        {
            name: 7,
            type: 'eu_cuisine',
            food: 'mini自选-精选芝士披萨',
            food_rate: 5,
            satisfaction: 5,
            price: '9.9',
            note: '仅作小食',
        },
        {
            name: 8,
            type: 'fen_mian',
            food: '岐山臊子面 | 老潼关肉夹馍',
            food_rate: 5,
            satisfaction: 5,
            price: '23.8',
            note: '',
        },
        {
            name: 9,
            type: 'fried_chicken',
            food: '一人份手撕鸭+随机铁板菜+米饭 | 可口可乐',
            food_rate: 5,
            satisfaction: 5,
            price: '19',
            note: '',
        },
        {
            name: 10,
            type: 'dishes',
            food: '尖椒豆皮 | 香芹爆牛肉',
            food_rate: 5,
            satisfaction: 3,
            price: '20.8',
            note: '很辣',
        },
        {
            name: 11,
            type: 'mala_xiang_guo',
            food: '5荤5素套餐 | 土豆粉 | 盲盒随机混搭 | 加香菜中辣',
            food_rate: 5,
            satisfaction: 4,
            price: '20.68',
            note: '下午会饿',
        },
        {
            name: 12,
            type: 'fried_chicken',
            food: '豪华半只鸡套餐-飘香芝士味 | 套餐加量-去骨鸡腿肉2块',
            food_rate: 5,
            satisfaction: 5,
            price: '22.59',
            note: '',
        },
        {
            name: 13,
            type: 'fen_mian',
            food: '酸汤牛腩拉面-加猪排 | 荷包蛋',
            food_rate: 5,
            satisfaction: 5,
            price: '20.48',
            note: '下午会饿',
        },
        {
            name: 14,
            type: 'fried_chicken',
            food: '大盘鸡加肉伴馒头(2个馒头)-微辣',
            food_rate: 5,
            satisfaction: 5,
            price: '18.56',
            note: '',
        },
        {
            name: 15,
            type: 'fried_chicken',
            food: '单人份大盘鸡+宽面-香辣味 | 馒头2个 | 网红锅贴3个',
            food_rate: 5,
            satisfaction: 4,
            price: '17.28',
            note: '下午会饿 偶现胃痛',
        },

    ],
    //拉黑店家 拉黑缘由 拉黑菜品
    [
        ['河南大烩菜', '', ''],
        ['陕老顺.油泼面.凉皮.肉夹馍(祥符街道店)', '', ''],
        ['私町Osaka食堂外带寿司(五洲国际广场店)', '', ''],
        ['遇膳•黄焖鸡米饭•过桥米线(美林湾店)', '', ''],
        ['东北饺子坊-凉皮凉面', '', ''],
        ['秦小二油泼面肉夹馍凉皮臊子面', '', ''],
        ['牛一锅牛肉焖饭(运河上街店)', '特辣特辣', ''],
        ['谭嘴巴酸辣粉·渔粉·凉皮(同人精华店)', '鱼刺过多 粉很少 腻', '招牌渔粉'],
        ['豫顺园·蒸面烩面胡辣汤', '只有两片五花肉 非常干 极其难吃', '豆角五花肉蒸香面']
    ],
];


const foodRate = [
    '',
    '',
    'amber accent-3',
    'light-blue accent-3',
    'cyan accent-3',
    'teal accent-3',
];

let blackRestaurant = foodList[1];
for (let i = 0; i < blackRestaurant.length; ++i) {
    let tips0 = blackRestaurant[i][0]
    let tips1 = blackRestaurant[i][1] ? blackRestaurant[i][1] : '暂无缘由'
    let tips2 = blackRestaurant[i][2] ? blackRestaurant[i][2] : '全部拉黑'

    document.getElementById('nameBlackRestaurant' + i).innerHTML = tips0 + '&nbsp;|&nbsp;' + tips1 + '&nbsp;|&nbsp;' + tips2
}

let bestFood = foodList[0];
let length = bestFood.length;

//key 为 name
let repeatName = new Map()
bestFood.forEach(v => !repeatName.has(v.name) ? repeatName.set(v.name, v) : repeatName.set(v.name, [repeatName.get(v.name), v]))
//移除非重复的
repeatName.forEach((value, key) => {
    if (!Array.isArray(value))
        repeatName.delete(key)
})
console.log(repeatName)
//下标为name真实的索引值对应name下标的数组内的值
let repeatIndexArr = []
const setBestFood = (k, v) => {
    console.log(k, v)
    document.getElementById('foodRestaurantName' + k).innerHTML = restaurant[v.name];
    document.getElementById('foodName' + k).innerHTML = v.food;
    document.getElementById('foodPrice' + k).innerHTML = v.price;
    let imgPath = '/assets/res/food/'
    document.getElementById('food-bg-' + k).src = imgPath + v.type + '.png';
    document.getElementById('food-bg-1-' + k).src = imgPath + v.type + '.png';
    console.log('food-bg-' + k, imgPath + v.type + '.png')

    let bgSatisfaction = document.getElementsByClassName('fl-satisfaction-' + k);
    for (let t of bgSatisfaction) {
        t.style.backgroundColor = rateColor[v.satisfaction]
    }
    let bgFoodRate = document.getElementsByClassName('fl-food-rate-' + k);
    for (let t of bgFoodRate) {
        t.style.backgroundColor = rateColor[v.food_rate]
    }
}

for (let i = 0; i < length; ++i) {
    let repeatIndex = bestFood[i].name
    if (repeatName.has(repeatIndex)) {
        if (Array.isArray(repeatIndexArr[repeatIndex])) {
            repeatIndexArr[repeatIndex].push(i)
        } else {
            repeatIndexArr[repeatIndex] = [i]
        }
        continue;
    }
    setBestFood(i, bestFood[i])
}
if (repeatIndexArr.length) {
    console.log('repeat index ', repeatIndexArr)
    for (let i in repeatIndexArr) {
        //0号下标默认显示 其他下标跳过
        let index = repeatIndexArr[i][0]
        setBestFood(index, bestFood[index])
        //其他下标的行全部隐藏
        for (let j = 1; j < repeatIndexArr[i].length; ++j) {
            let noShowIndex = repeatIndexArr[i][j]
            let showRow = document.getElementsByClassName('row-display-' + noShowIndex);
            for (let s of showRow) {
                s.style.display = 'none'
            }
        }
    }
}

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
        setBestFood(arr[0], bestFood[index])
    }
}

for (let i = bestFood.length; i < MAX_INDEX; ++i) {
    let showRow = document.getElementsByClassName('row-display-' + i);
    for (let s of showRow) {
        s.style.display = 'none'
    }
}

for (let i = blackRestaurant.length; i < MAX_BLACK_INDEX; ++i) {
    let show = document.getElementsByClassName('show-black-res-' + i);
    for (let s of show) {
        s.style.display = 'none'
    }
}

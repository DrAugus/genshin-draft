const foodType = {
    'jp_ko_cuisine': 0,//日韩料理
    'eu_cuisine': 1,//西餐
    'tea': 2,//奶茶
    'mala_xiang_guo': 3,//Malatang 串串 麻辣烫 麻辣香锅 冒菜
    'fried_chicken': 4, //炸鸡 烤鸭 Fried chicken and roast duck
    'fen_mian': 5,//粉面
    'dishes': 6,//炒菜
}

const foodTypeColor = [
    '#98e628',
    '#e2b032',
    '#fca7ff',
    '#03ddfe',
    '#fa5d3e',
    '#4cf3b6',
    '#a6fdfd',
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


/*
    @name
    @type_name
    @type_color
    @food
    @food_rate: 食物评级
    @satisfaction: 总体满意度
    @price
    @note: 备注
*/
const foodList = [
    //推荐
    [
        {
            name: '汉库麻辣香锅' + posZijingang,
            type_name: foodTypeName[foodType.mala_xiang_guo],
            type_color: foodTypeColor[foodType.mala_xiang_guo],
            food: '香辣-六荤五素单人豪华餐 | 土豆粉 | 雪碧',
            food_rate: 5,
            satisfaction: 3,
            price: '18.67',
            note: '下午会饿 偶现胃痛',
        },
        {
            name: '华莱士·全鸡汉堡(浙港广场店)',
            type_name: foodTypeName[foodType.eu_cuisine],
            type_color: foodTypeColor[foodType.eu_cuisine],
            food: '六件自助-黑胶嫩牛五方+牛气冲天堡+脆皮全腿+鸡米花+香芋派+中可',
            food_rate: 5,
            satisfaction: 4,
            price: '23.8',
            note: '',
        },
        {
            name: '胖次打面团.烤包.拌粉(城西银泰店)',
            type_name: foodTypeName[foodType.fen_mian],
            type_color: foodTypeColor[foodType.fen_mian],
            food: '双主食烤包自选豪华四件套-招牌香酥鸡炭火烤包+铁板烤肉拌粉+可乐+无小食',
            food_rate: 5,
            satisfaction: 4,
            price: '24.8',
            note: '下午会饿',
        },
        {
            name: '小孔哥湖南津市牛肉粉(太合店)',
            type_name: foodTypeName[foodType.fen_mian],
            type_color: foodTypeColor[foodType.fen_mian],
            food: '招牌辣椒炒肉汤粉-微辣 | 卤鸡腿',
            food_rate: 4,
            satisfaction: 3,
            price: '17.99',
            note: '16:30会饿',
        },
        {
            name: '黔缘花溪·苗家牛肉粉' + posZijingang,
            type_name: foodTypeName[foodType.fen_mian],
            type_color: foodTypeColor[foodType.fen_mian],
            food: '金汤肥牛汤粉 | 椒盐炸脆菇 | 公牛肉饼',
            food_rate: 5,
            satisfaction: 4,
            price: '21',
            note: '下午会饿',
        },
        {
            name: '漠漠家.胡辣汤.焖面.肉夹馍(杭州城西店)',
            type_name: foodTypeName[foodType.fen_mian],
            type_color: foodTypeColor[foodType.fen_mian],
            food: '焖面自选 | 可乐 | 韭菜盒子 | 加香菜葱花',
            food_rate: 5,
            satisfaction: 4,
            price: '15.79',
            note: '会腻',
        },
        {
            name: '芝根披萨PIZZA',
            type_name: foodTypeName[foodType.eu_cuisine],
            type_color: foodTypeColor[foodType.eu_cuisine],
            food: 'mini自选-精选芝士披萨',
            food_rate: 5,
            satisfaction: 5,
            price: '9.9',
            note: '仅作小食',
        },
        {
            name: '杜小姐在西北·凉皮·肉夹馍·酸辣粉(太和中心店)',
            type_name: foodTypeName[foodType.fen_mian],
            type_color: foodTypeColor[foodType.fen_mian],
            food: '岐山臊子面 | 老潼关肉夹馍',
            food_rate: 5,
            satisfaction: 5,
            price: '23.8',
            note: '',
        },
        {
            name: '徐记手撕鸭坊(五洲店)',
            type_name: foodTypeName[foodType.fried_chicken],
            type_color: foodTypeColor[foodType.fried_chicken],
            food: '一人份手撕鸭+随机铁板菜+米饭 | 可口可乐',
            food_rate: 5,
            satisfaction: 5,
            price: '19',
            note: '',
        },
        {
            name: '川哥哥.香辣爆炒',
            type_name: foodTypeName[foodType.dishes],
            type_color: foodTypeColor[foodType.dishes],
            food: '尖椒豆皮 | 香芹爆牛肉',
            food_rate: 5,
            satisfaction: 3,
            price: '20.8',
            note: '很辣',
        },
        {
            name: '椒花麻辣香锅' + posZijingang,
            type_name: foodTypeName[foodType.mala_xiang_guo],
            type_color: foodTypeColor[foodType.mala_xiang_guo],
            food: '5荤5素套餐 | 土豆粉 | 盲盒随机混搭 | 加香菜中辣',
            food_rate: 5,
            satisfaction: 4,
            price: '20.68',
            note: '下午会饿',
        },
        {
            name: '蜜哆哆韩式炸鸡' + posZijingang,
            type_name: foodTypeName[foodType.fried_chicken],
            type_color: foodTypeColor[foodType.fried_chicken],
            food: '豪华半只鸡套餐-飘香芝士味 | 套餐加量-去骨鸡腿肉2块',
            food_rate: 5,
            satisfaction: 5,
            price: '22.59',
            note: '',
        },
        {
            name: '有间拉面' + posZijingang,
            type_name: foodTypeName[foodType.fen_mian],
            type_color: foodTypeColor[foodType.fen_mian],
            food: '酸汤牛腩拉面-加猪排 | 荷包蛋',
            food_rate: 5,
            satisfaction: 5,
            price: '20.48',
            note: '下午会饿',
        },
        {
            name: '好口味新疆大盘鸡(拱墅万达店)',
            type_name: foodTypeName[foodType.fried_chicken],
            type_color: foodTypeColor[foodType.fried_chicken],
            food: '大盘鸡加肉伴馒头(2个馒头)-微辣',
            food_rate: 5,
            satisfaction: 5,
            price: '18.56',
            note: '',
        },
        {
            name: '西北狼只用鲜鸡大盘鸡' + posZijingang,
            type_name: foodTypeName[foodType.fried_chicken],
            type_color: foodTypeColor[foodType.fried_chicken],
            food: '单人份大盘鸡+宽面-香辣味 | 馒头2个 | 网红锅贴3个',
            food_rate: 5,
            satisfaction: 4,
            price: '17.28',
            note: '下午会饿 偶现胃痛',
        },

    ],
    //拉黑店家
    [
        '河南大烩菜',
        '陕老顺.油泼面.凉皮.肉夹馍(祥符街道店)',
        '私町Osaka食堂外带寿司(五洲国际广场店)',
        '遇膳•黄焖鸡米饭•过桥米线(美林湾店)',
        '东北饺子坊-凉皮凉面',
        '秦小二油泼面肉夹馍凉皮臊子面',
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
    // document.getElementById('nameBlackRestaurant' + i).innerHTML = blackRestaurant[i];
}

//foodList FL

let FL_name = [];
let FL_food = [];
let FL_foodRate = [];
let FL_satisfaction = [];
let FL_price = [];
let FL_note = [];

for (let info of foodList[0]) {
    FL_name.push(info.name);
    FL_food.push(info.food);
    FL_foodRate.push(info.food_rate);
    FL_satisfaction.push(info.satisfaction);
    FL_price.push(info.price);
    FL_note.push(info.note);
}
console.log(FL_name, FL_food);
let length = foodList[0].length;
for (let i = 0; i < length; ++i) {
    document.getElementById('FL_name' + i).innerHTML = FL_name[i];
    document.getElementById('FL_food' + i).innerHTML = FL_food[i];
    document.getElementById('FL_price' + i).innerHTML = FL_price[i];
    document.getElementById('FL_note' + i).innerHTML = FL_note[i];

    document.getElementById('FL_foodRate' + i).className = foodRate[FL_foodRate[i]];
    document.getElementById('FL_satisfaction' + i).className = foodRate[FL_satisfaction[i]];
}


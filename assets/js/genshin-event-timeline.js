const EN = 0;
const ZH = 1;
const showLanguage = ZH;

const elementIndex = {
    'cao': 0,
    'yan': 1,
    'lei': 2,
    'shui': 3,
    'huo': 4,
    'feng': 5,
    'bing': 6,
}

const elementColor = [
    '#98e628',//草
    '#e2b032',//岩
    '#fca7ff',//雷
    '#03ddfe',//水
    '#fa5d3e',//火
    '#4cf3b6',//风
    '#a6fdfd',//冰
];

const elementImg = [
    'dendro.png',
    'geo.png',
    'electro.png',
    'hydro.png',
    'pyro.png',
    'anemo.png',
    'cryo.png',
]

const colorWeapon = '#FFAA4B';

const eventsData = [
    [
        {
            name: "The Heron's Invitation Web Event",
            pos: '0% 48%',
            image: 'the_herons_invitation.jpg',
            start: '2021-07-26 04:00:00',
            end: '2021-08-02 23:59:59',
            color: '#FFFBF1',
            zoom: '200%',
            url: 'https://www.hoyolab.com/genshin/article/543290',
            showOnHome: true,
        },
        {
            name: 'Summer Night Mementos',
            pos: '0% 40%',
            image: 'summer_night_mementos.jpg',
            start: '2021-08-05 04:00:00',
            end: '2021-08-11 23:59:59',
            color: '#FFFEF9',
            zoom: '200%',
            url: 'https://mhy.link/071OHHA6',
            showOnHome: true,
        },
        {
            name: 'An Unforgettable Journey - Anniversary Web Event',
            pos: '0% 55%',
            image: 'an_unforgettable_journey.jpg',
            start: '2021-09-28 04:00:00',
            end: '2021-10-12 23:59:59',
            color: '#5A8EBE',
            zoom: '100%',
            url: 'https://mhy.link/adfsJJA6',
            showOnHome: true,
        },
    ],
    [
        {
            name: 'Lost Riches',
            pos: '0% 50%',
            image: 'lost_riches_2.jpg',
            start: '2021-08-06 10:00:00',
            end: '2021-08-16 03:59:59',
            color: '#FFF2DC',
            zoom: '170%',
            url: 'https://genshin.mihoyo.com/en/news/detail/14337',
            showOnHome: true,
        },
        {
            name: 'Ley Line Overflow',
            pos: '20% 35%',
            image: 'ley_line_overflow.jpg',
            start: '2021-08-23 04:00:00',
            end: '2021-08-30 03:59:59',
            color: '#43DA8C',
            zoom: '150%',
            url: 'https://www.hoyolab.com/genshin/article/661106',
            showOnHome: true,
        },
        {
            name: 'Spectral Secrets',
            pos: '0% 25%',
            image: 'spectral_secrets.jpg',
            start: '2021-09-19 10:00:00',
            end: '2021-09-26 03:59:59',
            color: '#F6F5F0',
            zoom: '170%',
            url: 'https://www.hoyolab.com/genshin/article/780934',
            showOnHome: true,
        },
        {
            name: 'Passage of Clouds and Stars - Daily Login',
            pos: '0% 40%',
            image: 'passage_of_clouds_and_stars.jpg',
            start: '2021-09-28 10:00:00',
            end: '2021-10-11 03:59:59',
            color: '#547BE4',
            zoom: '200%',
            url: 'https://www.hoyolab.com/article/780929',
            showOnHome: true,
        },
        {
            name: "Tuned to the World's Sound",
            pos: '0% 15%',
            image: 'tuned_to_the_worlds_sound.jpg',
            start: '2021-10-15 10:00:00',
            end: '2021-10-25 03:59:59',
            color: '#FFF8F1',
            zoom: '300%',
            url: 'https://genshin.mihoyo.com/en/news/detail/16356',
            showOnHome: true,
        },
    ],
    [
        {
            name: 'Thunder Sojourn',
            pos: '0% 25%',
            image: 'thunder_sojourn.jpg',
            start: '2021-07-22 10:00:00',
            end: '2021-08-09 03:59:59',
            color: '#F0DBFF',
            zoom: '200%',
            url: 'https://genshin.mihoyo.com/en/news/detail/14337',
            showOnHome: true,
        },
        {
            name: 'Theater Mechanicus: Stage of Wonders',
            pos: '0% 45%',
            image: 'theater_mechanicus_wonders.jpg',
            start: '2021-08-12 10:00:00',
            end: '2021-08-26 03:59:59',
            color: '#F8EAC4',
            zoom: '200%',
            url: 'https://www.hoyolab.com/genshin/article/661106',
            showOnHome: true,
        },
        {
            name: 'Lunar Realm',
            pos: '0% 50%',
            image: 'lunar_realm.jpg',
            start: '2021-09-10 10:00:00',
            end: '2021-09-20 03:59:59',
            color: '#3585FF',
            zoom: '180%',
            url: 'https://www.hoyolab.com/genshin/article/780932',
            showOnHome: true,
        },
        {
            name: 'Moonlight Merriment',
            pos: '100% 15%',
            image: 'moonlight_merriment.jpg',
            start: '2021-09-27 10:00:00',
            end: '2021-10-11 03:59:59',
            color: '#FF7B69',
            zoom: '150%',
            url: 'https://www.hoyolab.com/genshin/article/780930',
            showOnHome: true,
        },
        {
            name: 'Labyrinth Warriors',
            pos: '0% 14%',
            image: 'labyrinth_warriors.jpg',
            start: '202110-21 10:00:00',
            end: '2021-11-08 03:59:59',
            color: '#CFB1F1',
            zoom: '250%',
            url: 'https://genshin.mihoyo.com/en/news/detail/16356',
            showOnHome: true,
        },
    ],
    [
        {
            name: 'Act I',
            start: '2021-07-22 10:00:00',
            end: '2021-07-24 04:00:00',
            color: '#F0DBFF',
            url: 'https://www.hoyolab.com/genshin/article/567649',
            startOnly: true,
            timezoneDependent: true,
        },
        {
            name: 'Act II',
            start: '2021-07-24 04:00:00',
            end: '2021-07-27 04:00:00',
            color: '#F0DBFF',
            url: 'https://www.hoyolab.com/genshin/article/567649',
            startOnly: true,
        },
        {
            name: 'Act III',
            start: '2021-07-27 04:00:00',
            end: '2021-07-30 04:00:00',
            color: '#F0DBFF',
            url: 'https://www.hoyolab.com/genshin/article/567649',
            startOnly: true,
        },
        {
            name: 'Act IV',
            start: '2021-07-30 04:00:00',
            end: '2021-08-09 03:59:59',
            color: '#F0DBFF',
            url: 'https://www.hoyolab.com/genshin/article/567649',
            image: 'thunder_sojourn.jpg',
            zoom: '200%',
            pos: '0% 25%',
            startOnly: true,
        },
        {
            name: 'Phantom Flow',
            pos: '0% 20%',
            image: 'phantom_flow.jpg',
            start: '2021-08-20 10:00:00',
            end: '2021-08-30 03:59:59',
            color: '#FFB6EB',
            zoom: '100%',
            url: 'https://www.hoyolab.com/genshin/article/661106',
            showOnHome: true,
        },
        {
            name: 'Hyakunin Ikki',
            pos: '0% 70%',
            image: 'hyakunin_ikki.jpg',
            start: '2021-09-02 10:00:00',
            end: '2021-09-13 03:59:59',
            color: '#E48DA5',
            zoom: '200%',
            url: 'https://www.hoyolab.com/genshin/article/780931',
            showOnHome: true,
        },
        {
            name: 'Path I',
            start: '2021-09-27 10:00:00',
            end: '2021-10-01 04:00:00',
            color: '#FF7B69',
            url: 'https://www.hoyolab.com/genshin/article/780930',
            startOnly: true,
        },
        {
            name: 'Path II',
            start: '2021-10-01 04:00:00',
            end: '2021-10-05 04:00:00',
            color: '#FF7B69',
            url: 'https://www.hoyolab.com/genshin/article/780930',
            startOnly: true,
        },
        {
            name: 'Path III',
            pos: '100% 15%',
            image: 'moonlight_merriment.jpg',
            start: '2021-10-05 04:00:00',
            end: '2021-10-11 03:59:59',
            color: '#FF7B69',
            zoom: '150%',
            url: 'https://www.hoyolab.com/genshin/article/780930',
            startOnly: true,
        },
        {
            name: 'Part 1',
            start: '2021-10-21 10:00:00',
            end: '2021-10-24 04:00:00',
            color: '#CFB1F1',
            url: 'https://genshin.mihoyo.com/en/news/detail/16356',
            startOnly: true,
        },
        {
            name: 'Part 2',
            start: '2021-10-24 04:00:00',
            end: '2021-10-27 04:00:00',
            color: '#CFB1F1',
            url: 'https://genshin.mihoyo.com/en/news/detail/16356',
            startOnly: true,
        },
        {
            name: 'Part 3',
            start: '2021-10-27 04:00:00',
            end: '2021-10-30 04:00:00',
            color: '#CFB1F1',
            url: 'https://genshin.mihoyo.com/en/news/detail/16356',
            startOnly: true,
        },
        {
            name: 'Part 4',
            pos: '0% 14%',
            image: 'labyrinth_warriors.jpg',
            start: '2021-10-30 04:00:00',
            end: '2021-11-08 03:59:59',
            color: '#CFB1F1',
            zoom: '250%',
            url: 'https://genshin.mihoyo.com/en/news/detail/16356',
            startOnly: true,
        },
    ],
    [
        {
            no: 0,
            shortname: ['venti', '温迪'],
            name: ['Ballad in Goblets - Venti Banner', '「杯装之诗」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'ballad_in_goblets_1.png',
            start: '2020-09-28 10:00:00',
            end: '2020-10-18 17:59:59',
            color: elementColor[elementIndex.feng],
            url: 'https://bbs.mihoyo.com/ys/article/1748378',
            showOnHome: true,
            version: '1.0',
        },
        {
            no: 1,
            shortname: ['klee', '可莉'],
            name: ['Sparkling Steps - Klee Banner', '「闪焰的驻足」'],
            pos: '40% 20%',
            zoom: '180%',
            image: 'sparkling_steps_1.png',
            start: '2020-10-20 18:00:00',
            end: '2020-11-09 17:59:59',
            color: elementColor[elementIndex.huo],
            url: 'https://bbs.mihoyo.com/ys/article/2277693',
            showOnHome: true,
        },
        {
            no: 2,
            shortname: ['tartaglia', '达达利亚'],
            name: ['Farewell of Snezhnaya - Tartaglia Banner', '「暂别冬都」'],
            pos: '50% 5%',
            zoom: '180%',
            image: 'farewell_of_snezhnaya_1.png',
            start: '2020-11-11 18:00:00',
            end: '2020-12-01 15:59:59',
            color: elementColor[elementIndex.shui],
            url: 'https://bbs.mihoyo.com/ys/article/2563525',
            showOnHome: true,
            version: '1.1',
        },
        {
            no: 3,
            shortname: ['zhongli', '钟离'],
            name: ['Gentry of Hermitage - Zhongli Banner', '「陵薮市朝」'],
            pos: '40% 5%',
            zoom: '180%',
            image: 'gentry_of_hermitage_1.png',
            start: '2020-12-01 18:00:00',
            end: '2020-12-22 14:59:59',
            color: elementColor[elementIndex.yan],
            url: 'https://bbs.mihoyo.com/ys/article/2878243',
            showOnHome: true,
        },
        {
            no: 4,
            shortname: ['albedo', '阿贝多'],
            name: ['Secretum Secretorum - Albedo Banner', '「深秘之息」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'secretum_secretorum_1.png',
            start: '2020-12-23 11:00:00',
            end: '2021-01-12 15:59:59',
            color: elementColor[elementIndex.yan],
            url: 'https://bbs.mihoyo.com/ys/article/3236897',
            showOnHome: true,
            version: '1.2',
        },
        {
            no: 5,
            shortname: ['ganyu', '甘雨'],
            name: ['Adrift in the Harbor - Ganyu Banner', '「浮生孰来」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'adrift_in_the_harbor_1.png',
            start: '2021-01-12 18:00:00',
            end: '2021-02-02 14:59:59',
            color: elementColor[elementIndex.bing],
            url: 'https://bbs.mihoyo.com/ys/article/3661305',
            showOnHome: true,
        },
        {
            no: 6,
            shortname: ['xiao', '魈'],
            name: ['Invitation to Mundane Life - Xiao Banner', '「烟火之邀」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'invitation_to_mundane_life_1.png',
            start: '2021-02-03 11:00:00',
            end: '2021-02-17 15:59:59',
            color: elementColor[elementIndex.feng],
            url: 'https://bbs.mihoyo.com/ys/article/4005715',
            showOnHome: true,
            version: '1.3',
        },
        {
            no: 7,
            shortname: ['keqing', '刻晴'],
            name: ['Dance of Lanterns - Keqing Banner', '「鱼龙灯昼」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'dance_of_lanterns_1.png',
            start: '2021-02-17 18:00:00',
            end: '2021-03-02 15:59:59',
            color: elementColor[elementIndex.lei],
            url: 'https://bbs.mihoyo.com/ys/article/4005720',
            showOnHome: true,
        },
        {
            no: 8,
            shortname: ['hu_tao', '胡桃'],
            name: ['Moment of Bloom - Hu Tao Banner', '「赤团开时」'],
            pos: '60% 20%',
            zoom: '180%',
            image: 'moment_of_bloom_1.jpg',
            start: '2021-03-02 18:00:00',
            end: '2021-03-16 14:59:59',
            color: elementColor[elementIndex.huo],
            url: 'https://bbs.mihoyo.com/ys/article/4701165',
            showOnHome: true,
        },
        {
            no: 9,
            shortname: ['venti', '温迪'],
            name: ['Ballad in Goblets - Venti Banner', '「杯装之诗」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'ballad_in_goblets_2.jpg',
            start: '2021-03-17 11:00:00',
            end: '2021-04-06 15:59:59',
            color: elementColor[elementIndex.feng],
            url: 'https://bbs.mihoyo.com/ys/article/4959532',
            showOnHome: true,
            version: '1.4',
        },
        {
            no: 10,
            shortname: ['tartaglia', '达达利亚'],
            name: ['Farewell of Snezhnaya - Tartaglia Banner', '「暂别冬都」'],
            pos: '50% 5%',
            zoom: '180%',
            image: 'farewell_of_snezhnaya_2.png',
            start: '2021-04-06 18:00:00',
            end: '2021-04-27 14:59:59',
            color: elementColor[elementIndex.shui],
            url: 'https://bbs.mihoyo.com/ys/article/5305223',
            showOnHome: true,
        },
        {
            no: 11,
            shortname: ['zhongli', '钟离'],
            name: ['Gentry of Hermitage - Zhongli Banner', '「陵薮市朝」'],
            pos: '40% 5%',
            zoom: '180%',
            image: 'gentry_of_hermitage_2.png',
            start: '2021-04-28 11:00:00',
            end: '2021-05-18 17:59:59',
            color: elementColor[elementIndex.yan],
            url: 'https://bbs.mihoyo.com/ys/article/5726195',
            showOnHome: true,
            version: '1.5',
        },
        {
            no: 12,
            shortname: ['eula', '优菈'],
            name: ['Born of Ocean Swell - Eula Banner', '「浪涌之瞬」'],
            pos: '40% 20%',
            zoom: '180%',
            image: 'born_of_ocean_swell_1.jpg',
            start: '2021-05-18 18:00:00',
            end: '2021-06-08 14:59:59',
            color: elementColor[elementIndex.bing],
            url: 'https://bbs.mihoyo.com/ys/article/6179333',
            showOnHome: true,
        },
        {
            no: 13,
            shortname: ['klee', '可莉'],
            name: ['Sparkling Steps - Klee Banner', '「闪焰的驻足」'],
            pos: '40% 20%',
            zoom: '180%',
            image: 'sparkling_steps_2.png',
            start: '2021-06-09 11:00:00',
            end: '2021-06-29 17:59:59',
            color: elementColor[elementIndex.huo],
            url: 'https://bbs.mihoyo.com/ys/article/6634463',
            showOnHome: true,
            version: '1.6',
        },
        {
            no: 14,
            shortname: ['kaedehara_kazuha', '枫原万叶'],
            name: ['Leaves in the Wind - Kaedehara Kazuha Banner', '「叶落风随」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'leaves_in_the_wind_1.png',
            start: '2021-06-29 18:00:00',
            end: '2021-07-20 14:59:59',
            color: elementColor[elementIndex.feng],
            url: 'https://bbs.mihoyo.com/ys/article/7067772',
            showOnHome: true,
        },
        {
            no: 15,
            shortname: ['kamisato_ayaka', '神里绫华'],
            name: ["The Heron's Court - Kamisato Ayaka Banner", '「白鹭之庭」'],
            pos: '30% 20%',
            zoom: '180%',
            image: 'the_herons_court_1.jpg',
            start: '2021-07-21 11:00:00',
            end: '2021-08-10 17:59:59',
            color: elementColor[elementIndex.bing],
            url: 'https://bbs.mihoyo.com/ys/article/7578978',
            showOnHome: true,
            timezoneDependent: true,
            version: '2.0',
        },
        {
            no: 16,
            shortname: ['yoimiya', '宵宫'],
            name: ['Tapestry of Golden Flames - Yoimiya Banner', '「焰色天河」'],
            pos: '30% 25%',
            zoom: '180%',
            image: 'tapestry_of_golden_flames_1.jpg',
            start: '2021-08-10 18:00:00',
            end: '2021-08-31 14:59:59',
            color: elementColor[elementIndex.huo],
            url: 'https://bbs.mihoyo.com/ys/article/8275802',
            showOnHome: true,
        },
        {
            no: 17,
            shortname: ['raiden_shogun', '雷电将军'],
            name: ['Reign of Serenity - Raiden Shogun Banner', '「影寂天下人」'],
            pos: '30% 10%',
            zoom: '180%',
            image: 'reign_of_serenity_1.jpg',
            start: '2021-09-01 11:00:00',
            end: '2021-09-21 17:59:59',
            color: elementColor[elementIndex.lei],
            url: 'https://bbs.mihoyo.com/ys/article/9004344',
            showOnHome: true,
            timezoneDependent: true,
            version: '2.1',
        },
        {
            no: 18,
            shortname: ['sangonomiya_kokomi', '珊瑚宫心海'],
            name: ['Drifting Luminescence - Sangonomiya Kokomi Banner', '「浮岳虹珠」'],
            pos: '40% 15%',
            zoom: '180%',
            image: 'drifting_luminescence_1.jpg',
            start: '2021-09-21 18:00:00',
            end: '2021-10-12 14:59:59',
            color: elementColor[elementIndex.shui],
            url: 'https://bbs.mihoyo.com/ys/article/9679284',
            showOnHome: true,
        },
        {
            no: 19,
            shortname: ['tartaglia', '达达利亚'],
            name: ['Farewell of Snezhnaya - Tartaglia Banner', '「暂别冬都」'],
            pos: '50% 5%',
            zoom: '180%',
            image: 'farewell_of_snezhnaya_3.png',
            start: '2021-10-13 11:00:00',
            end: '2021-11-02 17:59:59',
            color: elementColor[elementIndex.shui],
            url: 'https://bbs.mihoyo.com/ys/article/10755906',
            showOnHome: true,
            timezoneDependent: true,
            version: '2.2',
        },
        {
            no: 20,
            shortname: ['hu_tao', '胡桃'],
            name: ['Moment of Bloom - Hu Tao Banner', '「雪霁梅香」'],
            info: ['The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.',
                '「往生堂」七十七代堂主，年纪轻轻就已主掌璃月的葬仪事务'],
            pos: '60% 20%',
            zoom: '180%',
            image: 'moment_of_bloom_2.jpg',
            start: '2021-11-02 18:00:00',
            end: '2021-11-23 14:59:59',
            color: elementColor[elementIndex.huo],
            url: 'https://bbs.mihoyo.com/ys/article/11444616',
            showOnHome: true,
        },
        {
            no: 21,
            shortname: ['albedo', '阿贝多'],
            name: ['Secretum Secretorum - Albedo Banner', '「深秘之息」'],
            info: ['', '西风骑士团首席炼金术士兼调查小队队长，被称作「白垩之子」的天才。'],
            pos: '40% 15%',
            zoom: '180%',
            fullPos: '55% 0%',
            fullZoom: '100%',
            image: 'secretum_secretorum_2.jpg',
            start: '2021-11-24 11:00:00',
            end: '2021-12-14 17:59:59',
            color: elementColor[elementIndex.yan],
            url: 'https://bbs.mihoyo.com/ys/article/12233203',
            showOnHome: true,
            version: '2.3',
        },
        {
            no: 22,
            shortname: ['eula', '优菈'],
            name: ['Born of Ocean Swell - Eula Banner', '「浪涌之瞬」'],
            info: ['', '古老家族出身的「浪花骑士」，西风骑士团游击小队队长。身为旧贵族后裔却加入了堪称死对头的西风骑士团，该事件至今仍是蒙德一大谜团。'],
            pos: '40% 20%',
            zoom: '180%',
            fullPos: '35% 30%',
            fullZoom: '100%',
            image: 'born_of_ocean_swell_2.jpg',
            start: '2021-11-24 11:00:00',
            end: '2021-12-14 17:59:59',
            color: elementColor[elementIndex.bing],
            url: 'https://bbs.mihoyo.com/ys/article/12233204',
            showOnHome: true,
            wish_2: true,
        },
        {
            //除名字外都待定 日期推测应该准确
            no: 23,
            shortname: ['arataki_itto', '荒泷一斗'],
            name: ['Hanamizaka Heroics - Arataki Itto Banner', '「花坂豪快」'],
            info: ['The first and greatest head of the Arataki Gang, famed throughout Inazuma City\'s Hanamizaka... Wait, what? You\'ve never heard of them? Are you trying to be funny here?',
                '活跃在稻妻城花见坂的「荒泷派」初代目头领。什么，从没听说过「荒泷派」？ 你是想找茬吗？'],
            pos: '40% 20%',
            zoom: '180%',
            fullPos: '55% 30%',
            fullZoom: '200%',
            image: '',
            start: '2021-12-14 18:00:00',
            end: '2022-01-04 14:59:59',
            color: elementColor[elementIndex.yan],
            url: 'https://bbs.mihoyo.com/ys/article/?',
            showOnHome: true,
        },
        {
            //除名字外都待定 日期推测应该准确
            no: 24,
            shortname: ['shenhe', '申鹤'],
            name: ['', '「孤辰茕怀」'],
            info: ['',
                '申鹤本是驱魔世家旁系之子，出于一些原因被留云借风真君收养。\n' +
                '对申鹤来说，留云借风真君是一位博学健谈的师父。\n' +
                '对留云借风真君来说，申鹤也是她指点过的人类中最特别的那个。\n' +
                '以人类之身与仙家一同生活并非易事，但申鹤体质特殊、意志过人，又极有仙术天赋，很受众仙家认可。不过，长年累月修行加上吃仙草、饮山露的生活习惯，让她离人间的生活越发遥远，甚至被当成过神秘的白发仙人。\n' +
                '性格中偶然流露出的锋芒与身上绑缚的红绳，也为她的「神秘」再添一笔。若把她的过去写成故事，想必会有多个版本。\n' +
                '天上仙女也好，白发魔头也罢，人们将如何看待这个神秘的女子？而掩藏在她身上的秘密与真心，也如山间云雾一般难以捕捉。'],
            pos: '40% 20%',
            zoom: '120%',
            fullPos: '55% 30%',
            fullZoom: '200%',
            image: 'shenhe_1.jpg',
            start: '2022-01-05 11:00:00',
            end: '2022-01-26 17:59:59',
            color: elementColor[elementIndex.bing],
            url: 'https://bbs.mihoyo.com/ys/article/?',
            showOnHome: true,
            version: '2.4',
        },
        {
            //除名字外都待定 日期推测应该准确
            no: 25,
            shortname: ['yunjin', '云堇'],
            name: ['', '「红毹婵娟」'],
            info: ['',
                '既是戏团「云翰社」的当家，也是璃月港内风头正劲的名角。\n' +
                '云堇唱腔甜美，扮相俏丽，以灵动又富有情感的表演闻名。无论是娇柔端庄的闺中千金，还是义薄云天的巾帼女杰，她都能拿捏得恰到好处。\n' +
                '更为难得的是，这位年轻演员还懂得剧本创作。除《神女劈观》外，云翰社近年来另有不少新剧，皆出自云堇之手。\n' +
                '不过，令人意外的是，向来以端庄优雅形象示人的云堇，还有个不为人知的小爱好——听摇滚。\n' +
                '若是在璃月港内的摇滚乐表演现场见到她，还请不要声张。\n' +
                '否则，她说不定又要挨长辈们唠叨啦。'],
            pos: '40% 20%',
            zoom: '120%',
            fullPos: '55% 30%',
            fullZoom: '200%',
            image: 'yunjin_1.jpg',
            start: '2022-01-05 11:00:00',
            end: '2022-01-26 17:59:59',
            color: elementColor[elementIndex.yan],
            url: 'https://bbs.mihoyo.com/ys/article/?',
            showOnHome: true,
            wish_2: true,
        },
    ],
    [
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_0.jpg',
            start: '2020-09-28 10:00:00',
            end: '2020-10-18 17:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/1748393',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_1.jpg',
            start: '2020-10-20 18:00:00',
            end: '2020-11-09 17:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/2277850',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_2.jpg',
            start: '2020-11-11 18:00:00',
            end: '2020-12-01 15:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/2563554',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_3.jpg',
            start: '2020-12-01 18:00:00',
            end: '2020-12-22 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/2878254',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_4.jpg',
            start: '2020-12-23 11:00:00',
            end: '2021-01-12 15:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/3236902',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_5.jpg',
            start: '2021-01-12 18:00:00',
            end: '2021-02-02 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/3661310',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_6.jpg',
            start: '2021-02-03 11:00:00',
            end: '2021-02-23 15:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/4005726',
            showOnHome: true,
            timezoneDependent: true,
        },
        // 移除7 刻晴 搅屎棍  魈及刻晴前半期池：和璞鸢，磐岩结绿 刻晴后半期及胡桃池：狼的末路，护摩之杖
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_7.jpg',
            start: '',
            end: '',
            color: '#FFAA4B',
            url: '',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_8.jpg',
            start: '2021-02-23 18:00:00',
            end: '2021-03-16 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/4571433',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_9.jpg',
            start: '2021-03-17 11:00:00',
            end: '2021-04-06 15:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/4959533',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_10.jpg',
            start: '2021-04-06 18:00:00',
            end: '2021-04-27 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/5305224',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_11.jpg',
            start: '2021-04-28 11:00:00',
            end: '2021-05-18 17:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/5726196',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_12.jpg',
            start: '2021-05-18 18:00:00',
            end: '2021-06-08 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/6179334',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_13.jpg',
            start: '2021-06-09 11:00:00',
            end: '2021-06-29 17:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/6634464',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_14.jpg',
            start: '2021-06-29 18:00:00',
            end: '2021-07-20 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/7067773',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_15.jpg',
            start: '2021-07-21 11:00:00',
            end: '2021-08-10 17:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/7578979',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '30% 30%',
            image: 'epitome_invocation_16.jpg',
            start: '2021-08-10 18:00:00',
            end: '2021-08-31 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/8275803',
            showOnHome: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '40% 20%',
            image: 'epitome_invocation_17.jpg',
            start: '2021-09-01 11:00:00',
            end: '2021-09-21 17:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/9004345',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '40% 40%',
            image: 'epitome_invocation_18.jpg',
            start: '2021-09-21 18:00:00',
            end: '2021-10-12 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/9679285',
            showOnHome: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '40% 40%',
            image: 'epitome_invocation_19.jpg',
            start: '2021-10-13 11:00:00',
            end: '2021-11-02 17:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/10755907',
            showOnHome: true,
            timezoneDependent: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '40% 40%',
            image: 'epitome_invocation_20.jpg',
            start: '2021-11-02 18:00:00',
            end: '2021-11-23 14:59:59',
            color: '#FFAA4B',
            url: 'https://bbs.mihoyo.com/ys/article/11444617',
            showOnHome: true,
        },
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '40% 40%',
            image: 'epitome_invocation_21.jpg',
            start: '2021-11-24 11:00:00',
            end: '2021-12-14 17:59:59',
            color: '#FFAA4B',
            url: 'https://ys.mihoyo.com/main/news/detail/18668',
            showOnHome: true,
        },
    ],
    [
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-07-16 04:00:00',
            end: '2021-08-01 04:00:00',
            color: '#4299E1',
            description:
                'When an active character triggers a Swirl reaction on a nearby opponent, a Brumous Aura that lasts 8s will be left at the location where the reaction took place. The Aura will inflict one count of DMG to opponents within it once every 2s. A Brumous Aura can be generated once every 9s.',
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-08-01 04:00:00',
            end: '2021-08-16 04:00:00',
            color: '#4299E1',
            description:
                "When an active character's Elemental Energy is fully charged, the DEF of opponents hit by the character's Normal, Charged or Plunging Attacks will be decreased by 7% for 10 seconds. Max 5 stacks. Each stack has an independent duration.",
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-08-16 04:00:00',
            end: '2021-09-01 04:00:00',
            color: '#4299E1',
            description:
                'When an active character obtains an Elemental Orb or Elemental Particle, the character will unleash a shockwave that deals DMG to surrounding opponents. This kind of shockwave can be unleashed once every 4s.',
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-09-01 04:00:00',
            end: '2021-09-16 04:00:00',
            color: '#4299E1',
            description:
                'After unleashing an Elemental Burst, the ATK of every character in the party will be increased by 20% for 10s. Max 3 stacks. Each stack has an independent duration.',
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-09-16 04:00:00',
            end: '2021-10-01 04:00:00',
            color: '#4299E1',
            description:
                "After a character uses an Elemental Burst, all party members' ATK is increased by 6.5% for 15s. Maximum 7 stacks. When 7 stacks are reached, the active character's Normal Attacks will unleash a shockwave at the position of the opponent it hits, dealing AoE DMG. A shockwave can be unleashed in this manner once every 2s.",
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-10-01 04:00:00',
            end: '2021-10-16 04:00:00',
            color: '#4299E1',
            description:
                "For 10s after a character uses an Elemental Burst, that character's Normal and Charged Attacks will unleash a shockwave at the position of the opponent they hit at the cost of 1% of the character's HP, dealing AoE DMG. This effect will be cleared when this character leaves the field. A shockwave can be unleashed in this manner once every 1s. Active characters can go down as a result of this HP loss.",
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-10-16 04:00:00',
            end: '2021-11-01 04:00:00',
            color: '#4299E1',
            description:
                "After the challenge begins, when a character's Elemental Energy is greater than or equal to 50%, they will gain a 6.5% ATK Bonus every second. Max 10 stacks. When a character's Elemental Energy is less than 30%, the ATK Bonus gained this way will be cleared.",
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-11-01 04:00:00',
            end: '2021-11-16 04:00:00',
            color: '#4299E1',
            description:
                "After the challenge begins, when a character's Elemental Energy is 100%, they will gain 1 stack of Auspice every second. Max 10 stacks. When this character unleashes their Elemental Burst, all Auspice stacks will be cleared, and the DMG dealt by this character will be increased by 5% for each stack cleared for the next 10s. While the character is enjoying the DMG Bonus gained via this method, they cannot gain any more stacks.",
        },
        {
            name: 'Spiral Abyss',
            image: 'spiral_abyss.jpg',
            pos: '50% 20%',
            start: '2021-11-16 04:00:00',
            end: '2021-12-01 04:00:00',
            color: '#4299E1',
            description:
                "After the challenge begins, when the active character's Elemental Energy is greater than or equal to 50%, they will continuously release shockwaves that deal DMG to opponents. When their Elemental Energy reaches 100%, these shockwaves will deal even greater DMG.",
        },
    ],
    [
        {
            name: "Paimon's Bargain - Fischl, Xiangling, and Blackcliff",
            pos: '0% 50%',
            zoom: '150%',
            start: '2021-07-01 04:00:00',
            end: '2021-08-01 04:00:00',
            color: '#B6A1EA',
            image: 'paimon_bargain.png',
            description: 'Now selling: Fischl, Xiangling, and Blackcliff Weapons.',
        },
        {
            name: "Paimon's Bargain - Beidou, Noelle, and Royal",
            pos: '0% 50%',
            zoom: '150%',
            start: '2021-08-01 04:00:00',
            end: '2021-09-01 04:00:00',
            color: '#B6A1EA',
            image: 'paimon_bargain.png',
            description: 'Now selling: Beidou, Noelle, and Royal Weapons.',
        },
        {
            name: "Paimon's Bargain - Ningguang, Xingqiu, and Blackcliff",
            pos: '0% 50%',
            zoom: '150%',
            start: '2021-09-01 04:00:00',
            end: '2021-10-01 04:00:00',
            color: '#B6A1EA',
            image: 'paimon_bargain.png',
            description: 'Now selling: Ningguang, Xingqiu, and Blackcliff Weapons.',
        },
        {
            name: "Paimon's Bargain - Razor, Amber, and Royal",
            pos: '0% 50%',
            zoom: '150%',
            start: '2021-10-01 04:00:00',
            end: '2021-11-01 04:00:00',
            color: '#B6A1EA',
            image: 'paimon_bargain.png',
            description: 'Now selling: Razor, Amber, and Royal Weapons.',
        },
    ],
    [
        {
            name: 'Battle Pass - Divine Thunder',
            pos: '0% 12%',
            image: 'divine_thunder.jpg',
            start: '2021-07-21 10:00:00',
            end: '2021-08-30 03:59:59',
            color: '#9F94FF',
            url: 'https://genshin.mihoyo.com/en/news/detail/14337',
            timezoneDependent: true,
        },
        {
            name: 'Battle Pass - Moonchaser',
            pos: '0% 12%',
            image: 'moonchaser.jpg',
            start: '2021-09-01 11:00:00',
            end: '2021-10-11 03:59:59',
            color: '#68D0C0',
            url: 'https://genshin.mihoyo.com/en/news/detail/15353',
            timezoneDependent: true,
        },
        {
            name: 'Battle Pass - Mystic Repose',
            pos: '0% 12%',
            image: 'mystic_repose.jpg',
            start: '2021-10-13 11:00:00',
            end: '2021-11-22 03:59:59',
            color: '#9C93FF',
            url: 'https://genshin.mihoyo.com/en/news/detail/16356',
            timezoneDependent: true,
        },
    ],
];


//胡桃 语音
const voiceHuTao = [
    {
        index: 0,
        text: '嗯~早起身体好，晚睡人会飘。',
        src: 'https://patchwiki.biligame.com/images/ys/8/8d/n8gei38e7k4v8os3scp7uormhc633ib.mp3',
    },
    {
        index: 1,
        text: '哟！中午好呀，吃了吗？',
        src: 'https://patchwiki.biligame.com/images/ys/d/d7/kmv4y3qxzawo4lvza5sto2hqs4asxcj.mp3',
    },
    {
        index: 2,
        text: '嘻嘻，月亮出来喽~咱也出门吧。',
        src: 'https://patchwiki.biligame.com/images/ys/c/c8/9p3stmpojfh2pmodmvi6srkjo55e9l9.mp3',
    },
    {
        index: 3,
        text: '咳咳...太阳出来我晒太阳，月亮出来我晒月亮咯~',
        src: 'https://patchwiki.biligame.com/images/ys/0/01/2fnjqvot4urhojue61nnct93s94kpg4.mp3',
    },
    {
        index: 4,
        text: '哎哟哟',
        src: 'https://patchwiki.biligame.com/images/ys/a/a7/1bxid2ud8xdv491mpn6z1nf598l6bw6.mp3',
    },
    {
        index: 5,
        text: '丘丘',
        src: 'https://patchwiki.biligame.com/images/ys/2/2d/pfpqhnpnlf07hwdjud6f3ilsg840osm.mp3',
    },
    {
        index: 6,
        text: '不如去我那儿喝杯茶？嘿~',
        src: 'https://patchwiki.biligame.com/images/ys/c/cd/mh8ksq83vyqgm9m065emzzstw9skjaa.mp3',
    },
];


const autoPlayVoice = () => {
    const myDate = new Date();
    const hour = myDate.getHours();

    const getVoiceIndex = (hour) => {
        if (hour < 3) {
            //丘丘
            return voiceHuTao[5].index;
        } else if (hour < 10) {
            //早上
            return voiceHuTao[0].index;
        } else if (hour < 14) {
            //中午
            return voiceHuTao[1].index;
        } else if (hour < 16) {
            //下午
            return voiceHuTao[6].index;
        } else {
            //晚上
            return voiceHuTao[2].index;
        }
    }

    let index = getVoiceIndex(hour)
    document.getElementById('hutao-voice').src = voiceHuTao[index].src;
    document.getElementById('hutao-text').innerHTML = voiceHuTao[index].text;
}
autoPlayVoice();
//填充所有胡桃语音
for (let i = 0; i < voiceHuTao.length; ++i) {
    document.getElementById('hutao-voice-' + i).src = voiceHuTao[i].src;
    document.getElementById('hutao-text-' + i).innerHTML = voiceHuTao[i].text;
}


//秒转换
const secondsFormat = (s) => {
    const day = Math.floor(s / (24 * 3600)); // Math.floor()向下取整
    const hour = Math.floor((s - day * 24 * 3600) / 3600);
    const minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
    const second = s - day * 24 * 3600 - hour * 3600 - minute * 60;
    return day + "天" + hour + "时" + minute + "分" + second + "秒";
}

//返回始末时间之间的所有日期
const getDuration = (type, start, end) => {
    const $array = [];
    const current = new Date(start);
    end = new Date(end);
    while (current <= end) {
        $array.push(new Date(current));
        if (type == 'hour') {//小时
            current.setHours(current.getHours() + 1);
        } else if (type == 'day') {//天
            current.setDate(current.getDate() + 1);
        } else if (type == 'week') {//周
            current.setDate(current.getDate() + 7);
        } else if (type == 'month') {//月
            current.setMonth(current.getMonth() + 1);
        } else {//默认天
            current.setDate(current.getDate() + 1);
        }
    }
    return $array;
}


// main func

let dayWidth = 35;
const eventHeight = 36;
const eventMargin = 20;
const padding = 10;

let lastEventTime = dayjs().year(2000);
let firstDay = dayjs();
let dates = [];
let years = [];
let yearList = [];
let monthList = [];
let events = [];
let today = dayjs();


const convertToDate = (e, i) => {
    let start = dayjs(e.start, 'YYYY-MM-DD HH:mm:ss').subtract(0, 'minute');
    const end = dayjs(e.end, 'YYYY-MM-DD HH:mm:ss').subtract(0, 'minute');
    const duration = end.diff(start, 'day', true);

    if (lastEventTime < end) lastEventTime = end;

    return {
        ...e,
        index: i,
        start,
        end,
        duration,
    };
}

const processEvent = () => {
    events = eventsData.map((e, i) => {
        if (Array.isArray(e)) {
            return e.map((item) => convertToDate(item, i));
        }

        return convertToDate(e, i);
    });

    events
        .slice()
        .sort((a, b) => {
            if (Array.isArray(a) && Array.isArray(b)) {
                return a[0].start - b[0].start;
            } else if (!Array.isArray(a) && Array.isArray(b)) {
                return a.start - b[0].start;
            } else if (Array.isArray(a) && !Array.isArray(b)) {
                return a[0].start - b.start;
            } else {
                return a.start - b.start;
            }
        })
        .forEach((e, i) => {
            // i为0是角色祈愿 找到第一个角色祈愿的开始时间 提前padding天 设为firstDay
            if (i === 0) {
                if (Array.isArray(e)) {
                    firstDay = e[0].start.set('hour', 0).set('minute', 0).set('second', 0).subtract(padding, 'day');
                } else {
                    firstDay = e.start.set('hour', 0).set('minute', 0).set('second', 0).subtract(padding, 'day');
                }
            }

            if (Array.isArray(e)) {
                for (let j = 0; j < e.length; j++) {
                    const current = e[j];

                    events[current.index][j].offset = Math.abs(firstDay.diff(events[current.index][j].start, 'day', true));
                }
            } else {
                events[e.index].offset = Math.abs(firstDay.diff(e.start, 'day', true));
            }
        });

    const dayTotal = Math.abs(Math.ceil(firstDay.diff(lastEventTime, 'day', true))) + 2 * padding;

    for (let i = 0; i < dayTotal; i++) {
        const year = firstDay.add(i, 'day').format('YYYY');
        const month = firstDay.add(i, 'day').format('MMMM');
        if (years[year] === undefined) {
            years[year] = [];
        }
        if (years[year][month] === undefined) {
            years[year][month] = {
                total: 0,
                offset: 0,
            };
        }
        years[year][month].total++;
    }

    yearList = Object.entries(years);
    for (let i = 0; i < yearList.length; i++) {
        let obj = Object.entries(yearList[i][1]);
        monthList = monthList.concat(obj);
    }

    for (let i = 0; i < monthList.length; i++) {
        monthList[i][1].offset = i - 1 >= 0 ? monthList[i - 1][1].total + monthList[i - 1][1].offset : 0;
    }

    dates = [...new Array(dayTotal)].map((_, i) => firstDay.add(i, 'day').date());
}

processEvent();

let wishCharacters = events[4];
let wishLength = wishCharacters.length

// //set monthList length
// document.getElementById('lenMonthList').innerHTML = '' + monthList.length
// //set wish length
// document.getElementById('lenWish').innerHTML = '' + wishLength
// //set day length
// document.getElementById('lenAllDays').innerHTML = '' + dates.length
console.log('all days, ', dates.length)

//设置时间轴
const setTimeAxis = () => {
    let startD = dayjs(wishCharacters[0].start).subtract(7, 'day').format('YYYY-MM-DD HH:mm:ss')
    let endD = dayjs(wishCharacters[wishLength - 1].end).add(7, 'day').format('YYYY-MM-DD HH:mm:ss')
    const allDays = getDuration('day', startD, endD)
    const countDays = allDays.length

    for (let i = 0; i < dates.length; ++i) {
        let leftClass = document.getElementsByClassName('left-day-' + i);
        for (let lClass of leftClass) {
            //圆圈timeline-index的width为30
            lClass.style.left = ((dayWidth - 30) * i) + 'px';
        }
        document.getElementById('timelineDay' + i).innerHTML = dates[i];
    }

    for (let i = 0; i < monthList.length; ++i) {
        let leftClass = document.getElementsByClassName('timeline-month-left-' + i);
        for (let lClass of leftClass) {
            lClass.style.left = (dayWidth * monthList[i][1].offset) + 'px';
        }
        let widthClass = document.getElementsByClassName('timeline-month-width-' + i);
        for (let wClass of widthClass) {
            wClass.style.width = (dayWidth * monthList[i][1].total) + 'px';
        }
        document.getElementById('timelineMonthName' + i).innerHTML = monthList[i][0];
    }

    let todayOffset = Math.abs(firstDay.diff(today, 'day', true));
    let leftToday = document.getElementsByClassName('timeline-today-line-pos');
    for (let l of leftToday) {
        //timeline-index的width为30
        l.style.left = todayOffset * dayWidth + 30 + 'px';
    }
}
setTimeAxis();


//当前时间定位 ----------------------------------------------------------------
const setCurrentPos = () => {
    document.getElementById('setNowPos').scrollLeft = document.getElementById('findNowPos').offsetLeft - document.body.clientWidth / 2;
}
setCurrentPos();

const setTodayTime = () => {
    const d = dayjs()
    document.getElementById('currentTime').innerHTML = d.format('HH:mm:ss')
}
setInterval("setTodayTime()", 1000);
//---------------------------------------------------------------------------


let objWish = {
    haveWish: true,//0无祈愿 1有祈愿
    wishIndex: [],//索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
    reprint: true,//双复刻标记
    isFuture: true,//当前无祈愿 正在等待开放
    comingIndex: [],//即将到来的未开放的
}
//找出当前在哪个祈愿时间段
const findCurrentWish = () => {
    let obj = {}
    obj.wishIndex = []
    obj.haveWish = true
    obj.isFuture = false;
    obj.comingIndex = []
    //当前时间所处的祈愿时间段
    for (let e of wishCharacters) {
        //当前时间在祈愿起始时间后
        let startAfter = dayjs().isAfter(e.start, 'second')
        //当前时间在祈愿结束时间前
        let endBefore = dayjs().isBefore(e.end, 'second')
        if (startAfter && endBefore) {
            obj.wishIndex.push(e.no)
        }
    }
    //如果没有找到
    if (!obj.wishIndex.length) {
        obj.haveWish = false;
        for (let i = 1; i < wishLength; ++i) {
            //介于前一个结束时间后 后一个开始时间前
            let endAfter = dayjs().isAfter(wishCharacters[i - 1].end, 'second')
            let startBefore = dayjs().isBefore(wishCharacters[i].start, 'second')
            if (endAfter && startBefore) {
                obj.wishIndex.push(wishCharacters[i].no)
                obj.isFuture = true;
            }
        }
    }

    obj.reprint = obj.wishIndex.length > 1

    //存放所有未来的祈愿
    if (obj.wishIndex.length) {
        let startIndex = obj.wishIndex[obj.wishIndex.length - 1]
        if (obj.isFuture) obj.comingIndex.push(startIndex)
        else ++startIndex;
        for (let i = startIndex; i < wishLength; ++i) {
            obj.comingIndex.push(i)
        }
    }

    return obj;
}
let currentWishObj = findCurrentWish();
console.log('I found current wish: ', currentWishObj)


//祈愿角色信息
const wishInfo = () => {
    for (let i = 0; i < wishLength; ++i) {
        //动态设置各个角色的css
        let eventItemClass = document.getElementsByClassName('event-item-' + i);
        let eventImgClass = document.getElementsByClassName('event-img-' + i);
        // let eventWishColorClass = document.getElementsByClassName('event-wish-color-' + i);

        let start = firstDay
        const end = dayjs(wishCharacters[i].start, 'YYYY-MM-DD HH:mm:ss').subtract(0, 'minute');
        const duration = end.diff(start, 'day', true);
        // console.log(i, duration)

        for (let eItem of eventItemClass) {
            eItem.style.backgroundColor = wishCharacters[i].color
            eItem.style.width = wishCharacters[i].duration * dayWidth + 'px'
            eItem.style.left = duration * dayWidth + 30 + 'px'

            if (wishCharacters[i].wish_2) eItem.style.marginTop = '150px'
        }
        for (let img of eventImgClass) {
            img.style.backgroundImage = "url('/assets/res/genshin-impact/events/" + wishCharacters[i].image + "')";
            img.style.backgroundPosition = wishCharacters[i].pos;
            img.style.backgroundSize = wishCharacters[i].zoom ? wishCharacters[i].zoom : '200%';
        }
        // for (let eWishColor of eventWishColorClass) {
        //     eWishColor.style.backgroundColor = wishCharacters[i].color
        // }

        let eventNameColor = wishCharacters[i].color;
        let eventNameClass = document.getElementsByClassName('event-name-' + i);
        for (let eName of eventNameClass) {
            eName.style.textShadow = eventNameColor + ' -1px -1px 4px, ' + eventNameColor + ' 1px -1px 4px, ' +
                eventNameColor + ' -1px 1px 4px, ' + eventNameColor + ' 1px 1px 4px, ' + eventNameColor + ' 0 0 10px';
        }
        document.getElementById('eventName' + i).innerHTML = wishCharacters[i].shortname[showLanguage];
        // document.getElementById('eventWishS' + i).innerHTML = wishCharacters[i].start;
        // document.getElementById('eventWishE' + i).innerHTML = wishCharacters[i].end;


        //left-t
        let leftClass = document.getElementsByClassName('left-t' + i);
        for (let lClass of leftClass) {
            lClass.style.left = (350 * i) + 'px';
        }
    }
}
wishInfo();

//中文昵称名字+英文昵称名字
const nameInfo = (i) => wishCharacters[i].name[ZH] + wishCharacters[i].shortname[ZH] + '&nbsp;' + wishCharacters[i].name[EN];
const nameZHInfo = (i) => wishCharacters[i].name[ZH] + wishCharacters[i].shortname[ZH];

//当前祈愿信息
const updateCurrentWishInfo = () => {
    let reprintWish = currentWishObj.reprint
    if (!currentWishObj.haveWish) {
        document.getElementById('noWishInfo').innerHTML = '暂无祈愿，敬请期待';
        let currentHaveNoWish = document.getElementsByClassName('no-wish');
        for (let n of currentHaveNoWish) {
            n.style.display = 'none';
        }
        return
    }
    let wish1Index = currentWishObj.wishIndex[0]
    let wish2Index = -1
    if (reprintWish) wish2Index = currentWishObj.wishIndex[1]

    //最新祈愿的起止时间
    document.getElementById('timeStartCurrentCharacter').innerHTML = wishCharacters[wish1Index].start;
    document.getElementById('timeEndCurrentCharacter').innerHTML = wishCharacters[wish1Index].end;

    //penultimate 倒数第二
    let penultimateWish = reprintWish ? nameInfo(wish2Index) : '';
    let newWish = nameInfo(wish1Index);

    //最新的祈愿
    document.getElementById('currentCharacter0').innerHTML = nameInfo(wish1Index)
    document.getElementById('currentCharacter1').innerHTML = nameInfo(wish2Index)//class控制显示

    document.getElementById('currentCharacter1-0').innerHTML = nameZHInfo(wish1Index)
    document.getElementById('currentCharacter1-1').innerHTML = nameZHInfo(wish2Index)//class控制显示
    document.getElementById('currentCharacter2-0').innerHTML = nameZHInfo(wish1Index)
    document.getElementById('currentCharacter2-1').innerHTML = nameZHInfo(wish2Index)//class控制显示

    //祈愿角色信息
    document.getElementById('currentWishText0').innerHTML = wishCharacters[wish1Index].info[ZH]
    document.getElementById('currentWishText1').innerHTML = wishCharacters[wish2Index].info[ZH]//class控制显示
    //color显示
    let wishColorClass = document.getElementsByClassName('current-wish-color-0');
    for (let w of wishColorClass) {
        w.style.color = wishCharacters[wish1Index].color;
    }
    let wishColorClass2 = document.getElementsByClassName('current-wish-color-1');
    for (let w of wishColorClass2) {
        if (!reprintWish) w.style.display = 'none'
        w.style.color = wishCharacters[wish2Index].color;
    }

    //祈愿角色图片
    for (let i = 0; i < currentWishObj.wishIndex.length; ++i) {
        let index = currentWishObj.wishIndex[i]
        let wishBGClass = document.getElementsByClassName('current-wish-bg-'+i);
        for (let t of wishBGClass) {
            t.style.backgroundImage = "url('/assets/res/genshin-impact/characters/full/" + wishCharacters[index].shortname[EN] + ".png')"
            t.style.backgroundPosition = wishCharacters[index].fullPos
            t.style.backgroundSize = wishCharacters[index].fullZoom
            t.style.backgroundRepeat = 'no-repeat'
        }

        //祈愿图片上的元素颜色
        let currentElementColor_ = wishCharacters[index].color
        let indexColor = elementColor.indexOf(currentElementColor_)
        document.getElementById('currentElements' + i).src = '/assets/res/genshin-impact/elements/' + elementImg[indexColor];
    }


    //显示当前祈愿角色元素属性
    let currentElementColor = [wishCharacters[wish1Index].color]
    if (reprintWish) {
        currentElementColor.push(wishCharacters[wish2Index].color)
    }
    for (let i = 0; i < elementImg.length; ++i) {
        document.getElementById('showElements' + i).src = '/assets/res/genshin-impact/elements/' + elementImg[i];

        let elementsClass = document.getElementsByClassName('show-elements-' + i);
        for (let ele of elementsClass) {
            for (let ce of currentElementColor) {
                if (elementColor[i] === ce) {
                    ele.style.opacity = '1'
                    break
                } else {
                    ele.style.opacity = '0.2'
                }
            }
        }
    }

}
updateCurrentWishInfo();

//未来即将开放的祈愿
const futureWishInfo = () => {
    let indexArr = []

    if (!currentWishObj.comingIndex.length && !currentWishObj.isFuture) {
        document.getElementById('futureWishInfo').innerHTML = '未来祈愿，等待更新';
        let futureWish = document.getElementsByClassName('future-wish');
        for (let n of futureWish) {
            n.style.display = 'none';
        }
        return
    }

    if (currentWishObj.isFuture) {
        let startIndex = currentWishObj.wishIndex[0]
        for (let i = startIndex; i < wishLength; ++i) {
            indexArr.push(i)
        }
    } else if (currentWishObj.comingIndex.length) {
        indexArr = indexArr.concat(currentWishObj.comingIndex)
    }

    console.log('coming soon: ', indexArr)
    for (let i = 0; i < indexArr.length; ++i) {
        document.getElementById('futureWish' + i).innerHTML = nameInfo(indexArr[i]);
        let wishColorClass = document.getElementsByClassName('future-wish-color-' + i);
        let showColor = wishCharacters[indexArr[i]].color;
        for (let w of wishColorClass) {
            w.style.color = '#000'
            w.style.textShadow = showColor + ' -1px -1px 4px, ' + showColor + ' 1px -1px 4px, ' +
                showColor + ' -1px 1px 4px, ' + showColor + ' 1px 1px 4px, ' + showColor + ' 0 0 10px';
        }
        let timelineTopInfoBG = document.getElementsByClassName('future-info-' + i);
        for (let t of timelineTopInfoBG) {
            t.style.backgroundImage = "url('/assets/res/genshin-impact/characters/full/" + wishCharacters[indexArr[i]].shortname[0] + ".png')"
            t.style.backgroundPosition = wishCharacters[indexArr[i]].fullPos
            t.style.backgroundSize = wishCharacters[indexArr[i]].fullZoom
        }
        let currentElementColor = wishCharacters[indexArr[i]].color
        let index = elementColor.indexOf(currentElementColor)
        document.getElementById('futureElements' + i).src = '/assets/res/genshin-impact/elements/' + elementImg[index];
        document.getElementById('futureWishText' + i).innerHTML = wishCharacters[indexArr[i]].info[ZH] + '&nbsp;' + wishCharacters[indexArr[i]].info[EN]
    }
}
futureWishInfo();


const Deadline = (start, end) => secondsFormat(Math.floor(end.diff(start) / 1000));

//祈愿倒计时
const wishDeadline = () => Deadline(dayjs(), dayjs(wishCharacters[currentWishObj.wishIndex[0]].end))

//当前时间
setInterval("time_str.innerHTML = dayjs().format('MM-DD HH:mm:ss');", 1000);
//结束当前祈愿时间
setInterval("deadline.innerHTML = wishDeadline();", 1000);

let newYearEve = () => Deadline(dayjs(), dayjs('2022-01-31'));
setInterval("newYearEve_.innerHTML = newYearEve();", 1000);
//春节倒计时
let springFestival = () => Deadline(dayjs(), dayjs('2022-02-01'));
setInterval("newYear.innerHTML = springFestival();", 1000);
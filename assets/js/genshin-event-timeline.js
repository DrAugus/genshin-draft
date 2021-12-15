const MAX_MONTH = 120
const MAX_WISH = 120
const MAX_DAY = 3650
const MAX_FUTURE = 120
const MAX_CURRENT = 100

const elementColor = {
    dendro: '#98e628',//草
    geo: '#e2b032',//岩
    electro: '#fca7ff',//雷
    hydro: '#03ddfe',//水
    pyro: '#fa5d3e',//火
    anemo: '#4cf3b6',//风
    cryo: '#a6fdfd',//冰
}

const colorWeapon = '#FFAA4B';

const eventsData = [
    [{
        no: 0,
        shortname: "温迪",
        name: "「杯装之诗」",
        pos: "40% 15%",
        start: "2020-09-28 10:00:00",
        end: "2020-10-18 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/1748378",
        version: "1.0",
        ele: "anemo",
        id: "venti",
        wishName: "Ballad in Goblets",
        info: "来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。",
        image: 1
    }, {
        no: 1,
        shortname: "可莉",
        name: "「闪焰的驻足」",
        pos: "40% 20%",
        start: "2020-10-20 18:00:00",
        end: "2020-11-09 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/2277693",
        ele: "pyro",
        id: "klee",
        wishName: "Sparkling Steps",
        info: "西风骑士团，火花骑士！永远伴随闪光与爆炸出现！——然后在琴团长严厉的目光注视下默默消失。虽然新炸药的配方，很多都是在被关禁闭的时候想出来的……但如果不被关禁闭的话，就更好了。",
        image: 1
    }, {
        no: 2,
        shortname: "达达利亚",
        name: "「暂别冬都」",
        pos: "50% 5%",
        start: "2020-11-11 18:00:00",
        end: "2020-12-01 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/2563525",
        version: "1.1",
        ele: "hydro",
        id: "tartaglia",
        wishName: "Farewell of Snezhnaya",
        info: "达达利亚——来自寒冰之国，心思变幻莫测的客人。不必猜测他的想法，也无需质疑他的来意。只要记住：这副稚气未脱的外表下暗藏的，是锤炼到极致的战士之躯。",
        image: 1
    }, {
        no: 3,
        shortname: "钟离",
        name: "「陵薮市朝」",
        pos: "40% 5%",
        start: "2020-12-01 18:00:00",
        end: "2020-12-22 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/2878243",
        ele: "geo",
        id: "zhongli",
        wishName: "Gentry of Hermitage",
        info: "应「往生堂」邀请而来的神秘客卿。样貌俊美，举止高雅，拥有远超常人的学识。虽说来历不明，却知礼数、晓规矩。坐镇「往生堂」，能行天地万物之典仪。",
        image: 1
    }, {
        no: 4,
        shortname: "阿贝多",
        name: "「深秘之息」",
        pos: "40% 15%",
        start: "2020-12-23 11:00:00",
        end: "2021-01-12 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/3236897",
        version: "1.2",
        ele: "geo",
        id: "albedo",
        wishName: "Secretum Secretorum",
        info: "阿贝多——现定居蒙德的炼金术士，效力于西风骑士团。「天才」、「白垩之子」或「调查队长」…他不怎么在意称号和名望，只专注于研究课题。财富和人脉不是他的目标。他渴望驾驭的，是从古到今深藏于人类头脑中的无上知识。",
        image: 1
    }, {
        no: 5,
        shortname: "甘雨",
        name: "「浮生孰来」",
        pos: "40% 15%",
        start: "2021-01-12 18:00:00",
        end: "2021-02-02 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/3661305",
        ele: "cryo",
        id: "ganyu",
        wishName: "Adrift in the Harbor",
        info: "璃月七星的秘书，体内流淌着人类与仙兽的血脉。天性优雅娴静，但仙兽「麒麟」温柔的性情与坚定毅重的工作态度毫无冲突。毕竟，甘雨坚信自己所做的一切工作都是为了践行与帝君的契约，谋求璃月众生的最大福祉。",
        image: 1
    }, {
        no: 6,
        shortname: "魈",
        name: "「烟火之邀」",
        pos: "40% 15%",
        start: "2021-02-03 11:00:00",
        end: "2021-02-17 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/4005715",
        version: "1.3",
        ele: "anemo",
        id: "xiao",
        wishName: "Invitation to Mundane Life",
        info: "守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。",
        image: 1
    }, {
        no: 7,
        shortname: "刻晴",
        name: "「鱼龙灯昼」",
        pos: "40% 15%",
        start: "2021-02-17 18:00:00",
        end: "2021-03-02 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/4005720",
        ele: "electro",
        id: "keqing",
        wishName: "Dance of Lanterns",
        info: "璃月七星之一，玉衡星。对「帝君一言而决的璃月」颇有微词——但实际上，神挺欣赏她这样的人。她坚信与人类命运相关的事，应当由人类去做，而且人类一定可以做得更好。为了证明这一点，她比任何人都要努力。",
        image: 1
    }, {
        no: 8,
        shortname: "胡桃",
        name: "「赤团开时」",
        pos: "60% 20%",
        start: "2021-03-02 18:00:00",
        end: "2021-03-16 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/4701165",
        ele: "pyro",
        id: "hu_tao",
        wishName: "Moment of Bloom",
        info: "胡桃——「往生堂」第七十七代堂主，掌控着璃月葬仪事务的重要人物。尽心尽力地为人们完成送别之仪，维护着世间阴阳平衡之道。除此以外还是个神奇打油诗人，诸多「杰作」被璃月人口口相传。",
        image: 1
    }, {
        no: 9,
        shortname: "温迪",
        name: "「杯装之诗」",
        pos: "40% 15%",
        start: "2021-03-17 11:00:00",
        end: "2021-04-06 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/4959532",
        version: "1.4",
        ele: "anemo",
        id: "venti",
        wishName: "Ballad in Goblets",
        info: "来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。",
        image: 2
    }, {
        no: 10,
        shortname: "达达利亚",
        name: "「暂别冬都」",
        pos: "50% 5%",
        start: "2021-04-06 18:00:00",
        end: "2021-04-27 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/5305223",
        ele: "hydro",
        id: "tartaglia",
        wishName: "Farewell of Snezhnaya",
        info: "达达利亚——来自寒冰之国，心思变幻莫测的客人。不必猜测他的想法，也无需质疑他的来意。只要记住：这副稚气未脱的外表下暗藏的，是锤炼到极致的战士之躯。",
        image: 2
    }, {
        no: 11,
        shortname: "钟离",
        name: "「陵薮市朝」",
        pos: "40% 5%",
        start: "2021-04-28 11:00:00",
        end: "2021-05-18 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/5726195",
        version: "1.5",
        ele: "geo",
        id: "zhongli",
        wishName: "Gentry of Hermitage",
        info: "应「往生堂」邀请而来的神秘客卿。样貌俊美，举止高雅，拥有远超常人的学识。虽说来历不明，却知礼数、晓规矩。坐镇「往生堂」，能行天地万物之典仪。",
        image: 2
    }, {
        no: 12,
        shortname: "优菈",
        name: "「浪涌之瞬」",
        pos: "40% 20%",
        start: "2021-05-18 18:00:00",
        end: "2021-06-08 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/6179333",
        ele: "cryo",
        id: "eula",
        wishName: "Born of Ocean Swell",
        info: "优菈——常年在外作战的「浪花骑士」，反叛的旧贵族末裔。生于旧日宗室，身负罪恶血脉之人，的确需要独特的处世技巧，才能在偏见的高墙下安然行走。当然，这并不妨碍她与家族决裂，作为卓越的「浪花骑士」，在外游猎蒙德的敌人，完成她那意义独特的「复仇」。",
        image: 1
    }, {
        no: 13,
        shortname: "可莉",
        name: "「闪焰的驻足」",
        pos: "40% 20%",
        start: "2021-06-09 11:00:00",
        end: "2021-06-29 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/6634463",
        version: "1.6",
        ele: "pyro",
        id: "klee",
        wishName: "Sparkling Steps",
        info: "西风骑士团，火花骑士！永远伴随闪光与爆炸出现！——然后在琴团长严厉的目光注视下默默消失。虽然新炸药的配方，很多都是在被关禁闭的时候想出来的……但如果不被关禁闭的话，就更好了。",
        image: 2
    }, {
        no: 14,
        shortname: "枫原万叶",
        name: "「叶落风随」",
        pos: "40% 15%",
        start: "2021-06-29 18:00:00",
        end: "2021-07-20 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/7067772",
        ele: "anemo",
        id: "kaedehara_kazuha",
        wishName: "Leaves in the Wind",
        info: "稻妻出身的浪人武士。为人谦和，个性温顺。年轻潇洒的外表下埋藏着许多往事。看似随性，心中却有独属于自己的行事准则。",
        image: 1
    }, {
        no: 15,
        shortname: "神里绫华",
        name: "「白鹭之庭」",
        pos: "30% 20%",
        start: "2021-07-21 11:00:00",
        end: "2021-08-10 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/7578978",
        "timezoneDependent": true,
        version: "2.0",
        ele: "cryo",
        id: "kamisato_ayaka",
        wishName: "The Herons Court",
        info: "稻妻「社奉行」神里家的大小姐。端庄文雅，聪慧坚韧。待人接物真诚又得体，深受稻妻民众爱戴，贵有「白鹭公主」之名。",
        image: 1
    }, {
        no: 16,
        shortname: "宵宫",
        name: "「焰色天河」",
        pos: "30% 25%",
        start: "2021-08-10 18:00:00",
        end: "2021-08-31 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/8275802",
        ele: "pyro",
        id: "yoimiya",
        wishName: "Tapestry of Golden Flames",
        info: "才华横溢的烟花工匠，「长野原烟花店」的现任店主，被誉为「夏祭的女王」。热情似火的少女。未泯的童心与匠人的执着在她身上交织出了奇妙的焰色反应。",
        image: 1
    }, {
        no: 17,
        shortname: "雷电将军",
        name: "「影寂天下人」",
        pos: "30% 10%",
        start: "2021-09-01 11:00:00",
        end: "2021-09-21 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/9004344",
        "timezoneDependent": true,
        version: "2.1",
        ele: "electro",
        id: "raiden_shogun",
        wishName: "Reign of Serenity",
        info: "雷电将军——此世最殊胜威怖的雷霆化身，稻妻幕府的最高主宰。挟威权之鸣雷，逐永恒之孤道的寂灭者。",
        image: 1
    }, {
        no: 18,
        shortname: "珊瑚宫心海",
        name: "「浮岳虹珠」",
        pos: "40% 15%",
        start: "2021-09-21 18:00:00",
        end: "2021-10-12 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/9679284",
        ele: "hydro",
        id: "sangonomiya_kokomi",
        wishName: "Drifting Luminescence",
        info: "心海是海祇岛的「现人神巫女」，也就是现任海祇岛最高领袖。她通读兵法、擅长谋略，在军事上有着独特见解，也能将内政、外交等工作处理得井井有条。不过，这位人们眼中深不可测的领导者，似乎也有不为人知的一面…",
        image: 1
    }, {
        no: 19,
        shortname: "达达利亚",
        name: "「暂别冬都」",
        pos: "50% 5%",
        start: "2021-10-13 11:00:00",
        end: "2021-11-02 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/10755906",
        "timezoneDependent": true,
        version: "2.2",
        ele: "hydro",
        id: "tartaglia",
        wishName: "Farewell of Snezhnaya",
        info: "达达利亚——来自寒冰之国，心思变幻莫测的客人。不必猜测他的想法，也无需质疑他的来意。只要记住：这副稚气未脱的外表下暗藏的，是锤炼到极致的战士之躯。",
        image: 3
    }, {
        no: 20,
        shortname: "胡桃",
        name: "「雪霁梅香」",
        info: "胡桃——「往生堂」第七十七代堂主，掌控着璃月葬仪事务的重要人物。尽心尽力地为人们完成送别之仪，维护着世间阴阳平衡之道。除此以外还是个神奇打油诗人，诸多「杰作」被璃月人口口相传。",
        pos: "60% 20%",
        start: "2021-11-02 18:00:00",
        end: "2021-11-23 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/11444616",
        ele: "pyro",
        id: "hu_tao",
        wishName: "Moment of Bloom",
        image: 2
    }, {
        no: 21,
        shortname: "阿贝多",
        name: "「深秘之息」",
        info: "阿贝多——现定居蒙德的炼金术士，效力于西风骑士团。「天才」、「白垩之子」或「调查队长」…他不怎么在意称号和名望，只专注于研究课题。财富和人脉不是他的目标。他渴望驾驭的，是从古到今深藏于人类头脑中的无上知识。",
        pos: "40% 15%",
        start: "2021-11-24 11:00:00",
        end: "2021-12-14 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/12233203",
        version: "2.3",
        ele: "geo",
        id: "albedo",
        wishName: "Secretum Secretorum",
        image: 2
    }, {
        no: 22,
        shortname: "优菈",
        name: "「浪涌之瞬」",
        info: "优菈——常年在外作战的「浪花骑士」，反叛的旧贵族末裔。生于旧日宗室，身负罪恶血脉之人，的确需要独特的处世技巧，才能在偏见的高墙下安然行走。当然，这并不妨碍她与家族决裂，作为卓越的「浪花骑士」，在外游猎蒙德的敌人，完成她那意义独特的「复仇」。",
        pos: "40% 20%",
        start: "2021-11-24 11:00:00",
        end: "2021-12-14 17:59:59",
        url: "https://bbs.mihoyo.com/ys/article/12233204",
        "wish_2": true,
        ele: "cryo",
        id: "eula",
        wishName: "Born of Ocean Swell",
        image: 2
    }, {
        no: 23,
        shortname: "荒泷一斗",
        name: "「花坂豪快」",
        info: "鬼族后裔，性格豪爽热血的快意男儿。如风一般迅猛，也如雷一般夺目。",
        pos: "40% 20%",
        start: "2021-12-14 18:00:00",
        end: "2022-01-04 14:59:59",
        url: "https://bbs.mihoyo.com/ys/article/12926123",
        ele: "geo",
        id: "arataki_itto",
        wishName: "Oni's Royale",
        image: 1
    }, {
        no: 24,
        shortname: "魈",
        name: "「烟火之邀」",
        info: "守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。",
        pos: "40% 15%",
        start: "2022-01-05 11:00:00",
        end: "2022-01-25 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/4005715",
        version: "2.4",
        ele: "anemo",
        id: "xiao",
        wishName: "Invitation to Mundane Life",
        image: 2
    }, {
        no: 25,
        shortname: "甘雨",
        name: "「浮生孰来」",
        info: "璃月七星的秘书，体内流淌着人类与仙兽的血脉。天性优雅娴静，但仙兽「麒麟」温柔的性情与坚定毅重的工作态度毫无冲突。毕竟，甘雨坚信自己所做的一切工作都是为了践行与帝君的契约，谋求璃月众生的最大福祉。",
        pos: "40% 15%",
        start: "2022-01-05 11:00:00",
        end: "2022-01-25 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/3661305",
        "wish_2": true,
        ele: "cryo",
        id: "ganyu",
        wishName: "Adrift in the Harbor",
        image: 1
    }, {
        no: 26,
        shortname: "申鹤",
        name: "「孤辰茕怀」",
        info: "红尘渺渺，因果烟消",
        pos: "40% 20%",
        start: "2022-01-25 18:00:00",
        end: "2022-02-14 15:59:59",
        url: "https://bbs.mihoyo.com/ys/article/?",
        ele: "cryo",
        id: "shenhe",
        wishName: "",
        image: 1
    }],
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
        {
            name: ['Epitome Invocation - Weapon Banner', '「神铸赋形」'],
            pos: '40% 40%',
            image: 'epitome_invocation_22.jpg',
            start: '2021-12-14 18:00:00',
            end: '2022-01-04 14:59:59',
            color: '#FFAA4B',
            url: 'https://ys.mihoyo.com/main/news/detail/12926124',
            showOnHome: true,
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

let wishCharacters = events[0];
let wishLength = wishCharacters.length

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
const getWishObj = () => {
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
objWish = getWishObj();
console.log('objWish', objWish)


//祈愿角色信息
const wishInfo = () => {
    for (let i = 0; i < wishLength; ++i) {
        //动态设置各个角色的css
        let eventItemClass = document.getElementsByClassName('event-item-' + i);

        let start = firstDay
        const end = dayjs(wishCharacters[i].start, 'YYYY-MM-DD HH:mm:ss').subtract(0, 'minute');
        const duration = end.diff(start, 'day', true);
        // console.log(i, duration)

        for (let eItem of eventItemClass) {
            eItem.style.width = wishCharacters[i].duration * dayWidth + 'px'
            eItem.style.left = duration * dayWidth + 30 + 'px'

            if (wishCharacters[i].wish_2) eItem.style.marginTop = '160px'
        }

        //left-t
        let leftClass = document.getElementsByClassName('left-t' + i);
        for (let lClass of leftClass) {
            lClass.style.left = (350 * i) + 'px';
        }
    }
}
wishInfo();

//中文昵称名字+英文昵称名字
const nameInfo = (i) => wishCharacters[i].wishName + ' - ' + wishCharacters[i].id;
const nameZHInfo = (i) => wishCharacters[i].name + ' - ' + wishCharacters[i].shortname;

//当前祈愿信息
const updateCurrentWishInfo = () => {
    let reprintWish = objWish.reprint
    if (!objWish.haveWish) {
        document.getElementById('noWishInfo').innerHTML = '暂无祈愿，敬请期待';
        let currentHaveNoWish = document.getElementsByClassName('no-wish');
        for (let n of currentHaveNoWish) {
            n.style.display = 'none';
        }
        return
    }
    let len = objWish.wishIndex.length

    if (!reprintWish) {

        let imgSrc = [
            'wish/character/Wanderlust Invocation 1.png',
            'wish_spoof_1.jpg',
            'wish_spoof_2.jpg'
        ]
        let info = [
            ['',],
            ['真名 度厄真君', '听诏 宣此诰退'],
            ['天理长驱', '天动万象']
        ]
        let co = [
            '', '#a6fdfd', '#e2b032'
        ]
        let index = 0;
        for (let i = len; i < 4; ++i, ++index) {
            document.getElementById('showCurrentWishCharacter' + i).src = '/assets/res/genshin-impact/' + imgSrc[index]
            document.getElementById('currentCharacter' + i).innerHTML = info[index][0]
            document.getElementById('currentWishText' + i).innerHTML = info[index][1]
            let wishColorClass = document.getElementsByClassName('current-wish-color-' + i);
            for (let w of wishColorClass) {
                let showColor = co[index];
                if (showColor === '') continue;
                w.style.color = '#000'
                w.style.textShadow = showColor + ' -1px -1px 4px, ' + showColor + ' 1px -1px 4px, ' +
                    showColor + ' -1px 1px 4px, ' + showColor + ' 1px 1px 4px, ' + showColor + ' 0 0 10px';
            }
        }
    }

    //祈愿角色图片
    for (let i = 0; i < len; ++i) {
        let index = objWish.wishIndex[i]
        //最新祈愿的起止时间
        document.getElementById('timeStartCurrentCharacter').innerHTML = dayjs(wishCharacters[index].start).format('MM-DD HH:mm:ss')
        document.getElementById('timeEndCurrentCharacter').innerHTML = dayjs(wishCharacters[index].end).format('MM-DD HH:mm:ss')
        //最新的祈愿
        document.getElementById('currentCharacter' + i).innerHTML = ''
        //祈愿角色信息
        document.getElementById('currentWishText' + i).innerHTML = ''
        //color显示
        let wishColorClass = document.getElementsByClassName('current-wish-color-' + index);
        for (let w of wishColorClass) {
            w.style.color = elementColor[wishCharacters[index].ele];
        }
        let imgSrc = wishCharacters[index].wishName.replace(' ', '_').replace('\'', '').toLowerCase() + '_' + wishCharacters[index].image + '.jpg'
        document.getElementById('showCurrentWishCharacter' + i).src = '/assets/res/genshin-impact/events/' + imgSrc
    }

}
updateCurrentWishInfo();

//未来即将开放的祈愿
const futureWishInfo = () => {
    let indexArr = []

    if (!objWish.comingIndex.length && !objWish.isFuture) {
        document.getElementById('futureWishInfo').innerHTML = '未来祈愿，等待更新';
        let futureWish = document.getElementsByClassName('future-wish');
        for (let n of futureWish) {
            n.style.display = 'none';
        }
        return
    }

    if (objWish.isFuture) {
        let startIndex = objWish.wishIndex[0]
        for (let i = startIndex; i < wishLength; ++i) {
            indexArr.push(i)
        }
    } else if (objWish.comingIndex.length) {
        indexArr = indexArr.concat(objWish.comingIndex)
    }

    console.log('coming soon: ', indexArr)
    for (let i = 0; i < indexArr.length; ++i) {

        let wishColorClass = document.getElementsByClassName('future-wish-color-' + i);
        let showColor = elementColor [wishCharacters[indexArr[i]].ele];
        for (let w of wishColorClass) {
            w.style.color = '#000'
            w.style.textShadow = showColor + ' -1px -1px 4px, ' + showColor + ' 1px -1px 4px, ' +
                showColor + ' -1px 1px 4px, ' + showColor + ' 1px 1px 4px, ' + showColor + ' 0 0 10px';
        }
        let eventWishBGColorClass = document.getElementsByClassName('future-wish-bg-color-' + i);
        for (let eWishColor of eventWishBGColorClass) {
            eWishColor.style.backgroundColor = showColor + '59'//59 35%透明度
        }

        document.getElementById('futureElements' + i).src = '/assets/res/genshin-impact/elements/' + wishCharacters[indexArr[i]].ele + '.png';
        document.getElementById('futureWishText' + i).innerHTML = wishCharacters[indexArr[i]].info
        document.getElementById('futureWishBG' + i).src = '/assets/res/genshin-impact/characters/half/' + wishCharacters[indexArr[i]].id + '.png'
        document.getElementById('futureWish' + i).innerHTML = nameZHInfo(indexArr[i]);
    }

    for (let i = indexArr.length; i < 5; ++i) {
        document.getElementById('futureWishBG' + i).src = '/assets/res/genshin-impact/events/update.jpg'
        document.getElementById('futureWish' + i).innerHTML = "敬请期待";
        document.getElementById('futureWishText' + i).innerHTML = "";
    }
}
futureWishInfo();

//祈愿倒计时
const wishDeadline = () => Deadline(dayjs(), dayjs(wishCharacters[objWish.wishIndex[0]].end))

const ddlHandle = () => {
    let s = '#deadline'
    let d = parseInt(wishDeadline())
    $(s).html(wishDeadline())
    ddlCSS(s, d)
}

//当前时间
setInterval("time_str.innerHTML = dayjs().format('YYYY-MM-DD HH:mm:ss');", 1000);
//结束当前祈愿时间
setInterval(ddlHandle, 1000);


//隐藏多余的遍历
const hideClass = (start, end, str) => {
    console.log(str, start)
    for (let i = start; i < end; ++i) {
        let show = document.getElementsByClassName(str + i);
        for (let s of show) {
            s.style.display = 'none'
        }
    }
}

const lenMonthList = monthList.length
const lenAllDays = dates.length
const lenFuture = objWish.comingIndex.length
const lenCurrent = objWish.wishIndex.length

hideClass(lenMonthList, MAX_MONTH, 'lenMonthList-show-')
hideClass(lenAllDays, MAX_DAY, 'lenAllDays-show-')
hideClass(lenFuture, MAX_FUTURE, 'lenFuture-show-')
hideClass(lenCurrent, MAX_CURRENT, 'lenCurrent-show-')





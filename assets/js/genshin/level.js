const EXP = [
    0, 375, 500, 625, 725,
    850, 950, 1075, 1200, 1300,
    1425, 1525, 1650, 1775, 1875,
    2000, 2375, 2500, 2625, 2775,
    2825, 3425, 3725, 4000, 4300,
    4575, 4875, 5150, 5450, 5725,
    6025, 6300, 6600, 6900, 7175,
    7475, 7750, 8050, 8325, 8625,
    10550, 11525, 12375, 13450, 14400,
    15350, 16325, 17275, 18250, 19200,
    26400, 28800, 31200, 33600, 36000,
    232350, 258950, 285750, 312825, 340125
];

//8min恢复一个原脆树脂
const RENEW = 8;
//一天180个树脂
const TOTAL_DAY = 24 * 60 / RENEW;
//氪佬 每天最多买6次 一次60树脂
const TU_HAO = [0, 50, 100, 100, 150, 200, 200];
//经验树脂比 为4:1
const resin2exp = resin => resin * 4;

const getDaySpend = (exp, money) => {
    let cost = 0;
    let resinPlus = 0;
    if (money) {
        for (let i = 0; i <= money; ++i) {
            cost += TU_HAO[i];
        }
        resinPlus = 60 * money;
    }

    let resinDayTotal = TOTAL_DAY + resinPlus;
    let dayEXPTotal = resin2exp(resinDayTotal);
    let daySpend = Math.ceil(exp / dayEXPTotal);
    console.info("exp", exp, "resin", resinDayTotal, "daySpend", daySpend);
    return {
        daySpend: daySpend,
        cost: cost
    };
};

const showMore = (obj) => {
    let prefixInfo = "";
    let day = obj.daySpend;
    let dayInfo = "";

    if (obj.cost === 0) prefixInfo = "白嫖的神";
    else if (obj.cost === 800) prefixInfo = "氪佬悠着点啊";
    else prefixInfo = "氪佬大气";

    if (day < 7) {
        dayInfo = "仅剩" + day + "天，冲冲冲！";
    } else if (day < 30) {
        dayInfo = "仅剩" + day + "天，很快了！冲冲冲！！";
    } else if (day < 180) {
        dayInfo = "还有" + day + "天，加油";
    } else if (day < 365) {
        dayInfo = "还有" + day + "天，慢慢来";
    } else {
        dayInfo = "遥遥无期，还得" + day + "天啊";
    }

    $("#prefix_info").text(prefixInfo);
    $("#need_day").text(dayInfo);
};

const getEXP = (lv1, lv2, haveGot, money) => {
    let show = "非法输入，请正确输入";

    if (lv1 >= lv2 || lv1 > 59 || lv2 > 60) {
        return show;
    } else {
        let exp = 0;
        for (let i = lv1; i < lv2; ++i) {
            exp += EXP[i];
        }

        console.warn("exp", exp);

        haveGot = parseInt(haveGot);
        if (haveGot > exp) return show;

        exp -= haveGot;
        console.warn("haveGot", haveGot);
        showMore(getDaySpend(exp, money));
        show = "" + exp;
    }

    return show;
};


const showEXP = () => {
    let lv1 = $("#lv1").val();
    let lv2 = $("#lv2").val();
    let money = $("#tu_hao").val();
    let haveGot = $("#have_got").val();
    $("#need-exp").text(getEXP(lv1, lv2, haveGot, money));
};
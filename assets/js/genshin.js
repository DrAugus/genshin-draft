const elementColor = {
    dendro: "#98e628",//草
    geo: "#e2b032",//岩
    electro: "#fca7ff",//雷
    hydro: "#03ddfe",//水
    pyro: "#fa5d3e",//火
    anemo: "#4cf3b6",//风
    cryo: "#a6fdfd"//冰
};

const colorWeapon = "#FFAA4B";


const eleArr = ["dendro", "geo", "electro", "hydro", "pyro", "anemo", "cryo",];
const showEle = (show) => {
    for (let e of eleArr) {
        if (e === show) $(".show-" + e).removeClass("hide");
        else $(".show-" + e).addClass("hide");
    }
};
const showAll = () => {
    for (let e of eleArr) {
        console.log(e);
        $(".show-" + e).removeClass("hide");
    }
};
//默认 展示所有
showAll();
for (let e of eleArr) {
    $("#" + e).click(() => {
        showEle(e);
    });
}


//胡桃 语音
const voiceHuTao = [
    {
        index: 0,
        text: "嗯~早起身体好，晚睡人会飘。",
        src: "https://patchwiki.biligame.com/images/ys/8/8d/n8gei38e7k4v8os3scp7uormhc633ib.mp3"
    },
    {
        index: 1,
        text: "哟！中午好呀，吃了吗？",
        src: "https://patchwiki.biligame.com/images/ys/d/d7/kmv4y3qxzawo4lvza5sto2hqs4asxcj.mp3"
    },
    {
        index: 2,
        text: "嘻嘻，月亮出来喽~咱也出门吧。",
        src: "https://patchwiki.biligame.com/images/ys/c/c8/9p3stmpojfh2pmodmvi6srkjo55e9l9.mp3"
    },
    {
        index: 3,
        text: "咳咳...太阳出来我晒太阳，月亮出来我晒月亮咯~",
        src: "https://patchwiki.biligame.com/images/ys/0/01/2fnjqvot4urhojue61nnct93s94kpg4.mp3"
    },
    {
        index: 4,
        text: "哎哟哟",
        src: "https://patchwiki.biligame.com/images/ys/a/a7/1bxid2ud8xdv491mpn6z1nf598l6bw6.mp3"
    },
    {
        index: 5,
        text: "丘丘",
        src: "https://patchwiki.biligame.com/images/ys/2/2d/pfpqhnpnlf07hwdjud6f3ilsg840osm.mp3"
    },
    {
        index: 6,
        text: "不如去我那儿喝杯茶？嘿~",
        src: "https://patchwiki.biligame.com/images/ys/c/cd/mh8ksq83vyqgm9m065emzzstw9skjaa.mp3"
    }
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
    };

    let index = getVoiceIndex(hour);
    document.getElementById("hutao-voice").src = voiceHuTao[index].src;
    document.getElementById("hutao-text").innerHTML = voiceHuTao[index].text;
};
autoPlayVoice();
//填充所有胡桃语音
for (let i = 0; i < voiceHuTao.length; ++i) {
    document.getElementById("hutao-voice-" + i).src = voiceHuTao[i].src;
    document.getElementById("hutao-text-" + i).innerHTML = voiceHuTao[i].text;
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
    let start = dayjs(e.start, "YYYY-MM-DD HH:mm:ss").subtract(0, "minute");
    const end = dayjs(e.end, "YYYY-MM-DD HH:mm:ss").subtract(0, "minute");
    const duration = end.diff(start, "day", true);

    if (lastEventTime < end) lastEventTime = end;

    return {
        ...e,
        index: i,
        start,
        end,
        duration
    };
};

const processEvent = () => {
    events = eventsData.map((e, i) => {
        if (Array.isArray(e)) {
            return e.map((item) => convertToDate(item, i));
        }

        return convertToDate(e, i);
    });

    events
        //slice不会改变原始数组
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
                    firstDay = e[0].start.set("hour", 0).set("minute", 0).set("second", 0).subtract(padding, "day");
                } else {
                    firstDay = e.start.set("hour", 0).set("minute", 0).set("second", 0).subtract(padding, "day");
                }
            }

            if (Array.isArray(e)) {
                for (let j = 0; j < e.length; j++) {
                    const current = e[j];

                    events[current.index][j].offset = Math.abs(firstDay.diff(events[current.index][j].start, "day", true));
                }
            } else {
                events[e.index].offset = Math.abs(firstDay.diff(e.start, "day", true));
            }
        });

    const dayTotal = Math.abs(Math.ceil(firstDay.diff(lastEventTime, "day", true))) + 2 * padding;

    for (let i = 0; i < dayTotal; i++) {
        const year = firstDay.add(i, "day").format("YYYY");
        const month = firstDay.add(i, "day").format("MMMM");
        if (years[year] === undefined) {
            years[year] = [];
        }
        if (years[year][month] === undefined) {
            years[year][month] = {
                total: 0,
                offset: 0
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

    dates = [...new Array(dayTotal)].map((_, i) => firstDay.add(i, "day").date());
};

processEvent();

let wishCharacters = events;
let wishLength = wishCharacters.length;

//设置时间轴
const setTimeAxis = () => {
    let startD = dayjs(wishCharacters[0].start).subtract(7, "day").format("YYYY-MM-DD HH:mm:ss");
    let endD = dayjs(wishCharacters[wishLength - 1].end).add(7, "day").format("YYYY-MM-DD HH:mm:ss");
    const allDays = getDuration("day", startD, endD);
    const countDays = allDays.length;

    for (let i = 0; i < dates.length; ++i) {
        $(".left-day-" + i).removeClass("hide");
        //圆圈timeline-index的width为30
        $(".left-day-" + i).css("left", ((dayWidth - 30) * i) + "px");
        document.getElementById("timelineDay" + i).innerHTML = dates[i];
    }

    for (let i = 0; i < monthList.length; ++i) {
        $(".timeline-month-left-" + i).removeClass("hide");
        $(".timeline-month-left-" + i).css("left", (dayWidth * monthList[i][1].offset) + "px");

        let widthClass = document.getElementsByClassName("timeline-month-width-" + i);
        for (let wClass of widthClass) {
            wClass.style.width = (dayWidth * monthList[i][1].total) + "px";
        }
        document.getElementById("timelineMonthName" + i).innerHTML = monthList[i][0];
    }

    let todayOffset = Math.abs(firstDay.diff(today, "day", true));
    let leftToday = document.getElementsByClassName("timeline-today-line-pos");
    for (let l of leftToday) {
        //timeline-index的width为30
        l.style.left = todayOffset * dayWidth + 30 + "px";
    }
};
setTimeAxis();


//当前时间定位 ----------------------------------------------------------------
const setCurrentPos = () => {
    document.getElementById("setNowPos").scrollLeft = document.getElementById("findNowPos").offsetLeft - document.body.clientWidth / 2;
};
setCurrentPos();

const setTodayTime = () => {
    const d = dayjs();
    document.getElementById("currentTime").innerHTML = d.format("HH:mm:ss");
};
setInterval("setTodayTime()", 1000);
//---------------------------------------------------------------------------


let objWish = {
    haveWish: true,//0无祈愿 1有祈愿
    wishIndex: [],//索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
    reprint: true,//双复刻标记
    isFuture: true,//当前无祈愿 正在等待开放
    comingIndex: []//即将到来的未开放的
};
//找出当前在哪个祈愿时间段
const getWishObj = () => {
    let obj = {};
    obj.wishIndex = [];
    obj.haveWish = true;
    obj.isFuture = false;
    obj.comingIndex = [];
    //当前时间所处的祈愿时间段
    for (let e of wishCharacters) {
        //当前时间在祈愿起始时间后
        let startAfter = dayjs().isAfter(e.start, "second");
        //当前时间在祈愿结束时间前
        let endBefore = dayjs().isBefore(e.end, "second");
        if (startAfter && endBefore) {
            obj.wishIndex.push(e.index);
        }
    }
    //如果没有找到
    if (!obj.wishIndex.length) {
        obj.haveWish = false;
        for (let i = 1; i < wishLength; ++i) {
            //介于前一个结束时间后 后一个开始时间前
            let endAfter = dayjs().isAfter(wishCharacters[i - 1].end, "second");
            let startBefore = dayjs().isBefore(wishCharacters[i].start, "second");
            if (endAfter && startBefore) {
                obj.wishIndex.push(wishCharacters[i].index);
                obj.isFuture = true;
            }
        }
    }

    obj.reprint = obj.wishIndex.length > 1;

    //存放所有未来的祈愿
    if (obj.wishIndex.length) {
        let startIndex = obj.wishIndex[obj.wishIndex.length - 1];
        if (obj.isFuture) obj.comingIndex.push(startIndex);
        else ++startIndex;
        for (let i = startIndex; i < wishLength; ++i) {
            obj.comingIndex.push(i);
        }
    }

    return obj;
};
objWish = getWishObj();
console.log("objWish", objWish);


//祈愿角色信息
const wishInfo = () => {
    for (let i = 0; i < wishLength; ++i) {
        let start = firstDay;
        const end = dayjs(wishCharacters[i].start, "YYYY-MM-DD HH:mm:ss").subtract(0, "minute");
        const duration = end.diff(start, "day", true);
        // console.log(i, duration)

        //动态设置各个角色的css
        $(".event-item-" + i).removeClass("hide");
        $(".event-item-" + i).css({
            "width": wishCharacters[i].duration * dayWidth + "px",
            "left": duration * dayWidth + 30 + "px"
        });
        if (wishCharacters[i].wish_2) $(".event-item-" + i).css("marginTop", "160px");

        //left-t
        $(".left-t" + i).css("left", (350 * i) + "px");
    }
};
wishInfo();

//当前祈愿信息
const updateCurrentWishInfo = () => {
    let reprintWish = objWish.reprint;
    if (!objWish.haveWish) {
        document.getElementById("noWishInfo").innerHTML = "暂无祈愿，敬请期待";
        let currentHaveNoWish = document.getElementsByClassName("no-wish");
        for (let n of currentHaveNoWish) {
            n.style.display = "none";
        }
        return;
    }
    let len = objWish.wishIndex.length;

    if (!reprintWish) {

        let imgSrc = [
            "wish/character/Wanderlust Invocation 1.png",
            "wish_spoof_1.jpg",
            "wish_spoof_2.jpg"
        ];
        let info = [
            [""],
            ["真名 度厄真君", "听诏 宣此诰退"],
            ["天理长驱", "天动万象"]
        ];
        let co = [
            "", "#a6fdfd", "#e2b032"
        ];
        let index = 0;
        for (let i = len; i < 4; ++i, ++index) {
            document.getElementById("showCurrentWishCharacter" + i).src = "/assets/res/genshin-impact/" + imgSrc[index];
            document.getElementById("currentCharacter" + i).innerHTML = info[index][0];
            document.getElementById("currentWishText" + i).innerHTML = info[index][1];
            let wishColorClass = document.getElementsByClassName("current-wish-color-" + i);
            for (let w of wishColorClass) {
                let showColor = co[index];
                if (showColor === "") continue;
                w.style.color = "#000";
                w.style.textShadow = showColor + " -1px -1px 4px, " + showColor + " 1px -1px 4px, " +
                    showColor + " -1px 1px 4px, " + showColor + " 1px 1px 4px, " + showColor + " 0 0 10px";
            }
        }
    }

    //祈愿角色图片
    for (let i = 0; i < len; ++i) {
        let index = objWish.wishIndex[i];
        //最新祈愿的起止时间
        document.getElementById("timeStartCurrentCharacter").innerHTML = dayjs(wishCharacters[index].start).format("MM-DD HH:mm:ss");
        document.getElementById("timeEndCurrentCharacter").innerHTML = dayjs(wishCharacters[index].end).format("MM-DD HH:mm:ss");
        //最新的祈愿
        document.getElementById("currentCharacter" + i).innerHTML = "";
        //祈愿角色信息
        document.getElementById("currentWishText" + i).innerHTML = "";
        //color显示
        let wishColorClass = document.getElementsByClassName("current-wish-color-" + index);
        for (let w of wishColorClass) {
            w.style.color = elementColor[wishCharacters[index].ele];
        }
        let imgSrc = wishCharacters[index].name.replace(/ /g, "_").replace(/'/g, "").toLowerCase() + "_" + wishCharacters[index].image + ".jpg";
        document.getElementById("showCurrentWishCharacter" + i).src = "/assets/res/genshin-impact/events/" + imgSrc;
    }

};
updateCurrentWishInfo();

//未来即将开放的祈愿
const futureWishInfo = () => {
    let indexArr = [];

    if (!objWish.comingIndex.length && !objWish.isFuture) {
        document.getElementById("futureWishInfo").innerHTML = "未来祈愿，等待更新";
        let futureWish = document.getElementsByClassName("future-wish");
        for (let n of futureWish) {
            n.style.display = "none";
        }
        return;
    }

    if (objWish.isFuture) {
        let startIndex = objWish.wishIndex[0];
        for (let i = startIndex; i < wishLength; ++i) {
            indexArr.push(i);
        }
    } else if (objWish.comingIndex.length) {
        indexArr = indexArr.concat(objWish.comingIndex);
    }

    console.log("coming soon: ", indexArr);
    for (let i = 0; i < indexArr.length; ++i) {

        let wishColorClass = document.getElementsByClassName("future-wish-color-" + i);
        let showColor = elementColor [wishCharacters[indexArr[i]].ele];
        for (let w of wishColorClass) {
            w.style.color = "#000";
            w.style.textShadow = showColor + " -1px -1px 4px, " + showColor + " 1px -1px 4px, " +
                showColor + " -1px 1px 4px, " + showColor + " 1px 1px 4px, " + showColor + " 0 0 10px";
        }
        let eventWishBGColorClass = document.getElementsByClassName("future-wish-bg-color-" + i);
        for (let eWishColor of eventWishBGColorClass) {
            eWishColor.style.backgroundColor = showColor + "59";//59 35%透明度
        }

        document.getElementById("futureElements" + i).src = "/assets/res/genshin-impact/elements/" + wishCharacters[indexArr[i]].ele + ".png";
        document.getElementById("futureWishText" + i).innerHTML = wishCharacters[indexArr[i]].info;

        let imgSrc = wishCharacters[indexArr[i]].name.replace(/ /g, "_").replace(/'/g, "").toLowerCase() + "_" + wishCharacters[indexArr[i]].image + ".jpg";
        document.getElementById("futureWishBG" + i).src = "/assets/res/genshin-impact/events/" + imgSrc;
        document.getElementById("futureWish" + i).innerHTML = "";
    }

    for (let i = indexArr.length; i < 5; ++i) {
        document.getElementById("futureWishBG" + i).src = "/assets/res/genshin-impact/events/genshin.png";
        document.getElementById("futureWish" + i).innerHTML = "敬请期待";
        document.getElementById("futureWishText" + i).innerHTML = "";
    }
};
futureWishInfo();

//祈愿倒计时
const wishDeadline = () => Deadline(dayjs(), dayjs(wishCharacters[objWish.wishIndex[0]].end));

const ddlHandle = () => {
    let s = "#deadline";
    let d = parseInt(wishDeadline());
    $(s).html(wishDeadline());
    ddlCSS(s, d);
};

//当前时间
setInterval("time_str.innerHTML = dayjs().format('YYYY-MM-DD HH:mm:ss');", 1000);
//结束当前祈愿时间
setInterval(ddlHandle, 1000);



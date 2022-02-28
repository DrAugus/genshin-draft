const ELEMENT_COLOR = {
    dendro: "#98e628",//草
    geo: "#e2b032",//岩
    electro: "#fca7ff",//雷
    hydro: "#03ddfe",//水
    pyro: "#fa5d3e",//火
    anemo: "#4cf3b6",//风
    cryo: "#a6fdfd"//冰
};


let str_err = ''

let wishCharacters = events;
let wishLength = wishCharacters.length;

//替换空格 转小写----------------
//因为liquid没找到'如何替换 此处不再替换'
const replaceAndLow = str => str.replace(/ /g, "_").toLowerCase();

//----------------------------

let objWish = {
    haveWish: true,//0无祈愿 1有祈愿
    wishIndex: [],//索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
    reprint: true,//双复刻标记
    isFuture: true,//当前无祈愿 正在等待开放
    comingIndex: []//即将到来的未开放的
};
//找出当前在哪个祈愿时间段
const getWishObj = () => {

    try {
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

    }catch (e) {
        str_err += e;
        $("#wish-err").text(e);
    }




    return obj;
};
objWish = getWishObj();
console.log("objWish", objWish);


//当前祈愿信息
const updateCurrentWishInfo = () => {
    if (!objWish.haveWish) {
        $("#noWishInfo").text("暂无祈愿，敬请期待");
        $(".no-wish").css("display", "none");
        return;
    }
    let len = objWish.wishIndex.length;

    if (true) {

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
            $("#showCurrentWishCharacter" + i).attr("src", "/assets/res/genshin-impact/" + imgSrc[index]);
            $("#currentCharacter" + i).text(info[index][0]);
            $("#currentWishText" + i).text(info[index][1]);
            let showColor = co[index];
            if (showColor === "") continue;
            let tShadow = showColor + " -1px -1px 4px, " + showColor + " 1px -1px 4px, " +
                showColor + " -1px 1px 4px, " + showColor + " 1px 1px 4px, " + showColor + " 0 0 10px";
            $(".current-wish-color-" + i).css({"color": "#000", "textShadow": tShadow});
        }
    }

    //祈愿角色图片
    for (let i = 0; i < len; ++i) {
        let index = objWish.wishIndex[i];
        //最新祈愿的起止时间
        $("#timeStartCurrentCharacter").text(dayjs(wishCharacters[index].start).format("MM-DD HH:mm:ss"));
        $("#timeEndCurrentCharacter").text(dayjs(wishCharacters[index].end).format("MM-DD HH:mm:ss"));
        //最新的祈愿
        $("#currentCharacter" + i).text("");
        //祈愿角色信息
        $("#currentWishText" + i).text("");
        //color显示
        $(".current-wish-color-" + index).css("color", ELEMENT_COLOR[wishCharacters[index].ele]);
        let imgSrc = replaceAndLow(wishCharacters[index].name) + "_" + wishCharacters[index].image + ".jpg";
        $("#showCurrentWishCharacter" + i).attr("src", "/assets/res/genshin-impact/events/" + imgSrc);
    }

};
updateCurrentWishInfo();

//未来即将开放的祈愿
const futureWishInfo = () => {
    let indexArr = [];

    if (!objWish.comingIndex.length && !objWish.isFuture) {
        $("#futureWishInfo").text("未来祈愿，等待更新");
        $(".future-wish").css("display", "none");
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
        let showColor = ELEMENT_COLOR [wishCharacters[indexArr[i]].ele];
        let tShadow = showColor + " -1px -1px 4px, " + showColor + " 1px -1px 4px, " +
            showColor + " -1px 1px 4px, " + showColor + " 1px 1px 4px, " + showColor + " 0 0 10px";
        $(".future-wish-color-" + i).css({"color": "#000", "textShadow": tShadow});

        $(".future-wish-bg-color-" + i).css("backgroundColor", showColor + "59");//59 35%透明度

        $("#futureElements" + i).attr("src", "/assets/res/genshin-impact/elements/" + wishCharacters[indexArr[i]].ele + ".png");

        let imgSrc = replaceAndLow(wishCharacters[indexArr[i]].name) + "_" + wishCharacters[indexArr[i]].image + ".jpg";
        $("#futureWishBG" + i).attr("src", "/assets/res/genshin-impact/events/" + imgSrc);
        $("#futureWish" + i).text("");
    }

    for (let i = indexArr.length; i < 5; ++i) {
        $("#futureWishBG" + i).attr("src", "/assets/res/genshin-impact/events/genshin.png");
        $("#futureWish" + i).text("敬请期待");
        $("#futureWishText" + i).text("");
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



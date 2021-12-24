//WARNING: timeAll更新时 需要在yaml里更新对应的key
const timeAll = {
    cet_4: {
        name: "英语四级",
        2022: {start: "06-11 09:00:00", end: "06-11 11:20:00"},
        info: "大学英语四级考试，即CET-4，College English Test Band 4的缩写。1987年正式实施。由教育部主办，教育部考试中心主持和实施的大规模标准化考试，是全国性的教学考试，其目的是促进我国大学英语教学工作，对大学生的英语能力进行客观、准确的测量，为提高我国大学英语课程的教学质量提供服务。"
    },
    cet_6: {
        name: "英语六级",
        2022: {start: "06-11 15:00:00", end: "06-11 17:25:00"},
        info: "大学英语六级考试，即CET-6，College English Test Band 6的缩写。1987年正式实施。由教育部主办，教育部考试中心主持和实施的大规模标准化考试，是全国性的教学考试，其目的是促进我国大学英语教学工作，对大学生的英语能力进行客观、准确的测量，为提高我国大学英语课程的教学质量提供服务。"
    },
    christmas_eve: {
        name: "平安夜",
        block: {start: "12-24 00:00:00", end: "12-24 23:59:59"},
        info: "传统上不少基督徒会在平安夜参与子夜弥撒或聚会，通常在世界各地的教堂内举行，以表示圣诞日的开始。一些教会则会在晚上较早时间举行烛光崇拜，通常会有耶稣降生故事的话剧表演，亦会享用大餐。德国的传统菜色则是烧鲤鱼。"
    },
    christmas: {
        name: "圣诞节",
        block: {start: "12-25 00:00:00", end: "12-25 23:59:59"},
        info: "圣诞节，又称耶诞节，东正教称基督降生节，是基督教纪念耶稣降生的节日。 教会通常将此节日定于12月25日。其为基督教礼仪年历的重要节日，部分教派会透过将临期及圣诞夜来准备，并以八日庆典与礼仪节期延续庆祝。"
    },
    postgraduate_exam: {
        name: "研究生考试",
        2021: {start: "12-25 09:00:00", end: "12-26 17:00:00"},
        2022: {start: "12-24 09:00:00", end: "12-25 17:00:00"},
        info: "全国硕士研究生统一招生考试（Unified National Graduate Entrance Examination，简称“考研”或“统考”）是指教育主管部门和招生机构为选拔研究生而组织的相关考试的总称，由国家考试主管部门和招生单位组织的初试和复试组成。是一项选拔性考试，所录取学历类型为普通高等教育。"
    },
    new_year: {
        name: "元旦",
        block: {start: "01-01 00:00:00", end: "01-01 23:59:59"},
        info: "指格里历或称公历中的新年第一天，全世界各国都称1月1日为元旦，因为公历也称为阳历、西历、新历，所以元旦也是公历新年，阳历新年，新历新年，是世界多数国家的法定假日，很多国家过年都是从圣诞节一直放到元旦，放假日数则依各地民情而有所不同。"
    },
    new_year_eve: {
        name: "除夕",
        2022: {start: "01-31 00:00:00", end: "01-31 23:59:59"},
        2023: {start: "01-21 00:00:00", end: "01-21 23:59:59"},
        info: "岁末的最后一天夜晚。岁末的最后一天称为“岁除”，意为旧岁至此而除，另换新岁。又称大年夜、除夕夜、除夜等。除夕是除旧布新、阖家团圆、祭祀祖先的日子，与清明节、七月半、重阳节是中国民间传统的祭祖大节。除夕，在国人心中是具有特殊意义的，这个年尾最重要的日子，漂泊再远的游子也是要赶着回家去和家人团聚，在爆竹声中辞旧岁，烟花满天迎新春。"
    },
    spring_festival: {
        name: "春节",
        2022: {start: "02-01 00:00:00", end: "02-01 23:59:59"},
        2023: {start: "01-22 00:00:00", end: "01-22 23:59:59"},
        info: "中国四大传统节日之一。春节，即中国农历新年，俗称新春、新岁、岁旦等，口头上又称过年、过大年。春节历史悠久，由上古时代岁首祈岁祭祀演变而来。万物本乎天、人本乎祖，祈岁祭祀、敬天法祖，报本反始也。"
    },
    valentine: {
        name: "情人节",
        block: {start: "02-14 00:00:00", end: "02-14 23:59:59"},
        info: "在西方也称为圣瓦伦廷节，在每年的公历2月14日。近年，情人节被指过于商业化。基于宗教理由，南亚和中东等某些地区，情人节的相关活动受到规范。"
    },
    lantern_festival: {
        name: "元宵节",
        2022: {start: "02-15 00:00:00", end: "02-15 23:59:59"},
        2023: {start: "02-05 00:00:00", end: "02-05 23:59:59"},
        info: "又称上元节、小正月、元夕或灯节。正月是农历的元月，古人称“夜”为“宵”，正月十五是一年中第一个月圆之夜，所以称正月十五为“元宵节”。根据道教“三元”的说法，正月十五又称为“上元节”。元宵节习俗自古以来就以热烈喜庆的观灯习俗为主。"
    }
};

let dateInfo = [];

const convertToDate = (festival, info, i) => {
    //日期
    let day;
    //固定日期
    let block = false;
    //当前年
    let y = dayjs().year();
    //此时的事件 可能为多个事件
    let currentEvent = [];
    Object.getOwnPropertyNames(info).forEach(key => {
        //foreach必须遍历所有 如果day有值 跳过即可
        if (day) return;

        if (!isNaN(parseInt(key))) {
            day = info[key].start;
            // console.log("===", key, info[key]);
        } else if (key === "block") {
            day = info[key].start;
            block = true;
            // console.log("###", key, info[key]);
        }

        if (day) {
            {
                //此时是否在当前事件中
                let startEvent = y + "-" + info[key].start;
                let endEvent = y + "-" + info[key].end;
                //当前时间在事件起始时间后
                let startAfter = dayjs().isAfter(startEvent, "second");
                //当前时间在事件结束时间前
                let endBefore = dayjs().isBefore(endEvent, "second");
                if (startAfter && endBefore) {
                    currentEvent.push(info);
                }
            }

            //调整时间
            let end = y + "-" + day;
            //当前时间在end后
            let endAfter = dayjs().isAfter(end, "second");
            if (endAfter) {
                ++y;
                //block不需要修改day
                if (!block) day = info[y].start;
            }
        }
    });

    if (!day) {
        console.error("your record need upgrade", festival, info, i);
    }

    let end = y + "-" + day;
    return {
        sort: dayjs(end).diff(dayjs(), "day", true),
        date: day,
        ddl: Deadline(dayjs(), dayjs(end)),
        festival: festival,
        name: info.name,
        info: info.info,
        currentEventInfo: currentEvent,
        index: i
    };
};

const countdown = () => {
    dateInfo = Object.getOwnPropertyNames(timeAll).map((festival, i) => convertToDate(festival, timeAll[festival], i));
    dateInfo.sort((a, b) => a.sort - b.sort);
};

const handlerTime = (i) => {
    ddlCSS("#ddl" + i, dateInfo[i].sort);
    $("#ddl" + i).text(dateInfo[i].ddl);
    $("#festival" + i).text(dateInfo[i].name);
    //无info无法设置隐藏 除非参考hedgehog
    $("#info" + i).text(dateInfo[i].info);
    document.getElementById("ddl" + i).setAttribute("data-tooltip", dateInfo[i].date);
};
const time_beat = () => {
    countdown();
    for (let i = 0; i < dateInfo.length; ++i) {
        handlerTime(i);
    }
};

time_beat();
console.log(dateInfo);
setInterval(time_beat, 1000);

const eventNow = () => {

    let nowInfo = dateInfo[dateInfo.length - 1].currentEventInfo;

    console.log("currentEvent==>", nowInfo);

    for (let i = 0; i < nowInfo.length; ++i) {
        $("#nowEvent" + i).text(nowInfo[i].name);
        $("#noEventInfo" + i).text(nowInfo[i].info);
    }

    //暂定最高为5个同时发生的事件
    for (let i = nowInfo.length; i < 5; ++i) {
        $("#hide" + i).addClass("hide");
    }
};

eventNow();



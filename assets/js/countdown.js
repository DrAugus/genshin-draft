//WARNING: timeAll更新时 需要在yaml里更新对应的key
const timeAll = {
    cet_4: {
        name: "英语四级",
        2021: "12-18 09:00:00",
        2022: "06-11 09:00:00",
    },
    cet_6: {
        name: "英语六级",
        2021: "12-18 15:00:00",
        2022: "06-11 15:00:00",
    },
    christmas_eve: {
        name: "平安夜",
        block: "12-24"
    },
    christmas: {
        name: "圣诞节",
        block: "12-25"
    },
    postgraduate_exam: {
        name: "研究生考试",
        2021: "12-25 09:00:00",
        2022: "12-24 09:00:00"
    },
    new_year: {
        name: "元旦",
        block: "01-01"
    },
    new_year_eve: {
        name: "除夕",
        2022: "01-31",
        2023: "01-21"
    },
    spring_festival: {
        name: "春节",
        info: "",
        2022: "02-01",
        2023: "01-22"
    },
    valentine: {
        name: "情人节",
        block: "02-14"
    },
    lantern_festival: {
        name: "元宵节",
        info: "",
        2022: "02-15",
        2023: "02-05"
    }
}

let dateInfo = []

const convertToDate = (festival, info, i) => {
    //日期
    let day;
    //固定日期
    let block = false;
    //当前年
    let y = dayjs().year()
    Object.getOwnPropertyNames(info).forEach(key => {
        //foreach必须遍历所有 如果day有值 跳过即可
        if (day) return;

        if (!isNaN(parseInt(key))) {
            day = info[key]
            console.log('===', key, info[key])
        } else if (key === 'block') {
            day = info[key]
            block = true;
            console.log('###', key, info[key])
        }

        if (day) {
            let end = y + "-" + day
            //当前时间在end后
            let endAfter = dayjs().isAfter(end, 'second')
            if (endAfter) {
                ++y;
                //block不需要修改day
                if (!block) day = info[y]
            }
        }
    })

    if (!day) {
        console.error('your record need upgrade', festival, info, i)
    }

    let end = y + "-" + day
    return {
        sort: dayjs(end).diff(dayjs(), 'day', true),
        date: day,
        ddl: Deadline(dayjs(), dayjs(end)),
        festival: festival,
        name: info.name,
        info: info.info,
        index: i,
    };
}

const countdown = () => {
    dateInfo = Object.getOwnPropertyNames(timeAll).map((festival, i) => convertToDate(festival, timeAll[festival], i));
    dateInfo.sort((a, b) => a.sort - b.sort);
}

countdown()

console.log(dateInfo)

const handlerTime = (i) => {
    ddlCSS('#ddl' + i, dateInfo[i].sort)
    $('#ddl' + i).text(dateInfo[i].ddl)
    $('#festival' + i).text(dateInfo[i].name)
    document.getElementById('ddl' + i).setAttribute('data-tooltip', dateInfo[i].date)
}
const time_beat = () => {
    for (let i = 0; i < dateInfo.length; ++i) {
        handlerTime(i);
    }
}

time_beat()
setInterval(time_beat, 1000);

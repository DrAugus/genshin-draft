const TIMELINE_PADDING = 10;
let lastEventTime = dayjs().year(2000);
let firstDay = dayjs();
let dates = [];
let years = [];
let yearList = [];
let monthList = [];
let events = [];

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
                    firstDay = e[0].start.set("hour", 0).set("minute", 0).set("second", 0).subtract(TIMELINE_PADDING, "day");
                } else {
                    firstDay = e.start.set("hour", 0).set("minute", 0).set("second", 0).subtract(TIMELINE_PADDING, "day");
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

    const dayTotal = Math.abs(Math.ceil(firstDay.diff(lastEventTime, "day", true))) + 2 * TIMELINE_PADDING;

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

    return {
        dates: dates,
        years: years,
        yearList: yearList,
        monthList: monthList,
        events: events,
    };

};

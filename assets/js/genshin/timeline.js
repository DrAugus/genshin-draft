import {dates, events, firstDay, monthList, processEvent} from "./event_handle";
import {dayWidth} from "./utils";


let today = dayjs();

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
        $("#timelineDay" + i).text(dates[i]);
    }

    for (let i = 0; i < monthList.length; ++i) {
        $(".timeline-month-left-" + i).removeClass("hide");
        $(".timeline-month-left-" + i).css("left", (dayWidth * monthList[i][1].offset) + "px");
        $(".timeline-month-width-" + i).css("width", (dayWidth * monthList[i][1].total) + "px");
        $("#timelineMonthName" + i).text(monthList[i][0]);
    }

    let todayOffset = Math.abs(firstDay.diff(today, "day", true));
    //timeline-index的width为30
    $(".timeline-today-line-pos").css("left", todayOffset * dayWidth + 30 + "px");
};
setTimeAxis();


//当前时间定位 ----------------------------------------------------------------
const setCurrentPos = () => {
    document.getElementById("setNowPos").scrollLeft = document.getElementById("findNowPos").offsetLeft - document.body.clientWidth / 2;
};
setCurrentPos();

const setTodayTime = () => {
    const d = dayjs();
    $("#currentTime").text(d.format("HH:mm:ss"));
};
setInterval("setTodayTime()", 1000);
//---------------------------------------------------------------------------

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
        if (wishCharacters[i].wish_2)
            $(".event-item-" + i).css("marginTop", "160px");

        //left-t
        $(".left-t" + i).css("left", (350 * i) + "px");
    }
};
wishInfo();
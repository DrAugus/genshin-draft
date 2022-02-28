const DAY_WIDTH = 35;
let today = dayjs();

const eventObj = processEvent();

let wishCharacters = eventObj.events;
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
        $(".left-day-" + i).css("left", ((DAY_WIDTH - 30) * i) + "px");
        $("#timelineDay" + i).text(dates[i]);
    }

    for (let i = 0; i < monthList.length; ++i) {
        $(".timeline-month-left-" + i).removeClass("hide");
        $(".timeline-month-left-" + i).css("left", (DAY_WIDTH * monthList[i][1].offset) + "px");
        $(".timeline-month-width-" + i).css("width", (DAY_WIDTH * monthList[i][1].total) + "px");
        $("#timelineMonthName" + i).text(monthList[i][0]);
    }

    let todayOffset = Math.abs(firstDay.diff(today, "day", true));
    //timeline-index的width为30
    $(".timeline-today-line-pos").css("left", todayOffset * DAY_WIDTH + 30 + "px");
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
            "width": wishCharacters[i].duration * DAY_WIDTH + "px",
            "left": duration * DAY_WIDTH + 30 + "px"
        });
        if (wishCharacters[i].wish_2)
            $(".event-item-" + i).css("marginTop", "160px");

        //left-t
        $(".left-t" + i).css("left", (350 * i) + "px");
    }
};
wishInfo();


$(".lazy").lazyload({
    placeholder: "assets/res/genshin-impact/characters/kamisato_ayaka.png", // 用图片提前占位，值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
    effect: "fadeIn", // 载入使用何种效果，effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
    threshold: 200, // 提前开始加载，值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
    // event: 'click',  // 事件触发时才加载，值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
    container: $(".timeline-scroll-x"), // 对某容器中的图片实现效果，值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
    failurelimit: 5, // 图片排序混乱时，值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
});
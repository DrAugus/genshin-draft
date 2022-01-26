import {eleArr} from "./utils";


const showEle = (show) => {
    for (let e of eleArr) {
        if (e === show) $(".show-" + e).removeClass("hide");
        else $(".show-" + e).addClass("hide");
    }
};
const showAll = () => {
    for (let e of eleArr) {
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
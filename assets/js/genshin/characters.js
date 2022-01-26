const showEle = (show) => {
    for (let e of ELEMENT_NAME) {
        if (e === show) $(".show-" + e).removeClass("hide");
        else $(".show-" + e).addClass("hide");
    }
};
const showAll = () => {
    for (let e of ELEMENT_NAME) {
        $(".show-" + e).removeClass("hide");
    }
};
//默认 展示所有
showAll();
for (let e of ELEMENT_NAME) {
    $("#" + e).click(() => {
        showEle(e);
    });
}
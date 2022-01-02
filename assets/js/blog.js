$("#daily").click(() => {
    $(".show-daily").removeClass("hide");
    $(".show-blog").addClass("hide");
});

$("#blog").click(() => {
    $(".show-blog").removeClass("hide");
    $(".show-daily").addClass("hide");
});

//默认 展示blog
$(".show-blog").removeClass("hide");
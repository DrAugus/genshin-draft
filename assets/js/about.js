$(document).ready(function () {
    $(".user-intro h4").removeClass("hide");
    $("#js-rotating").Morphext({
        animation: "flip",
        separator: ",",
        speed: 2000
    });
});


function subtitleType() {
    const typed = new Typed("#subtitle", {
        strings: "占位符," +
            "There is a sweet smell of roses in the air.," +
            "kiss you on the cheek,love at fist sight," +
            "In that minute, Troy had kissed her on the lips," +
            "".split(","),
        startDelay: 300,
        typeSpeed: 150,
        loop: true,
        backSpeed: 50
    });
}

subtitleType();

$(document).ready(function () {
    $(".geopattern").each(function () {
        $(this).geopattern($(this).data("pattern-id"));
    });
});

function toggleForked() {
    if ($(".fork-switch").prop("checked")) {
        $("div[id=forked]").removeClass("hide");
    } else {
        $("div[id=forked]").addClass("hide");
    }
}
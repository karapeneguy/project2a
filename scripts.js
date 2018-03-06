var visibleText = "Show Less"
var hiddenText = "Full Biography"

$(document).ready(function () {
    $(".morebio").click(function () {
        $(this).toggleClass("visible");
        if ($(this).hasClass("visible")) {
            $(this).html(hiddenText);
        }
        else {
            $(this).html(visibleText);
        }
        $(this).next().toggleClass("visible");
    });
})



$(window).scroll(function () {

    var windowScroll = $(window).scrollTop();
    var twoOffset = $("#about").offset().top;

    if (windowScroll > twoOffset) {
        $(".navbar").css("backgroundColor", "rgba(0,0,0,0.8)")
    } else {
        $(".navbar").css("backgroundColor", "rgba(0,0,0,0.1)")


    }

})




$("a").click(function () {
    var aHref = $(this).attr("href");
    var secOff = $(aHref).offset().top;
    $("html,body").animate({
        scrollTop: secOff
    }, 1000, "swing")
})
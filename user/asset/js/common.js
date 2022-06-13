$(document).ready(function() {
    // loading script
    $.fakeLoader({
        timeToHide: 700,
        bgColor: '#2d2d2f',
        spinner: "spinner5"
    });

    $('.carousel').carousel({
        interval: 5000
    });

    // go top button
    btnTop();

    $(document).on('scroll', function() {
        btnTop();
    });

    $(document).on("click", "#goTop", function() {
        $("html,body").animate({
            "scrollTop": "0"
        });
        return false;
    });

    function btnTop() {
        var scrollTop = $('.section-wrap').scrollTop();

        if (scrollTop > 320) {
            $("#goTop").stop().show().animate({
                "opacity": "1"
            }, 300);
        } else {
            $("#goTop").stop().animate({
                "opacity": "0"
            }, 300, function() {
                $("#goTop").hide();
            });
        }
    };
});
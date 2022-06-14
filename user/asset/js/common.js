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
    function btnTop() {
        var scrollTop = $('.section-wrap').scrollTop();
        if (scrollTop > 320) {
            $("#goTop").stop().show().animate({
                opacity: 1
            }, 300);
        } else {
            $("#goTop").stop().animate({
                opacity: 0
            }, 300, function() {
                $("#goTop").hide();
            });
        }
    };

    $('.section-wrap').scroll(function() {
        btnTop();
    });

    $('#goTop').click(function() {
        $('.section-wrap').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});
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
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

    function btnTop() {
        if (!isMobile) {
            //PC
            var scrollTopWeb = $('.container').scrollTop();
            if (scrollTopWeb > 320) {
                $("#goTop").stop().show().animate({
                    opacity: 1
                }, 300);
            } else {
                $("#goTop").stop().animate({
                    opacity: 0
                }, 300, function() {
                    $("#goTop").hide();
                });
            };

            $(".container").scroll(function() {
                btnTop();
            });
        } else {
            //MOBILE
            var scrollTopMobile = $('.section-wrap').scrollTop();
            if (scrollTopMobile > 320) {
                $("#goTop").stop().show().animate({
                    opacity: 1
                }, 300);
            } else {
                $("#goTop").stop().animate({
                    opacity: 0
                }, 300, function() {
                    $("#goTop").hide();
                });
            };

            $(".section-wrap").scroll(function() {
                btnTop();
            });
        };
    };

    if (!isMobile) {
        //PC
        $(".container").scroll(function() {
            btnTop();
        });
    } else {
        //MOBILE
        $(".section-wrap").scroll(function() {
            btnTop();
        });
    };

    $('#goTop').click(function() {
        if (!isMobile) {
            //PC
            $('.container').animate({
                scrollTop: 0
            }, 300);
            return false;
        } else {
            //MOBILE
            $('.section-wrap').animate({
                scrollTop: 0
            }, 300);
            return false;
        };
    });
});
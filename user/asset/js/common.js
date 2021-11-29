$(document).ready(function () {
    // loading script
    $.fakeLoader({
        timeToHide: 700,
        bgColor: '#2d2d2f',
        spinner: "spinner5"
    });
    
    // mobile nav
    $('.ham').click(function () {
        $(this).toggleClass("active");
        $('.mo-nav').toggleClass("active");
    });

    $('.carousel').carousel({
        interval: 5000
    });

    // go top button
    btnTop();

    $(document).on('scroll', function () {
        btnTop();
    });

    $(document).on("click", "#goTop", function () {
        $("html,body").animate({
            "scrollTop": "0"
        });
        return false;
    });

    function btnTop() {
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > 0) {
            $("#goTop").stop().show().animate({
                "opacity": "1"
            }, 300);
            
            $(".write_btn").stop().animate({
                "bottom": "144px"
            }, 300);
        } else {
            $("#goTop").stop().animate({
                "opacity": "0"
            }, 300, function () {
                $("#goTop").hide();
            });
            
            $(".write_btn").stop().animate({
                "bottom": "74px"
            }, 300);
        }
    };    
});
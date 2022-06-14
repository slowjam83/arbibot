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
});
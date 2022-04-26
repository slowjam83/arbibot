$(document).ready(function() {
    /* 셀렉트박스 보이게 하기 */
    $("body").on("click", ".select", function() {
        $(".select-ul").toggle();
    })

    /* 셀렉트 박스 옵션 선택 */
    $("body").on("click", ".select-ul li", function() {
        var text = $(this).html();
        $(".selected-option").html(text);
        $(".select-ul").toggle();
    })

    /* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
    $("body").on("click", function(e) {
        if ($(".select-ul").css("display") == "block") {
            if ($(".select").has(e.target).length == 0) {
                $(".select-ul").hide()
            }
        }

    })
});
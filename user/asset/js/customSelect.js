//selectBox
var body = document.querySelector('body');
var select = document.querySelector(`[data-role="selectBox"]`);
var values = select.querySelector(`[date-value="optValue"]`);
var option = select.querySelector('ul');
var opts = option.querySelectorAll('li');

/* 옵션선택 */
function selectOpt(e) {
    opts.forEach(opt => {
        var innerValue = opt.innerHTML;

        function changeValue(e) {
            values.innerHTML = innerValue;
        }
        opt.addEventListener('click', changeValue)
    });
}

/* 셀렉트영역 클릭 시 옵션 숨기기, 보이기 */
function selects(e) {
    e.stopPropagation();
    option.setAttribute('style', `top:${select.offsetHeight}px`)
    if (option.classList.contains('hide')) {
        option.classList.remove('hide');
        option.classList.add('show');
    } else {
        option.classList.add('hide');
        option.classList.remove('show');
    }
    selectOpt();
}

/* 렌더링 시 옵션의 첫번째 항목 기본 선택 */
/* function selectFirst() {
    var firstValue = opts[0].innerHTML;
    values.innerHTML = `${firstValue}`
} */

/* 옵션밖의 영역(=바디) 클릭 시 옵션 숨김 */
function hideSelect(e) {
    if (option.classList.contains('show')) {
        option.classList.add('hide');
        option.classList.remove('show');
    }
}

// selectFirst();
select.addEventListener('click', selects);
body.addEventListener('click', hideSelect);
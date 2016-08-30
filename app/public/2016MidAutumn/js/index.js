/**
 * @file 2016中秋专题
 * @author yuanyanjun
 */

$(document).ready(function () {
    /**
     * 加载百分比
     */
    var $percent = $('.wrapper-percent');
    var durantion = 10 * 1000;
    var start = new Date().getTime();
    var timer = setInterval(function () {
        var now = new Date().getTime();
        if (now - start > durantion) {
            clearInterval(timer);
            $('.module-loading').hide();
            $('.module-guide').addClass('show');
        }

        var elapse = now - start;
        var percent = Math.floor(elapse / durantion * 100);
        percent = Math.min(percent, 100);
        $percent.html(percent + '%');
    }, 100);

    /**
     * 生成两个整数之间的随机整数
     */
    function rand(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }

    /**
     * 模板
     */
    $('body').append($('#myTemplate').html());
    $('#myTemplate').remove();


    $('.module-guide').on('click', function () {
        console.log('click');
        $(this).remove();
        $('.module-prologue').addClass('show');
    });


    /**
     * iscroll
     */
    var myScroll = new window.IScroll('#wrapper-scroller', {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: 'li'
    });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});

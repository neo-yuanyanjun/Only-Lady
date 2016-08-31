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


    $('.module-guide').on('swipe', function () {
        // $(this).remove();
        $(this).removeClass('show');
        $('.module-prologue').addClass('show');
        setTimeout(function () {
            $('.module-prologue').removeClass('show');
            $('.module-beauty').addClass('show');
        }, 5 * 1000);
    });


    $('.module-beauty .btn-help').on('tap', function () {
        $('.module-beauty').removeClass('show');
        $('.module-cakes').addClass('show');
        myScroll && myScroll.refresh();
    });



    $('.module-cakes .btn-select').on('tap', function () {
        var pageX = myScroll.currentPage.pageX + 1;
        $('.module-cakes').removeClass('show');

        $('.module-detail .wrapper-result img').attr('src', './img/result-' + rand(1, 11) + '.png');
        $('.module-detail .circle img').attr('src', './img/circle-' + pageX + '.png');
        $('.module-detail .ticket-text img').attr('src', './img/ticket-text-' + pageX + '.png');
        $('.module-detail .cake-detail').hide().filter('.cake-detail-' + pageX).show();

        $('.module-detail').addClass('show');
    });


    $('.module-detail .btn-share').on('tap', function () {
        $('.module-share-guide').css({
            width: '100%',
            height: $(document).height()
        }).show();
    });
    $('.module-detail .wrapper-again').on('tap', function () {
        $('.module-detail').removeClass('show');
        $('.module-cakes').addClass('show');
    });


    /**
     * iscroll
     */
    var myScroll = window.myScroll = new window.IScroll('#wrapper-scroller', {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: 'li'
    });
    // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});

function showSuccessDialog() {
    $('.module-share-success').css({
        width: '100%',
        height: $(document).height()
    }).show();

    var timer = setTimeout(function () {
        $('.module-share-success').hide();
        $('.module-detail').removeClass('show');
        $('.module-cover').show();
    }, 1 * 1000);

    $('.module-share-success .btn-close').unbind().on('tap', function () {
        timer && clearInterval(timer);
        $('.module-share-success').hide();
    });
    $('.module-share-success .btn-use').unbind().on('tap', function () {
        timer && clearInterval(timer);
        // 使用优惠券逻辑
    });

    
}
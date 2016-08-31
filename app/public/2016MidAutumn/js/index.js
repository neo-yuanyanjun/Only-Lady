/**
 * @file 2016中秋专题
 * @author yuanyanjun
 */

$(document).ready(function () {
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});

$(window).on('load', function () {
    animateLoading();
    init();
});

function animateLoading() {
    // svg 动画
    var myAnimateMotion = document.getElementById('myAnimateMotion');
    myAnimateMotion.setAttribute('xlink:href', '#character');
    // 月亮动画
    $('.module-loading').addClass('animate');
    // 数字动画
    var $percent = $('.wrapper-percent');
    var durantion = 11 * 1000;
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
}

function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

function init() {
    $('body').append($('#myTemplate').html());
    $('#myTemplate').remove();


    $('.module-guide').on('tap', function () {
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
    $('.module-share-guide').on('tap', function () {
        $(this).hide();
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
}

/**
 * 分享成功回调函数
 */
function shareSuccessCallback() {
    $('.module-detail .wrapper-detail .btn-share').hide();
    $('.module-detail .wrapper-detail .btn-get-coupon')
        .show()
        .off()
        .on('tap', function () {
            // 这里可以写获取优惠券的逻辑
        });
}

/**
 * 领取优惠券成功回调函数
 */
function getCouponSucessCallback() {
    var timer = setTimeout(function () {
        $('.module-get-coupon-success').hide();
        $('.module-detail').removeClass('show');
        $('.module-cover').show();
    }, 10 * 1000);

    $('.module-get-coupon-success').css({
        width: '100%',
        height: $(document).height()
    }).show();

    $('.module-get-coupon-success .btn-close').unbind().on('tap', function () {
        timer && clearInterval(timer);
        $('.module-get-coupon-success').hide();
    });
}

/**
 * 领取优惠券失败回调函数
 */
function getCouponFailCallback() {
    var timer = setTimeout(function () {
        $('.module-get-coupon-fail').hide();
        $('.module-detail').removeClass('show');
        $('.module-cover').show();
    }, 10 * 1000);

    $('.module-get-coupon-fail').css({
        width: '100%',
        height: $(document).height()
    }).show();

    $('.module-get-coupon-fail .btn-close').unbind().on('tap', function () {
        timer && clearInterval(timer);
        $('.module-get-coupon-fail').hide();
    });
}







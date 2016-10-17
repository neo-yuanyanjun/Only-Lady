/**
 * @file 直播页面
 * @author Yuan Yanjun
 */

(function (window) {
    var app = window.app || (window.app = {});

    app.initLivePage_backup = function () {
        $('html, body, .main').css('height', '100%');
        $('.module').hide();
        $('.module-live').show()
            .find('video').attr('src', './img/video.mp4').get(0).play();

        $('.module-live .btn-close').on('tap', function () {
            app.closeLivePage();
        });
    };

    app.closeLivePage_backup = function () {
        $('.module-live video').attr('src', '');
        $('.module').hide();
        $('.module-shares').show();
        $('html, body, .main').css('height', 'auto');
    };

    app.initLivePage = function () {
        var $win = $(window);
        // 华为手机无法重新定位到锚点的bug
        app.windowScrollTop = $win.scrollTop();
        $('.module-live').show().css({
            width: $win.width(),
            height: $win.height()
        }).find('video').attr('src', './img/video.mp4').get(0).play();

        $('body').on('touchmove', window.app.preventScroll);

        $('.module-live .btn-close').on('tap', function () {
            app.closeLivePage();
        });
    };

    app.closeLivePage = function () {
        // 华为手机无法重新定位到锚点的bug
        $(window).scrollTop(app.windowScrollTop);
        $('.module-live').hide();
        $('body').off('touchmove', window.app.preventScroll);
    };
})(window);

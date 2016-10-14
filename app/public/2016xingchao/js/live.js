/**
 * @file 直播页面
 * @author Yuan Yanjun
 */

(function (window) {
    var app = window.app || (window.app = {});

    app.initLivePage = function () {
        $('html, body, .main').css('height', '100%');
        $('.module').hide();
        $('.module-live').show()
            .find('video').attr('src', './img/video.mp4').get(0).play();

        $('.module-live .btn-close').on('tap', function () {
            app.closeLivePage();
        });
    };

    app.closeLivePage = function () {
        $('.module-live video').attr('src', '');
        $('.module').hide();
        $('.module-shares').show();
        $('html, body, .main').css('height', 'auto');
    };
})(window);

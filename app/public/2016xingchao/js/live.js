/**
 * @file 直播页面
 * @author Yuan Yanjun
 */

(function (window) {
    var app = window.app || (window.app = {});

    app.initLivePage_backup = function () {
        $('html, body, .main').css('height', '100%');
        $('.module').hide();
        $('meta[name="viewport"]').remove();
        var width = $(window).width();
        var height = $(window).height();
        $('.module-live').show().html('<iframe width="' + width + '" height="' + height + '" src="http://www.meipai.com/media/582707501" frameborder="0"></iframe>');
    };

    app.initLivePage = function () {
        window.location.href = 'http://www.meipai.com/media/582707501';
    }
})(window);
/**
 * @file 锁屏页面
 *
 * @author Yuan Yanjun
 */

(function (window) {
    // var _ = window._;
    var app = window.app || (window.app = {});

    app.initLockScreenPage = function () {
        $('body').on('swipeUp', swipeUpHandler);

        $('.module-lock-screen').show();

        // TODO 给消息添加动画效果
    };

    function swipeUpHandler(evt) {
        $('.module-lock-screen').hide();
        $('body').off('swipeUp', swipeUpHandler);

        $('.module-unlock-screen').show();
        app.initUnlockScreenPage();
    }

    app.initLockScreenPage();
})(window);

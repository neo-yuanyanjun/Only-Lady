/**
 * @file 2016中秋专题
 * @author Yuan Yanjun
 */

(function (window) {
    var _ = window._;
    var Q = window.Q;
    var app = window.app || (window.app = {});

    app.userInfo = {
        // 从微信获取的用户头像和用户名
        head: 'http://img6.bdstatic.com/img/image/smallpic/chongwu1014.jpg',
        name: '用户名字'
    };

    // 视频直播的地址
    app.liveUrl = 'http://www.meipai.com/media/582707501';
    // 爱奇艺商城的地址
    app.mallIqiyiUrl = 'http://mall.iqiyi.com/kszt/mainPage1025.html';





    app.player = document.getElementById('player');

    app.sendMessageImmediately = function (msgObj, tpl, container, noBgm) {
        !noBgm && app.player.play();
        // 发送消息
        var compiled = _.template(tpl);
        var htmlStr = compiled(msgObj);

        var $container = $(container);
        $container.append(htmlStr);

        var $parent = $container.parent();

        var parentHeight = $parent.height();
        var containerHeight = $container.height();
        if (parentHeight < containerHeight) {
            var transition = 'margin-top 0.4s linear 0s';
            $container.css({
                'transition': transition,
                '-webkit-transition': transition,
                'margin-top': parentHeight - containerHeight + 'px'
            });
        }
    };

    // 发送一条消息，返回一个promise对象
    app.sendMessage = function (msgObj, tpl, container, noBgm/* 是否有背景音乐 */, interval) {
        return Q.Promise(function (resolve, reject, notify) {
            // 每隔两秒插入一条消息
            setTimeout(function () {
                var error = null;
                try {
                    app.sendMessageImmediately(msgObj, tpl, container, noBgm);
                }
                catch (err) {
                    error = err;
                    console.error(err);
                }

                if (!error) {
                    resolve();
                }
                else {
                    reject(error);
                }
            }, interval || 2000);
        });
    };

    // 发送多条消息
    app.sendMessages = function (messages, tpl, container, noBgm, interval) {
        if (!messages || !messages.length) {
            return;
        }

        var promise = app.sendMessage(messages[0], tpl, container, noBgm, interval);

        for (var i = 1, length = messages.length; i < length; i++) {
            promise = promise.then(_.bind(function (index) {
                // 这里一定要记得加 return 语句，否则这个串联 的promise就断了
                return app.sendMessage(messages[index], tpl, container, noBgm, interval);
            }, this, i));
        }

        return promise;
    };

    app.setTitle = function (title) {
        $('head title').html(title);
        document.title = title;
    };

    app.preventScroll = function (evt) {
        evt.preventDefault();
    };
})(window);



$(document).ready(function () {
    $('body').on('touchmove', window.app.preventScroll);


    var hash = window.location.hash;

    if (/shares/.test(hash)) {
        window.app.initSharesPage();
        return;
    }

    switch (window.location.hash) {
        case '#chat':
            window.app.initChatPage();
            break;
        case '#unlock':
            window.app.initUnlockScreenPage();
            break;
        case '#lock':
            window.app.initLockScreenPage();
            break;
        case '#live':
            window.app.initLivePage();
            break;
        default:
            window.app.initLockScreenPage();
    }
});

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
        head: '',
        name: ''
    };

    app.player = document.getElementById('player');

    // 发送一条消息，返回一个promise对象
    app.sendMessage = function (msgObj, tpl, container, noBgm/* 是否有背景音乐 */, interval) {
        return Q.Promise(function(resolve, reject, notify) {
            // 每隔两秒插入一条消息
            setTimeout(function() {
                var error = null;
                try {
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
                        var transition = 'margin-top ' + Math.min(400, interval || 2000) / 1000 + 's linear 0s';
                        $container.css({
                            'transition': transition,
                            '-webkit-transition': transition,
                            'margin-top': parentHeight - containerHeight + 'px'
                        });

                        // var containerEle = $container.get(0);
                        // containerEle.style.WebkitTransition = transition;
                        // containerEle.style.MozTransition = transition;
                        // containerEle.style.transition = transition;
                        // containerEle.style.marginTop = parentHeight - containerHeight + 'px';
                    }
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

        for(var i = 1, length = messages.length; i < length; i++) {
            promise = promise.then(_.bind(function (index) {
                // 这里一定要记得加 return 语句，否则这个串联 的promise就断了
                return app.sendMessage(messages[index], tpl, container, noBgm, interval);
            }, this, i));
        }

        return promise;
    };
})(window);



$(document).ready(function () {
    $('body').on('touchmove', function (evt) {
        evt.preventDefault();
    });

    app.initLockScreenPage();
});

/**
 * @file 锁屏页面
 *
 * @author Yuan Yanjun
 */

(function (window) {
    // var _ = window._;
    var app = window.app || (window.app = {});

    var requests = [
        {
            head: './img/head-zhangqishan.png',
            name: '张大佛爷'
        },
        {
            head: './img/head-eryuehong.png',
            name: '二月红'
        },
        {
            head: './img/head-dalaoshi.png',
            name: '大老师'
        },
        {
            head: './img/head-yuxiaoer.png',
            name: '余小二'
        }
    ];

    // 测试
    // requests = requests.concat(requests);

    var temp = [
        '<div class="request-detail">',
            '<div class="head">',
                '<img src="<%= head %>" alt="">',
            '</div>',
            '<div class="name">',
                '<%= name %>',
            '</div>',
            '<div class="msg">请求添加你为朋友</div>',
        '</div>',
    ].join('');

    app.initLockScreenPage = function () {
        $('.module').hide();
        $('.module-lock-screen').show();

        app.sendMessages(requests, temp, $('.module-lock-screen .requests-list'), false, 1000)
            .then(function () {
                // 在所有好友请求消息显示 500ms 后才能切换到解锁界面
                setTimeout(function () {
                    $('body').on('swipeUp', swipeUpHandler);
                    $('.module-lock-screen .hint-slide-up').addClass('animate-shaking');
                }, 500);
            });
    };

    function swipeUpHandler(evt) {
        $('.module-lock-screen').hide();
        $('body').off('swipeUp', swipeUpHandler);

        $('.module-unlock-screen').show();
        app.initUnlockScreenPage();
    }
})(window);

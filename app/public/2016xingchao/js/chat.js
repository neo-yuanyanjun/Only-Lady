/**
 * @file 聊天页面
 *
 * @author Yuan Yanjun
 */

(function (window) {
    var _ = window._;
    var app = window.app || (window.app = {});

    var chatMessages = [
        {
            head: './img/head-zhangqishan.png',
            message: './img/message-1.gif',
            type: 'image',
            isMyself: false
        },
        {
            head: './img/head-yinxinyue.png',
            message: '佛爷你好帅',
            type: '',
            isMyself: false
        },
        {
            head: './img/head-yinxinyue.png',
            message: './img/message-3.gif',
            type: 'image',
            isMyself: false
        },
        {
            head: './img/head-liudawei.png',
            message: '一言不合就在撩，科科，我也会笑！',
            type: '',
            isMyself: false
        },
        {
            head: './img/head-liudawei.png',
            message: './img/message-5.gif',
            type: 'image',
            isMyself: false
        },
        {
            head: './img/head-liudawei.png',
            message: './img/message-6.png',
            type: 'image',
            isMyself: false
        },
        {
            head: './img/head-jiangmuyan.png',
            message: '<img src="./img/face.png" alt="" />以后干这种事的时候背着点我！',
            type: '',
            isMyself: false
        },
        {
            head: './img/head-eryuehong.png',
            message: '停一下！你们是在虐我这只单身汪？剧终人未散，十年心不改！终于等到你，我要约你！',
            type: '',
            isMyself: false
        },
        {
            head: './img/head-huosanliang.png',
            message: '二爷，你还有我！',
            type: '',
            isMyself: false
        },
        {
            head: './img/head-genggeng.png',
            message: '三娘，一厢情愿，就得愿赌服输。',
            type: '',
            isMyself: false
        },
        {
            head: './img/head-dalaoshi.png',
            message: '您了伸手伸手伸伸手，来10袋牛肉干再约！( ｡ớ ₃ờ)ھ',
            type: '',
            isMyself: false
        },
        {
            head: './img/head-xuelaoshi.png',
            message: '神~经病啊…',
            type: '',
            isMyself: false
        },
        {
            // head: app.userInfo.head,
            head: '',
            message: '约什么？去哪儿约？',
            type: '',
            isMyself: true
        },
        {
            head: './img/head-yuxiaoer.png',
            message: '更多惊喜，快去看看朋友圈！',
            type: '',
            isMyself: false
        }
    ];

    var messageTemplate = [
        '<div class="message-item<%= type=="image" ? " image-message" : "" %><%= isMyself ? " my-message" : "" %> clearfix">',
            '<div class="message-head">',
                '<img src="<%= head %>" alt="">',
            '</div>',
            '<div class="wrapper-message-content clearfix">',
                '<div class="message-hint"></div>',
                '<% if (type != "image") { %>',
                '<div class="message-content">',
                    '<%= message %>',
                '</div>',
                '<% } else { %>',
                '<img src="<%= message %>" alt="" />',
                '<% } %>',
            '</div>',
        '</div>'
    ].join('');

    function init() {
        initUserInfo();
        app.sendMessages(
            chatMessages.slice(0, chatMessages.length - 2),
            messageTemplate,
            $('.module-chat .message-list'),
            false,
            1000
        ).then(function () {
            showKeyBoard();
        });
    }


    function initUserInfo() {
        var myMessages = _.filter(chatMessages, function (msg) {
            return msg.isMyself;
        });
        _.each(myMessages, function (msg) {
            msg.head = app.userInfo.head;
        });
    }

    var $inputArea = $('.module-chat .wrapper-input-area');
    var $typingArea = $('.module-chat .wrapper-typing');
    var $messageListWrapper = $('.module-chat .wrapper-message-list');
    var $messageList = $('.module-chat .message-list');

    function showKeyBoard() {
        $inputArea.hide();
        $typingArea.show();
        $messageListWrapper.css('bottom', $typingArea.height());
        $messageList.css({
            'margin-top': $messageListWrapper.height() - $messageList.height() + 'px'
        });
        startBlink();
        startTyping();
    }

    function hideKeyboard() {
        $inputArea.show();
        $typingArea.hide();
        $messageListWrapper.css('bottom', $inputArea.height());
        $messageList.css({
            'margin-top': $messageListWrapper.height() - $messageList.height() + 'px'
        });
        stopBlink();
    }

    function startTyping() {
        var $typing = $('.module-chat .typing');
        var text = '约什么？去哪儿约？';
        var offset = 0;
        var length = text.length;
        var timer = window.setInterval(function () {
            $typing.html(text.substr(0, ++offset));
            if (offset === length) {
                window.clearInterval(timer);
                typingEndHandler();
            }
        }, 400);
    }


    function typingEndHandler() {
        var $hand = $('.module-chat .wrapper-typing .hand');
        $hand.show().addClass('animate-shaking');
        $hand.on('tap', function () {
            hideKeyboard();
            var $messageList = $('.module-chat .message-list');
            app.sendMessageImmediately(
                chatMessages[chatMessages.length - 2],
                messageTemplate,
                $messageList
            );
            window.setTimeout(function () {
                app.sendMessageImmediately(
                    chatMessages[chatMessages.length - 1],
                    messageTemplate,
                    $messageList
                );
            }, 2000);
            window.setTimeout(function () {
                app.initSharesPage();
            }, 4000);
        });
    }

    var blinkTimer = null;
    function startBlink() {
        var $ele = $('.module-chat .blinking');
        blinkTimer = window.setInterval(function () {
            $ele.toggleClass('hide');
        }, 400);
    }

    function stopBlink() {
        window.clearInterval(blinkTimer);
    }

    app.initChatPage = function () {
        $('.module').hide();
        $('.module-chat').show();
        init();
    };
})(window);

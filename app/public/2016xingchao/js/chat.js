/**
 * @file 聊天页面
 *
 * @author Yuan Yanjun
 */

(function (window) {
    // var _ = window._;
    var app = window.app || (window.app = {});

    var chatMessages = [
        {
            head: './img/head-zhangqishan.png',
            message: './img/message-1.png',
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
            message: './img/message-3.png',
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
            message: './img/message-5.png',
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

    app.initChatPage = function () {
        app.sendMessages(chatMessages, messageTemplate, $('.module-chat .message-list'));
        // TODO 加上用户输入的交互事件
    };
})(window);
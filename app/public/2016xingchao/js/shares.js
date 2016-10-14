/**
 * @file 朋友圈页面
 *
 * @author Yuan Yanjun
 */

(function (window) {
    var _ = window._;
    var app = window.app || (window.app = {});

    var shares = [
        {
            id: 1,
            head: './img/head-zhangqishan.png',
            name: '佛爷',
            text: '我就喜欢大凶！爱奇艺独家定制，勇者无畏，爱我就下单！',
            image: './img/share-img-01.png',
            images: [
                {
                    preview: './img/share-images-pre/01/1.png',
                    detail: './img/share-images/01/1.png'
                },
                {
                    preview: './img/share-images-pre/01/2.png',
                    detail: './img/share-images/01/1.jpg'
                }
            ],
            position: '湖南 . 长沙',
            time: '5分钟前',
            likes: '九爷,八爷,张副官',
            comments: [
                '<span>尹新月</span>: 你考虑过本小姐的感受么？<img src="./img/face-1.png" alt="" />',
                '<span>佛爷</span>回复<span>尹新月</span>: 别淘气！我愿在你面前长跪不起（搓衣板已备好）',
                '<span>八爷</span>: 佛爷，果然有魄力！<img src="./img/face-2.png" alt="" />',
                '<span>张副官</span>: 我表示看不懂…默默点赞',
                '<span>陈皮</span>: 辣到了我的卡姿兰大眼睛',
                '<span>二月红</span>: 这种事就不要拿到朋友圈来说了<img src="./img/face-3.png" alt="" />'
            ]
        },
        {
            id: 2,
            head: './img/head-dalaoshi.png',
            name: '大老师',
            text: '哈喽啊(•͈˽•͈)，大蜜们！大老师同款牛肉干，相当有料！吃起来的feel倍儿爽！',
            image: './img/share-img-02.png',
            position: '湖南.长沙',
            time: '8分钟前',
            likes: '薛老师,鹿不羁',
            comments: [
                '<span>鹿不羁</span>: 放学别走，一起吃肉！',
                '<span>大老师</span>回复<span>鹿不羁</span>: 边“瘫”变吃~',
                '<span>张槑峰</span>: 有鸡腿儿吗？大老师我要吃鸡腿儿啊',
                '<span>Ella</span>回复<span>张槑峰</span>: 什么时候还钱？',
                '<span>张槑峰</span>: 黑人问号脸，我同学都是请我吃鸡腿儿的',
                '<span>Ella</span>回复<span>张槑峰</span>: <img src="./img/face-hint.png" alt="" />'
            ]
        },
        {
            id: 3,
            head: './img/head-lubuji.png',
            name: '鹿不羁',
            text: '大猴我峦！一起上学的小伙伴儿们都在背zhei款书包，我要不要也来一个？',
            image: './img/share-img-03.png',
            position: '',
            time: '15分钟前',
            likes: 'Ella,潘玮柏,大老师,魏晨,薛之谦',
            comments: [
                '<span>大老师</span>: 可以有！',
                '<span>潘帅</span>: 可以有！',
                '<span>薛老师</span>: 你背什么都帅…'
            ]
        },
        {
            id: 4,
            head: './img/head-liudawei.png',
            name: '柳大尉',
            text: '明天要赴约，先安利大家一款自己带盐的面膜<img src="./img/face-4.png" alt="" />然后，请大家帮忙挑挑下面两款戴哪个去约会比较帅？',
            image: './img/share-img-04.png',
            position: '',
            time: '8分钟前',
            likes: '尹明珠,徐大英',
            comments: [
                '<span>姜暮烟</span>: 明天约在几点见？',
                '<span>柳大尉</span>回复<span>姜暮烟</span>: 不了，不如我们现在见吧！',
                '<span>姜暮烟</span>: <img src="./img/face-4.png" alt="" />',
                '<span>徐大英</span>回复<span>柳大尉</span>: 你小子真是恶熏…'
            ]
        },
        {
            id: 5,
            head: './img/head-jiangmuyan.png',
            name: '姜暮烟',
            text: '一会儿要约会，给大家推荐这款粉底和口红，炒鸡好用！简直约会必备神器~',
            image: './img/share-img-05.png',
            position: '',
            time: '50分钟前',
            likes: '李治勋,丹尼尔,李艺花',
            comments: [
                '<span>柳大尉</span>: 你怎样都很美<img src="./img/face-5.png" alt="" />',
                '<span>姜暮烟</span>回复<span>柳大尉</span>: 低调点~么么哒'
            ]
        },
        {
            id: 6,
            head: './img/head-zhiling.png',
            name: '志玲姐姐',
            text: '今天跟西班牙设计师玩的好开心，穿上小彩虹和小马宝莉，萌萌哒。爱奇艺商城有售噢！',
            image: './img/share-img-06.png',
            position: '',
            time: '1小时前',
            likes: '吴昕,何穗,设计师Maria',
            comments: [
                '<span>张俪</span>: 志玲姐姐这期的衣服好美',
                '<span>王丽坤</span>: 志玲姐姐就是行走的衣架~',
                '<span>设计师Maria</span>: 下次还要一起玩！',
                '<span>黄渤</span>: 还是那么美~',
                '<span>志玲姐姐</span>回复<span>黄渤</span>: 谢谢你，我的男神！'
            ]
        },
        {
            id: 7,
            head: './img/head-xiaos.png',
            name: '小S',
            text: '刚看到林志玲在发朋友圈，黄渤居然说她比我美？！<img src="./img/face-6.png" alt="" />气到大姨妈痛…来杯姜茶暖暖身',
            image: './img/share-img-07.png',
            position: '',
            time: '1小时前',
            likes: '刘烨,黄晓明,冯小刚',
            comments: [
                '<span>黄渤</span>: 你也很美！<img src="./img/face-7.png" alt="" />',
                '<span>小S</span>回复<span>黄渤</span>: 不走心的回答姐不需要，你奏凯。',
                '<span>志玲姐姐</span>: <img src="./img/face-8.png" alt="" />一个优雅的女人是不生气的哦！',
                '<span>小S</span>: 点赞的都是几个意思？？？？？'
            ]
        },
        {
            id: 8,
            head: './img/head-haitang.png',
            name: '海棠',
            text: '刚刚在朋友圈买了一个限量款包包，居然发现是假货！<img src="./img/face-9.png" alt="" />',
            image: './img/share-img-08.png',
            position: '',
            time: '1小时前',
            likes: '',
            comments: [
                '<span>陈白露</span>: 富家女的生活真奢侈…还是大红袍泡米饭最适合我',
                '<span>陈言</span>: 像你这么傻的女孩，不骗你骗谁',
                '<span>海棠</span>回复<span>陈白露</span>:  白露，别这么说…',
                '<span>路雯珊</span>:下次去爱奇艺商城买~'
            ]
        },
        {
            id: 9,
            head: './img/head-dalin.png',
            name: '主播大琳',
            text: '我正在直播教你如何化妆，快来围观！',
            image: './img/share-img-09.png',
            position: '',
            time: '2小时前',
            likes: '洛黎kiki,可涵,手边巴黎,陆冠驰,路人甲',
            comments: [
                '<span>i红人圈</span>: 主播美美哒，好多流行又平价的单品，被种草！'
            ]
        },
        {
            id: 10,
            head: './img/head-hongren.png',
            name: 'i红人圈',
            text: '到奇秀、美拍、一直播关注i红人圈，直播红人带你升职加薪，当上总经理，赢取白富美，<img src="./img/face-10.png" alt="" />走上人生巅峰',
            // image: './img/share-img-10.png',
            image: '',
            position: '',
            time: '2小时前',
            likes: '爱奇艺商城',
            comments: [
                '<span>爱奇艺商城</span>: 看完记得来找我下单！'
            ]
        },
        {
            id: 11,
            head: './img/head-yuxiaoer.png',
            name: '余小二',
            text: '《余罪》华丽丽的播放量，都是大家的功劳！感谢大家对小二的支持，小二在此给大家发个红包， 以表感谢，谢谢大家，我会继续努力！<img src="./img/face-11.png" alt="" />',
            image: './img/share-img-11.png',
            position: '',
            time: '2小时前',
            likes: '大胸姐,许平秋,大老师,鹿不羁,潘帅,薛老师,陈白露',
            comments: [
                '<span>姜暮烟</span>: 《太阳的后裔》40亿噢！',
                '<span>佛爷</span>: 《老九门》破百亿了噢！',
                '<span>余小二</span>: 别笑太早，《余罪》可能还有第三季噢！'
            ]
        }
    ];

    shares = shares.slice(0, 1);

    var templateStr = [
        '<div class="share-item clearfix" data-id="<%= id %>">',
            '<div class="head">',
                '<img src="<%= head %>" alt="">',
            '</div>',
            '<div class="details">',
                '<div class="main-name"><%= name %></div>',
                '<div class="wrapper-text">',
                    '<%= text %>',
                '</div>',
                '<div class="wrapper-images clearfix">',
                    '<% for (var i = 0, length = images.length; i < length; i++) { %>',
                    '<img src="<%= images[i].preview %>" data-id="<%= id %>" data-detail="<%= images[i].detail %>"  alt="" />',
                    '<% } %>',
                '</div>',
                '<% if (!!position) { %>',
                '<div class="position"><%= position %></div>',
                '<% } %>',
                '<div class="wrapper-time-opration clearfix">',
                    '<div class="time"><%= time %></div>',
                    '<div class="opration-btn"></div>',
                    '<div class="wrapper-layer">',
                        '<div class="wrapper-btns">',
                            '<div class="btn-like"  data-id="<%= id %>">赞</div>',
                            '<div class="btn-comment">评论</div>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div class="wrapper-likes-comments">',
                    '<% if (likes) { %>',
                    '<div class="likes" data-id="<%= id %>"><%= likes %></div>',
                    '<% } %>',
                    '<div class="comments">',
                        '<% for(var i = 0, length = comments.length; i < length; i++) { %>',
                        '<div class="comment">',
                            '<%= comments[i] %>',
                        '</div>',
                        '<% } %>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    function renderShareLists(sharesList, tpl) {
        var compiled = _.template(tpl);
        var $listContainer = $('.module-shares .shares-list');
        _.each(sharesList, function (shareData) {
            var htmlStr = compiled(shareData);
            $listContainer.append(htmlStr);
        });
    }

    // 点赞功能
    function initLike() {
        $('.opration-btn').on('tap', function (e) {
            e.stopPropagation();
            $(this).siblings('.wrapper-layer').toggleClass('expand');
        });

        $('body').on('tap', function (e) {
            $('.wrapper-layer.expand').removeClass('expand');
        });

        $('.wrapper-btns .btn-like').on('tap', function (e) {
            var likes = (window.localStorage.getItem('likes') || '').split(',');
            var $this = $(this);
            var id = $this.attr('data-id');

            var likesHtml = (_.find(shares, function (shareCon) {
                return shareCon.id === +id;
            }) || {}).likes;

            if (_.contains(likes, id)) {
                likes = _.without(likes, id);
                $this.html('赞');
                $this.parents('.share-item').find('.likes').html(likesHtml);
            }
            else {
                likes = _.union(likes, [id]);
                $this.html('取消');
                $this.parents('.share-item').find('.likes').html(likesHtml + ',' + app.userInfo.name);
            }
            likes = _.uniq(likes);
            likes = _.filter(likes, function (id) {
                return !!id;
            });
            window.localStorage.setItem('likes', likes.join(','));
        });

        // 初始化
        var mylikes = (window.localStorage.getItem('likes') || '').split(',');
        _.each(mylikes, function (id) {
            var html = (_.find(shares, function (shareCon) {
                return shareCon.id === +id;
            }) || {}).likes;
            $('.shares-list .btn-like[data-id="' + id + '"]').html('取消');
            $('.shares-list .likes[data-id="' + id + '"]').html(html + ',' + app.userInfo.name);
        });
    }

    function initImageClick() {
        $('.share-item .wrapper-images img[data-id="' + 9 + '"]').on('tap', function () {
            // TODO 显示直播页面
            // app.initLivePage();
        });
    }

    function initQRcode() {
        $('.share-item[data-id="' + 10 + '"] .wrapper-images').html([
            '<img src="./img/QRcode-1.png" alt="" style="margin-right: 6px;" />',
            '<img src="./img/QRcode-2.png" alt="" />'
        ].join(''));
    }


    function initUserInfo() {
        $('.module-shares .wrapper-bg .name').html(app.userInfo.name);
        $('.module-shares .wrapper-bg .head img').attr('src', app.userInfo.head);
    }

    function initLinks() {
        // 直播
        $('.share-item[data-id="' + 9 + '"] .wrapper-images img')
            .on('tap', function () {
                app.initLivePage();
            });
        // 爱奇艺商城
        $('.share-item[data-id="' + 11 + '"] .wrapper-images img').wrap('<a href="' + app.mallIqiyiUrl + '"></a>');
    }

    function initHash() {
        window.location.hash = 'shares';
    }

    app.initSharesPage = function () {
        initUserInfo();
        renderShareLists(shares, templateStr);

        $('.module').hide();
        $('.module-shares').show();

        $('body').off('touchmove', app.preventScroll);
        // TODO 这里可能会有问题，需要测试兼容性
        $('html, body, .main, .module-shares').css('height', 'auto');

        initLike();

        initImageClick();

        initQRcode();

        initLinks();

        initHash();
    };

})(window);

(function (window) {
    // return;

    function Ball(x, y, radius, borderWidth) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.borderWidth = borderWidth;
    }

    // TODO
    // 把圆也改成svg元素
    Ball.prototype.draw_backup = function (container) {
        var $ball = $('<div>');
        $ball.css({
            position: 'absolute',
            width: this.radius * 2,
            height: this.radius * 2,
            'border-radius': '50%',
            border: this.borderWidth + 'px solid #fff',
            left: this.x - this.radius,
            top: this.y - this.radius
        });
        $ball.appendTo(container);
    }

    Ball.prototype.draw = function (container) {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', this.x);
        circle.setAttribute('cy', this.y);
        circle.setAttribute('r', this.radius);
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', this.borderWidth);
        circle.setAttribute('fill', '#ffffff');
        circle.setAttribute('fill-opacity', 0);
        container.appendChild(circle);
    }

    // 一个背景svg
    // 一个前景svg
    // 用户是在前景svg上划线
    // 用户每次划线时，都清空整个前景svg上的path，更新balls列表，然后重新画
    function linkBalls(balls, svgEle, color) {
        if (!balls || !balls.length) {
            return;
        }
        // debugger;
        // 画中心点
        _.each(balls, function(ball) {
            var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', ball.x);
            circle.setAttribute('cy', ball.y);
            circle.setAttribute('r', 8);
            circle.setAttribute('stroke-width', 0);
            circle.setAttribute('fill', color);
            circle.setAttribute('fill-opacity', 0.4);
            svgEle.appendChild(circle);
        });

        var ball = null;
        var fisrtBall = balls[0];
        var pathData = 'M' + fisrtBall.x + ' ' + fisrtBall.y + ' ';
        var index = 1;
        while (index < balls.length) {
            ball = balls[index];
            pathData += 'L' + ball.x + ' ' + ball.y + ' ';
            index++;
        }
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', 5);
        path.setAttribute('stroke-opacity', 0.4);
        path.setAttribute('fill', 'none');
        svgEle.appendChild(path);
    }


    var balls = [
        new Ball(140,               618 - 150,            58, 5),
        new Ball(140 + 178,         618 - 150,            58, 5),
        new Ball(140 + 178 * 2,     618 - 150,            58, 5),
        new Ball(140,               618 + 178 - 150,      58, 5),
        new Ball(140 + 178,         618 + 178 - 150,      58, 5),
        new Ball(140 + 178 * 2,     618 + 178 - 150,      58, 5),
        new Ball(140,               618 + 178 * 2 - 150,  58, 5),
        new Ball(140 + 178,         618 + 178 * 2 - 150,  58, 5),
        new Ball(140 + 178 * 2,     618 + 178 * 2 - 150,  58, 5)
    ];


    var svgContainer = $('.module-unlock-screen .svg-container')[0];
    // 背景svg
    var bgSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    bgSvg.setAttribute("height",'100%');
    bgSvg.setAttribute("width",'100%');
    svgContainer.appendChild(bgSvg);

    _.each(balls, function (ball) {
        ball.draw(bgSvg);
    });

    // 成功解锁的形状
    var successUnlockBalls = [balls[0], balls[1], balls[2], balls[4], balls[6]];
    linkBalls(successUnlockBalls, bgSvg, '#fff');

    // 前景
    var frSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    frSvg.setAttribute("height",'100%');
    frSvg.setAttribute("width",'100%');
    svgContainer.appendChild(frSvg);

    // 手势触碰到的球
    var touchedBalls = [];
    $('body').on('touchmove', function (evt) {
        var touch = evt.touches[0];
        var pageX = touch.pageX;
        var pageY = touch.pageY;
        var currentBall = _.find(balls, function(ball) {
            return Math.sqrt(Math.pow(ball.x - pageX, 2) + Math.pow(ball.y - pageY, 2)) < ball.radius;
        });
        if (currentBall && !_.contains(touchedBalls, currentBall)) {
            touchedBalls.push(currentBall);
            linkBalls(touchedBalls, frSvg, '#2aff00');
        }
    });

    $('body').on('touchend', function () {
        if (_.isEqual(touchedBalls, successUnlockBalls)) {
            window.alert('解锁成功');
            $(frSvg).addClass('animate-blink');
        }
        else {
            setTimeout(function () {
                clearTouchPath();
            }, 200);
        }
    });

    function clearTouchPath() {
        touchedBalls = [];
        frSvg.innerHTML = '';
    }

})(window);
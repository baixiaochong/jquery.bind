$(function () {
    var
        doc = $(document),
        click = 'click',
        mouseover = 'mouseover',
        mouseout = 'mouseout',
        scroll = 'scroll',

        bindHover = 'bind-hover'; //hover

    function showTab(my, parent) {
        var tits = parent.find('[bind-tab-tit]'),
            actit = 'bind-tab-tit-active',
            actnv = 'bind-tab-nav-active',
            index = tits.index(my);

        tits.removeClass(actit);
        my.addClass(actit);
        parent.find('[bind-tab-nav]').removeClass(actnv).hide().eq(index).addClass(actnv).show();
    }

    doc
    //回顶部
        .On(click, '[bind-gotop]', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    }, 1000)

    //hover加类名
    .on(mouseover, '[bind-hover]', function () {
            $(this).addClass(bindHover);
        })
        .on(mouseout, '[bind-hover]', function () {
            $(this).removeClass(bindHover);
        })

    //点击加类名
    .on(click, '[bind-click]', function () {
        var my = $(this),
            cls = 'bind-click';
        if (my.hasClass(cls)) {
            my.removeClass(cls);
        } else {
            my.addClass(cls);
        }
    })

    // Tab切换
    .on(click, '[bind-tab-tit]', function () {
            var my = $(this),
                parent = my.parents('[bind-tab]');
            showTab(my, parent);
        })
        .on(mouseover, '[bind-tab-tit]', function () {
            var my = $(this),
                parent = my.parents('[bind-tab]'),
                type = parent.attr('bind-tab');

            if (type === mouseover || type === 'hover') {
                showTab(my, parent);
            }
        })

    //弹窗
    .on(click, '[bind-pop-btn]', function () {
            var flag = $(this).attr('bind-pop-btn');
            $('[bind-pop-mask]').show();
            $('[bind-pop-box=' + flag + ']').show();
        })
        .on(click, '[bind-pop-close]', function () {
            var flag = $(this).attr('bind-pop-close');
            $('[bind-pop-mask]').hide();
            $('[bind-pop-box=' + flag + ']').hide();
        });

    //如果input为空，则加到类名："bind-placeholder"


    //datalazy
    $('div[bind-dataLazy]').datalazy();
});
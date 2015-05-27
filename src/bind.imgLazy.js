$(function(){
    var win = $(window);

    watchSrcoll();

    function watchSrcoll() {
        var imgs = $('img[bind-imglazy]');
        if (imgs.length) {
            win.On('load scroll', function(){
                var 
                    winHeight = win.height(),
                    scrollTop = win.scrollTop();
                loadImg(imgs, scrollTop, winHeight);
            }, 400);
        }
    }

    function loadImg(imgs, scrollTop, winHeight) {
        imgs.each(function(){
            var 
                my = $(this),
                imgTop = my.offset().top - 100,
                imgHeight = my.height(),
                imgBottom = imgTop + imgHeight,
                winBottom = scrollTop + winHeight + 100,
                src = my.attr('bind-imglazy'),

                load1 = imgBottom > scrollTop && imgBottom < winBottom,   //图片的底在屏幕区块
                load2 = imgTop > scrollTop && imgTop < winBottom,         //图片的头在屏幕区块
                load3 = imgTop < scrollTop && imgBottom > winBottom;      //图片很大，头在屏幕上方，脚在屏幕下方
    

            //符以上面三个条件之前就加载图片。
            if (load1 || load2 || load3) {
                my.attr('src', src).removeAttr('bind-imglazy');
            }
        });
    }

    //需要延时加载的图，加上自定义属竽bind-imglazy="图片地址"
    $.extend({
        bindImglazy : watchSrcoll
    });
});


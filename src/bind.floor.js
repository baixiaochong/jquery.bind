$(function(){
    var 
        objs = [],
        isRoll = false,
        cls = "bind-floor-curr",
        tits = $('[bind-floor]');

    //初始化存储
    tits.each(function(){
        var 
            my = $(this),
            id = my.attr("bind-floor"),
            nav = $(id);

        nav.each(function(){
            objs.push({
              tit : my,
              nav : $(this)
            });
        });

        //绑定点击事件
        my.on('click', function(){
            isRoll = true;
            tits.removeClass(cls);
            $(this).addClass(cls);

            var top = nav.offset().top + 1;

            $("body, html").stop().animate({scrollTop : top}, 500, function(){
                isRoll = false;
            });
        });
    });

    if (tits.length) {
        $(window).On('load, scroll', function(){

            if (!isRoll) {
                
                var scrollTop = $(window).scrollTop(),
                    currTit = getTit(scrollTop);

                if (currTit) {
                    tits.removeClass(cls);
                    currTit.addClass(cls);
                }
            }
          
        }, 200);
    }

    //根据scrollTop取当前楼层标题
    function getTit(scrollTop) {
        var obj = null;

        $.each(objs, function(index, item){
            var 
                currTit = item.tit,
                currNav =  item.nav,
                currNavTop = currNav.offset().top,
                currNavHeight = currNav.height(),
                currNavFot = currNavTop + currNavHeight;

            if(currNavTop < scrollTop && currNavFot > scrollTop) {
                obj = currTit;
            }
        });

        return obj;
    }
});
;(function(){
    var fixBox = $('[bind-fix]');

    if (fixBox.length) {
        $(window).On('scroll', function(){
            var winTop = $(window).scrollTop();
            fixBox.each(function(){
                fixFunc($(this), winTop);
            });
        }, 50);
    }

    function fixFunc(my, top) {
        var attr = my.attr("bind-fix");      //绑定的属性
        var test = /^[1-9]\d*$/.test(attr);  //#判断他是不是数字
        var fixTop = 0;

        if (test) {
            fixTop = attr;
        } else {
            var reference = $("#" + attr);        //参照物
            fixTop = ireference.length &&reference.offset().top;
        }

        if (top > fixTop) {
            my.addClass('bind-fix');
        } else {
            my.removeClass('bind-fix');
        }
    }

}());
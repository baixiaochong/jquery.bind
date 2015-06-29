$(function () {

    //如果input为空， 则加到类名： "bind-placeholder"
    var placeholder = function (my) {
        var className = "bind-placeholder";
        if (my.val()) {
            my.removeClass(className);
        } else {
            my.addClass(className);
        }
    };

    $('body').on('blur keyup', '[bind-placeholder]', function () {
        placeholder($(this));
    });

    $("[bind-placeholder]").each(function () {
        placeholder($(this));
    });

});
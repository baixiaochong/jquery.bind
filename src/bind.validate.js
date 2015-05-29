$(function(){


    $(document).on('blur', '[bind-validate]', function(){
        var 
            my = $(this),
            value = my.val(),
            rule = my.attr('bind-validate'),
            canNull = my.attr('bind-validate-null'),
            unit = my.parents('[bind-validate-unit]'),
            ok = unit.find('[bind-validate-ok]'),
            error = unit.find('[bind-validate-error]');

        ok.hide();
        error.hide();

        if(canNull === undefined) {
            //必填
            validate();
        } else {
            //有值才验证
            if (value) {
                validate();
            }
        }

        function validate() {
            var zz = $.getRegExp(rule) || new RegExp(rule);
            var test = $.testRegExp(zz, value);
            
            if(test) {
                my.removeClass('bind-validate-error-input');
                ok.show().addClass('bind-validate-ok');
            } else {
                my.addClass('bind-validate-error-input');
                error.show().addClass('bind-validate-error');
            } 
        }

        
    });

    $(document).on('submit', '[bind-validate-form]', function(){
            console.log('submit');
            return false;

    });
});
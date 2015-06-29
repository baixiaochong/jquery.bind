$(function(){
    /*
     * 验证
     * @return {[type]} [description]
     */
    function _validate(my, val, zz) {
        var unit = my.parents('[bind-validate-unit]');
        var ok = unit.find('[bind-validate-ok]');
        var error = unit.find('[bind-validate-error]');
        var test = $.testRegExp(zz, val);

        ok.hide();
        error.hide();

        if(test) {
            my.removeClass('bind-validate-error-input');
            ok.show().addClass('bind-validate-ok');
            return true;
        } else {
            my.addClass('bind-validate-error-input');
            error.show().addClass('bind-validate-error');
            return false;
        } 
    }

    function _bindValidate(obj) {
        var my = obj,
            val = my.val(),
            rule = my.attr('bind-validate'),
            canNull = my.attr('bind-validate-null'),
            zz = $.getRegExp(rule) || new RegExp(rule);

        if(canNull === undefined) {
            //必填
            return _validate(my, val, zz);
        } else {
            //有值才验证
            if (val) {
                return _validate(my, val, zz);
            }
        }
    }

    function _bindValidateRepeat(obj) {
        var 
            my = obj,
            value = my.val(),
            czid = my.attr('bind-validate-repeat'),
            czinput = $(czid),
            zz = new RegExp('^' + czinput.val() + '$');

        return _validate(my, value, zz);
    }

    function _submit() {
        var flag = true;
        $('[bind-validate]').each(function(){
            flag =  flag && _bindValidate( $(this) );
        });

        $('[bind-validate-repeat]').each(function(){
            flag =  flag && _bindValidateRepeat( $(this) );
        });
        return flag;
    }


    var cb = $.Callbacks();
    window.bind = window.bind || {};

    window.bind.validate = {};

    bind.validate.beforeSubmit = function(fn) {
        cb.add(fn);


        console.log(fn);
    };

    $(document)
        .on('blur', '[bind-validate]', function(){
            _bindValidate( $(this) );

        })
        .on('blur', '[bind-validate-repeat]', function(){
            _bindValidateRepeat( $(this) );
        })
        .on('click', '[bind-validate-submit]', function(){
            if (_submit()) {
                cb.fire();
                return false;
            } else {
                return false;
            }

        })
        .on('submit', '[bind-validate-form]', function(){
            if (_submit()) {
                cb.fire();
                return false;
            } else {
                return false;
            }
        });
});
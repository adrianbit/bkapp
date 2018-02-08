'use strict';

app.prestamoView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('prestamoView');

// START_CUSTOM_CODE_prestamoView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function showDetail2(id){
    $('#'+id).hideShowCuenta2(id);
    $('#'+id).animateCss('fadeInDown');
    $('#cuentaRow'+id).animateCss('pulse');
    return false;
    //$('#cuentaRow'+id).addClass('animated pulse');
}

$.fn.extend({
    hideShowCuenta2: function (id,pre,post) {
        if (this.css("display") == "none") {
            $('.detalleTarjeta').hide('');
            $('#flecha'+id).addClass("rotateImg");
            $(this).show();
        } else {
            $('.detalleTarjeta').hide();
            $('#flecha'+id).removeClass("rotateImg");
            //$('.detalleTarjeta').animateCss('bounceOutDown', function(){  });
        }
        return this;
    }
});
// END_CUSTOM_CODE_prestamoView
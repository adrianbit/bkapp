'use strict';

app.cuentasView = kendo.observable({
    onShow: function() { $('.detalleTarjeta').hide(); },
    afterShow: function() {}
});
app.localization.registerView('cuentasView');

// START_CUSTOM_CODE_cuentasView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function showDetail(id){
    $('#'+id).hideShowCuenta();
    $('#'+id).animateCss('fadeInDown');
    $('#cuentaRow'+id).animateCss('pulse');
    return false;
    //$('#cuentaRow'+id).addClass('animated pulse');
}

$.fn.extend({
    hideShowCuenta: function (pre,post) {
        if (this.css("display") == "none") {
            $('.detalleTarjeta').hide('');
            $(this).show();
        } else {
            $('.detalleTarjeta').animateCss('bounceOutDown', function(){ $('.detalleTarjeta').hide(); });
        }
        return this;
    }
});
// END_CUSTOM_CODE_cuentasView
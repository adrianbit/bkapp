'use strict';

app.tarjetasView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('tarjetasView');

// START_CUSTOM_CODE_tarjetasView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function arrowShow(){
    $(".arrowShow").show('');
    $('.arrowShow').animateCss('bounceInDown');
}

function dotsMenu(id){
    $(".botones").hide();
    $(".botones"+id).show('');
    $('.botones'+id).animateCss('bounceInRight');
}
// END_CUSTOM_CODE_tarjetasView
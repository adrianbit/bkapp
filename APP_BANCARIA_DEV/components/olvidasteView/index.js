'use strict';

app.olvidasteView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('olvidasteView');

// START_CUSTOM_CODE_olvidasteView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function reestablecer(){
    $('#pagarBtn').animateCss('pulse');
    $('#pagoResponse').show();
    $('#pagoResponse').animateCss('zoomIn');
}

// END_CUSTOM_CODE_olvidasteView
'use strict';

app.pagosView = kendo.observable({
    onShow: function() {},
    afterShow: function() { initTimelines(); }
});
app.localization.registerView('pagosView');

// START_CUSTOM_CODE_pagosView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function pagar(){
    $('#commonBtn').animateCss('pulse');
    $('#pagoResponse').show();
    $('#pagoResponse').animateCss('zoomIn');
}

function cerrarPagoRespuesta(){
    $('#pagoResponse').animateCss('zoomOut',function(){ $('#pagoResponse').hide(); });
}

// END_CUSTOM_CODE_pagosView
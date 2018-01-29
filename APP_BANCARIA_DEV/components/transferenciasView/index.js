'use strict';

app.transferenciasView = kendo.observable({
    onShow: function() {},
    afterShow: function() { setInterval(function(){animateTarjetas();},3000);}
});
app.localization.registerView('transferenciasView');

// START_CUSTOM_CODE_transferenciasView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function transferir(){
    $('#transferirBtn').animateCss('pulse');
    $('#transferirResponse').show();
    $('#transferirResponse').animateCss('zoomIn');
}

function cerrarTransferirRespuesta(){
    $('#transferirResponse').animateCss('zoomOut',function(){ $('#transferirResponse').hide(); });
}

function animateTarjetas(){
    $('.flecha').animateCss('pulse');
}

// END_CUSTOM_CODE_transferenciasView
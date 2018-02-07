'use strict';

app.transferenciasView = kendo.observable({
    onShow: function() {},
    afterShow: function() { setInterval(function(){animateTarjetas();},3000);}
});
app.localization.registerView('transferenciasView');

// START_CUSTOM_CODE_transferenciasView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function propia(){
    $(".tiempos").removeClass("active");
    $("#btnPropia").addClass("active");
    $(".formulario").hide();
    $("#formPropia").show();
    $('#formPropia').animateCss('pulse');
}

function terceros(){
    $(".tiempos").removeClass("active");
    $("#btnTercero").addClass("active");
    $(".formulario").hide();
    $("#formTercero").show();
    $('#formTercero').animateCss('pulse');
}

function ach(){
    $(".tiempos").removeClass("active");
    $("#btnAch").addClass("active");
    $(".formulario").hide();
    $("#formAch").show();
    $('#formAch').animateCss('pulse');
}

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
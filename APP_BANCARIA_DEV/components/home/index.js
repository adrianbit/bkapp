'use strict';

app.home = kendo.observable({
    onShow: function() {
        goto("components/loginView/view.html");
        css(); 
        var video = document.getElementById("video-background");
        video.play();
    },
    afterShow: function() { 
        setTimeout(function(){ animate(); }, 2700);
    }
});
app.localization.registerView('home');

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function css(){
    var wh = $(window).height()+1;
    var ww = $(window).width()+1;
    $("#video-background").css({'width':(ww+'px'),'height':((wh+45)+'px')});
    //$(".botonIngresar").css({'bottom':('-'+wh+'px')});
}

function animate(){
    $('#botonIngresar').show();
    $('#botonIngresar').addClass('animated zoomInDown');
    $('#formUser').show();
    $('#formUser').addClass('animated zoomInDown');
}
// END_CUSTOM_CODE_home
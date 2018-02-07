'use strict';

app.loginView = kendo.observable({
    onShow: function() { cssLogin(); },
    afterShow: function() {}
});
app.localization.registerView('loginView');

// START_CUSTOM_CODE_loginView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function cssLogin(){
    var wh = $(window).height()+1;
    var ww = $(window).width()+1;

    if (deviceType=="iPad"||deviceType=="iPhone")
        $(".botonIngresar2").css({'bottom':('-'+(wh+20)+'px')});
    else
        $(".botonIngresar2").css({'bottom':'-20px'});
}

function animateLogin(){

}

// END_CUSTOM_CODE_loginView
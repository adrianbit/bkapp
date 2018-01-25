'use strict';

app.menuView = kendo.observable({
    onShow: function() { cssMenu(); animateMenu(); },
    afterShow: function() {  }
});
app.localization.registerView('menuView');

// START_CUSTOM_CODE_menuView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function selectMenu(view,e){
    $('#'+e.id).animateCss('pulse',function(){ goto(view); });
}

function cssMenu(){
    var wh = $(window).height()+1;
    var ww = $(window).width()+1;
    $("#menuGrid").css({'height':((wh+20)+'px')});
}

function animateMenu(){
    $('#menuPrincipal').show();
    $('#menuPrincipal').animateCss('zoomIn');
}

// END_CUSTOM_CODE_menuView
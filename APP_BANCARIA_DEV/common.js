$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

function gotoMenu(view){
    app.mobileApp.navigate(view);
}

function inspect(obj) {
	var msg = '';
	for ( var property in obj) {
		if (typeof obj[property] == 'function') {
			var inicio = obj[property].toString().indexOf('function');
			var fin = obj[property].toString().indexOf(')') + 1;
			var propertyValue = obj[property].toString().substring(inicio, fin);
			msg += (typeof obj[property]) + ' ' + property + ' : ' + propertyValue + ' ;\n';
		} else if (typeof obj[property] == 'unknown') {
			msg += 'unknown ' + property + ' : unknown ;\n';
		} else {
			msg += (typeof obj[property]) + ' ' + property + ' : ' + obj[property] + ' ;\n';
		}
	}
	console.log("Inspect : \n" + msg);
	return msg;
}
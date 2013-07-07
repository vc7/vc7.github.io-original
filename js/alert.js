var bootstrap_alert = function() {}

bootstrap_alert.warning = function(message) {
	$('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}

bootstrap_alert.error = function(message) {
	$('#alert_placeholder').html('<div class="alert alert-error"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}

bootstrap_alert.success = function(message) {
	$('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}

bootstrap_alert.info = function(message) {
	$('#alert_placeholder').html('<div class="alert alert-info"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}
$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-graphs').hide();
	$('#container-data-graphs').hide();
	$('.container-summary-graphs').show();
}

function showVisualisation() {
	$('#container-data-graphs').hide();
	$('.container-summary-graphs').hide();
	$('#container-visualisation-graphs').show();
}
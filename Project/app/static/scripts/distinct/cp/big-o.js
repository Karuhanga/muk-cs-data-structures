$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-big-o').hide();
	$('#container-data-big-o').hide();
	$('.container-summary-big-o').show();
}

function showVisualisation() {
	$('#container-data-big-o').hide();
	$('.container-summary-big-o').hide();
	$('#container-visualisation-big-o').show();
}
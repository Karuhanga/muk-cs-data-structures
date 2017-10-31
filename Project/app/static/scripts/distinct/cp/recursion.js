$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-recursion').hide();
	$('#container-data-recursion').hide();
	$('.container-summary-recursion').show();
}

function showVisualisation() {
	$('#container-data-recursion').hide();
	$('.container-summary-recursion').hide();
	$('#container-visualisation-recursion').show();
}
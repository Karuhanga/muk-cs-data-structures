$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-arrays').hide();
	$('#container-data-arrays').hide();
	$('.container-summary-arrays').show();
}

function showVisualisation() {
	$('#container-data-arrays').hide();
	$('.container-summary-arrays').hide();
	$('#container-visualisation-arrays').show();
}
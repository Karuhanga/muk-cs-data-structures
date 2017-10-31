$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-trees').hide();
	$('#container-data-trees').hide();
	$('.container-summary-trees').show();
}

function showVisualisation() {
	$('#container-data-trees').hide();
	$('.container-summary-trees').hide();
	$('#container-visualisation-trees').show();
}
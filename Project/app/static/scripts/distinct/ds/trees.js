$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-trees').hide();
	$('#container-data-trees').hide();
	$('.container-summary-trees').show();
	hideControls();
}

function showVisualisation() {
	$('#container-data-trees').hide();
	$('.container-summary-trees').hide();
	$('#container-visualisation-trees').show();
	showControls();
}
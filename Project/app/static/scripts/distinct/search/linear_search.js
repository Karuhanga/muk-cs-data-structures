$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-linear_search').hide();
	$('#container-data-linear_search').hide();
	$('.container-summary-linear_search').show();
	hideControls();
}

function showVisualisation() {
	$('#container-data-linear_search').hide();
	$('.container-summary-linear_search').hide();
	$('#container-visualisation-linear_search').show();
	showControls();
}
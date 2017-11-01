$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-binary_search').hide();
	$('#container-data-binary_search').hide();
	$('.container-summary-binary_search').show();
	hideControls();
}

function showVisualisation() {
	$('#container-data-binary_search').hide();
	$('.container-summary-binary_search').hide();
	$('#container-visualisation-binary_search').show();
	showControls();
}
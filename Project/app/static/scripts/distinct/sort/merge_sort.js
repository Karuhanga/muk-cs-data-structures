$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-merge_sort').hide();
	$('#container-data-merge_sort').hide();
	$('.container-summary-merge_sort').show();
	hideControls();
}

function showVisualisation() {
	$('#container-data-merge_sort').hide();
	$('.container-summary-merge_sort').hide();
	$('#container-visualisation-merge_sort').show();
	showControls();
}
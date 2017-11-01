$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-insertion_sort').hide();
	$('#container-data-insertion_sort').hide();
	$('.container-summary-insertion_sort').show();
	hideControls();
}

function showVisualisation() {
	$('#container-data-insertion_sort').hide();
	$('.container-summary-insertion_sort').hide();
	$('#container-visualisation-insertion_sort').show();
	showControls();
}
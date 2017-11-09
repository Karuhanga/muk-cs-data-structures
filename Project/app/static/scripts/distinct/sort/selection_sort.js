$(document).ready(function (){
	showSummary();
})

function showSummary() {
	pause();
	$('#container-visualisation-selection_sort').hide();
	$('#container-data-selection_sort').hide();
	$('.container-summary-selection_sort').show();
}

function showVisualisation() {
	$('#container-data-selection_sort').hide();
	$('.container-summary-selection_sort').hide();
	$('#container-visualisation-selection_sort').show();
}
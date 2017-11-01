$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-bubble_sort').hide();
	$('#container-data-bubble_sort').hide();
	$('.container-summary-bubble_sort').show();
	hideControls();
}

function showVisualisation() {
	$('#container-data-bubble_sort').hide();
	$('.container-summary-bubble_sort').hide();
	$('#container-visualisation-bubble_sort').show();
	showControls();
}
$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-quick_sort').hide();
	$('#container-data-quick_sort').hide();
	$('.container-summary-quick_sort').show();
}

function showVisualisation() {
	$('#container-data-quick_sort').hide();
	$('.container-summary-quick_sort').hide();
	$('#container-visualisation-quick_sort').show();
}
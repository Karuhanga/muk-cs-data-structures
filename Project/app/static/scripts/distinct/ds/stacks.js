$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-stacks').hide();
	$('#container-data-stacks').hide();
	$('.container-summary-stacks').show();
	hideControls();
}

function showVisualisation() {
	$('#container-data-stacks').hide();
	$('.container-summary-stacks').hide();
	$('#container-visualisation-stacks').show();
	showControls();
}
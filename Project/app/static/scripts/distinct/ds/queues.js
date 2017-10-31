$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-queues').hide();
	$('#container-data-queues').hide();
	$('.container-summary-queues').show();
}

function showVisualisation() {
	$('#container-data-queues').hide();
	$('.container-summary-queues').hide();
	$('#container-visualisation-queues').show();
}
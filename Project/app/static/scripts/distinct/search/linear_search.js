$(document).ready(function (){
	showSummary();
	initialize();
})

function showSummary() {
	$('#container-visualisation-linear_search').hide();
	$('#container-data-linear_search').hide();
	$('.container-summary-linear_search').show();
}

function showVisualisation() {
	$('#container-data-linear_search').hide();
	$('.container-summary-linear_search').hide();
	$('#container-visualisation-linear_search').show();
}

function initialize() {
	$('#btn_linear_search').bind('click', function () {
		search();
	});
}

var POSITION= [0,0];
var SEARCH_ITEM= 0;
var index= 0;
var TIMER= 0;

var ELEMENTS= [2, 18, 3, 10, 17, 14, 12, 7, 11, 8, 4, 13, 16, 19, 15, 5];

var ANIMATIONS= [

];

function right() {
	POSITION[0]++;
	anime({
		targets: "#wrapper_linear_search",
		translateX: POSITION[0]*34,
		translateY: POSITION[1]*-300,
		duration: TIME_VERY_VERY_LONG
	});
}

function down() {
	POSITION[1]--;
	anime({
		targets: "#wrapper_linear_search",
		translateX: POSITION[0]*34,
		translateY: POSITION[1]*-300,
		duration: TIME_LONG
	});
}

function search() {
	index= 0;
	clearInterval(TIMER);
	SEARCH_ITEM= parseInt($('#number_linear_search').val());
	if (SEARCH_ITEM.toString()=="NaN") {
		toast("Please provide a search term!")
		return;
	}
	restart();
	down();
	setTimeout(right, 100);
	setTimeout(function(){
		colorize("#shape_linear_search", "red");
	}, 300);

	TIMER= setInterval(searchAction, 1500);

}

function colorize(element, color) {
	$(element).attr('fill', color);
}

function restart() {
	POSITION= [0,0];
	shadeAll();
	colorize("#shape_linear_search", "#E0F2F1");
}

function toID(element) {
	return "#shape_linear_search_"+element.toString();
}

function toast(notif) {
	Materialize.toast(notif, TIME_VERY_LONG, 'left');
}

function shadeAll() {
	ELEMENTS.forEach(function(element) {
		colorize(toID(element), '#B2DFDB');
	}, this);
}

function searchAction() {
	if (index==ELEMENTS.length) {
		clearInterval(TIMER);
		toast("The number "+SEARCH_ITEM.toString()+" is not in the list!");
		return;
	}

	var element = ELEMENTS[index];
	if (element==SEARCH_ITEM) {
		colorize(toID(element), "green");
		toast("Found!");
		clearInterval(TIMER);
		return;
	}
	else{
		colorize(toID(element), "red");
		toast("Moving on!");
		right();
	}
	index++;
}
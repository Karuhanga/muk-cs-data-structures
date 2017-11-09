$(document).ready(function (){
	showSummary();
	initialize();
})

function showSummary() {
	$('#container-visualisation-insertion_sort').hide();
	$('#container-data-insertion_sort').hide();
	$('.container-summary-insertion_sort').show();
	hideControls();
	pause();
}

function showVisualisation() {
	pause();
	$('#container-data-insertion_sort').hide();
	$('.container-summary-insertion_sort').hide();
	$('#container-visualisation-insertion_sort').show();
	showControls();
	restart();
}

function initialize() {
	$('#play').bind('click', function () {
		play();
	});

	$('#stop').bind('click', function () {
		pause();
	});

	$('#restart').bind('click', function () {
		restart();
		setTimeout(play, 500);
	});
}

var LEFT= 100;
var RIGHT= 200;
var UP= 300;
var DOWN= 400;
var NONE= 0;

var SHADE= -1000;

var ELEMENTS= [2, 18, 3, 10, 17, 14, 12, 7, 11, 8, 4, 13, 16, 19, 15, 5];

var ABSOLUTE_POSITIONS= {
	2: [0,0],
	18: [0,0],
	3: [0,0],
	10: [0,0],
	17: [0,0],
	14: [0,0],
	12: [0,0],
	7: [0,0],
	11: [0,0],
	8: [0,0],
	4: [0,0],
	13: [0,0],
	16: [0,0],
	19: [0,0],
	15: [0,0],
	5: [0,0]
}

function base_positions() {
	ABSOLUTE_POSITIONS= {
		2: [0,0],
		18: [0,0],
		3: [0,0],
		10: [0,0],
		17: [0,0],
		14: [0,0],
		12: [0,0],
		7: [0,0],
		11: [0,0],
		8: [0,0],
		4: [0,0],
		13: [0,0],
		16: [0,0],
		19: [0,0],
		15: [0,0],
		5: [0,0]
	};
}

var INDEX= 0;
var TIMER= 0;

var ACTION_QUEUE= [
	[[2, DOWN]],
	[[2, UP]],
	[SHADE, 2],

	[[18, DOWN]],
	[[18, LEFT]],
	[[18, RIGHT]],
	[[18, UP]],
	[SHADE, 18],

	[[3, DOWN]],
	[[3, LEFT], [18, RIGHT]],
	[[3, UP]],
	[SHADE, 3],

	[[10, DOWN]],
	[[10, LEFT], [18, RIGHT]],
	[[10, UP]],
	[SHADE, 10],

	[[17, DOWN]],
	[[17, LEFT], [18, RIGHT]],
	[[17, UP]],
	[SHADE, 17],

	[[14, DOWN]],
	[[14, LEFT], [18, RIGHT]],
	[[14, LEFT], [17, RIGHT]],
	[[14, UP]],
	[SHADE, 14],

	[[12, DOWN]],
	[[12, LEFT], [18, RIGHT]],
	[[12, LEFT], [17, RIGHT]],
	[[12, LEFT], [14, RIGHT]],
	[[12, UP]],
	[SHADE, 12],

	[[7, DOWN]],
	[[7, LEFT], [18, RIGHT]],
	[[7, LEFT], [17, RIGHT]],
	[[7, LEFT], [14, RIGHT]],
	[[7, LEFT], [12, RIGHT]],
	[[7, LEFT], [10, RIGHT]],
	[[7, UP]],
	[SHADE, 7],

	[[11, DOWN]],
	[[11, LEFT], [18, RIGHT]],
	[[11, LEFT], [17, RIGHT]],
	[[11, LEFT], [14, RIGHT]],
	[[11, LEFT], [12, RIGHT]],
	[[11, UP]],
	[SHADE, 11],

	[[8, DOWN]],
	[[18, RIGHT], [8, LEFT]],
	[[17, RIGHT], [8, LEFT]],
	[[14, RIGHT], [8, LEFT]],
	[[12, RIGHT], [8, LEFT]],
	[[11, RIGHT], [8, LEFT]],
	[[10, RIGHT], [8, LEFT]],
	[[8, UP]],
	[SHADE, 8],

	[[4, DOWN]],
	[[18, RIGHT], [4, LEFT]],
	[[17, RIGHT], [4, LEFT]],
	[[14, RIGHT], [4, LEFT]],
	[[12, RIGHT], [4, LEFT]],
	[[11, RIGHT], [4, LEFT]],
	[[10, RIGHT], [4, LEFT]],
	[[8, RIGHT], [4, LEFT]],
	[[7, RIGHT], [4, LEFT]],
	[[4, UP]],
	[SHADE, 4],

	[[13, DOWN]],
	[[18, RIGHT], [13, LEFT]],
	[[17, RIGHT], [13, LEFT]],
	[[14, RIGHT], [13, LEFT]],
	[[13, UP]],
	[SHADE, 13],

	[[16, DOWN]],
	[[18, RIGHT], [16, LEFT]],
	[[17, RIGHT], [16, LEFT]],
	[[16, UP]],
	[SHADE, 16],

	[[19, DOWN]],
	[[19, LEFT]],
	[[19, RIGHT]],
	[[19, UP]],
	[SHADE, 19],

	[[15, DOWN]],
	[[19, RIGHT], [15, LEFT]],
	[[18, RIGHT], [15, LEFT]],
	[[17, RIGHT], [15, LEFT]],
	[[16, RIGHT], [15, LEFT]],
	[[15, UP]],
	[SHADE, 15],

	[[5, DOWN]],
	[[19, RIGHT], [5, LEFT]],
	[[18, RIGHT], [5, LEFT]],
	[[17, RIGHT], [5, LEFT]],
	[[16, RIGHT], [5, LEFT]],
	[[15, RIGHT], [5, LEFT]],
	[[14, RIGHT], [5, LEFT]],
	[[13, RIGHT], [5, LEFT]],
	[[12, RIGHT], [5, LEFT]],
	[[11, RIGHT], [5, LEFT]],
	[[10, RIGHT], [5, LEFT]],
	[[8, RIGHT], [5, LEFT]],
	[[7, RIGHT], [5, LEFT]],
	[[5, UP]],
	[SHADE, 5],
];

function toID(element) {
	return "#shape_insertion_sort_"+element.toString();
}

function toWrapper(element) {
	return "#wrapper_insertion_sort_"+element.toString();
}

function move(element, direction) {
	if (direction==LEFT || direction==RIGHT) {
		direction= (direction==LEFT)? -1:1;
		ABSOLUTE_POSITIONS[element][0]+=direction;
	}
	else if (direction==NONE){
		ABSOLUTE_POSITIONS[element][0]+=NONE;
	}
	else{
		direction= (direction==DOWN)? -1:1;
		ABSOLUTE_POSITIONS[element][1]+=direction;
	}
	anime({
		targets: toWrapper(element),
		translateX: ABSOLUTE_POSITIONS[element][0]*34,
		translateY: ABSOLUTE_POSITIONS[element][1]*-300,
		duration: TIME_VERY_VERY_VERY_LONG
	});
}

function restart() {
	pause();
	INDEX= 0;
	base_positions();
	ELEMENTS.forEach(function(element) {
		move(element, NONE);
	}, this);

	shadeAll();
}

function nextMove() {
	if (ACTION_QUEUE[INDEX][0]==SHADE) {
		colorize(ACTION_QUEUE[INDEX][1], "green");
	}
	else{
		ACTION_QUEUE[INDEX].forEach(function(element) {
			move(element[0], element[1]);
		}, this);
	}

	INDEX++;
	if (INDEX==ACTION_QUEUE.length) {
		restart();
	}
}

function play() {
	toast("Sorting...");
	pause();
	TIMER= setInterval(nextMove, TIME_VERY_LONG);
}

function pause() {
	clearInterval(TIMER);
}

function shadeAll() {
	ELEMENTS.forEach(function(element) {
		colorize(element, '#B2DFDB');
	}, this);
}

function colorize(element, color) {
	$(toID(element)).attr('fill', color);
}

function toast(notif) {
	Materialize.toast(notif, TIME_VERY_LONG, 'left');
}
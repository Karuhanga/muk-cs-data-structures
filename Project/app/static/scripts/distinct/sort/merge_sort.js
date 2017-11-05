$(document).ready(function (){
	showSummary();
	initialize();
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

function initialize() {
	$('#play').bind('click', function () {
		play();
	});

	$('#stop').bind('click', function () {
		pause();
	});
}

var INDEX= 0;
var TIMER= 0;
var ELEMENTS= 			[[2, 18, 3, 10, 17, 14, 12, 7, 11, 8, 4, 13, 16, 19, 15, 5]];
var ELEMENTS_HALF=		[[2, 18, 3, 10, 17, 14, 12, 7], [11, 8, 4, 13, 16, 19, 15, 5]];
var ELEMENTS_QUARTER= 	[[2, 18, 3, 10], [17, 14, 12, 7], [11, 8, 4, 13], [16, 19, 15, 5]];
var ELEMENTS_EIGHTH=	[[2, 18], [3, 10], [17, 14], [12, 7], [11, 8], [4, 13], [16, 19], [15, 5]];
var ELEMENTS_SIXTEENTH=	[[2], [18], [3], [10], [17], [14], [12], [7], [11], [8], [4], [13], [16], [19], [15], [5]];

var NOTIFS=[
	"Sorting lists of size 1",
	"Merging lists of size 1",
	"Sorting lists of size 2",
	"Merging lists of size 2",
	"Sorting lists of size 4",
	"Merging lists of size 4",
	"Sorting lists of size 8",
	"Merging lists of size 8",
	"Sorting list of size 16",
	"Merging list of size 16"
]
var TRANSLATIONS= {
2: [[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,0]],
18:[[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[2,0],
	[2,1],
	[6,0],
	[6,1],
	[13,0],
	[0,0]],
3:[[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[-1,0],
	[-1,1],
	[-1,0],
	[-1,1],
	[-1,0],
	[0,0]],
10:[[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[-1,0],
	[-1,1],
	[0,0],
	[0,1],
	[3,0],
	[0,0]],
17:[[0,1],
	[0,0],
	[0,1],
	[1,0],
	[1,1],
	[3,0],
	[3,1],
	[2,0],
	[2,1],
	[9,0],
	[0,0]],
14:[[0,1],
	[0,0],
	[0,1],
	[-1,0],
	[-1,1],
	[1,0],
	[1,1],
	[0,0],
	[0,1],
	[5,0],
	[0,0]],
12:[[0,1],
	[0,0],
	[0,1],
	[1,0],
	[1,1],
	[-1,0],
	[-1,1],
	[-2,0],
	[-2,1],
	[2,0],
	[0,0]],
7:[[0,1],
	[0,0],
	[0,1],
	[-1,0],
	[-1,1],
	[-3,0],
	[-3,1],
	[-5,0],
	[-5,1],
	[-3,0],
	[0,0]],
11:[[0,1],
	[0,0],
	[0,1],
	[1,0],
	[1,1],
	[2,0],
	[2,1],
	[3,0],
	[3,1],
	[-1,0],
	[0,0]],
8:[[0,1],
	[0,0],
	[0,1],
	[-1,0],
	[-1,1],
	[0,0],
	[0,1],
	[1,0],
	[1,1],
	[-4,0],
	[0,0]],
4:[[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[-2,0],
	[-2,1],
	[-2,0],
	[-2,1],
	[-8,0],
	[0,0]],
13:[[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[1,0],
	[1,1],
	[-2,0],
	[0,0]],
16:[[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[2,0],
	[2,1],
	[2,0],
	[2,1],
	[0,0],
	[0,0]],
19:[[0,1],
	[0,0],
	[0,1],
	[0,0],
	[0,1],
	[2,0],
	[2,1],
	[2,0],
	[2,1],
	[2,0],
	[0,0]],
15:[[0,1],
	[0,0],
	[0,1],
	[1,0],
	[1,1],
	[-1,0],
	[-1,1],
	[-1,0],
	[-1,1],
	[-3,0],
	[0,0]],
5:[[0,1],
	[0,0],
	[0,1],
	[-1,0],
	[-1,1],
	[-3,0],
	[-3,1],
	[-6,0],
	[-6,1],
	[-12,0],
	[0,0]]
};

function toID(element) {
	return "#shape_"+element.toString();
}

function toWrapper(element) {
	return "#wrapper_"+element.toString();
}

function render(position) {
	ELEMENTS[0].forEach(function(element) {
		anime({
			targets: toWrapper(element),
			translateX: (TRANSLATIONS[element][position][0]*34),
			translateY: (TRANSLATIONS[element][position][1]*300),
			duration: TIME_VERY_VERY_VERY_LONG
		});
	});
}

function colorize(element, color) {
	$(element).attr('fill', color);
}


function play() {
	if (INDEX==0) {
		toast("Recursively calling the sorting algorithm on smaller batches of data");
		setTimeout(shadeHalf, 1000);
		setTimeout(shadeQuarter, 2000);
		setTimeout(shadeEighth, 3000);
		setTimeout(shadeSixteenth, 4000);
		setTimeout(player, 5000);
	}
	else{
		player();
	}
}

function shadeAll() {
	colors= ['#B2DFDB'];

	for (var index = 0; index < ELEMENTS.length; index++) {
		ELEMENTS[index].forEach(function(element) {
			colorize(toID(element), colors[index]);
		}, this);
	}
}

function shadeHalf() {
	colors= ['red', 'yellow'];

	for (var index = 0; index < ELEMENTS_HALF.length; index++) {
		ELEMENTS_HALF[index].forEach(function(element) {
			colorize(toID(element), colors[index]);
		}, this);
	}
}

function shadeQuarter() {
	colors= ['blue', 'grey', 'magenta', 'white'];
	
	for (var index = 0; index < ELEMENTS_QUARTER.length; index++) {
		ELEMENTS_QUARTER[index].forEach(function(element) {
			colorize(toID(element), colors[index]);
		}, this);
	}
}

function shadeEighth() {
	colors= ['green', 'yellow', 'magenta', 'pink', 'purple', 'cyan', 'brown', 'orange'];
	
	for (var index = 0; index < ELEMENTS_EIGHTH.length; index++) {
		ELEMENTS_EIGHTH[index].forEach(function(element) {
			colorize(toID(element), colors[index]);
		}, this);
	}
}

function shadeSixteenth() {
	colors= ['white', 'yellow', 'magenta', 'pink', 'purple', 'cyan', 'brown', 'orange', 'white', 'yellow', 'magenta', 'pink', 'purple', 'cyan', 'brown', 'orange'];
	
	for (var index = 0; index < ELEMENTS_SIXTEENTH.length; index++) {
		ELEMENTS_SIXTEENTH[index].forEach(function(element) {
			colorize(toID(element), colors[index]);
		}, this);
	}
}

function restart() {
	
}

function pause() {
	clearInterval(TIMER);
}

function player() {
	TIMER= setInterval(function() {
		toast(NOTIFS[INDEX]);
		render(INDEX);
		switch (INDEX) {
			case 3:
				shadeEighth();
				break;
			case 5:
				shadeQuarter();
				break;
			case 7:
				shadeHalf();
				break;
			case 9:
				shadeAll();
				break;
			default:
				break;
		}
		INDEX++;
		if (INDEX==11) {
			clearInterval(TIMER);
			INDEX= 0;
			play();
		}
	}, 2000);
}

function toast(notif) {
	Materialize.toast(notif, TIME_VERY_VERY_LONG, 'left');
}
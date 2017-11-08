$(document).ready(function (){
	showSummary();
	initialize();
})

function showSummary() {
	$('#container-visualisation-binary_search').hide();
	$('#container-data-binary_search').hide();
	$('.container-summary-binary_search').show();
}

function showVisualisation() {
	$('#container-data-binary_search').hide();
	$('.container-summary-binary_search').hide();
	$('#container-visualisation-binary_search').show();
}

function initialize() {
	$('#btn_binary_search').bind('click', function () {
		search();
	});
}

var POSITION= [0,0];
var SEARCH_ITEM= 0;
var index= 0;
var TIMER= 0;

var LEFT= 100;
var RIGHT= 200;
var UP= 300;
var DOWN= 400;
var NONE= 0;

var ELEMENTS= [2, 3, 4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
var ELEMENTS_HALF=		[[2, 3, 4, 5, 8, 10, 11], [13, 14, 15, 16, 17, 18, 19]];
var ELEMENTS_QUARTER= 	[[2, 3, 4], [8, 10, 11], [13, 14, 15], [17, 18, 19]];
var ELEMENTS_EIGHTH=	[2, 4,8, 11, 13, 15, 17, 19];

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

function sortedPositions() {
	ABSOLUTE_POSITIONS= {
		2: [0,0],
		18: [11,0],
		3: [-1,0],
		10: [1,0],
		17: [7,0],
		14: [3,0],
		12: [0,0],
		11: [-2,0],
		8: [-4,0],
		4: [-7,0],
		13: [-3,0],
		16: [-1,0],
		19: [1,0],
		15: [-4,0],
		5: [-11,0]
	};
}

function sort() {
	sortedPositions();
	ELEMENTS.forEach(function(element) {
		move(element, NONE);
	}, this);
}

function unsort() {
	base_positions();
	ELEMENTS.forEach(function(element) {
		move(element, NONE);
	}, this);
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

function search() {
	toast('Searching...');
	unsort();
	index= 0;
	clearInterval(TIMER);
	SEARCH_ITEM= parseInt($('#number_binary_search').val());
	if (SEARCH_ITEM.toString()=="NaN") {
		toast("Please provide a search term!")
		return;
	}
	restart();
	

	TIMER= setInterval(searchAction, 1500);

}

function shadeAll() {
	ELEMENTS.forEach(function(element) {
		colorize(toID(element), '#B2DFDB');
	}, this);
}

function colorize(element, color) {
	$(element).attr('fill', color);
}

function restart() {
	base_positions();
	shadeAll();
}

function toID(element) {
	return "#shape_binary_search_"+element.toString();
}

function toWrapper(element) {
	return "#wrapper_binary_search_"+element.toString();
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
	switch (index) {
		case 0:
			toast('Sorting...');
			sort();
			break;
		case 1:
			toast('Pivot');
			colorize(toID(12), 'grey');
			if (SEARCH_ITEM==12) {
				toast("Found!");
				clearInterval(TIMER);
				return;
			}
			break;
		case 2:
			toast('Split');
			if (SEARCH_ITEM<12) {
				var data= ELEMENTS_HALF[0];
			}
			else{
				var data= ELEMENTS_HALF[1];
			}

			data.forEach(function(element) {
				colorize(toID(element), 'yellow');
			}, this);
			break;
		case 3:
			toast('Pivot');
			if (SEARCH_ITEM<12) {
				colorize(toID(5), 'magenta');
				if (SEARCH_ITEM==5) {
					toast("Found!");
					clearInterval(TIMER);
					return;
				}
			}
			else{
				colorize(toID(16), 'magenta');
				if (SEARCH_ITEM==16) {
					toast("Found!");
					clearInterval(TIMER);
					return;
				}
			}
			break;
		case 4:
			toast('Split');
			if (SEARCH_ITEM<12) {
				if (SEARCH_ITEM<5) {
					data= ELEMENTS_QUARTER[0];
				}
				else{
					data= ELEMENTS_QUARTER[1];
				}
			}
			else{
				if (SEARCH_ITEM<16) {
					data= ELEMENTS_QUARTER[2];
				}
				else{
					data= ELEMENTS_QUARTER[3];
				}
			}
			data.forEach(function(element) {
				colorize(toID(element), 'red');
			}, this);
			break;
		case 5:
		toast('Pivot');
		if (SEARCH_ITEM<12) {
			if (SEARCH_ITEM<5) {
				colorize(toID(3), 'blue');
				if (SEARCH_ITEM==3) {
					toast("Found!");
					clearInterval(TIMER);
					return;
				}
			}
			else{
				colorize(toID(10), 'blue');
				if (SEARCH_ITEM==10) {
					toast("Found!");
					clearInterval(TIMER);
					return;
				}
			}
		}
		else{
			if (SEARCH_ITEM<16) {
				colorize(toID(14), 'blue');
				if (SEARCH_ITEM==14) {
					toast("Found!");
					clearInterval(TIMER);
					return;
				}
			}
			else{
				colorize(toID(18), 'blue');
				if (SEARCH_ITEM==18) {
					toast("Found!");
					clearInterval(TIMER);
					return;
				}
			}
		}
		break;
		case 6:
		toast('Split');
		if (SEARCH_ITEM<12) {
			if (SEARCH_ITEM<5) {
				if (SEARCH_ITEM<3) {
					data= ELEMENTS_EIGHTH[0];
				}
				else{
					data= ELEMENTS_EIGHTH[1];
				}
			}
			else{
				if (SEARCH_ITEM<10) {
					data= ELEMENTS_EIGHTH[2];
				}
				else{
					data= ELEMENTS_EIGHTH[3];
				}
			}
		}
		else{
			if (SEARCH_ITEM<16) {
				if (SEARCH_ITEM<14) {
					data= ELEMENTS_EIGHTH[4];
				}
				else{
					data= ELEMENTS_EIGHTH[5];
				}
			}
			else{
				if (SEARCH_ITEM<18) {
					data= ELEMENTS_EIGHTH[6];
				}
				else{
					data= ELEMENTS_EIGHTH[7];
				}
			}
		}
		colorize(toID(data), 'cyan');
		break;
		case 7:
		toast('Pivot');
			if (ELEMENTS_EIGHTH.indexOf(SEARCH_ITEM)==-1) {
				clearInterval(TIMER);
				toast("The number "+SEARCH_ITEM.toString()+" is not in the list!");
				return;	
			}
			else{
				colorize(toID(SEARCH_ITEM), 'green');
				toast("Found!");
				clearInterval(TIMER);
				return;
			}
		default:
			clearInterval(TIMER);
			toast("The number "+SEARCH_ITEM.toString()+" is not in the list!");
			return;	
			break;
	}
	index++;
}

function toast(notif) {
	Materialize.toast(notif, TIME_VERY_LONG, 'left');
}
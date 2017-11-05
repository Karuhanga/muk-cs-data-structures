var VERTICAL_OFFSET= 150
var HORIZONTAL_OFFSET= 100

var index= 0
var TIMER;

var PROCESSES= [
	"1. User takes action that requires Domain Name Resolution",
	"2. User's device checks cache to see if the record exists",
	"3. If it does, the name is resolved. Otherwise,",
	"4. User's device makes resolution request to the Local DNS Server",
	"5. Local DNS Server checks its cache to see if the record exists",
	"6. If it does, the name is resolved. Otherwise,",
	"7. Local DNS Server makes resolution request to the Root DNS Server",
	"8. Root DNS Server checks its cache to see if the record exists",
	"9. If it does, the name is resolved. Otherwise,",
	"10. Root DNS Server makes resolution request to the TLD DNS Server",
	"11. TLD DNS Server checks to see if the record exists",
	"12. If it does, the name is resolved. Otherwise,",
	"13. TLD DNS Server makes resolution request to the Authoritative Name Server",
	"14. The Authoritative Name Server responds with the required mapping to the TLD DNS Server",
	"15. The TLD DNS Server caches the result and responds with the required mapping to the Root DNS Server",
	"16. The Root DNS Server caches the result and responds with the required mapping to the Local DNS Server",
	"17. The Local DNS Server caches the result and responds with the required mapping to the User's device",
	"18. The user's device caches the result and responds with the required mapping to the requesting process"
]

var ANIMATIONS= {
	3: ["#animation_4", 50, VERTICAL_OFFSET, -100, TIME_LONG],
	6: ["#animation_7", 50, VERTICAL_OFFSET, 60, TIME_LONG],
	9:["#animation_10", 160, -60, 0, TIME_LONG],
	12:["#animation_13", 50, (VERTICAL_OFFSET*-1), -100, TIME_LONG],
	13: ["#animation_14", 50, VERTICAL_OFFSET, -100, TIME_LONG],
	14: ["#animation_13", 50, VERTICAL_OFFSET, -300],
	15: ["#animation_10", 0, -100, -250],
	16: ["#animation_7", 50, (VERTICAL_OFFSET*-1), -100]
}

var LOADERS= {
	0: "#animation_4",
	1: "#animation_4",
	2: "#animation_4",
	4: "#animation_7",
	5: "#animation_7",
	7: "#animation_10",
	8: "#animation_10",
	10: "#animation_13",
	11: "#animation_13"
}

$(document).ready(function (){
	showSummary();
	initialize();
})

function showSummary() {
	$('#container-visualisation-recursion').hide();
	$('#container-data-recursion').hide();
	$('.container-summary-recursion').show();
}

function showVisualisation() {
	$('#container-data-recursion').hide();
	$('.container-summary-recursion').hide();
	$('#container-visualisation-recursion').show();
}

function initialize() {
	$('#btn_recursion_next').bind('click', function () {
		visualize();
	});

	$('#recursion_restart').bind('click', function () {
		pause();
		index= 0;
	});

	$('#recursion_play').bind('click', function () {
		pause();
		play();
	});

	$('#recursion_pause').bind('click', function () {
		toast("Paused!");
		pause();
	});

	$('#recursion_play').bind('mouseleave', function(){
		$('#name_play').hide(TIME_SHORT);
	});

	$('#recursion_play').bind('mouseenter', function(){
		$('#name_play').show(TIME_MEDIUM);
	});

	$('#recursion_pause').bind('mouseleave', function(){
		$('#name_pause').hide(TIME_SHORT);
	});

	$('#recursion_pause').bind('mouseenter', function(){
		$('#name_pause').show(TIME_MEDIUM);
	});

	$('#recursion_restart').bind('mouseleave', function(){
		$('#name_restart').hide(TIME_SHORT);
	});

	$('#recursion_restart').bind('mouseenter', function(){
		$('#name_restart').show(TIME_MEDIUM);
	});
}

function visualize() {
	var an= ANIMATIONS[index];
	if (an==undefined) {
		loading(LOADERS[index]);
		toast(PROCESSES[index]);
	}
	else{
		toast(PROCESSES[index]);
		animate(ANIMATIONS[index][0], ANIMATIONS[index][1], ANIMATIONS[index][2], ANIMATIONS[index][3], ANIMATIONS[index][4]);
	}
	index= (index+1)%PROCESSES.length;
}

function animate(element, x1, y, x2, lag) {
	y= y*-1;
	$(element).css('visibility', 'visible');

	var timeline= anime.timeline();

	timeline.add({
		targets: element,
		translateX: [
						{
							value: x1,
							duration:lag,
							easing: 'easeInOutQuart'
						},
						{
							value: x1+x2,
							duration:lag,
							delay: lag,
							easing: 'easeInOutQuart'
						}
					],
		translateY: [
						{
							value: y,
							duration:lag,
							easing: 'easeInOutQuart',
							delay:lag
						}
				],
		complete: function (anim) {
					$(element).css('visibility', 'hidden');
				  }
	});

	timeline.add(
	{
		targets: element,
		translateY: 0,
		translateX: 0
	});
}

function loading(element) {
	$(element).css('visibility', 'visible');

	anime({
		targets: element,
		rotate: [{value: 360, duration:TIME_VERY_LONG},{value: -360, duration:TIME_VERY_LONG}],
		duration: TIME_VERY_VERY_LONG
	});
}

function toast(notif) {
	Materialize.toast(notif, TIME_VERY_VERY_LONG, 'left');
}

function play() {
	toast("Animating!");
	TIMER= setInterval(visualize, TIME_VERY_VERY_VERY_LONG);
}

function pause() {
	clearInterval(TIMER);
}
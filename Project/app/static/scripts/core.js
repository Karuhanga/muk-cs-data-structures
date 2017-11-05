var TIME_SHORT= 100;
var TIME_MEDIUM= 200;
var TIME_LONG= 500;
var TIME_VERY_LONG= 1000;
var TIME_VERY_VERY_LONG= 2000;
var TIME_VERY_VERY_VERY_LONG= 3000;

$(document).ready(function (){
	onLoad();
})

function onLoad() {
	$('#drawer-icon').bind('click', function (){
		openDrawer();
	})

	$('#closeDrawer').bind('click', function (){
		closeDrawer();
	})

	$('#label-cp').bind('click', function (){
		toggleMenu($('#cp'));
	})

	$('#label-ds').bind('click', function (){
		toggleMenu($('#ds'));
	})

	$('#label-ads').bind('click', function (){
		toggleMenu($('#ads'));
	})

	$('#label-search').bind('click', function(){
		toggleMenu($('#search'));
	})

	$('#label-sort').bind('click', function(){
		toggleMenu($('#sort'));
	})

	$('#fab1').bind('mouseleave', function(){
		$('#name1').hide(TIME_SHORT);
	});

	$('#fab1').bind('mouseenter', function(){
		$('#name1').show(TIME_MEDIUM);
	});

	$('#fab2').bind('mouseleave', function(){
		$('#name2').hide(TIME_SHORT);
	});

	$('#fab2').bind('mouseenter', function(){
		$('#name2').show(TIME_MEDIUM);
	});

	$('#fab3').bind('mouseleave', function(){
		$('#name3').hide(TIME_SHORT);
	});

	$('#fab3').bind('mouseenter', function(){
		$('#name3').show(TIME_MEDIUM);
	});

	$('#fab1').bind('click', function(){
		showData();
	});

	$('#fab2').bind('click', function(){
		showVisualisation();
	});
	$('#fab3').bind('click', function(){
		showSummary();
	});

	$('.menu-data-item').bind('click', function (e) {
		loadDataPage($('#'.concat(e.currentTarget.id)));
	})

	$('#the-project').bind('click', function(){
		loadProjectPage();
	})

	loadProjectPage();
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openDrawer() {
    $('#navDrawer').css('width','240px');
    $('#main').css('margin-left', '240px');
    $('#content').css('background-color', 'rgba(0,0,0,0.5)');
    $('#content').bind('click', function (){
    	closeDrawer();
    });
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeDrawer() {
    $('#navDrawer').css('width','0');
    $('#main').css('margin-left', '0');
    $('#content').css('background-color', '#f8f8f8');
    $('#content').unbind('click');
}

function toggleMenu(menu) {
	if (menu.css('display')=='none') {
		menu.show(TIME_MEDIUM);
	}
	else{
		menu.hide(TIME_MEDIUM);
	}
}

function hideFabs() {
	$('.faby').hide();
}

function showFabs(){
	$('.faby').show();
}

function hideControls() {
	$('.controls').hide();
}

function showControls() {
	$('.controls').show();
}

function loadProjectPage() {
	hideFabs();
	hideControls();
	closeDrawer();
	$('#content').load('the_project');
	document.location.hash= "about-the-project";
	$('title').text("The Project | Data Structures and Algorithms");
	$('#title').text("The Project");
}

function loadDataPage(element) {
	showFabs();
	hideControls();
	closeDrawer();
//	if (element.parent().attr('id')!='ds') {
//		showControls();
//	}
	var PATH= element.parent().attr('id').concat('/', element.attr('id'));
	$('#content').load(PATH);
	document.location.hash= element.text();
	$('title').text(element.text().concat(" | Data Structures and Algorithms"));
	$('#title').text(element.text())
}


/*
	**Looked a lottle ugly
	$('#play').bind('mouseleave', function(){
		$('#name4').hide(TIME_MEDIUM);
	});

	$('#play').bind('mouseenter', function(){
		$('#name4').show(TIME_LONG);
	});

	$('#stop').bind('mouseleave', function(){
		$('#name5').hide(TIME_MEDIUM);
	});

	$('#stop').bind('mouseenter', function(){
		$('#name5').show(TIME_LONG);
	});*/
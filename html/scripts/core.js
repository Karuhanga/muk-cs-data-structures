var TIME_SHORT= 100;
var TIME_MEDIUM= 200;
var TIME_LONG= 500;

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
	});
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
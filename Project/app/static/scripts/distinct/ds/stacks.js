//TODO Physical Stack Implementation
var ACTION_BOLD= 'Bold';
var ACTION_ITALIC= 'Italic';
var ACTION_UNDERLINE= 'Underline';
var ACTION_DELETE= 'Delete';
var ACTION_TYPE= 'Type';
var ACTION_ERROR= 'Error';

var STACK= []
var CURRENT_TEXT= ""

$(document).ready(function (){
	showSummary();
	initialize();
})

function showSummary() {
	$('#container-visualisation-stacks').hide();
	$('#container-data-stacks').hide();
	$('.container-summary-stacks').show();
}

function showVisualisation() {
	$('#container-data-stacks').hide();
	$('.container-summary-stacks').hide();
	$('#container-visualisation-stacks').show();
}

function initialize() {
	disableUndoRedo();

	$('#text_area').bind('input', function(){
		changeResolver();
		updateVisual();
	})

	$('#btn_bold').bind('click', function(){
		onFormatText(ACTION_BOLD);
		STACK.push([ACTION_BOLD]);
		updateVisual();
	});
	$('#btn_italic').bind('click', function(){
		onFormatText(ACTION_ITALIC);
		STACK.push([ACTION_ITALIC]);
		updateVisual();
	});
	$('#btn_underline').bind('click', function(){
		onFormatText(ACTION_UNDERLINE);
		STACK.push([ACTION_UNDERLINE]);
		updateVisual();
	});

	$('#btn_stacks_size').bind('click', function(){
		undosleft();
	});

	$('#btn_stacks_new').bind('click', function(){
		stack();
	});

	$('#btn_stacks_peek').bind('click', function(){
		peek();
	});

	$('#btn_stacks_isempty').bind('click', function(){
		isEmpty(true);
	});

	$('#btn_stacks_pop').bind('click', function(){
		pop();
		updateVisual();
	});
}

function onFormatText(aspect) {
	$('#text_area').toggleClass(aspect);
}

function stack(){
	STACK= []
	updateVisual();
}

function undosleft() {
	var len= STACK.length;
	if (len==0) {
		toast('The stack is empty!', TIME_VERY_LONG);
	}
	else if(len==1){
		toast('1 item left', TIME_VERY_LONG);
	}
	else{
		toast(len.toString()+' items left', TIME_VERY_LONG);
	}
	return len;
}

function toast(message, duration){
	Materialize.toast(message, duration, 'rounded');
}

function peek() {
	if (isEmpty()) {
		toast('The stack is empty!', TIME_VERY_LONG);
		return;
	}
	toast('Undo Action: <b>'+ STACK[STACK.length-1][0]+'</b>', TIME_VERY_LONG);
}

function isEmpty(toasting) {
	if (toasting) {
		toast((STACK.length==0).toString(), TIME_VERY_LONG);
		return;
	}
	else{
		return STACK.length==0;
	}
}

function pop() {
	if (isEmpty()) {
		toast('The stack is empty!', TIME_VERY_LONG);
		return;
	}

	var action= STACK.pop()

	switch (action[0]) {
		case ACTION_ERROR:
			return;

		case ACTION_DELETE:
			reType(action[1]);
			break;

		case ACTION_TYPE:
			deleteStuff(action[1]);
			break;
	
		default:
			onFormatText(action[0]);
			break;
	}
	toast("Action Undone: "+action[0], TIME_LONG);
}

function changeResolver() {
	var latest= $('#text_area').val();
	var latest_length= latest.length;
	var CURRENT_TEXT_length= CURRENT_TEXT.length;

	if (latest_length==CURRENT_TEXT_length) {
		return;
	}

	length= STACK.length

	if (latest_length>CURRENT_TEXT_length) {
		if (length>0 && STACK[length-1][0]==ACTION_TYPE) {
			STACK[length-1][1]+=latest_length-CURRENT_TEXT_length;
		}
		else{
			STACK.push([ACTION_TYPE, latest_length-CURRENT_TEXT_length]);			
		}
	}
	else{
		if (length>0 && STACK[length-1][0]==ACTION_DELETE) {
			STACK[length-1][1]= CURRENT_TEXT.substring(latest_length, CURRENT_TEXT_length)+ STACK[length-1][1];
		}
		else{
			STACK.push([ACTION_DELETE, CURRENT_TEXT.substring(latest_length, CURRENT_TEXT_length)]);
		}
	}

	CURRENT_TEXT= latest;
	return;
}

function reType(extra) {
	CURRENT_TEXT= CURRENT_TEXT+extra;
	$('#text_area').val(CURRENT_TEXT);
}

function deleteStuff(count) {
	CURRENT_TEXT= CURRENT_TEXT.substring(0, CURRENT_TEXT.length-count);
	$('#text_area').val(CURRENT_TEXT);
}

function disableUndoRedo() {
	$("body").keydown(function(e){
		var z = 90;
		var y= 89;
		if ((e.ctrlKey || e.metaKey) && e.keyCode == z) {
		  e.preventDefault();
		  pop();
		  return;
		}

		if ((e.ctrlKey || e.metaKey) && e.keyCode == y) {
			e.preventDefault();
			return;
		}
	});
}

function updateVisual() {
	$('.element').text("");
	var limit= STACK.length;
	limit= (limit>6)? 6:limit;
	for (var index = 0, pos=limit-1; index < limit; index++, pos--){
		$('#'+index.toString()).text(STACK[pos][0]);
	}
}
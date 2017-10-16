class Node{
	constructor(data, next){
		this.data= data;
		this.next= next;
	}
}

class LinkedList{
	constructor(size){
		this.max_size= size;
		this.size= 0;
		this.head= new Node(null, null);
	}

	getSize(){
		return this.size;
	}

	isEmpty(){
		return this.size<1;
	}

	first(){
		if (this.isEmpty()) {
			throw 'Accessing First Element of Empty List';
		}
		else{
			return this.head.data;
		}
	}

	last(){
		if (this.isEmpty()) {
			throw 'Accessing Last Element of Empty List';
		}
		else{
			return this.find(size-1);
		}
	}

	find(index){
		if (index+1>this.size) {
			throw 'No Element Error: At the index: '+index.toString()+' Size is: '+this.size.toString();
		}
		else{
			var result= this.head;
			while(index>0){
				result= result.next;
				index--;
			}
			return result.data;
		}
	}

	addFirst(data){
		if (this.isEmpty()) {
			this.head.data= data;
			this.size++;
			return;
		}

		if(this.size== this.max_size){
			throw 'Max List Size Reached';
		}

		this.head= new Node(data, this.head);
		this.size++;
	}

	addLast(data){
		if (this.isEmpty()) {
			this.addFirst(data);
			return;
		}

		if(this.size== this.max_size){
			throw 'Maximmum List Size Reached';
		}

		var index= this.size-1;
		var last_node= this.head;
		while(index>0){
			last_node= last_node.next;
			index--;
		}
		last_node.next= new Node(data, null);
		this.size++;

	}

	removeFirst(){
		var result= this.first();
		if (this.size==1) {
			this.size= 0;
			this.head.data= null;
			this.head.next= null;
			return result;
		}

		this.size--;
		this.head= this.head.next;
		return result;
	}
}

function showSummary() {
	$('#container-visualisation-linked_lists').hide();
	$('#container-data-linked_lists').hide();
	$('.container-summary-linked_lists').show();
}

function showVisualisation() {
	$('#container-data-linked_lists').hide();
	$('.container-summary-linked_lists').hide();
	$('#container-visualisation-linked_lists').show();
}

function showData() {
	$('#container-visualisation-linked_lists').hide();
	$('.container-summary-linked_lists').hide();
	$('#container-data-linked_lists').show();
}

$(document).ready(function (){
	privateInit();
})

function privateInit() {
	var LINKED_LIST= null;

	$('#linkedList').bind('click', function(){
		LINKED_LIST= new LinkedList();
	});

	$('#size').bind('click', function(){
		LINKED_LIST.getSize();
	});

	$('#isEmpty').bind('click', function(){
		LINKED_LIST.isEmpty();
	});

	$('#first').bind('click', function(){
		LINKED_LIST.first();
	});

	$('#addFirst').bind('click', function(){
		//TODO check for content in input box
		LINKED_LIST.addFirst();
	});

	$('#last').bind('click', function(){
		LINKED_LIST.last();
	});

	$('#addLast').bind('click', function(){
		//TODO check for content in input box
		LINKED_LIST.addLast();
	});

	$('#removeFirst').bind('click', function(){
		LINKED_LIST.removeFirst();
	});

	showSummary();
}
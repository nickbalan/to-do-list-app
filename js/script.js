/* 1. Adding a new item to the list of items: */
/* Javascript code: */
// function newItem(){
	// let li = document.createElement("li");
/* jQuery code: */
function newItem(){
	/* Creates the li element with jQuery. */
	let li = $('<li></li>');

	/* Javascript code: */
	// let inputValue = document.getElementById("input").value;
	// let text = document.createTextNode(inputValue);
	/* jQuery code: */
	/* Gets the input values from the index page. Selects the input element by its ID. Stores the value into a variable. */
	let inputValue = $('#input').val();

	/* Javascript: */
	// li.appendChild(text);
	/* jQuery code: */
	/* Appends the inputValue value into the li element */
	li.append(inputValue);

	/* Javascript code: */
	/*
	if (inputValue === '') {
		alert("You must write something!");
    } else {
    	let list = document.querySelector('#list');
     	list.appendChild(li);
   	};
   	*/
	/* jQuery code: */
	/* displays an error message if nothing has been entered into the input  */
	if (inputValue === '') {
	alert('You must write something!')
	} else {
		/* Selects the list id and appends li to it */
    	$('#list').append(li);
  	};
};


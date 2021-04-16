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
	/* Appends the inputValue value into the li */
	li.append(inputValue);
};


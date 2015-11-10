$(document).ready(function(){

	var total = 0.00;

	// Click Button to add to total
	$('#entry').submit // just like click but for forams
	(function(){
		// get the num they put in
		var num1 = $('#newEntry').val();

		num1 = parseFloat(num1);

		total = total + num1;
		// add it to the tot and update the tot
		$('#total').html(total);

		addToTable(num1);

		$('newEntry').val(''); // NaN total

		return false;
	});

		// add number to table
	function addToTable(numberToPutInTable){
		$('#entries').append("<tr><td>" + numberToPutInTable + "</td></tr>"); //you can put html in your js

	}

});
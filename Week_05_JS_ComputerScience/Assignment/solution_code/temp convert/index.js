
//user submint form .submit()

//$('#entry').submit (function(){

//Convert what they've entered from 
//fahrenheit to celsius

//send it back to them

//you can to that via
//console
//alert
//.html womewher new

$(document).ready(function(){

	var total = 0.00;

	// Click Button to add to total
	$('#entry').submit (function(){// just like click but for forams
		// get the num they put in
		var num1 = $('#newEntry').val();
		num1 = parseFloat(num1 * 1.8);
		total = total + num1;
		// add it to the tot and update the tot
		$('#total').html(total);

		$('newEntry').val(''); // NaN total

		return false;
	});

});



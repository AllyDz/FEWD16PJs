$(document).ready(function(){

	// alert('Ready'); This is my alert
	// alert('Set'); this is my only alert
	// alert('Go'); it is a good alert
	// full metal jacket, rifle quote.

	//listen for compare click
	$('#submit').click(function(){

	//get the valure for a
	var leftValue = $('#a').val();
	leftValue = parseInt(leftValue);

	//get the valure for b
	var rightValue = $('#b').val();
	rightValue = parseInt(rightValue);

	//compare them??
	if (leftValue > rightValue){
		//update comparison span	
		$('comparison').html('&gt;');
	} 
// console.log(leftValue)
// console.log(rightValue)

	else if(leftValue < rightValue){
		$('comparison').html('&lt;');
	}

	else if(leftValue === rightValue){
		$('comparison').html('=');
	}

	else{
		alert(' blah blah alert');
	}
	//> grater, < less then, == '=2', != 'not = 2'

	});

});

//console.log('leftValue')
//console.log(leftValue); =var
// alert('');
// === "true"
// !=
// !==
// >=
//<=
// || = or
// && = and

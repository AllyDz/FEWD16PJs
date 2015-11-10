// define inputs??? userCityInput
// if when visiter enters info (corectly) their city pops up upon enter
// else they do not enter info corectly a small alert will sound
// imput all citys and link them to their respective images
//alert('hi');

//click event for #submit-btn

//get inner html / text of city-type...

// .lowcase for input 'stuff'.toLowerCase()'stuff'.toUpperCase()

$(document).ready(function (){
	console.log('.ready')
	$('form').on('submit', function(){
		console.log('.on')
	var cities = ['nyc', 'sf', 'la', 'austin', 'sydney'];	
		var userCityInput = $('#city-type').val();
		console.log(userCityInput)
	if(userCityInput==='NYC'||userCityInput==='New York'||userCityInput==='New York City'){
		$('body').css('background-image','url(images/' + cities[0] + '.jpg');
	}else if (userCityInput==='SF'|| userCityInput==='sanfransisco'){
		 $('body').css('background-image','url(images/' + cities[1] + '.jpg');
	}else if (userCityInput==='LA'|| userCityInput==='Los Angeles'){
		$('body').css('background-image','url(images/' + cities[2] + '.jpg');
	}else if (userCityInput==='Austin'){
		$('body').css('background-image','url(images/' + cities[3] + '.jpg');
	}else if (userCityInput==='Sydney'){
		 // $('body').css('background-image','url(images/' + cities[0] + '.jpg');

		// $('body').css('background-image','url(images/' + cities[1] + '.jpg');

		// $('body').css('background-image','url(images/' + cities[2] + '.jpg');
			
		// $('body').css('background-image','url(images/' + cities[3] + '.jpg');
	
		$('body').css('background-image','url(images/' + cities[4] + '.jpg');
	}
	return false;
	});
	

});

	
		
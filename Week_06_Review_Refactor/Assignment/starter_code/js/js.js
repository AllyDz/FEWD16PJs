// pseudocode 'use rubric for help'
// array with city vals
// creat a drop down with form option
// when user selects option change brd to respective img
// learn and use append
// use JS .attr to change the CSS brd
// val of user input
// .change event handler for user action
// use if/else



$(document).ready(function (){
	
	
		var cities = $('#city-type').val();
			

	for(var i=0; i<cities.lenght; i=i+1){
		newOption = 'option value="' + cities[i].cssClassName + ' ">' + citiNames[i] + '<option';
		$('#city-type').append(newOption);
	}

	$('form').on('change', '#city-type',function(){
		var city = $('#city-type').val();
			$('body').attr('class',city);
	
	if(city==='New York'){
		$('body').attr('class','nyc');
	}else if (city==='SF'){
		 $('body').attr('class','sf');
	}else if (city==='LA'){
		$('body').attr('class','la');
	}else if (city==='Austin'){
		$('body').attr('class','austin');
	}else if (city==='Sydney'){
		$('body').attr('class','sydney');
	}
	
	});
	
});

	
		
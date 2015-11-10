// toggle between 
//var on = wht brd
//var off = blk brd
// ifs to check on or off
// -----------
//if some condition
//turn lights on and set variable
//else some other condition
//turns lights off and set variable?
var lights = 'on'; 

function switchLights(){ //elGregs way
 
 	//if($('body').hasClass('dark')){ } this checks class
	if(lights == 'on'){
		$('body').addClass('dark');
		lights = 'off';
	} else {
		$('body').removeClass('dark');
		lights = 'on';
	//console.log('');	
	}
}

//$('#light_switch').click(function(){ //dont need
$(document).ready(function(){

	$('#light_switch').click(sitchLights); //elGregs way
});

// consol.log('.dark');
// alert('it works!');



	
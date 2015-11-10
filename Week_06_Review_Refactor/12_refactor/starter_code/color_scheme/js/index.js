

// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

 $('#switcher li').click(switchColor);

function switchColor(){
	var colorToSwitchTo = $(this).data('bgcolorclass');
	// var buttonId = $(this).attr('id');
	// var colorToSwitchTo = buttonId.replace('Button','');
  $('body').attr('class', colorToSwitchTo);
	
	
	// debugger;
}

// function switchGray() {
//   $('body').attr('class', 'gray');
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }
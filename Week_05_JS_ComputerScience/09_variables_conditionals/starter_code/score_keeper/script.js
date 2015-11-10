// if user clicks on zero add 0

// if user clicks on +5 add 5

// if user clicks on +10 add 10

// if user clicks on -1 subtract 1

var score = 0;

// alert(score);

$(document).ready(function(){
	$('add5').click(function(){
		score = score + 5;
		$('result').html(score)(
			)
	});

		$('add10').click(function(){
		score = score + 10;
		$('result').html(score)(
			)
	});
	
	function updateScore(){

	}
});
//Implement the red light using jQuery. Don't forget to add the script tags.
// console.log('loaded index.js');
// $(document).ready(function(){
	
// 	console.log('ready');

// })

$(document).ready(

	function(){

	//listen to stop btn and make stuff red//
	$("#stopButton").click(
		function(){
			console.log('redLight');
			// $(".bulb").removeClass("go");
			// $(".bulb").removeClass("slow");
			$("#stopLight").addClass("stop");
		});

	//listen slow btn and make stuff yellow//
	$('#slowButton').click(
		function(){
			$(".bulb").removeClass("go");
			$(".bulb").removeClass("stop");
			$('#slowLight').addClass('slow');
		}
	);

	//listen go btn and make stuff yellow//
	$('#goButton').click(
		function(){
			// $(".bulb").removeClass("slow");
			// $(".bulb").removeClass("stop");
			// $('#goLight').addClass("go");

			$(".bulb").removeClass("slow stop").addClass("go");

		}
	);

}

);

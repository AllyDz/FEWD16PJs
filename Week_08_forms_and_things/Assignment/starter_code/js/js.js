$(document).ready(function(){

	// 	var success = form [ 'Name', 'email', 'password', 'agree' $(formCompletion).width();
			

	// if($success){
	// 	alert('Thank you, your information has been sent.');
	// }

	// else{
	// 	print '<meta http-equic=\'refresh\' content=\0;url=error.html\'>';
	// }

	//above is a test

	$('.required').on('blur', function(e){
	    validateField(this);  
	    
	});

	$('#register-form').on('submit', function(event){
	    var nameValid = validateField('.name').val();
	    var emailValid = validateField('.email').val();
	    var passwordValid = validateField('.password').val();
	    var agreeValid = validateField('.agree').val();
	    if(nameValid && emailValid && passwordValid && agreeValid){
	      return true;
	    } else {
	      return false;
	    }
	 
	});

	function validateField(field){
	    var inputValue = $(field).val();  
	    if(inputValue === ''){  
	        $(field).addClass('error');
	        return false;
	    }
	    else {
	        $(field).removeClass('error');
	        return true;
	    } 
	   

	}

});

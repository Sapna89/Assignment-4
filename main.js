$(document).ready(function() {



	$("#custForm").submit(function(event) {

			var firstName = $("#first_name").val();
	var lastName = $("#last_name").val();
	var address = $("#addressField").val();
	var email = $("#emailField").val();
	var phone = $("#phoneField").val();
		// no_error = error_checking($("#custForm"));

		var no_error = true;
		// var firstName = $("#first_name").val();
		// var lastName = $("#last_name").val();
		// var address = $("#addressField").val();
		// var email = $("#emailField").val();
		// var phone = $("#phoneField").val();
		$(".req").css("color", "black");

		if(firstName.length == 0 || lastName.length == 0 || address.length == 0 || email.length == 0 || phone.length == 0 )
		{
			alert("All the field in red is required please fill it up");
			event.preventDefault();
		}
		
		//Validates first name field.
		
		if(firstName.length == 0)
		{
			
			// alert( "Name field is required" );
			event.preventDefault(); //This will not let the page go further untill all required filed is filled up.
			$(".req").css("border-color" , "red");			
			no_error = false;
		}
		
		//Validates last name field.
		
		if(lastName.length == 0)
		{
			$(".req").css("border-color" , "red");			
			no_error = false;
			event.preventDefault();
		}

		//Validates last name field.
		
		if(address.length == 0)
		{
			$(".req").css("border-color" , "red");			
			no_error = false;
			event.preventDefault();
		}

		var position = email.indexOf("@");
		if((email.length === 0) && (position === -1))
		{
			$(".req").css("border-color" , "red");	
			alert( "Please mention the correct email address" );		
			no_error = false;
			event.preventDefault();
		}
		
		

		// var phone = $("#phoneField").val();
		// $( "#phoneField" ).keyup(function( ) {			  
		//   	// var part1 = phone.substring(0,3);
		//   	// var part2 = phone.substring(3,7);
		//   	// var part3 = phone.substring(7,9);
		//   	alert( "Handler for .keyup() called." );
		// });

		// $( "#target" ).keyup(function() {
		//   alert( "Handler for .keyup() called." );
		// });
});




$('#phoneField').keyup(function() {
	var phone = $("#phoneField").val();
	var len = phone.length;
	var part1 = phone.substring(0,3);
	var part2 = phone.substring(3,6);
	var part3 = phone.substring(7,10);
	  	// $('.propVals').css("color" , "black");
	  	$('.propVals').text(len);
	  	if(len < 10)
	  	{
	  		$('.propVals').text('Please provide a 10 digit number');
	  		$('.propVals').addClass('dashes');
	  	}

	  	else
	  	{
	  		$('.propVals').text('( ' + part1+' ) '+ part2 + ' - ' + part3);
			// $('.propVals').text('-');
			// $('.propVals').text(part2);
			// $('.propVals').text('-');
			// $('.propVals').text(part3);
		}
		// alert( "Handler for .keyup() called." );
		// $(".req").css("border-color" , "red");			
		// no_error = false;
		// var phone = $("#phoneField").val();			  
	 //  	var part1 = phone.substring(0,3);
	 //  	var part2 = phone.substring(3,7);
	 //  	var part3 = phone.substring(7,9); 
	 //  	part1.next().text("-");	

	 // $('.propVals').css("color" , "black");
	 
	});
}); 






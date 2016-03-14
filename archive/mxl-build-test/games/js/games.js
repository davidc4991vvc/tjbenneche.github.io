//js doc to sit on top of bootstrap
$('.carousel').carousel()

// When the page finishes loading
window.onload = function () {

	// Grab the email form
	$("#contact-form").submit(function(event) {
		// Create an AJAX request object
		var api_request = new XMLHttpRequest();
		api_request.open("POST", "http://mobilexlabs.com/feedback.php", true);
		api_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		// Set the data to send. We want to grab the email input and the feedback input
		api_request.send("email=" + document.getElementById("email-input").value + "&feedback="+document.getElementById("feedback-input").value);

		api_request.onreadystatechange = function() {

			// When the request finishes...
			if (api_request.readyState == 4) {

				// Check if it is was successful
				if (api_request.status != 200) {
					alert("Could Not Send Feedback");
				} else {
					alert("Thanks for getting in touch!");
				};
			};
		};
		event.preventDefault();
	});
};



$('#small-jamkings').on('click', function(event){
	event.preventDefault()
	$('#big-clumsy-biker, #big-urban, #big-waka').hide();
	$('#big-jamkings').show();
	$('#small-jamkings').css('background-color', '#FFBC8A');
	$('#small-urban').css('background-color', '#FFF7E5');
	$('#small-clumsy-biker').css('background-color', '#FFF7E5');
	$('#small-waka').css('background-color', '#FFF7E5');
});

$('#small-clumsy-biker').on('click', function(event){
	event.preventDefault()
	$('#big-jamkings, #big-urban, #big-waka').hide();
	$('#big-clumsy-biker').show()
	$('#small-clumsy-biker').css('background-color', '#FFBC8A');
	$('#small-jamkings').css('background-color', '#FFF7E5');
	$('#small-urban').css('background-color', '#FFF7E5');
	$('#small-waka').css('background-color', '#FFF7E5');
});

$('#small-urban').on('click', function(event){
	event.preventDefault()
	$('#big-jamkings, #big-clumsy-biker, #big-waka').hide();
	$('#big-urban').show()
	$('#small-urban').css('background-color', '#FFBC8A');
	$('#small-jamkings').css('background-color', '#FFF7E5');
	$('#small-clumsy-biker').css('background-color', '#FFF7E5');
	$('#small-waka').css('background-color', '#FFF7E5');
});

$('#small-waka').on('click', function(event){
	event.preventDefault();
	$('#big-jamkings, #big-clumsy-biker, #big-urban').hide();
	$('#big-waka').show()
	$('#small-waka').css('background-color', '#FFBC8A');
	$('#small-jamkings').css('background-color', '#FFF7E5');
	$('#small-urban').css('background-color', '#FFF7E5');
	$('#small-clumsy-biker').css('background-color', '#FFF7E5');
});



$('#mobile-jamkings').on('click', function(event){
	event.preventDefault()
	$('#big-clumsy-biker, #big-urban, #big-waka').hide();
	$('#big-jamkings').show();
	$('#mobile-jamkings').css('background-color', '#FFBC8A');
	$('#mobile-urban').css('background-color', '#FFF7E5');
	$('#mobile-clumsy-biker').css('background-color', '#FFF7E5');
	$('#mobile-waka').css('background-color', '#FFF7E5');
});

$('#mobile-clumsy-biker').on('click', function(event){
	event.preventDefault()
	$('#big-jamkings, #big-urban, #big-waka').hide();
	$('#big-clumsy-biker').show()
	$('#mobile-clumsy-biker').css('background-color', '#FFBC8A');
	$('#mobile-jamkings').css('background-color', '#FFF7E5');
	$('#mobile-urban').css('background-color', '#FFF7E5');
	$('#mobile-waka').css('background-color', '#FFF7E5');
});

$('#mobile-urban').on('click', function(){
	event.preventDefault()
	$('#big-jamkings, #big-clumsy-biker, #big-waka').hide();
	$('#big-urban').show()
	$('#mobile-urban').css('background-color', '#FFBC8A');
	$('#mobile-jamkings').css('background-color', '#FFF7E5');
	$('#mobile-clumsy-biker').css('background-color', '#FFF7E5');
	$('#mobile-waka').css('background-color', '#FFF7E5');
});

$('#mobile-waka').on('click', function(event){
	event.preventDefault();
	$('#big-jamkings, #big-clumsy-biker, #big-urban').hide();
	$('#big-waka').show()
	$('#mobile-waka').css('background-color', '#FFBC8A');
	$('#mobile-jamkings').css('background-color', '#FFF7E5');
	$('#mobile-urban').css('background-color', '#FFF7E5');
	$('#mobile-clumsy-biker').css('background-color', '#FFF7E5');
});






$(function() {
  $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-40
        }, 1000);
        return false;
      }
    }
  });
});

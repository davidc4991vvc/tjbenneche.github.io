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

function makeVisible(elem){
	$(elem).css('visibility', 'visibile');
	$(elem).show()
}

function makeInvisible(elem){
	$(elem).css('visibility', 'hidden');
	$(elem).hide();
}

function horizFlip(elem){
	$(elem).addClass('animated flipInX');
}

function pullDown(elem){
	$(elem).addClass('pullDown');
}

function leftSlide(elem) {
	$(elem).addClass('slideLeft');
}

function rightSlide(elem){
	$(elem).addClass('slideRight');
}



$('#free .small-card a').on('click', function(event){
	event.preventDefault();
	$('#free .plan-info').slideToggle();
});

$('#basic a').on('click', function(event){
	event.preventDefault();
	$('#basic > .plan-info').slideToggle();
});
$('#pro .small-card a').on('click', function(event){
	event.preventDefault();
	$('#pro .plan-info').slideToggle();
});




$('#musician-btn').on('click', function(event){
	event.preventDefault();
	// pullDown($('#musician-usecase'));
	$('#musician-usecase').slideToggle();
	$(this).toggle();
});
$('#small-biz-btn').on('click', function(event){
	event.preventDefault();
	// pullDown($('#small-biz-usecase'));
	$('#small-biz-usecase').slideToggle();
	$(this).toggle();
});
$('#venue-btn').on('click', function(event){
	event.preventDefault();
	// pullDown($('#venue-usecase'));
	$('#venue-usecase').slideToggle();
	$(this).toggle();
});



$('#engage-expand-button').on('click', function(event){
	event.preventDefault();
	$('#engage-block-hidden').slideToggle();
	$('#zipper-graphic').slideToggle();
	$('#engage-section .arrow-svg').slideToggle();
	// if($('#engage-section .arrow-svg').css('display')=='none'){
	// 	$('#engage-header').parent().removeClass('col-xs-12');
	// 	$('#engage-header').parent().addClass('col-xs-7');
	// }
	// if($('#engage-section .arrow-svg').css('display')=='none'){
	// 	$('#engage-header').parent().removeClass('col-xs-7');
	// 	$('#engage-header').parent().addClass('col-xs-12');
	// 	$('#engage-header').css('text-align', 'center');
	// }
});

$('#build-expand-button').on('click', function(event){
	event.preventDefault();
	$('#build-block-hidden').slideToggle();
	$('#blocks-graphic').slideToggle();
	$('#build-section .arrow-svg').slideToggle();
	// if($('#build-section .arrow-svg').css('display')=='none'){
	// 	$('#build-header').parent().removeClass('col-xs-12');
	// 	$('#build-header').parent().addClass('col-xs-5');
	// }
});

$('#grow-expand-button').on('click', function(event){
	event.preventDefault();
	$('#grow-block-hidden').slideToggle();
	$('#bars-graphic').slideToggle();
	$('#grow-section .arrow-svg').slideToggle();
});
$('#monetize-expand-button').on('click', function(event){
	event.preventDefault();
	$('#monetize-block-hidden').slideToggle();
	$('#flower-graphic').slideToggle();
	$('#monetize-section .arrow-svg').slideToggle();
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

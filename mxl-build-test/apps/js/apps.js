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

$('#small-insta').on('click', function(){
	event.preventDefault()
	$('#big-kai, #big-snapcatch, #big-vine').hide();
	$('#big-insta').show();
	$('#small-insta').css('background-color', '#61B079');
	$('#small-snapcatch').css('background-color', '#D7E5D6');
	$('#small-kai').css('background-color', '#D7E5D6');
	$('#small-vine').css('background-color', '#D7E5D6');
});

$('#small-kai').on('click', function(){
	event.preventDefault()
	$('#big-insta, #big-snapcatch, #big-vine').hide();
	$('#big-kai').show()
	$('#small-kai').css('background-color', '#61B079');
	$('#small-insta').css('background-color', '#D7E5D6');
	$('#small-snapcatch').css('background-color', '#D7E5D6');
	$('#small-vine').css('background-color', '#D7E5D6');
});

$('#small-snapcatch').on('click', function(){
	event.preventDefault()
	$('#big-insta, #big-kai, #big-vine').hide();
	$('#big-snapcatch').show()
	$('#small-snapcatch').css('background-color', '#61B079');
	$('#small-insta').css('background-color', '#D7E5D6');
	$('#small-kai').css('background-color', '#D7E5D6');
	$('#small-vine').css('background-color', '#D7E5D6');
});

$('#small-vine').on('click', function(){
	event.preventDefault();
	$('#big-insta, #big-kai, #big-snapcatch').hide();
	$('#big-vine').show()
	$('#small-vine').css('background-color', '#61B079');
	$('#small-insta').css('background-color', '#D7E5D6');
	$('#small-snapcatch').css('background-color', '#D7E5D6');
	$('#small-kai').css('background-color', '#D7E5D6');
});



$('#mobile-insta').on('click', function(){
	event.preventDefault()
	$('#big-kai, #big-snapcatch, #big-vine').hide();
	$('#big-insta').show();
	$('#mobile-insta').css('background-color', '#61B079');
	$('#mobile-snapcatch').css('background-color', '#D7E5D6');
	$('#mobile-kai').css('background-color', '#D7E5D6');
	$('#mobile-vine').css('background-color', '#D7E5D6');
});

$('#mobile-kai').on('click', function(){
	event.preventDefault()
	$('#big-insta, #big-snapcatch, #big-vine').hide();
	$('#big-kai').show()
	$('#mobile-kai').css('background-color', '#61B079');
	$('#mobile-insta').css('background-color', '#D7E5D6');
	$('#mobile-snapcatch').css('background-color', '#D7E5D6');
	$('#mobile-vine').css('background-color', '#D7E5D6');
});

$('#mobile-snapcatch').on('click', function(){
	event.preventDefault()
	$('#big-insta, #big-kai, #big-vine').hide();
	$('#big-snapcatch').show()
	$('#mobile-snapcatch').css('background-color', '#61B079');
	$('#mobile-insta').css('background-color', '#D7E5D6');
	$('#mobile-kai').css('background-color', '#D7E5D6');
	$('#mobile-vine').css('background-color', '#D7E5D6');
});

$('#mobile-vine').on('click', function(){
	event.preventDefault();
	$('#big-insta, #big-kai, #big-snapcatch').hide();
	$('#big-vine').show()
	$('#mobile-vine').css('background-color', '#61B079');
	$('#mobile-insta').css('background-color', '#D7E5D6');
	$('#mobile-snapcatch').css('background-color', '#D7E5D6');
	$('#mobile-kai').css('background-color', '#D7E5D6');
});








<<<<<<< HEAD
=======
$('#big-insta').on('click', function(){
	event.preventDefault()
});
$('#big-kai').on('click', function(){
	event.preventDefault()
});
$('#big-snapcatch').on('click', function(){
	event.preventDefault()
});
$('#big-vine').on('click', function(){
	event.preventDefault()
});


$('#free .small-card a').on('click', function(){
	event.preventDefault();
	$('#free .plan-info').toggle('slow');
});

$('#basic a').on('click', function(){
	event.preventDefault();
	$('#basic > .plan-info').toggle('slow');
});
$('#pro .small-card a').on('click', function(){
	event.preventDefault();
	$('#pro .plan-info').toggle('slow');
});


>>>>>>> jobs


$('#engage-learn-button').on('click', function(){
	event.preventDefault();
	$('#engage-block').toggle('slow');
	$('#engage-block-hidden').toggle('slow');
	$('#engage-exit-button').toggle('slow');
});
$('#engage-exit-button').on('click', function(){
	event.preventDefault();
	$('#engage-block').toggle('slow');
	$('#engage-block-hidden').toggle('slow');
	$('#engage-exit-button').toggle('slow');
});
$('#build-learn-button').on('click', function(){
	event.preventDefault();
	$('#build-block').toggle('slow');
	$('#build-block-hidden').toggle('slow');
	$('#build-exit-button').toggle('slow');
});
$('#build-exit-button').on('click', function(){
	event.preventDefault();
	$('#build-block').toggle('slow');
	$('#build-block-hidden').toggle('slow');
	$('#build-exit-button').toggle('slow');
});
$('#grow-learn-button').on('click', function(){
	event.preventDefault();
	$('#grow-block').toggle('slow');
	$('#grow-block-hidden').toggle('slow');
	$('#grow-exit-button').toggle('slow');
});
$('#grow-exit-button').on('click', function(){
	event.preventDefault();
	$('#grow-block').toggle('slow');
	$('#grow-block-hidden').toggle('slow');
	$('#grow-exit-button').toggle('slow');
});
$('#monetize-learn-button').on('click', function(){
	event.preventDefault();
	$('#monetize-block').toggle('slow');
	$('#monetize-block-hidden').toggle('slow');
	$('#monetize-exit-button').toggle('slow');
});
$('#monetize-exit-button').on('click', function(){
	event.preventDefault();
	$('#monetize-block').toggle('slow');
	$('#monetize-block-hidden').toggle('slow');
	$('#monetize-exit-button').toggle('slow');
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



$(document).ready(function() {

function leftSlide(elem) {
	$(elem).addClass('slideLeft');
}

function rightSlide(elem){
	$(elem).addClass('slideRight');
}

function fadeIn(elem){
	$(elem).addClass('fadeIn');
}


var vine = $('#vine');
var bball = $('#bball');
var bikerace = $('#bikerace');


setTimeout(function(){leftSlide(vine)}, 2000);
setTimeout(function(){leftSlide(bball)}, 3000);
setTimeout(function(){leftSlide(bikerace)}, 4000);


});


// function resize(container, list){
// 	var listNum = $(list).size();
// 	console.log(listNum);
// 	var totalWidth = $(container).width();
// 	console.log(totalWidth);
// 	var indivWidth = totalWidth / listNum;
// 	console.log(indivWidth);
// 	$(list).css('width', indivWidth);
// }


// // function center(container, list){
// // 	var listWidth = $(list).width;
// // 	$(container).css("width", listWidth);
// // }
// function resizeAll() {
// console.log('resizing');
// if($('#mxl-logo-icon').css('display')=='none') {
// 	resize(".navbar-collapse", '.nav > li');
// }

// // center("#footernav-buttons", "#footernav-buttons li");
// // }


// if($('.navbar-collapse')){
// /*	var collapseNav = $('#topnav-buttons').parent();
// 	if(!collapseNav.hasClass('in')) {
// 		resize("#topnav-buttons", "#topnav-buttons li");
// 	}*/
// 	resizeAll();
// }

// resizeAll();


// //if($('#menu-button').css('display')=="block" || $('#inner-menu-button').css('display')==block) {
// //	$('#topnav-buttons').width('100%');
// //}
// //
// //if ($('#topnav-container > div').hasClass('in')){
// //	$('.navbar-inner').css("background-color", '#263043');
// //}

// $(window).resize(function() {
// 	resizeAll();
// });

// };
